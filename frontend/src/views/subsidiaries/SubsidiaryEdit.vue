<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Editar dados de filial</strong>
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Dados atualizados com sucesso!
                    </b-alert>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="name" label="Alterar nome de fantasia:">
                                <b-form-input v-model="name" type="text" class="form-control-warning" id="name"></b-form-input>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="social_reason" label="Alterar razão social:">
                                <b-form-input v-model="social_reason" type="text" class="form-control-warning" id="social_reason"></b-form-input>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="cnpj" label="Alterar cnpj:">
                                <b-form-input v-model="cnpj" type="text" class="form-control-warning" id="cnpj"></b-form-input>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="email" label="Alterar email:">
                                <b-form-input v-model="email" type="email" class="form-control-warning" id="email"></b-form-input>
                            </b-form-group>
                        </b-form>
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
                            label-for="state"
                            :label-cols="11">
                            <b-form-select id="state" v-model="state"
                            :plain="true"
                            :options="['AC','AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB',
                                        'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']"
                            value="state">
                            </b-form-select>
                        </b-form-group>
                        </b-col>
                    </b-row>
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
  name: 'subsidiaryEdit',
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
  created () {
    const id = this.$route.params.id
    axios.get(`/api/v1/companies/${id}`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.name = response.data.data.name
        this.social_reason = response.data.data.social_reason
        this.cnpj = response.data.data.cnpj
        this.email = response.data.data.email
        this.city = response.data.data.city
        this.state = response.data.data.state
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
      console.log('cleared fields')
      this.$data.name = ''
      this.$data.social_reason = ''
      this.$data.cnpj = ''
      this.$data.email = ''
      this.$data.city = ''
      this.$data.state = ''
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
      axios.patch(`/api/v1/companies/${id}`, {
        name: this.name,
        social_reason: this.social_reason,
        cnpj: this.cnpj,
        email: this.email,
        city: this.city,
        state: this.state
      }, {headers: {Authorization: localStorage.getItem('token')}}).then(response => { console.log(response) }).catch(e => {
        this.errors.push(e)
        console.log(e)
      }).then(this.notifyUser())
    }
  }
}
</script>

