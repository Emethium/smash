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
                        <b-form-input type="text" id="plate" placeholder="Entre com a placa do veículo"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code"><strong>Número do Chassis:</strong></label>
                        <b-form-input type="text" id="chassis" placeholder="Digite o número do Chassis"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code"><strong>Número de Patrimônio ou Controle:</strong></label>
                        <b-form-input type="text" id="control" placeholder="Digite o número de patrimônio ou controle"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Tipo de equipamento:"
                        label-for="basicSelect"
                        :label-cols="3"
                        :horizontal="true">
                        <b-form-select id="type"
                        :plain="true"
                        :options="['Selecione o tipo do equipamento','Veículo Automotor', 'Vaso de Pressão', 'Máquina Operatriz']"
                        value="Selecione o tipo do equipamento">
                        </b-form-select>
                    </b-form-group>
                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Pesquisar!</b-button>
                        <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Apagar campos</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'vehicleSearch',
  data () {
    return {
      selected: [] // Must be an array reference!
    }
  },
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>

