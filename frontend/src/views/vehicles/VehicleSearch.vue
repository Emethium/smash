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
                      <autocomplete
                        ref="autocomplete"
                        id="plateComplete"
                        :showNoResults="false"
                        :source="autoCompleteData"
                        results-property="plate"
                        :results-display="formattedDisplay"
                        @selected="setAttributes"
                        input-class="name"
                        placeholder="Entre com a placa do veículo">
                      </autocomplete>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code"><strong>Número do Chassis:</strong></label>
                        <b-form-input v-model="chassis" type="text" id="chassis" placeholder="Entre com o chassis do veículo"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code"><strong>Número de Patrimônio ou Controle:</strong></label>
                        <b-form-input v-model="control" type="text" id="control" placeholder="Digite o número de patrimônio ou controle"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <label for="name"><strong>Nome do Cliente ou Empresa Contratante:</strong></label>
                      <autocomplete
                        ref="clientComplete"
                        id="clientComplete"
                        :showNoResults="false"
                        :source="clients"
                        results-property="name"
                        :results-display="formattedDisplayClient"
                        @selected="setClientName"
                        input-class="name"
                        placeholder="Nome do Cliente ou Empresa Contratante">
                      </autocomplete>
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
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campos</b-button>
                        <b-button v-on:click="submitSearch()"  style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-send"></i> Pesquisar!</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <!-- Hidden result list -->
        <b-row>
          <b-col md="6" class="mx-auto">
            <b-alert :show="result" variant="bg-gray-100">
              <b-card header-tag="header" footer-tag="footer">
                <div slot="header">
                  <i className="fa fa-align-justify"></i><strong>Resultado da busca</strong>
                  <b-button size="sm" v-on:click="createQueryPdf()" style="float:right" variant="secondary">Exportar consulta em PDF</b-button>
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
import Autocomplete from 'vuejs-auto-complete'
import JsPDF from 'jspdf'

export default {
  name: 'vehicleSearch',
  components: {
    Autocomplete
  },
  data () {
    return {
      autoCompleteData: [],
      vehicles: [],
      clients: [],
      plate: '',
      chassis: '',
      control: '',
      kind: '',
      proprietary: '',
      kinds: '',
      result: false
    }
  },
  created () {
    axios.get(`/api/v1/equipment_types`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.kinds = response.data.data
        this.$data.kinds = this.sortByKey(this.$data.kinds, 'kind')
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/equipments`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.autoCompleteData = response.data.data
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/costumers`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.clients = response.data.data
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
    formattedDisplay (result) {
      return result.plate
    },
    formattedDisplayChassis (result) {
      return result.chassis
    },
    formattedDisplayClient (client) {
      return client.name
    },
    setAttributes (vehicle) {
      this.$data.plate = vehicle.selectedObject.plate
      this.$data.chassis = vehicle.selectedObject.chassis
      this.$data.control = vehicle.selectedObject.control_number
      this.$data.kind = vehicle.selectedObject.kind
      this.$data.proprietary = vehicle.selectedObject.proprietary
      this.$refs.clientComplete.display = vehicle.selectedObject.proprietary
      console.log(this.$data.plate + '\n' + this.$data.chassis + '\n' + this.$data.control + '\n' + this.$data.kind)
    },
    setClientName (client) {
      this.$data.proprietary = client.selectedObject.name
    },
    clearText () {
      this.$data.plate = ''
      this.$data.chassis = ''
      this.$data.control = ''
      this.$data.kind = ''
      this.$data.proprietary = ''
      this.$refs.autocomplete.clearValues()
      this.$refs.clientComplete.clearValues()
      console.log('cleared all entry text fields')
    },
    submitSearch () {
      console.log('searching for data with parameters:\n' + 'plate -> ' + this.$data.plate + '\nchassis -> ' +
          this.$data.chassis + '\ncontrol -> ' + this.$data.control + '\nkind -> ' + this.$data.kind + '\nproprietary ->' + this.proprietary)

      axios.get('/api/v1/equipments/search', {
        headers: {
          Authorization: localStorage.getItem('token')
        },
        params: {
          plate: this.$data.plate,
          chassis: this.$data.chassis,
          control_number: this.$data.control,
          kind: this.$data.kind,
          proprietary: this.$data.proprietary
        }
      }).then(response => {
        this.$data.vehicles = response.data.data
        this.$data.vehicles.sort(function (a, b) { return (a.plate > b.plate) ? 1 : ((b.plate > a.plate) ? -1 : 0) })
      }).then(this.showList())
    },
    showList () {
      this.$data.result = true
    },
    goToEdit (id) {
      console.log('trying to edit vehicle with id -> ' + id)
      this.$router.push({path: `/vehicles/edit/${id}`})
    },
    createQueryPdf () {
      var doc = new JsPDF()
      var j = 0
      var collumn = 0
      let token = new Date()
      // Setting font size and adding the needed number of pages
      doc.setFontSize(12)
      doc.text(55, 6, 'CONSULTA DE EQUIPAMENTOS - DATA: ' + token.getDate() + '/' + token.getUTCMonth() + '/' + token.getFullYear() + '\n\n')
      this.vehicles.forEach(function (vehicle, i) {
        if (i % 8 === 0 && i !== 0 && collumn === 1) {
          j = 0
          collumn = 0
          doc.addPage()
        } else if (i % 8 === 0 && i !== 0 && collumn === 0) {
          collumn = 1
          j = 0
        }
        doc.text(20 + (collumn * 85), 10 + (j * 35),
          '----------------------------------------------------------\n' +
          'Número de controle: ' + vehicle.control_number + '\n' +
          'Placa: ' + vehicle.plate + '\n' +
          'Chassis: ' + vehicle.chassis + '\n' +
          'Proprietário: ' + vehicle.proprietary + '\n' +
          'Tipo: ' + vehicle.kind + '\n'
        )
        j++
      })
      doc.save('consulta_equipamentos_' + token.getDate() + '_' + token.getUTCMonth() + '_' + token.getFullYear() + '.pdf')
    }
  }
}
</script>

