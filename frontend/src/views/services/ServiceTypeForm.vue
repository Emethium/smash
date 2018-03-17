<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro de novo tipo de serviço </strong>
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Tipo de serviço cadastrado com sucesso!
                    </b-alert>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="kind" label="Novo tipo:">
                                <b-form-input type="text" v-model="kind" class="form-control-warning" placeholder="Digite o novo tipo de veículo" id="kind" required></b-form-input>
                                <b-form-valid-feedback>
                                    Tipo inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o novo tipo de serviço <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campo</b-button>
                        <b-button v-on:click="sendData()" style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Cadastrar!</b-button>    
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'serviceTypeForm',
  data () {
    return {
      kind: '',
      dismissSecs: 2.005,
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
      }, 2000)
    },
    clearText: function () {
      console.log('cleared input field')
      this.$data.kind = ''
    },
    sendData () {
      console.log('sending data with new kind: ' + this.kind)
      axios.post('/api/v1/service_types/', {
        kind: this.kind
      }, {headers: {Authorization: localStorage.getItem('token')}}).then(response => {}).catch(e => {
        this.errors.push(e)
      }).then(this.showAlert())
    }
  }
}
</script>

