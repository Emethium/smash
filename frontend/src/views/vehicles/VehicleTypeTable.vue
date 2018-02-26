<template>
  <b-card :header="caption">
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <b-alert show="dismissCountDown"
        variant="danger"
        @dismissed="dismissCountdown=0"
        @dismiss-count-down="countDownChanged">
        Registro removido com sucesso!
      </b-alert>
      <template slot="kind" slot-scope="data">
        {{ data.item.kind }}
      </template>
      <template slot="edit" slot-scope="data">
        <b-button v-on:click="goToEdit(data.item.id)" variant="warning"><i class="fa fa-edit"></i>&nbsp; Modificar tipo</b-button>
      </template>
      <template slot="remove" slot-scope="data">
        <b-button @click="exclusionModal = true" variant="danger"><i class="fa fa-close"></i>&nbsp; Apagar registro</b-button>
        <b-modal title="Confirmação de operação" class="modal-danger" v-model="exclusionModal" @ok="deleteData(data.item.id)" ok-variant="danger">
          <strong> Você têm certeza que quer excluir esse registro? </strong>
        </b-modal>
      </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Anterior" next-text="Próximo" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'c-table',
    props: {
      caption: {
        type: String,
        default: 'Table'
      },
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        items: [],
        errors: [],
        fields: {
          kind: {
            label: 'Tipo de equipamento'
          },
          edit: {
            label: 'Editar'
          },
          remove: {
            label: 'Apagar'
          }
        },
        currentPage: 1,
        perPage: 6,
        totalRows: 0,
        loading: false,
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        exclusionModal: false
      }
    },
    created () {
      axios.get(`http://localhost:3000/api/v1/equipment_types`).then(
        response => {
          this.loading = true
          this.items = response.data.data
        }).catch(e => { this.errors.push(e) })
    },
    methods: {
      getRowCount (items) {
        return items.length
      },
      countDownChanged (dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert () {
        this.dismissCountDown = this.dismissSecs
      },
      goToEdit (id) {
        this.$router.push({path: `/vehicles/type-edit/${id}`})
      },
      deleteData (id) {
        console.log('asking object with id ' + id + 'for deletion')
        axios.delete(`http://localhost:3000/api/v1/equipment_types/${id}`).then(
          response => { console.log(response) }).catch(e => {
          this.errors.push(e)
          console.log(e)
        }).then(
          this.notifyDeletion(),
          this.reloadPage())
      },
      notifyDeletion () {
        this.showAlert()
      },
      reloadPage () {
        var self = this
        setTimeout(function () {
          self.$router.go()
        }, 3000)
      }
    }
  }
</script>
