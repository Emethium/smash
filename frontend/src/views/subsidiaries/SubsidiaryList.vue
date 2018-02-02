<template>
  <div class="animated fadeIn">
    <c-table striped caption="<i class='fa fa-align-justify'></i> Lista de Filiais"></c-table>
  </div>
</template>

<script>
import cTable from './SubsidiaryTable.vue'

export default {
  name: 'subsidiaryList',
  components: {cTable}
}
</script>

