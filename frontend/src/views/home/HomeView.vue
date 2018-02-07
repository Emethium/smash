<template>
<div class="animated fadeIn">
    <b-card-group class="mb-4">
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-people"></i>
        </div>
        <div class="h4 mb-0">750</div>
        <small class="text-muted text-uppercase font-weight-bold">Clientes cadastrados no sistema</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="info" :value="99"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-speedometer"></i>
        </div>
        <div class="h4 mb-0">980</div>
        <small class="text-muted text-uppercase font-weight-bold">Equipamentos cadastrados no sistema</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="success" :value="99"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-basket-loaded"></i>
        </div>
        <div class="h4 mb-0">338</div>
        <small class="text-muted text-uppercase font-weight-bold">Serviços atendidos no mês</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="warning" :value="99"/>
      </b-card>
      <b-card>  
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-trophy"></i>
        </div>
        <div class="h4 mb-0">2890</div>
        <small class="text-muted text-uppercase font-weight-bold">Total de serviços realizados</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" :value="99"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="fa fa-money"></i>
        </div>
        <div class="h4 mb-0">R$30.543,21</div>
        <small class="text-muted text-uppercase font-weight-bold">Arrecadação no mês</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="danger" :value="99"/>
      </b-card>
    </b-card-group>

    <b-card>
      <b-row>
        <b-col sm="5">
          <h4 class="card-title mb-0">Demonstrativo de serviços do mês</h4>
          <div class="small text-muted">Fevereiro 2018</div>
        </b-col>
      </b-row>
      <main-chart class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart>
    </b-card>
</div>
</template>

<script>

import MainChart from './MainChart.vue'

export default {
  name: 'dashboard',
  components: {
    MainChart
  },
  data: function () {
    return {
      selected: 'Month',
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: 'User'
        },
        country: {
          label: 'Country',
          class: 'text-center'
        },
        usage: {
          label: 'Usage'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
    }
  }
}
</script>
