<script>
import { Line } from 'vue-chartjs'
import axios from 'axios'

// const brandPrimary = '#20a8d8'
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
// const brandDanger = '#f86c6b'

function convertHex (hex, opacity) {
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
  return result
}

export default {
  extends: Line,
  props: ['height'],
  async mounted () {
    var services = []
    var data1 = new Array(31).fill(0)
    var data2 = new Array(31).fill(0)

    await axios.get(`/api/v1/home`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        services = response.data.data.monthly_services
        services.forEach(function (service) {
          var tokenDate = new Date(service.done_at)
          var day1 = tokenDate.getUTCDate()
          tokenDate = new Date(service.next_service)
          var day2 = tokenDate.getUTCDate()
          // console.log('Service done at -> ' + day1 + ' and revision planned to day ' + day2)
          data1[day1 - 1] = data1[day1 - 1] + 1
          data2[day2 - 1] = data2[day2 - 1] + 1
        })
      }).catch(e => { this.errors.push(e) })
    this.renderChart({
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      datasets: [
        {
          label: 'Serviços atendidos',
          backgroundColor: convertHex(brandInfo, 10),
          borderColor: brandSuccess,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: data1
        },
        {
          label: 'Serviços provisionados',
          backgroundColor: 'transparent',
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: data2
        }
      ]
    }, {
      maintainAspectRatio: false,
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: true
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(50 / 5),
            max: 50
          },
          gridLines: {
            display: true
          }
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 5,
          hoverBorderWidth: 3
        }
      }
    })
  },
  methods: {
    renderAgain (data1, data2) {
      this.renderChart({
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [
          {
            label: 'Serviços atendidos',
            backgroundColor: convertHex(brandInfo, 10),
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data1
          },
          {
            label: 'Serviços provisionados',
            backgroundColor: 'transparent',
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data2
          }
        ]
      }, {
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 1,
              stepSize: Math.ceil(30 / 5),
              max: 30
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      })
    }
  }
}
</script>
