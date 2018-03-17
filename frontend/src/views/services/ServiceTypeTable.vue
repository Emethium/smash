<template>
  <b-card :header="caption">
    <b-alert :show="dismissCountDown"
        variant="danger"
        @dismissed="dismissCountdown=0"
        @dismiss-count-down="countDownChanged">
        Registro removido com sucesso!
    </b-alert>
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="kind" slot-scope="data">
        {{ data.item.kind }}
      </template>
      <template slot="edit" slot-scope="data">
        <b-button v-on:click="goToEdit(data.item.id)" variant="warning"><i class="fa fa-edit"></i>&nbsp; Modificar tipo</b-button>
      </template>
      <template slot="remove" slot-scope="data">
        <b-modal title="Confirmação de operação" class="modal-danger" v-model="exclusionModal" @ok="deleteData()" ok-variant="danger">
          <strong> Você têm certeza que quer excluir esse registro?</strong>
        </b-modal>
        <b-button @click="exclusionModal = true" v-on:click="setDeletionParameters(data.item.id, data.item.kind)" variant="danger"><i class="fa fa-close"></i>&nbsp; Apagar registro</b-button>
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
    data: () => {
      return {
        items: [],
        errors: [],
        fields: {
          kind: {
            label: 'Tipo de serviço'
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
        exclusionModal: false,
        id: '',
        kind: ''
      }
    },
    created () {
      axios.get(`/api/v1/service_types`, {headers: {Authorization: localStorage.getItem('token')}}).then(
        response => {
          this.loading = true
          this.items = response.data.data
          this.items.sort(function (a, b) { return (a.kind > b.kind) ? 1 : ((b.kind > a.kind) ? -1 : 0) })
        }).catch(e => { this.errors.push(e) })
    },
    methods: {
      setDeletionParameters (id, kind) {
        this.$data.id = id
        this.$data.kind = kind
      },
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
        this.$router.push({path: `/services/type-edit/${id}`})
      },
      deleteData () {
        console.log('asking object with id -> ' + this.$data.id + ' and name -> ' + this.$data.kind + ' for deletion')
        axios.delete(`/api/v1/service_types/${this.$data.id}`, {headers: {Authorization: localStorage.getItem('token')}}).then(
          response => { console.log(response) }).catch(e => {
          this.errors.push(e)
          console.log(e)
        }).then(
          this.notifyDeletion(),
          this.removeDeletedObject(this.$data.id, this.$data.kind))
      },
      notifyDeletion () {
        this.showAlert()
      },
      removeDeletedObject (id, kind) {
        console.log('attempting do remove object with id ->' + id + ' and name ->' + kind + ' from the table view')
        for (var i = 0; i < this.$data.items.length; i++) {
          if (this.$data.items[i].id === id && this.$data.items[i].kind === kind) {
            this.$data.items.splice(i, 1)
            break
          }
        }
      }
    }
  }
</script>
