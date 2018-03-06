<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="5" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro</strong> de Filial
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Filial cadastrada com sucesso!
                    </b-alert>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Nome fantasia da empresa:">
                                <b-form-input type="text" v-model="name" class="form-control-warning" placeholder="Digite o nome da empresa" id="name" required></b-form-input>
                                <b-form-valid-feedback>
                                    Nome inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Insira o nome fantasia da empresa <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Razão Social:">
                                <b-form-input type="text" v-model="social_reason" class="form-control-warning" placeholder="Digite a razão social da empresa" id="social_reason" required></b-form-input>
                                <b-form-valid-feedback>
                                    Razão social inserida <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Insira a razão social da empresa <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <label for="postal-code">CNPJ:</label>
                            <b-form-input type="text" v-model="cnpj" class="form-control-warning" id="cnpj" placeholder="Digite o CNPJ:" required></b-form-input>
                            <b-form-valid-feedback>
                                CNPJ inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                            </b-form-valid-feedback>
                            <b-form-invalid-feedback>
                                Insira o CNPJ da empresa <span class="fa fa-frown-o fa-lg mt-2"></span>
                            </b-form-invalid-feedback>
                        </b-form>
                    </b-form-group>
                    <b-form-group validated novalidate
                        label="Email:"
                        label-for="normalEmail"
                        >
                        <b-form-input id="email" v-model="email" class="form-control-warning" type="email" placeholder="Entre com o Email institucional" required></b-form-input>
                        <b-form-valid-feedback>
                            Email inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                        </b-form-valid-feedback>
                        <b-form-invalid-feedback>
                            Insira o Email da empresa <span class="fa fa-frown-o fa-lg mt-2"></span>
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-row>
                        <b-col sm="7">
                            <b-form-group>
                                <label for="city">Cidade:</label>
                                <b-form-input v-model="city" type="text" id="city" placeholder="Digite a cidade da empresa"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="5">
                        <b-form-group
                            label="Estado:"
                            label-for="basicSelect"
                            :label-cols="11">
                            <b-form-select id="state" v-model="state"
                            :plain="true"
                            :options="['Selecione um estado', 'AC','AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB',
                                        'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']"
                            value="Please select">
                            </b-form-select>
                        </b-form-group>
                        </b-col>
                    </b-row>
                    <div slot="footer">
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campos</b-button>
                        <b-button v-on:click="sendData()" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Cadastrar!</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'subsidiaryForm',
  data () {
    return {
      name: '',
      social_reason: '',
      cnpj: '',
      email: '',
      city: '',
      state: '',
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
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
      this.$data.name = ''
      this.$data.social_reason = ''
      this.$data.cnpj = ''
      this.$data.email = ''
      this.$data.city = ''
      this.$data.state = ''
      console.log('cleared all entry text fields')
    },
    sendData () {
      console.log('sending data with: \nname ->' + this.$data.name + '\nsocial reason -> ' + this.$data.social_reason + '\n email -> ' + this.$data.email +
      'cnpj -> ' + this.$data.cnpj + 'city -> ' + this.$data.city + 'state -> ' + this.$data.state)
      axios.post('http://localhost:3000/api/v1/companies/', {
        name: this.$data.name,
        social_reason: this.$data.social_reason,
        email: this.$data.email,
        cnpj: this.$data.cnpj,
        city: this.$data.city,
        state: this.$data.state
      }).then(response => {}).catch(e => {
        this.errors.push(e)
      }).then(this.showAlert())
    }
  }
}
</script>

