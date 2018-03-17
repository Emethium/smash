<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>Conta</strong></b-dropdown-header>
        <b-dropdown-item v-on:click="logout()"><i class="fa fa-lock"></i> Logout</b-dropdown-item>
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
    beforeCreate () {
      this.username = localStorage.getItem('username')
      console.log(localStorage.getItem('username'))
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

