<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Edição de Veículo</strong>
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Dados atualizados com sucesso!
                    </b-alert>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="plate" label="Alterar a placa:">
                                <b-form-input v-model="plate" type="text" class="form-control-warning" id="plate"></b-form-input>
                            </b-form-group>
                        </b-form>
                        <b-form validated novalidate>
                            <b-form-group label-for="chassis" label="Alterar chassis:">
                                <b-form-input v-model="chassis" type="text" class="form-control-warning" id="chassis"></b-form-input>
                            </b-form-group>
                        </b-form>
                        <b-form validated novalidate>
                            <b-form-group label-for="control" label="Número de controle:">
                                <b-form-input v-model="control" type="text" class="form-control-warning" id="control"></b-form-input>
                            </b-form-group>
                        </b-form>
                        <b-form validated novalidate>
                            <b-form-group label-for="proprietary" label="Nome do proprietário:">
                                <b-form-input v-model="proprietary" type="text" class="form-control-warning" id="proprietary"></b-form-input>
                            </b-form-group>
                        </b-form>
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
                    </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="goBackNow()"  type="submit" size="sm" variant="danger"><i class="fa fa-close"></i> Voltar</b-button>
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campo</b-button>
                        <b-button v-on:click="updateData()" style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-edit"></i> Alterar dados!</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'vehicleEdit',
  data () {
    return {
      selected: [],
      plate: '',
      chassis: '',
      control: '',
      proprietary: '',
      kind: '',
      kinds: [],
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  created () {
    const id = this.$route.params.id
    axios.get(`/api/v1/equipment_types`).then(
      response => {
        this.loading = true
        this.$data.kinds = response.data.data
        this.$data.kinds = this.sortByKey(this.$data.kinds, 'kind')
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/equipments/${id}`).then(
      response => {
        this.$data.plate = response.data.data.plate
        this.$data.chassis = response.data.data.chassis
        this.$data.control = response.data.data.control_number
        this.$data.proprietary = response.data.data.proprietary
        this.$data.kind = response.data.data.kind
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
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    clearText: function () {
      this.$data.plate = ''
      this.$data.chassis = ''
      this.$data.control = ''
      this.$data.proprietary = ''
      this.$data.kind = ''
    },
    notifyUser () {
      this.showAlert()
      this.goBack()
    },
    goBack () {
      var self = this
      setTimeout(function () {
        self.$router.go(-1)
      }, 3000)
    },
    goBackNow () {
      this.$router.go(-1)
    },
    updateData () {
      const id = this.$route.params.id
      axios.patch(`/api/v1/equipments/${id}`, {
        name: this.$data.name,
        chassis: this.$data.chassis,
        control_number: this.$data.control,
        proprietary: this.$data.proprietary,
        kind: this.$data.kind
      }).then(response => { console.log(response) }).catch(e => {
        this.errors.push(e)
        console.log(e)
      }).then(this.notifyUser())
    }
  }
}
</script>

