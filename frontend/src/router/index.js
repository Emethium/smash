import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'

import Colors from '@/views/theme/Colors'
import Typography from '@/views/theme/Typography'

import Charts from '@/views/Charts'
import Widgets from '@/views/Widgets'

// Views - Components
import Cards from '@/views/base/Cards'
import Forms from '@/views/base/Forms'
import Switches from '@/views/base/Switches'
import Tables from '@/views/base/Tables'
import Breadcrumbs from '@/views/base/Breadcrumbs'
import Carousels from '@/views/base/Carousels'
import Collapses from '@/views/base/Collapses'
import Jumbotrons from '@/views/base/Jumbotrons'
import ListGroups from '@/views/base/ListGroups'
import Navs from '@/views/base/Navs'
import Navbars from '@/views/base/Navbars'
import Paginations from '@/views/base/Paginations'
import Popovers from '@/views/base/Popovers'
import ProgressBars from '@/views/base/ProgressBars'
import Tooltips from '@/views/base/Tooltips'

// Views - Buttons
import StandardButtons from '@/views/buttons/StandardButtons'
import ButtonGroups from '@/views/buttons/ButtonGroups'
import Dropdowns from '@/views/buttons/Dropdowns'
import SocialButtons from '@/views/buttons/SocialButtons'

// Views - Icons
import Flags from '@/views/icons/Flags'
import FontAwesome from '@/views/icons/FontAwesome'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

// Views - Notifications
import Alerts from '@/views/notifications/Alerts'
import Badges from '@/views/notifications/Badges'
import Modals from '@/views/notifications/Modals'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

// View - Home
import Home from '@/views/home/HomeView'

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

// Views - Subsidiaries
import SubsidiaryList from '@/views/subsidiaries/SubsidiaryList'
import SubsidiaryForm from '@/views/subsidiaries/SubsidiaryForm'

// Views - Services
import ServiceSearch from '@/views/services/ServiceSearch'
import ServiceTypeForm from '@/views/services/ServiceTypeForm'
import ServiceTypeList from '@/views/services/ServiceTypeList'
import ServiceForm from '@/views/services/ServiceForm'
import ServiceHistory from '@/views/services/ServiceHistory'

Vue.use(Router)

export default new Router({
  props: ['id'],
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/home',
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
              path: 'service-history',
              name: 'Histórico de Serviços realizados',
              component: ServiceHistory
            }
          ]
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'social-buttons',
              name: 'Social Buttons',
              component: SocialButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
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
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
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
