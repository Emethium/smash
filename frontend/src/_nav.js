export default {
  items: [
    {
      name: 'Página inicial',
      url: '/dashboard',
      icon: 'icon-globe',
      badge: {
        variant: 'primary'
      }
    },
    {
      name: 'Clientes',
      url: '/clients',
      icon: 'icon-people',
      children: [
        {
          name: 'Buscar cliente',
          url: '/clients/client-search',
          icon: 'icon-magnifier'
        },
        {
          name: 'Cadastro de pessoa física',
          url: '/clients/physical-form',
          icon: 'icon-user'
        },
        {
          name: 'Cadastro de pessoa jurídica',
          url: '/clients/juridic-form',
          icon: 'icon-briefcase'
        }
      ]
    },
    {
      name: 'Equipamentos',
      url: '/vehicles',
      icon: 'fa fa-automobile fa-lg mt-2',
      children: [
        {
          name: 'Buscar veículo',
          url: '/vehicles/vehicle-search',
          icon: 'icon-magnifier'
        },
        {
          name: 'Cadastro de equipamento',
          url: '/vehicles/vehicle-form',
          icon: 'fa fa-bus fa-lg mt-2'
        },
        {
          name: 'Cadastro de novo tipo',
          url: '/vehicles/type-form',
          icon: 'fa fa-info-circle fa-lg mt-2'
        },
        {
          name: 'Gerir tipos de equipamento',
          url: '/vehicles/type-list',
          icon: 'fa fa-legal fa-lg mt-2'
        }
      ]
    },
    {
      name: 'Filiais',
      url: '/subsidiaries',
      icon: 'fa fa-industry fa-lg mt-2',
      children: [
        {
          name: 'Listagem de filiais',
          url: '/subsidiaries/subsidiary-list',
          icon: 'fa fa-list-alt fa-lg mt-2'
        },
        {
          name: 'Cadastro de filial',
          url: '/subsidiaries/subsidiary-form',
          icon: 'fa fa-institution fa-lg mt-2'
        }
      ]
    },
    {
      name: 'Serviços',
      url: '/services',
      icon: 'fa fa-handshake-o fa-lg mt-2',
      children: [
        {
          name: 'Consulta de serviço',
          url: '/services/service-search',
          icon: 'icon-magnifier'
        },
        {
          name: 'Histórico de serviços',
          url: '/buttons/dropdowns',
          icon: 'fa fa-hourglass-o fa-lg mt-2'
        },
        {
          name: 'Submeter novo serviço',
          url: '/buttons/standard-buttons',
          icon: 'fa fa-briefcase fa-lg mt-2'
        },
        {
          name: 'Cadastro de tipo de serviço',
          url: '/services/type-form',
          icon: 'fa fa-info-circle fa-lg mt-2'
        },
        {
          name: 'Gerir tipos de serviço',
          url: '/buttons/standard-buttons',
          icon: 'fa fa-legal fa-lg mt-2'
        }
      ]
    },
    {
      title: true,
      name: 'Theme',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop'
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'icon-puzzle'
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle'
        },
        {
          name: 'Progress Bars',
          url: '/base/progress-bars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Standard Buttons',
          url: '/buttons/standard-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'Dropdowns',
          url: '/buttons/dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'Social Buttons',
          url: '/buttons/social-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
          badge: {
            variant: 'success',
            text: 'NEW'
          }
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    }
  ]
}
