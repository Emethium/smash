export default {
  items: [
    {
      name: 'Página inicial',
      url: '/home',
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
          name: 'Notificar Clientes',
          url: '/services/send-email',
          icon: 'fa fa-envelope-open-o fa-lg mt-2'
        },
        {
          name: 'Submeter novo serviço',
          url: '/services/service-form',
          icon: 'fa fa-briefcase fa-lg mt-2'
        },
        {
          name: 'Cadastro de tipo de serviço',
          url: '/services/type-form',
          icon: 'fa fa-info-circle fa-lg mt-2'
        },
        {
          name: 'Gerir tipos de serviço',
          url: '/services/type-list',
          icon: 'fa fa-legal fa-lg mt-2'
        }
      ]
    },
    {
      name: 'Sobre',
      url: '/about',
      icon: 'fa fa-hashtag fa-lg mt-2'
    }
  ]
}
