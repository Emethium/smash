import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Register from '@/views/pages/Register'
import Login from '@/views/pages/Login'

// View - Other pages
import Home from '@/views/home/HomeView'
import About from '@/views/about/About'
import Logout from '@/views/logout/Logout'

// Views - Clients
import ClientSearch from '@/views/clients/ClientSearch'
import ClientFormPhysical from '@/views/clients/ClientFormPhysical'
import ClientFormJuridic from '@/views/clients/ClientFormJuridic'
import ClientEdit from '@/views/clients/ClientEdit'

// Views - Vehicles
import VehicleSearch from '@/views/vehicles/VehicleSearch'
import VehicleTypeForm from '@/views/vehicles/VehicleTypeForm'
import VehicleForm from '@/views/vehicles/VehicleForm'
import VehicleTypeList from '@/views/vehicles/VehicleTypeList'
import VehicleTypeEdit from '@/views/vehicles/VehicleTypeEdit'
import VehicleEdit from '@/views/vehicles/VehicleEdit'

// Views - Subsidiaries
import SubsidiaryList from '@/views/subsidiaries/SubsidiaryList'
import SubsidiaryForm from '@/views/subsidiaries/SubsidiaryForm'
import SubsidiaryEdit from '@/views/subsidiaries/SubsidiaryEdit'

// Views - Services
import ServiceSearch from '@/views/services/ServiceSearch'
import ServiceTypeForm from '@/views/services/ServiceTypeForm'
import ServiceTypeList from '@/views/services/ServiceTypeList'
import ServiceForm from '@/views/services/ServiceForm'
import ServiceNotify from '@/views/services/ServiceNotify'
import ServiceTypeEdit from '@/views/services/ServiceTypeEdit'
import ServiceEdit from '@/views/services/ServiceEdit'

Vue.use(Router)

export default new Router({
  props: ['id'],
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/pages/login',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'home',
          name: 'Página Inicial',
          component: Home
        },
        {
          path: 'logout',
          name: 'Logout',
          component: Logout
        },
        {
          path: 'about',
          name: 'Sobre',
          component: About
        },
        {
          path: 'clients',
          redirect: '/clients/clients',
          name: 'Clientes',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'client-search',
              name: 'Buscar Clientes',
              component: ClientSearch
            },
            {
              path: 'physical-form',
              name: 'Cadastro de Pessoas Físicas',
              component: ClientFormPhysical
            },
            {
              path: 'juridic-form',
              name: 'Cadastro de Pessoas Jurídicas',
              component: ClientFormJuridic
            },
            {
              path: 'edit/:id',
              name: 'Edição de Cliente',
              component: ClientEdit
            }
          ]
        },
        {
          path: 'vehicles',
          redirect: '/vehicles/vehicles',
          name: 'Veículos',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'vehicle-search',
              name: 'Buscar Veículos',
              component: VehicleSearch
            },
            {
              path: 'vehicle-form',
              name: 'Cadastro de novo equipamento',
              component: VehicleForm
            },
            {
              path: 'type-form',
              name: 'Cadastro de novo tipo de equipamento',
              component: VehicleTypeForm
            },
            {
              path: 'type-list',
              name: 'Gerir tipos de equipamento cadastrados',
              component: VehicleTypeList
            },
            {
              path: 'type-edit/:id',
              name: 'Editar tipo de equipamento',
              component: VehicleTypeEdit,
              props: true
            },
            {
              path: 'edit/:id',
              name: 'Editar equipamento',
              component: VehicleEdit,
              props: true
            }
          ]
        },
        {
          path: 'subsidiaries',
          redirect: '/subsidiaries/subsidiaries',
          name: 'Filiais',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'subsidiary-list',
              name: 'Lista de Filiais',
              component: SubsidiaryList
            },
            {
              path: 'subsidiary-form',
              name: 'Cadastro de nova filial',
              component: SubsidiaryForm
            },
            {
              path: 'edit/:id',
              name: 'Editar filial',
              component: SubsidiaryEdit
            }
          ]
        },
        {
          path: 'services',
          redirect: '/services/services',
          name: 'Serviços',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'service-search',
              name: 'Consulta de Serviço',
              component: ServiceSearch
            },
            {
              path: 'service-form',
              name: 'Submissão de novo Serviço',
              component: ServiceForm
            },
            {
              path: 'type-form',
              name: 'Cadastro de novo tipo de serviço',
              component: ServiceTypeForm
            },
            {
              path: 'type-list',
              name: 'Gerir tipos de Serviço',
              component: ServiceTypeList
            },
            {
              path: 'send-email',
              name: 'Notificação de Clientes',
              component: ServiceNotify
            },
            {
              path: 'type-edit/:id',
              name: 'Editar tipo de serviço',
              component: ServiceTypeEdit
            },
            {
              path: 'edit/:id',
              name: 'Editar Serviço',
              component: ServiceEdit
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
