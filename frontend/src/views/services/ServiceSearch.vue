<template>
    <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Consulta de Serviço</strong>
                        <div class="badge badge-info badge-pill" v-b-popover.hover="'Os campos não preenchidos não serão utilizados na busca!'" title="Atenção!">
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
                        <b-button v-on:click="submitSearch()"  style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-send"></i> Pesquisar!</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <!-- Hidden result list -->
        <b-row>
          <b-col md="8" class="mx-auto">
            <b-alert :show="result" variant="info">
              <b-card header-tag="header" footer-tag="footer">
                <div slot="header">
                  <i className="fa fa-align-justify"></i><strong>Resultado da busca</strong>
                </div>
                <b-list-group>
                  <b-list-group-item  v-model="services" href="#" class="flex-column align-items-start" v-for="s in services" v-on:click="goToEdit(s.id)">
                    <div class="d-flex w-100 justify-content-between" >
                      <h5 class="mb-3">Tipo de serviço: {{s.name}}</h5>
                      <small>Ordem: {{s.id}}</small>
                    </div>
                    <p class="mb-2">
                      Filial responsável: {{s.company}}
                    </p>
                    <p class="mb-2">
                      Valor: R${{s.cost}}
                    </p>
                    <p class="mb-2">
                      Cliente ou Empresa contratante: {{s.costumer}}
                    </p>
                    <p class="mb-2">
                      Placa do equipamento: {{s.equipment}}
                    </p>
                    <p class="mb-2">
                      Data de execução: {{s.done_at}}
                    </p>
                    <p class="mb-1">
                      Agendamento de próximo serviço: {{s.next_service}}
                    </p>
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-alert>
          </b-col>
        </b-row>
        <!-- End of hidden result list -->
    </div>
</template>

<script>
import axios from 'axios'
import Autocomplete from 'vuejs-auto-complete'

export default {
  name: 'serviceSearch',
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
      kinds: [],
      companies: [],
      vehicles: [],
      clients: [],
      services: [],
      result: false
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/v1/service_types`).then(
      response => {
        this.loading = true
        this.$data.kinds = response.data.data
        this.$data.kinds = this.sortByKey(this.$data.kinds, 'kind')
      }).catch(e => { this.errors.push(e) })
    axios.get(`http://localhost:3000/api/v1/companies`).then(
      response => {
        this.loading = true
        this.$data.companies = response.data.data
        this.$data.companies = this.sortByKey(this.$data.companies, 'name')
      }).catch(e => { this.errors.push(e) })
    axios.get(`http://localhost:3000/api/v1/equipments`).then(
      response => {
        this.loading = true
        this.$data.vehicles = response.data.data
        this.$data.vehicles = this.sortByKey(this.$data.vehicles, 'plate')
      }).catch(e => { this.errors.push(e) })
    axios.get(`http://localhost:3000/api/v1/costumers`).then(
      response => {
        this.loading = true
        this.$data.clients = response.data.data
        this.$data.clients = this.sortByKey(this.$data.clients, 'name')
      }).catch(e => { this.errors.push(e) })
  },
  methods: {
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
      console.log('Im showing tha list')
      this.$data.result = true
    },
    goToEdit (id) {
      console.log('trying to edit service with id -> ' + id)
      this.$router.push({path: `/services/edit/${id}`})
    },
    submitSearch () {
      this.$data.result = false
      axios.get('http://localhost:3000/api/v1/services/search', {
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
        console.log(this.services)
      }).then(this.showList())
    }
  }
}
</script>

