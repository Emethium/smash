<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro de novo serviço</strong>
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Serviço cadastrado com sucesso!
                    </b-alert>
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
                        label="Filial efetuadora do serviço:"
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
                        <b-form-input v-model="client" type="text" id="client" placeholder="Insira o nome aqui"></b-form-input>
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
                    
                    <div slot="footer">
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar todos os campos</b-button>
                        <b-button v-on:click="sendData()" style="float:right"  type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Cadastrar novo serviço!</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
import Autocomplete from 'vuejs-auto-complete'

export default {
  name: 'serviceForm',
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
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      loading: false
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
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    formattedDisplay (result) {
      return result.plate
    },
    setAttributes (vehicle) {
      this.$data.plate = vehicle.selectedObject.plate
      this.$data.client = vehicle.selectedObject.proprietary
    },
    sortByKey (array, key) {
      return array.sort(function (a, b) {
        var x = a[key]
        var y = b[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      })
    },
    showAlert () {
      scroll(0, 0)
      this.dismissCountDown = this.dismissSecs
      var self = this
      setTimeout(function () {
        self.clearText()
      }, 3000)
    },
    clearText () {
      this.$data.kind = ''
      this.$data.company = ''
      this.$data.client = ''
      this.$data.plate = ''
      this.$data.cost = 0
      this.$data.done_at = ''
      this.$data.next_service = ''
      this.$refs.autocomplete.clearValues()
      console.log('cleared all entry text fields')
    },
    sendData () {
      axios.post('/api/v1/services/', {
        name: this.$data.kind,
        cost: this.$data.cost,
        costumer: this.$data.client,
        equipment: this.$data.plate,
        company: this.$data.company,
        done_at: this.$data.done_at,
        next_service: this.$data.next_service
      }, {headers: {Authorization: localStorage.getItem('token')}}).then(response => {}).catch(e => {
        this.errors.push(e)
      }).then(this.showAlert())
    }
  }
}
</script>


