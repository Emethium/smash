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
  import axios from 'axios'

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
    data () {
      return {
        items: [
          {id: '', kind: ''}
        ],
        fields: [
          {key: 'tipo'},
          {key: 'editar'},
          {key: 'excluir'}
        ],
        currentPage: 1,
        perPage: 6,
        totalRows: 0
      }
    },
    created () {
      axios.get(`http://localhost:3000/api/v1/equipment_types`).then(
        response => {
          this.items = response.data
          console.log(this.items.toString)
        }).catch(e => { this.errors.push(e) })
    },
    methods: {
      getRowCount (items) {
        return items.length
      }
    }
  }
</script>
