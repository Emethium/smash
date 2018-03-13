<template>
    <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Busca por Cliente</strong>
                        <div class="badge badge-info badge-pill" v-b-popover.hover="'Os campos não preenchidos não serão utilizados na busca!'" title="Atenção!">
                            <span class="fa fa-question"></span>
                        </div>
                    </div>
                    <b-form-group>
                      <label for="name">Nome:</label>
                      <autocomplete
                        ref="autocomplete"
                        :source="autoCompleteData"
                        results-property="name"
                        :results-display="formattedDisplay"
                        @selected="addName"
                        placeholder="Entre com o nome do cliente ou empresa">
                      </autocomplete>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code">CPF/CNPJ:</label>
                        <b-form-input type="text" v-model="register_code" id="register_code" placeholder="Digite o registro de pessoa física ou jurídica"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Tipo de Cliente:"
                        label-for="basicInlineCustomCheckboxes"
                        :label-cols="2"
                        :horizontal="true">
                        <b-form-checkbox-group id="basicInlineCustomCheckboxes">
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" v-model="physical_opt" class="custom-control-input" id="customInChk1" value="1" checked>
                            <label class="custom-control-label" for="customInChk1">Pessoa Física</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" v-model="juridic_opt" class="custom-control-input" id="customInChk2" value="1" checked>
                            <label class="custom-control-label" for="customInChk2">Pessoa Jurídica</label>
                        </div>
                        </b-form-checkbox-group>
                    </b-form-group>
                    <div slot="footer">
                         <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campos</b-button>
                        <b-button v-on:click="submitSearch()" style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-send"></i> Pesquisar!</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <!--Hidden result table-->
        <b-row>
          <b-col md="7" class="mx-auto">
            <b-alert :show="result" variant="bg-gray-100">
              <b-card header-tag="header" footer-tag="footer">
                <div slot="header">
                  <i className="fa fa-align-justify"></i><strong>Resultado da busca:</strong>
                  <b-button size="sm" v-on:click="createQueryPdf()" style="float:right" variant="secondary">Exportar consulta em PDF</b-button>
                </div>
                <b-list-group>
                  <b-list-group-item  v-model="clients" href="#" class="flex-column align-items-start" v-for="client in clients" v-on:click="goToEdit(client.id)">
                    <div class="d-flex w-100 justify-content-between" >
                      <h5 class="mb-1">{{client.name}}</h5>
                      <small>Registro: {{client.id}}</small>
                    </div>
                    <p class="mb-1">
                      CPF/CNPJ: {{client.register_code}}
                    </p>
                    <p class="mb-1">
                      Email: {{client.email}}
                    </p>
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-alert>
          </b-col>
          
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
import Autocomplete from 'vuejs-auto-complete'
import JsPDF from 'jspdf'

export default {
  name: 'clientSearch',
  components: {
    Autocomplete
  },
  data () {
    return {
      autoCompleteData: [],
      clients: [],
      name: '',
      register_code: '',
      kind: '',
      physical_opt: false,
      juridic_opt: false,
      result: false,
      loading: false
    }
  },
  created () {
    axios.get(`/api/v1/costumers`).then(
      response => {
        this.loading = true
        this.autoCompleteData = response.data.data
      }).catch(e => { this.errors.push(e) })
  },
  methods: {
    clearText () {
      this.$data.name = ''
      this.$data.register_code = ''
      this.$data.physical_opt = 0
      this.$data.juridic_opt = 0
      this.$refs.autocomplete.clearValues()
      console.log('cleared all entry text fields')
    },
    formattedDisplay (result) {
      return result.name
    },
    addName (client) {
      this.$data.name = client.selectedObject.name
      this.$data.register_code = client.selectedObject.register_code
      console.log(this.name + '\n' + this.register_code)
    },
    submitSearch () {
      this.evalueKind()
      axios.get('/api/v1/costumers/search', {
        params: {
          name: this.$data.name,
          register_code: this.$data.register_code,
          kind: this.$data.kind
        }
      }).then(response => {
        this.$data.clients = response.data.data
        this.$data.clients.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) })
      }).then(this.showList())
    },
    evalueKind () {
      if (this.$data.physical_opt === false && this.$data.juridic_opt === true) {
        this.$data.kind = true
      } else if (this.$data.physical_opt === true && this.$data.juridic_opt === false) {
        this.$data.kind = false
      } else {
        this.$data.kind = ''
      }
    },
    showList () {
      this.$data.result = true
    },
    goToEdit (id) {
      this.$router.push({path: `/clients/edit/${id}`})
    },
    createQueryPdf () {
      var doc = new JsPDF()
      var j = 0
      var collumn = 0
      let token = new Date()
      // Setting font size and adding the needed number of pages
      doc.setFontSize(12)
      doc.text(70, 6, 'CONSULTA DE CLIENTES - DATA: ' + token.getDate() + '/' + token.getUTCMonth() + '/' + token.getFullYear() + '\n\n')
      this.clients.forEach(function (client, i) {
        if (i % 8 === 0 && i !== 0 && collumn === 1) {
          j = 0
          collumn = 0
          doc.addPage()
        } else if (i % 8 === 0 && i !== 0 && collumn === 0) {
          collumn = 1
          j = 0
        }
        doc.text(20 + (collumn * 95), 10 + (j * 35),
          '----------------------------------------------------------\n' +
          'Número de Registro: ' + client.id + '\n' +
          'Nome do Cliente: ' + client.name + '\n' +
          'CPF/CNPJ: ' + client.register_code + '\n' +
          'E-mail: ' + client.email + '\n' +
          'Razão Social: ' + client.social_reason + '\n'
        )
        j++
      })
      doc.save('consulta_clientes_' + token.getDate() + '_' + token.getUTCMonth() + '_' + token.getFullYear() + '.pdf')
    }
  }
}
</script>

