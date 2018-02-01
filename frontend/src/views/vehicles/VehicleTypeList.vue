<template>
  <div class="animated fadeIn">
    <c-table striped caption="<i class='fa fa-align-justify'></i> Lista de Tipos de Equipamentos"></c-table>
  </div>
</template>

<script>
import cTable from './VehicleTypeTable.vue'

export default {
  name: 'vehicleTypeList',
  components: {cTable}
}
</script>

