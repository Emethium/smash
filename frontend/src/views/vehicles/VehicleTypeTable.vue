<template>
  <b-card :header="caption">
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="editar" slot-scope="data">
        <b-button variant="warning"><i class="fa fa-edit"></i>&nbsp; Modificar tipo</b-button>
      </template>
      <template slot="excluir" slot-scope="data">
        <b-button variant="danger"><i class="fa fa-close"></i>&nbsp; Apagar registro</b-button>
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
          {tipo: 'Tipode veículo #1', status: 'Active'},
          {tipo: 'Tipode veículo #2', status: 'Active'},
          {tipo: 'Tipode veículo #3', status: 'Active'},
          {tipo: 'Tipode veículo #4', status: 'Active'},
          {tipo: 'Tipode veículo #5', status: 'Active'},
          {tipo: 'Tipode veículo #6', status: 'Active'},
          {tipo: 'Tipode veículo #7', status: 'Active'},
          {tipo: 'Tipode veículo #8', status: 'Active'},
          {tipo: 'Tipode veículo #9', status: 'Active'},
          {tipo: 'Tipode veículo #10', status: 'Active'},
          {tipo: 'Tipode veículo #11', status: 'Active'},
          {tipo: 'Tipode veículo #12', status: 'Active'},
          {tipo: 'Tipode veículo #13', status: 'Active'}
        ]),
        fields: [
          {key: 'tipo'},
          {key: 'editar'},
          {key: 'excluir'}
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: 0
      }
    },
    methods: {
      getBadge (status) {
        return status === 'Active' ? 'success'
          : status === 'Inactive' ? 'secondary'
            : status === 'Pending' ? 'warning'
              : status === 'Banned' ? 'danger' : 'primary'
      },
      getRowCount (items) {
        return items.length
      }
    }
  }
</script>
