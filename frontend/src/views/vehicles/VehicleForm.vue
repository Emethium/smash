<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro de novo veículo </strong>
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Veículo cadastrado com sucesso!
                    </b-alert>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Placa:">
                                <b-form-input type="text" v-model="plate" class="form-control-warning" placeholder="Digite a placa do veículo" id="plate" required></b-form-input>
                                <b-form-valid-feedback>
                                    Placa inserida! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira a placa do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Número do Chassis:">
                                <b-form-input type="text" v-model="chassis" class="form-control-warning" placeholder="Digite o número do Chassis do veículo" id="chassis" required></b-form-input>
                                <b-form-valid-feedback>
                                    Chassis inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o número do Chassis do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Número do patrimônio ou controle:">
                                <b-form-input type="text" v-model="control" class="form-control-warning" placeholder="Digite o número do patrimônio ou controle do veículo" id="control" required></b-form-input>
                                <b-form-valid-feedback>
                                    Número inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o número do patrimônio ou controle do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Nome do Proprietário:">
                                <b-form-input type="text" v-model="costumer" class="form-control-warning" placeholder="Digite o nome do proprietário" id="costumer" required></b-form-input>
                                <b-form-valid-feedback>
                                    Proprietário inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o proprietário do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group
                        label="Tipo de equipamento:"
                        label-for="basicSelect"
                        :label-cols="3"
                        :horizontal="true">
                        <b-form-select id="kind" v-model="kind"
                        :plain="true"
                        value="Selecione o tipo do equipamento">
                            <option v-for="k in kinds">{{k.kind}}</option>
                        </b-form-select>
                    </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="sendData()" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Cadastrar!</b-button>
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Apagar campo</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'vehicleForm',
  data () {
    return {
      plate: '',
      chassis: '',
      control: '',
      costumer: '',
      kind: '',
      kinds: [],
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      loading: false
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/v1/equipment_types`).then(
      response => {
        this.loading = true
        this.$data.kinds = response.data.data
      }).catch(e => { this.errors.push(e) })
  },
  methods: {
    click () {
      // do nothing
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
      var self = this
      setTimeout(function () {
        self.clearText()
      }, 3000)
    },
    clearText () {
      this.$data.plate = ''
      this.$data.chassis = ''
      this.$data.control = ''
      this.$data.costumer = ''
      this.$data.kind = ''
      console.log('cleared all entry text fields')
    },
    sendData () {
      console.log('sending data with: \nplate -> ' + this.$data.plate + '\nchassis -> ' + this.$data.chassis + '\n control -> ' + this.$data.control +
      '\ncostumer -> ' + this.$data.costumer + '\nkind -> ' + this.$data.kind)
      axios.post('http://localhost:3000/api/v1/equipments/', {
        plate: this.$data.plate,
        chassis: this.$data.chassis,
        control_number: this.$data.control,
        proprietary: this.$data.costumer,
        kind: this.$data.kind
      }).then(response => {}).catch(e => {
        this.errors.push(e)
      }).then(this.showAlert())
    }
  }
}
</script>

