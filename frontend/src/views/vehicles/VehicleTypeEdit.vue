<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Editar tipo de veículo</strong>
                    </div>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="kind" label="Alterar nome do tipo de veículo:">
                                <b-form-input v-model="kind" type="text" class="form-control-warning" id="kind"></b-form-input>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="updateData()" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Alterar nome!</b-button>
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Apagar campo</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'vehicleTypeEdit',
  data () {
    return {
      selected: [],
      kind: ''
    }
  },
  created () {
    const id = this.$route.params.id
    axios.get(`http://localhost:3000/api/v1/equipment_types/${id}`).then(
      response => {
        this.loading = true
        this.kind = response.data.data.kind
      }).catch(e => { this.errors.push(e) })
  },
  methods: {
    click () {
      // do nothing
    },
    clearText: function () {
      console.log('cleared type name text')
      this.$data.kind = ''
    },
    goBack () {
      this.$router.go(-1)
    },
    updateData () {
      const id = this.$route.params.id
      axios.patch(`http://localhost:3000/api/v1/equipment_types/${id}`, {
        body: this.kind
      }).then(response => { console.log(response) }).catch(e => {
        this.errors.push(e)
        console.log(e)
      })
    }
  }
}
</script>

