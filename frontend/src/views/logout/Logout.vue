<template>
  
</template>

<style>

</style>

<script>
import router from '@/router'
import store from '@/store'

export default {
  name: 'Logout',
  mounted () {
    localStorage.removeItem('token')
    store.commit('LOGOUT_USER')
    router.push('login')
  }
}
</script>

