<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro de novo serviço</strong>
                    </div>
                    <b-form-group
                        label="Escolha o tipo de serviço:"
                        label-for="basicSelect"
                        :label-cols="3">
                        <b-form-select id="type"
                        :plain="true"
                        :options="['Selecione o tipo de serviço a ser efetuado','Vistoria Mecânica DER/ES', 'Laudo Ruído', 'CSV para ANTT (LIT)', 'Relatório de Inspeção Técnica (RIT)',
                        'Laudo Opacidade', 'Laudo NR-13 Vaso de Pressão', 'Seguro de Responsabilidade Civil (RC)']"
                        value="Selecione o tipo de serviço a ser efetuado">
                        </b-form-select>
                    </b-form-group>
                    <b-form-group
                        label="Filial efetuadora do serviço:"
                        label-for="basicSelect"
                        :label-cols="3">
                        <b-form-select id="subsidiary"
                        :plain="true"
                        :options="['Selecione a filial que irá efetuar o serviço', 'Vago Engenharia #1', 'Vago Engenharia #2', 'Vago Engenharia #3']"
                        value="Selecione a filial que irá efetuar o serviço">
                        </b-form-select>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Nome do Cliente ou Empresa contratante:">
                                <b-form-input type="text" class="form-control-warning" placeholder="Digite o nome do Cliente ou Empresa" id="client" required></b-form-input>
                                <b-form-valid-feedback>
                                    Nome inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o nome do Cliente ou Empresa <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Placa do veículo:">
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
                        <b-form>
                            <b-form-group label-for="inputError2" label="Valor do serviço, em reais:">
                                <b-form-input type="number" class="form-control-warning" placeholder="Digite o valor do serviço (Ex: R$123.45)" id="control" required></b-form-input>
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
                    <b-row>
                        <b-col sm="5">
                            <b-form-group>
                                <b-form>
                                    <b-form-group label-for="inputError2" label="Data de execução do Serviço:">
                                        <b-form-input type="date" id="executionDate"></b-form-input>
                                    </b-form-group>
                                </b-form>
                            </b-form-group>
                        </b-col>
                        <b-col sm="5">
                            <b-form-group>
                                <b-form>
                                    <b-form-group label-for="inputError2" label="Data de agendamento para o próximo Serviço:">
                                        <b-form-input type="date" id="nextDate"></b-form-input>
                                    </b-form-group>
                                </b-form>
                            </b-form-group>
                        </b-col>
                        
                    </b-row>
                    
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
  name: 'serviceForm',
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

