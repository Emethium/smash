<template>
    <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Busca de Veículo </strong>
                        <div class="badge badge-info badge-pill" v-b-popover.hover="'Os campos não preenchidos não serão utilizados na busca!'" title="Atenção!">
                            <span class="fa fa-question"></span>
                        </div>
                    </div>
                    <b-form-group>
                    <label for="name"><strong>Placa:</strong></label>
                        <b-form-input v-model="plate" type="text" id="plate" placeholder="Entre com a placa do veículo"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code"><strong>Número do Chassis:</strong></label>
                        <b-form-input v-model="chassis" type="text" id="chassis" placeholder="Digite o número do Chassis"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code"><strong>Número de Patrimônio ou Controle:</strong></label>
                        <b-form-input v-model="control" type="text" id="control" placeholder="Digite o número de patrimônio ou controle"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Tipo de equipamento:"
                        label-for="basicSelect"
                        :label-cols="3"
                        :horizontal="true">
                        <b-form-select id="kind" v-model="kind"
                        :plain="true"
                        value="Selecione o tipo do equipamento">
                            <option v-for="k in kinds">{{k.kind}}</option>
                        </b-form-select>
                    </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="submitSearch()" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Pesquisar!</b-button>
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Apagar campos</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <!-- Hidden result list -->
        <b-row>
          <b-col md="6" class="mx-auto">
            <b-alert :show="result" variant="info">
              <b-card header-tag="header" footer-tag="footer">
                <div slot="header">
                  <i className="fa fa-align-justify"></i><strong>Resultado da busca</strong>
                </div>
                <b-list-group>
                  <b-list-group-item  v-model="vehicles" href="#" class="flex-column align-items-start" v-for="v in vehicles" v-on:click="goToEdit(v.id)">
                    <div class="d-flex w-100 justify-content-between" >
                      <h5 class="mb-1">Placa: {{v.plate}}</h5>
                      <small>Controle: {{v.control_number}}</small>
                    </div>
                    <p class="mb-1">
                      Chassis: {{v.chassis}}
                    </p>
                    <p class="mb-1">
                      Tipo de equipamento: {{v.kind}}
                    </p>
                    <p class="mb-1">
                      Proprietário: {{v.proprietary}}
                    </p>
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-alert>
          </b-col>
        </b-row>
        <!-- End of hidden result list -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'vehicleSearch',
  data () {
    return {
      vehicles: [],
      plate: '',
      chassis: '',
      control: '',
      kind: '',
      kinds: '',
      result: false
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/v1/equipment_types`).then(
      response => {
        this.loading = true
        this.$data.kinds = response.data.data
        this.$data.kinds = this.sortByKey(this.$data.kinds, 'kind')
      }).catch(e => { this.errors.push(e) })
  },
  methods: {
    sortByKey (array, key) {
      return array.sort(function (a, b) {
        var x = a[key]
        var y = b[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      })
    },
    clearText () {
      this.$data.plate = ''
      this.$data.chassis = ''
      this.$data.control = ''
      this.$data.kind = ''
      console.log('cleared all entry text fields')
    },
    submitSearch () {
      console.log('searching for data with parameters:\n' + 'plate -> ' + this.$data.plate + '\nchassis -> ' +
          this.$data.chassis + '\ncontrol -> ' + this.$data.control + '\nkind -> ' + this.$data.kind)

      axios.get('http://localhost:3000/api/v1/equipments/search', {
        params: {
          plate: this.$data.plate,
          chassis: this.$data.chassis,
          control_number: this.$data.control,
          kind: this.$data.kind
        }
      }).then(response => {
        this.$data.vehicles = response.data.data
      }).then(this.showList())
    },
    showList () {
      this.$data.result = true
    },
    goToEdit (id) {
      console.log('trying to edit vehicle with id -> ' + id)
      this.$router.push({path: `/vehicles/edit/${id}`})
    }
  }
}
</script>

