<template>
  <b-card :header="caption">
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="editar nome do serviço" slot-scope="data">
        <b-button variant="warning"><i class="fa fa-edit"></i>&nbsp; Editar</b-button>
      </template>
      <template slot="remover serviço" slot-scope="data">
        <b-button variant="danger"><i class="fa fa-close"></i>&nbsp; Excluir</b-button>
      </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>
  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  export default {
    name: 'c-table',
    props: {
      caption: {
        type: String,
        default: 'Table'
      },
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        items: shuffleArray([
          {serviço: 'Vistoria Mecânica DER/ES'},
          {serviço: 'CSV para ANTT (LIT)'},
          {serviço: 'Laudo NR-13 Vaso de Pressão'},
          {serviço: 'Laudo Opacidade'},
          {serviço: 'Laudo Ruído'},
          {serviço: 'Relatório de Inspeção Técnica (RIT)'},
          {serviço: 'Seguro de Responsabilidade Civil (RC)'}
        ]),
        fields: [
          {key: 'serviço'},
          {key: 'editar nome do serviço'},
          {key: 'remover serviço'}
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: 0
      }
    },
    methods: {
      getBadge (status) {
        return status === 'Teixeira de Freitas' ? 'success'
          : status === 'Vitória' ? 'secondary'
            : status === 'Eunápolis' ? 'warning'
              : status === 'Colatina' ? 'danger' : 'primary'
      },
      getRowCount (items) {
        return items.length
      }
    }
  }
</script>
