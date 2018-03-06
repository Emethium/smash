<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Edição de Cliente</strong>
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Dados atualizados com sucesso!
                    </b-alert>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="name" label="Alterar o nome do cliente:">
                                <b-form-input v-model="name" type="text" class="form-control-warning" id="name"></b-form-input>
                            </b-form-group>
                        </b-form>
                        <b-form validated novalidate>
                            <b-form-group label-for="register_code" label="Alterar nome do CPF/CNPJ:">
                                <b-form-input v-model="register_code" type="text" class="form-control-warning" id="register_code"></b-form-input>
                            </b-form-group>
                        </b-form>
                        <b-form validated novalidate>
                            <b-form-group label-for="email" label="Alterar email:">
                                <b-form-input v-model="email" type="email" class="form-control-warning" id="email"></b-form-input>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="goBackNow()"  type="submit" size="sm" variant="danger"><i class="fa fa-close"></i> Voltar</b-button>
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campos</b-button>
                        <b-button v-on:click="updateData()"  type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Alterar dados!</b-button>
                        
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'clientEdit',
  data () {
    return {
      selected: [],
      name: '',
      register_code: '',
      email: '',
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  created () {
    const id = this.$route.params.id
    axios.get(`http://localhost:3000/api/v1/costumers/${id}`).then(
      response => {
        this.$data.loading = true
        this.$data.name = response.data.data.name
        this.$data.register_code = response.data.data.register_code
        this.$data.email = response.data.data.email
        console.log('loaded following parameters for edition ->' + this.$data.name + ', ' + this.$data.register_code + ', ' + this.$data.email)
      }).catch(e => { this.errors.push(e) })
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    clearText: function () {
      console.log('cleared type name text')
      this.$data.name = ''
      this.$data.register_code = ''
      this.$data.email = ''
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
      axios.patch(`http://localhost:3000/api/v1/costumers/${id}`, {
        name: this.$data.name,
        register_code: this.$data.register_code,
        email: this.$data.email
      }).then(response => { console.log(response) }).catch(e => {
        this.errors.push(e)
        console.log(e)
      }).then(this.notifyUser())
    }
  }
}
</script>

