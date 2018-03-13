<template>
  <b-card :header="caption">
    <b-alert :show="dismissCountDown"
        variant="danger"
        @dismissed="dismissCountdown=0"
        @dismiss-count-down="countDownChanged">
        Registro removido com sucesso!
    </b-alert>
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="name" slot-scope="data">
        {{ data.item.name }}
      </template>
      <template slot="city" slot-scope="data">
        <b-badge :variant="getBadge(data.item.city)">{{data.item.city}}</b-badge>
      </template>
      <template slot="edit" slot-scope="data">
        <b-button v-on:click="goToEdit(data.item.id)" variant="warning"><i class="fa fa-edit"></i>&nbsp; Modificar dados</b-button>
      </template>
      <template slot="remove" slot-scope="data">
         <b-modal title="Confirmação de operação" class="modal-danger" v-model="exclusionModal" @ok="deleteData()" ok-variant="danger">
          <strong> Você têm certeza que quer excluir esse registro?</strong>
        </b-modal>
        <b-button @click="exclusionModal = true" v-on:click="setDeletionParameters(data.item.id, data.item.name, data.item.city)" variant="danger"><i class="fa fa-close"></i>&nbsp; Apagar</b-button>
      </template>
    </b-table>
    <nav>
      <b-button size="sm" v-on:click="createQueryPdf()" style="float:right" variant="secondary">Exportar filiais em PDF</b-button>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Anterior" next-text="Próximo" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>
  import axios from 'axios'
  import JsPDF from 'jspdf'

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
          name: {
            label: 'Nome da filial'
          },
          city: {
            label: 'Cidade localizada'
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
        name: '',
        city: ''
      }
    },
    created () {
      axios.get(`/api/v1/companies`).then(
        response => {
          this.loading = true
          this.items = response.data.data
          this.items.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) })
        }).catch(e => { this.errors.push(e) })
    },
    methods: {
      getBadge (status) {
        return status.length % 2 === 0 ? 'success'
          : status.length % 3 === 0 ? 'secondary'
            : status.length % 5 === 0 ? 'warning'
              : status.length % 7 === 0 ? 'danger' : 'primary'
      },
      getRowCount (items) {
        return items.length
      },
      setDeletionParameters (id, name, city) {
        this.$data.id = id
        this.$data.name = name
        this.$data.city = city
      },
      countDownChanged (dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert () {
        this.dismissCountDown = this.dismissSecs
      },
      goToEdit (id) {
        this.$router.push({path: `/subsidiaries/edit/${id}`})
      },
      deleteData () {
        console.log('asking object with id -> ' + this.$data.id + '\nname -> ' + this.$data.name +
        '\ncity -> ' + this.$data.city + ' for deletion')
        axios.delete(`/api/v1/companies/${this.$data.id}`).then(
          response => { console.log(response) }).catch(e => {
          this.errors.push(e)
          console.log(e)
        }).then(
          this.notifyDeletion(),
          this.removeDeletedObject(this.$data.id, this.$data.name, this.$data.city))
      },
      notifyDeletion () {
        this.showAlert()
      },
      removeDeletedObject (id, name, city) {
        console.log('attempting do remove object with id ->' + id + '\nname -> ' + name +
        '\ncity -> ' + city + ' from the table view')
        for (var i = 0; i < this.$data.items.length; i++) {
          if (this.$data.items[i].id === id && this.$data.items[i].name === name && this.$data.items[i].city === city) {
            this.$data.items.splice(i, 1)
            break
          }
        }
      },
      createQueryPdf () {
        var doc = new JsPDF()
        var j = 0
        var collumn = 0
        let token = new Date()
        // Setting font size and adding the needed number of pages
        doc.setFontSize(12)
        doc.text(55, 6, 'FILIAIS CADASTRADAS - DATA: ' + token.getDate() + '/' + token.getUTCMonth() + '/' + token.getFullYear() + '\n\n')
        this.items.forEach(function (item, i) {
          if (i % 7 === 0 && i !== 0 && collumn === 1) {
            j = 0
            collumn = 0
            doc.addPage()
          } else if (i % 7 === 0 && i !== 0 && collumn === 0) {
            collumn = 1
            j = 0
          }
          doc.text(20 + (collumn * 85), 10 + (j * 40),
            '----------------------------------------------------------\n' +
            'Número de registro: ' + item.id + '\n' +
            'Nome: ' + item.name + '\n' +
            'Razão Social: ' + item.social_reason + '\n' +
            'CNPJ: ' + item.cnpj + '\n' +
            'Cidade: ' + item.city + '\n' +
            'Estado: ' + item.state + '\n' +
            'Email: ' + item.email + '\n'
          )
          j++
        })
        doc.save('listagem_filiais_' + token.getDate() + '_' + token.getUTCMonth() + '_' + token.getFullYear() + '.pdf')
      }
    }
  }
</script>
