<template>
  <b-card :header="caption">
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="cidade" slot-scope="data">
        <b-badge :variant="getBadge(data.item.cidade)">{{data.item.cidade}}</b-badge>
      </template>
      <template slot="editar dados cadastrais" slot-scope="data">
        <b-button variant="warning"><i class="fa fa-edit"></i>&nbsp; Editar</b-button>
      </template>
      <template slot="remover filial" slot-scope="data">
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
          {nome: 'Vago Engenharia', cidade: 'Teixeira de Freitas', estado: 'BA'},
          {nome: 'Vago Engenharia', cidade: 'Colatina', estado: 'ES'},
          {nome: 'Vago Engenharia', cidade: 'Vitória', estado: 'ES'},
          {nome: 'Vago Engenharia', cidade: 'Colatina', estado: 'ES'},
          {nome: 'Vago Engenharia', cidade: 'Teixeira de Freitas', estado: 'BA'},
          {nome: 'Vago Engenharia', cidade: 'Teixeira de Freitas', estado: 'BA'},
          {nome: 'Vago Engenharia', cidade: 'Vitória', estado: 'ES'},
          {nome: 'Vago Engenharia', cidade: 'Colatina', estado: 'ES'},
          {nome: 'Vago Engenharia', cidade: 'Eunápolis', estado: 'BA'},
          {nome: 'Vago Engenharia', cidade: 'Teixeira de Freitas', estado: 'BA'},
          {nome: 'Vago Engenharia', cidade: 'Eunápolis', estado: 'BA'}
        ]),
        fields: [
          {key: 'nome'},
          {key: 'cidade'},
          {key: 'estado'},
          {key: 'editar dados cadastrais'},
          {key: 'remover filial'}
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
