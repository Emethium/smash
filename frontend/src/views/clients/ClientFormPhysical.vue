<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro de Pessoa Física</strong> 
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Pessoa física cadastrada com sucesso!
                    </b-alert>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Nome completo do Cliente:">
                                <b-form-input type="text" v-model="name" class="form-control-warning" placeholder="Digite o nome do cliente" id="name" required></b-form-input>
                                <b-form-valid-feedback>
                                    Nome inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Insira o nome do cliente <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <label for="postal-code">CPF:</label>
                            <b-form-input type="text" v-model="registercode" class="form-control-warning" id="registercode" placeholder="Digite o registro de pessoa física" required></b-form-input>
                            <b-form-valid-feedback>
                                CPF inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                            </b-form-valid-feedback>
                            <b-form-invalid-feedback>
                                Insira o CPF do Cliente <span class="fa fa-frown-o fa-lg mt-2"></span>
                            </b-form-invalid-feedback>
                        </b-form>
                    </b-form-group>
                    <b-form-group validated novalidate
                        label="Email:"
                        label-for="normalEmail"
                        >
                        <b-form-input id="email" v-model="email" class="form-control-warning" type="email" placeholder="Entre com o Email pessoal do cliente" required></b-form-input>
                        <b-form-valid-feedback>
                            Email inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                        </b-form-valid-feedback>
                        <b-form-invalid-feedback>
                            Insira o Email do Cliente <span class="fa fa-frown-o fa-lg mt-2"></span>
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campos</b-button>
                        <b-button v-on:click="sendData()" style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Cadastrar!</b-button>          
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/store'

export default {
  name: 'clientFormPhysical',
  data () {
    return {
      selected: [], // Must be an array reference!
      name: '',
      registercode: '',
      email: '',
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  beforeCreate () {
    if (!store.state.isLogged) {
      this.$router.push('/')
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
      this.$data.registercode = ''
      this.$data.email = ''
      console.log('cleared all entry text fields')
    },
    sendData () {
      console.log('sending data with: \nname ->' + this.$data.name + '\nregister code -> ' + this.$data.registercode + '\n email -> ' + this.$data.email)
      axios.post('/api/v1/costumers/', {
        name: this.$data.name,
        email: this.$data.email,
        kind: '0',
        register_code: this.$data.registercode,
        social_reason: ''
      }, {headers: {Authorization: localStorage.getItem('token')}}).then(response => {}).catch(e => {
        this.errors.push(e)
      }).then(this.showAlert())
    }
  }
}
</script>

