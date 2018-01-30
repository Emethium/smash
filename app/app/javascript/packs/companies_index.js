import Vue from 'vue'
import App from '../components/test.vue'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('companies_index'))
  const app = new Vue({
    render: h => h(App)
  }).$mount('companies_index')

  console.log(app)
})