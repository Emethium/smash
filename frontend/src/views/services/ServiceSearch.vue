<template>
    <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Consulta de Serviço</strong>
                        <div class="badge badge-info badge-pill" v-b-popover.hover="'Os campos não preenchidos não serão utilizados na busca!'" title="Atenção!">
                            <span class="fa fa-question"></span>
                        </div>
                    </div>
                    <b-form-group>
                    <label for="name">Código de ordem de serviço:</label>
                        <b-form-input type="text" id="order"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code">Placa do Veículo atendido:</label>
                        <b-form-input type="text" id="plate"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code">Número de Chassis do Veículo atendido:</label>
                        <b-form-input type="text" id="chassis"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code">Número de Controle ou Patrimônio do Veículo atendido:</label>
                        <b-form-input type="text" id="control"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                    <label for="name">Nome do Cliente ou Empresa contratante:</label>
                        <b-form-input type="text" id="client"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Filial responsável pelo serviço:"
                        label-for="basicSelect"
                        :label-cols="3"
                        :horizontal="false">
                        <b-form-select id="subsidiary"
                        :plain="true"
                        :options="['Selecione uma filial','Vago Engenharia #1', 'Vago Engenharia #2', 'Vago Engenharia #3']"
                        value="Selecione uma filial">
                    </b-form-select>
                    </b-form-group>
                    <b-row>
                        <b-col sm="4">
                            <b-form-group>
                            <label for="executionDate">Data de execução:</label>
                                <b-form-input type="date" id="executionDate"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4">
                            <b-form-group>
                            <label for="nextDate">Data para a próxima execução:</label>
                                <b-form-input type="date" id="nextDate"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
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
  name: 'serviceSearch',
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

