<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Editar tipo de serviço</strong>
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Dados atualizados com sucesso!
                    </b-alert>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="kind" label="Alterar tipo de serviço:">
                                <b-form-input v-model="kind" type="text" class="form-control-warning" id="kind"></b-form-input>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <div slot="footer">
                      <b-button v-on:click="goBackNow()"  type="submit" size="sm" variant="danger"><i class="fa fa-close"></i> Voltar</b-button>
                      <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campo</b-button>
                      <b-button v-on:click="updateData()" style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-edit"></i> Alterar tipo!</b-button>  
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
  name: 'serviceTypeEdit',
  data () {
    return {
      selected: [],
      kind: '',
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
  created () {
    const id = this.$route.params.id
    axios.get(`/api/v1/service_types/${id}`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.kind = response.data.data.kind
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
      this.$data.kind = ''
    },
    notifyUser () {
      this.showAlert()
      this.goBack()
    },
    goBack () {
      var self = this
      setTimeout(function () {
        self.$router.go(-1)
      }, 2000)
    },
    goBackNow () {
      this.$router.go(-1)
    },
    updateData () {
      const id = this.$route.params.id
      axios.patch(`/api/v1/service_types/${id}`, {
        kind: this.kind
      }, {headers: {Authorization: localStorage.getItem('token')}}).then(response => { console.log(response) }).catch(e => {
        this.errors.push(e)
        console.log(e)
      }).then(this.notifyUser())
    }
  }
}
</script>

