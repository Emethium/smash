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
          {tipo: 'Samppa Nori', status: 'Active'},
          {tipo: 'Estavan Lykos', status: 'Banned'},
          {tipo: 'Chetan Mohamed', status: 'Inactive'},
          {tipo: 'Derick Maximinus', status: 'Pending'},
          {tipo: 'Friderik Dávid', status: 'Active'},
          {tipo: 'Yiorgos Avraamu', status: 'Active'},
          {tipo: 'Avram Tarasios', status: 'Banned'},
          {tipo: 'Quintin Ed', status: 'Inactive'},
          {tipo: 'Enéas Kwadwo', status: 'Pending'},
          {tipo: 'Agapetus Tadeáš', status: 'Active'},
          {tipo: 'Carwyn Fachtna', status: 'Active'},
          {tipo: 'Nehemiah Tatius', status: 'Banned'},
          {tipo: 'Ebbe Gemariah', status: 'Inactive'},
          {tipo: 'Eustorgios Amulius', status: 'Pending'},
          {tipo: 'Leopold Gáspár', status: 'Active'},
          {tipo: 'Pompeius René', status: 'Active'},
          {tipo: 'Paĉjo Jadon', status: 'Banned'},
          {tipo: 'Micheal Mercurius', status: 'Inactive'},
          {tipo: 'Ganesha Dubhghall', status: 'Pending'},
          {tipo: 'Hiroto Šimun', status: 'Active'},
          {tipo: 'Vishnu Serghei', status: 'Active'},
          {tipo: 'Zbyněk Phoibos', status: 'Banned'},
          {tipo: 'Einar Randall', status: 'Inactive'},
          {tipo: 'Félix Troels', status: 'Active'},
          {tipo: 'Aulus Agmundr', status: 'Pending'}
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
