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
                            <b-form-group label-for="typeName" label="Alterar nome do tipo de veículo:">
                                <b-form-input v-model="typeName" type="text" class="form-control-warning" id="typeName"></b-form-input>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Alterar nome!</b-button>
                        <b-button @click="clearText()" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Apagar campo</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'vehicleTypeEdit',
  data () {
    return {
      selected: [],
      typeName: 'Trololol'
    }
  },
  methods: {
    click () {
      // do nothing
    },
    clearText: function () {
      console.log('cleared type name text')
      this.$data.typeName = ''
    }
  }
}
</script>

