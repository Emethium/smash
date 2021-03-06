<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Edição de Serviço</strong>
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Dados atualizados com sucesso!
                    </b-alert>
                    <b-form-group>
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
                      <label for="name"><strong>Nome do Cliente ou Empresa Contratante:</strong></label>
                      <autocomplete
                        ref="clientComplete"
                        id="clientComplete"
                        :showNoResults="false"
                        :source="clients"
                        results-property="name"
                        :results-display="formattedDisplayClient"
                        @selected="setClientName"
                        input-class="name"
                        placeholder="Nome do Cliente ou Empresa Contratante">
                      </autocomplete>
                    </b-form-group>
                    <b-form-group>
                        <b-form>
                            <b-form-group label-for="cost" label="Valor do serviço, em reais:">
                                <b-form-input v-model="cost" type="number" class="form-control-warning" placeholder="Digite o valor do serviço (Ex: R$123.45)" id="cost" required></b-form-input>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-row>
                        <b-col sm="5">
                            <b-form-group>
                                <b-form>
                                    <b-form-group label-for="done_at" label="Data de execução do Serviço:">
                                        <b-form-input type="date" v-model="done_at" id="done_at"></b-form-input>
                                    </b-form-group>
                                </b-form>
                            </b-form-group>
                        </b-col>
                        <b-col sm="5">
                            <b-form-group>
                                <b-form>
                                    <b-form-group label-for="next_service" label="Data de agendamento para o próximo Serviço:">
                                        <b-form-input type="date" v-model="next_service" id="next-service"></b-form-input>
                                    </b-form-group>
                                </b-form>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="goBackNow()"  type="submit" size="sm" variant="danger"><i class="fa fa-close"></i> Voltar</b-button>
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campos</b-button>
                        <b-button v-on:click="updateData()" style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-edit"></i> Alterar dados!</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
import Autocomplete from 'vuejs-auto-complete'
import store from '@/store'

export default {
  name: 'serviceEdit',
  components: {
    Autocomplete
  },
  data () {
    return {
      kind: '',
      company: '',
      client: '',
      plate: '',
      cost: 0,
      done_at: '',
      next_service: '',
      kinds: [],
      companies: [],
      vehicles: [],
      clients: [],
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      loading: false
    }
  },
  beforeCreate () {
    if (!store.state.isLogged) {
      this.$router.push('/')
    }
  },
  created () {
    const id = this.$route.params.id
    axios.get(`/api/v1/companies`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.companies = response.data.data
        this.$data.companies = this.sortByKey(this.$data.companies, 'name')
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/service_types`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.kinds = response.data.data
        this.$data.kinds = this.sortByKey(this.$data.kinds, 'kind')
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
    axios.get(`/api/v1/services/${id}`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.$data.kind = response.data.data.name
        this.$data.company = response.data.data.company
        this.$data.client = response.data.data.costumer
        this.$data.plate = response.data.data.equipment
        this.$data.cost = response.data.data.cost
        this.$data.done_at = response.data.data.done_at
        this.$data.next_service = response.data.data.next_service
        this.$refs.clientComplete.display = response.data.data.costumer
        this.$refs.autocomplete.display = response.data.data.equipment
      }).catch(e => { this.errors.push(e) })
  },
  methods: {
    sortByKey (array, key) {
      return array.sort(function (a, b) {
        var x = a[key]
        var y = b[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      })
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    formattedDisplayClient (client) {
      return client.name
    },
    formattedDisplay (result) {
      return result.plate
    },
    setAttributes (vehicle) {
      this.$data.plate = vehicle.selectedObject.plate
    },
    setClientName (client) {
      this.$data.client = client.selectedObject.name
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    clearText: function () {
      this.$data.kind = ''
      this.$data.company = ''
      this.$data.client = ''
      this.$data.plate = ''
      this.$data.cost = ''
      this.$data.done_at = ''
      this.$data.next_service = ''
      this.$refs.clientComplete.clearValues()
    },
    notifyUser () {
      this.goToTop()
      this.showAlert()
      this.goBack()
    },
    goBack () {
      var self = this
      setTimeout(function () {
        self.$router.go(-1)
      }, 3000)
    },
    goBackNow () {
      this.$router.go(-1)
    },
    goToTop () {
      scroll(0, 0)
    },
    updateData () {
      const id = this.$route.params.id
      axios.patch(`/api/v1/services/${id}`, {
        name: this.$data.kind,
        company: this.$data.company,
        costumer: this.$data.client,
        equipment: this.$data.plate,
        cost: this.$data.cost,
        done_at: this.$data.done_at,
        next_service: this.$data.next_service
      }, {headers: {Authorization: localStorage.getItem('token')}}).then(response => { console.log(response) }).catch(e => {
        this.errors.push(e)
        console.log(e)
      }).then(this.notifyUser())
    }
  }
}
</script>

