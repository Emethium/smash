<template>
    <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Filtragem de Serviços</strong>
                        <div class="badge badge-info badge-pill" v-b-popover.hover="'Utilize os campos para definir os destinatários!'" title="Atenção!">
                            <span class="fa fa-question"></span>
                        </div>
                    </div>
                    <b-form-group
                        label="Escolha o tipo de serviço:"
                        label-for="basicSelect"
                        :label-cols="3"
                        :horizontal="true">
                        <b-form-select id="kind" v-model="kind"
                        :plain="true"
                        value="Selecione o tipo de serviço">
                            <option v-for="k in kinds">{{k.kind}}</option>
                        </b-form-select>
                    </b-form-group>
                    <b-form-group
                        label="Filial responsável pelos serviço:"
                        label-for="basicSelect"
                        :label-cols="3"
                        :horizontal="true">
                        <b-form-select id="company" v-model="company"
                        :plain="true"
                        value="Selecione a filial">
                            <option v-for="c in companies">{{c.name}}</option>
                        </b-form-select>
                    </b-form-group>
                    <b-form-group>
                        <label for="plate">Placa do equipamento:</label>
                        <autocomplete
                            ref="autocomplete"
                            id="plate"
                            :showNoResults="false"
                            :source="vehicles"
                            results-property="plate"
                            :results-display="formattedDisplay"
                            @selected="setAttributes"
                            input-class="vehicle"
                            placeholder="Entre com a placa do equipamento">
                        </autocomplete>
                    </b-form-group>
                    <b-form-group>
                    <label for="client">Nome do Cliente ou Empresa contratante:</label>
                        <autocomplete
                            ref="autocompleteClient"
                            id="client"
                            :showNoResults="false"
                            :source="clients"
                            results-property="name"
                            :results-display="formattedDisplayClient"
                            @selected="setAttributesClient"
                            input-class="client"
                            placeholder="Entre com o nome do Cliente ou Empresa Contratante">
                        </autocomplete>
                    </b-form-group>
                    <b-form-group>
                        <label for="done_at"><strong> Data de execução do serviço:</strong></label>
                        <b-row>
                            <b-col sm="3">
                                <b-form-group >
                                    <label for="day1">Dia</label>
                                    <b-form-select id="day1"
                                    v-model="day1"
                                    :plain="true"
                                    :options="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]">
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="3">
                                <b-form-group>
                                    <label for="month1">Mês</label>
                                    <b-form-select id="month1"
                                    v-model="month1"
                                    :plain="true"
                                    :options="[1,2,3,4,5,6,7,8,9,10,11,12]">
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="3">
                                <b-form-group>
                                    <label for="year1">Ano</label>
                                    <b-form-select id="year1"
                                    v-model="year1"
                                    :plain="true"
                                    :options="[2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]">
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-form-group>
                   <b-form-group>
                       <label for="done_at"><strong> Data de Agendamento do próximo serviço:</strong></label>
                       <b-row>
                            <b-col sm="3">
                                <b-form-group >
                                    <label for="day2">Dia</label>
                                    <b-form-select id="day2"
                                    v-model="day2"
                                    :plain="true"
                                    :options="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]">
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="3">
                                <b-form-group>
                                    <label for="month2">Mês</label>
                                    <b-form-select id="month2"
                                    v-model="month2"
                                    :plain="true"
                                    :options="[1,2,3,4,5,6,7,8,9,10,11,12]">
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="3">
                                <b-form-group>
                                    <label for="year2">Ano</label>
                                    <b-form-select id="year2"
                                    v-model="year2"
                                    :plain="true"
                                    :options="[2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]">
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                        </b-row>
                   </b-form-group> 
                    <div slot="footer">
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campos</b-button>
                        <b-button v-on:click="submitSearch()"  style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-send"></i> Filtrar Destinatários!</b-button>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" class="mx-auto">
                <b-alert :show="result" variant="bg-gray-100">
                    <b-card>
                        <div slot="header">
                            <strong>E-mail a ser enviado:</strong>
                            <div class="badge badge-info badge-pill" v-b-popover.hover="'O Email remetente será o da empresa responsável pelo serviço!'" title="Atenção!">
                                <span class="fa fa-question"></span>
                            </div>
                        </div>
                        <b-form-group
                            label="Título do Email"
                            label-for="basicTextarea"
                            :label-cols="2"
                            :horizontal="true">
                            <b-form-input id="basicTextarea" v-model="email_subject" :textarea="true" :rows="9" placeholder="Entre com o título do Email aqui.."></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Corpo do Email"
                            label-for="basicTextarea"
                            :label-cols="2"
                            :horizontal="true">
                                <b-form-textarea id="textarea1"
                                    v-model="email_body"
                                    placeholder="Digite o corpo do Email a ser enviado..."
                                    :rows="6"
                                    :max-rows="6">
                                </b-form-textarea>
                        </b-form-group>
                        <div slot="footer">
                            <b-button v-on:click="sendEmails()" style="margin:auto;display:block" type="submit" size="md" variant="success"><i class="fa fa-check"></i> Enviar emails!!</b-button>
                        </div>
                    </b-card>
                    <b-card header-tag="header" footer-tag="footer">
                        <div slot="header">
                        <i className="fa fa-align-justify"></i><strong>Clientes a ser notificados</strong>
                        <b-button size="sm" v-on:click="createQueryPdf()" style="float:right" variant="secondary">Exportar filtragem em PDF</b-button>
                        </div>
                        <b-list-group>
                            <b-list-group-item  v-model="services" class="flex-column align-items-start" v-for="s in services">
                                <div class="d-flex w-100 justify-content-between" >
                                    <h6 class="mb-1">{{s.costumer}}</h6>
                                </div>
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
  name: 'serviceNotify',
  components: {
    Autocomplete
  },
  data () {
    return {
      kind: '',
      company: '',
      client: '',
      plate: '',
      done_at: '',
      next_service: '',
      day1: '',
      day2: '',
      month1: '',
      month2: '',
      year1: '',
      year2: '',
      email_subject: '',
      email_body: '',
      kinds: [],
      companies: [],
      vehicles: [],
      clients: [],
      services: [],
      result: false,
      currentPage: 1,
      perPage: 6,
      totalRows: 0
    }
  },
  created () {
    axios.get(`/api/v1/service_types`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.kinds = response.data.data
        this.$data.kinds = this.sortByKey(this.$data.kinds, 'kind')
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/companies`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.companies = response.data.data
        this.$data.companies = this.sortByKey(this.$data.companies, 'name')
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/equipments`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.vehicles = response.data.data
        this.$data.vehicles = this.sortByKey(this.$data.vehicles, 'plate')
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/costumers`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.clients = response.data.data
        this.$data.clients = this.sortByKey(this.$data.clients, 'name')
      }).catch(e => { this.errors.push(e) })
  },
  methods: {
    getRowCount (items) {
      return items.length
    },
    formattedDisplay (result) {
      return result.plate
    },
    formattedDisplayClient (result) {
      return result.name
    },
    setAttributes (vehicle) {
      this.$data.plate = vehicle.selectedObject.plate
      this.$data.client = vehicle.selectedObject.proprietary
      this.$refs.autocompleteClient.display = vehicle.selectedObject.proprietary
    },
    setAttributesClient (client) {
      this.$data.client = client.selectedObject.name
    },
    sortByKey (array, key) {
      return array.sort(function (a, b) {
        var x = a[key]
        var y = b[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      })
    },
    clearText () {
      console.log(this.done_at)
      this.$data.kind = ''
      this.$data.company = ''
      this.$data.client = ''
      this.$data.plate = ''
      this.$data.done_at = ''
      this.$data.next_service = ''
      this.day1 = ''
      this.day2 = ''
      this.month1 = ''
      this.month2 = ''
      this.year1 = ''
      this.year2 = ''
      this.$refs.autocomplete.clearValues()
      this.$refs.autocompleteClient.clearValues()
      console.log('cleared all entry text fields')
    },
    showList () {
      this.$data.result = true
    },
    removeDuplicates (originalArray, prop) {
      var newArray = []
      var lookupObject = {}

      for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i]
      }

      for (i in lookupObject) {
        newArray.push(lookupObject[i])
      }
      return newArray
    },
    goToEdit (id) {
      console.log('trying to edit service with id -> ' + id)
      this.$router.push({path: `/services/edit/${id}`})
    },
    submitSearch () {
      this.$data.result = false
      axios.get('/api/v1/services/search', {
        headers: {
          Authorization: localStorage.getItem('token')
        },
        params: {
          name: this.$data.kind,
          company: this.$data.company,
          costumer: this.$data.client,
          equipment: this.$data.plate,
          day1: this.$data.day1,
          day2: this.$data.day2,
          month1: this.$data.month1,
          month2: this.$data.month2,
          year1: this.$data.year1,
          year2: this.$data.year2
        }
      }).then(response => {
        this.$data.services = response.data.data
        this.$data.services = this.removeDuplicates(this.$data.services, 'costumer')
        console.log(this.$data.services)
      }).then(this.showList())
    },
    reverseString (s) {
      return s.split('').reverse().join('')
    },
    createQueryPdf () {
      var doc = new JsPDF()
      var j = 0
      var collumn = 0
      let token = new Date()
      // Setting font size and adding the needed number of pages
      doc.setFontSize(12)
      doc.text(55, 6, 'LISTA DE DESTINATÁRIOS - DATA: ' + token.getDate() + '/' + token.getUTCMonth() + '/' + token.getFullYear() + '\n\n')
      this.services.forEach(function (service, i) {
        if (i % 15 === 0 && i !== 0 && collumn === 1) {
          j = 0
          collumn = 0
          doc.addPage()
        } else if (i % 15 === 0 && i !== 0 && collumn === 0) {
          collumn = 1
          j = 0
        }
        doc.text(20 + (collumn * 85), 10 + (j * 18),
          '----------------------------------------------------------\n' +
          'Cliente: ' + service.costumer + '\n'
        )
        j++
      })
      doc.save('lista_destinatarios_' + token.getDate() + '_' + token.getUTCMonth() + '_' + token.getFullYear() + '.pdf')
    }
  }
}
</script>

