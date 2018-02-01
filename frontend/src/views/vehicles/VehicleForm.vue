<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro de novo veículo </strong>
                    </div>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Placa:">
                                <b-form-input type="text" class="form-control-warning" placeholder="Digite a placa do veículo" id="plate" required></b-form-input>
                                <b-form-valid-feedback>
                                    Placa inserida! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira a placa do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Número do Chassis:">
                                <b-form-input type="text" class="form-control-warning" placeholder="Digite o número do Chassis do veículo" id="chassis" required></b-form-input>
                                <b-form-valid-feedback>
                                    Chassis inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o número do Chassis do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Número do patrimônio ou controle:">
                                <b-form-input type="text" class="form-control-warning" placeholder="Digite o número do patrimônio ou controle do veículo" id="control" required></b-form-input>
                                <b-form-valid-feedback>
                                    Número inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o número do patrimônio ou controle do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Nome do Proprietário:">
                                <b-form-input type="text" class="form-control-warning" placeholder="Digite o nome do proprietário" id="owner" required></b-form-input>
                                <b-form-valid-feedback>
                                    Proprietário inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o proprietário do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
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
                        <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Cadastrar!</b-button>
                        <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Apagar campo</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'vehicleForm',
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

