<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted">Entre com os seus dados de acesso</p>
                <b-input-group class="mb-3">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="icon-user"></i></span></div>
                  <input type="text" v-model="username" class="form-control" placeholder="Nome de usuário">
                </b-input-group>
                <b-input-group class="mb-4">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="icon-lock"></i></span></div>
                  <input type="password" v-model="password" class="form-control" placeholder="Senha">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button v-on:click="login()" variant="primary" class="px-4">Login</b-button>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0">Esqueceu a senha?</b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h1>Smash</h1>
                  <p>Gerenciador de Serviços e Recursos para as Empresas <strong>Vago Engenharia Ltda</strong></p>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import axios from 'axios'

export default {
  name: 'Login',
  data: () => {
    return {
      loading: false,
      username: '',
      password: ''
    }
  },
  beforeCreate () {
    if (store.state.isLogged) {
      this.$router.push('/')
    }
  },
  methods: {
    login () {
      this.loader = true
      this.infoError = false
      axios.post('/api/v1/authenticate', {
        username: this.username,
        password: this.password
      }).then((response) => {
        console.log(response)
        localStorage.setItem('token', response.data.auth_token)
        console.log('localstorage set!')
        store.commit('LOGIN_USER')
        this.$router.push('/home')
      }, () => {
        this.infoError = true
        this.loader = false
        this.password = ''
      })
    }
  }
}
</script>
