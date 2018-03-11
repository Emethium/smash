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
                        <label for="plate">Placa do veículo:</label>
                        <b-form-input v-model="plate" type="text" id="plate" placeholder="Insira a placa do veículo"></b-form-input>
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

export default {
  name: 'serviceEdit',
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
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      loading: false
    }
  },
  created () {
    const id = this.$route.params.id
    axios.get(`/api/v1/companies`).then(
      response => {
        this.loading = true
        this.$data.companies = response.data.data
        this.$data.companies = this.sortByKey(this.$data.companies, 'name')
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/service_types`).then(
      response => {
        this.loading = true
        this.$data.kinds = response.data.data
        this.$data.kinds = this.sortByKey(this.$data.kinds, 'kind')
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/services/${id}`).then(
      response => {
        this.$data.kind = response.data.data.name
        this.$data.company = response.data.data.company
        this.$data.client = response.data.data.costumer
        this.$data.plate = response.data.data.equipment
        this.$data.cost = response.data.data.cost
        this.$data.done_at = response.data.data.done_at
        this.$data.next_service = response.data.data.next_service
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
    },
    notifyUser () {
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
      }).then(response => { console.log(response) }).catch(e => {
        this.errors.push(e)
        console.log(e)
      }).then(this.notifyUser())
    }
  }
}
</script>

