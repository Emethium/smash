<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <img src="static/img/avatars/user.png" class="img-avatar">
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>{{this.username}}</strong></b-dropdown-header>
        <b-dropdown-item v-on:click="logout()"><i class="fa fa-lock"></i>Sair</b-dropdown-item>
      </b-nav-item-dropdown>
</template>
<script>
  import store from '@/store'
  export default {
    name: 'header-dropdown',
    data: () => {
      return {
        username: '',
        itemsCount: 42
      }
    },
    created () {
      this.username = localStorage.getItem('username')
    },
    methods: {
      logout () {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        store.commit('LOGOUT_USER')
        this.$router.push('/')
      }
    }
  }
</script>

