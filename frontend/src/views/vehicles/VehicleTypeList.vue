<template>
  <div class="animated fadeIn">
    <c-table striped caption="<i class='fa fa-align-justify'></i> Lista de Tipos de Equipamentos"></c-table>
  </div>
</template>

<script>
import cTable from './VehicleTypeTable.vue'
import store from '@/store'

export default {
  name: 'vehicleTypeList',
  components: {cTable},
  beforeCreate () {
    if (!store.state.isLogged) {
      this.$router.push('/')
    }
  }
}
</script>

