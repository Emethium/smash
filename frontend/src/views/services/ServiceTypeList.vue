<template>
  <div class="animated fadeIn">
    <c-table striped caption="<i class='fa fa-align-justify'></i> Lista de Tipos de Serviço"></c-table>
  </div>
</template>

<script>
import cTable from './ServiceTypeTable.vue'
import store from '@/store'

export default {
  name: 'serviceTypeList',
  components: {cTable},
  beforeCreate () {
    if (!store.state.isLogged) {
      this.$router.push('/login')
    }
  }
}
</script>

