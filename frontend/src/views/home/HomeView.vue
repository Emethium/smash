<template>
<div class="animated fadeIn">
    <b-card-group class="mb-4">
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-people"></i>
        </div>
        <div class="h4 mb-0">{{this.costumer_number}}</div>
        <small class="text-muted text-uppercase font-weight-bold">Clientes cadastrados no sistema</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="info" :value="99"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-speedometer"></i>
        </div>
        <div class="h4 mb-0">{{this.equipment_number}}</div>
        <small class="text-muted text-uppercase font-weight-bold">Total de equipamentos cadastrados</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="success" :value="99"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-basket-loaded"></i>
        </div>
        <div class="h4 mb-0">{{this.monthly_services.length}}</div>
        <small class="text-muted text-uppercase font-weight-bold">Serviços atendidos no mês</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="warning" :value="99"/>
      </b-card>
      <b-card>  
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-trophy"></i>
        </div>
        <div class="h4 mb-0">{{this.service_number}}</div>
        <small class="text-muted text-uppercase font-weight-bold">Total de serviços realizados</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" :value="99"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="fa fa-money"></i>
        </div>
        <div class="h4 mb-0">R$ {{this.earnings}}</div>
        <small class="text-muted text-uppercase font-weight-bold">Arrecadação no mês</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="danger" :value="99"/>
      </b-card>
    </b-card-group>

    <b-card>
      <b-row>
        <b-col sm="5">
          <h4 class="card-title mb-0">Demonstrativo de serviços do mês</h4>
          <div class="small text-muted">{{this.month}} {{this.year}}</div>
        </b-col>
      </b-row>
      <main-chart class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart>
    </b-card>
</div>
</template>

<script>
import MainChart from './MainChart.vue'
import axios from 'axios'

const MONTH_NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

export default {
  name: 'dashboard',
  components: {
    MainChart
  },
  data: () => {
    return {
      render: false,
      costumer_number: 0,
      equipment_number: 0,
      service_number: 0,
      earnings: 0,
      monthly_services: [],
      month: '',
      year: '',
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
  created () {
    axios.get(`http://localhost:3000/api/v1/home`).then(
      response => {
        this.loading = true
        this.costumer_number = response.data.data.total_costumer_number
        this.equipment_number = response.data.data.total_equipment_number
        this.service_number = response.data.data.total_service_number
        this.monthly_services = response.data.data.monthly_services
        this.calculateEarnings()
        this.getDate()
      }).catch(e => { this.errors.push(e) })
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
    },
    calculateEarnings () {
      var earn = 0
      this.monthly_services.forEach(function (service) {
        earn = earn + service.cost
      })
      this.earnings = earn
    },
    getDate () {
      const d = new Date()
      this.month = MONTH_NAMES[d.getMonth()]
      this.year = d.getFullYear()
    }
  }
}
</script>
