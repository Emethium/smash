<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro</strong> de Pessoa Física
                    </div>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Nome completo do Cliente:">
                                <b-form-input type="text" class="form-control-warning" placeholder="Digite o nome do cliente" id="name" required></b-form-input>
                                <b-form-valid-feedback>
                                    Nome inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Insira o nome do cliente <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <label for="postal-code">CPF:</label>
                            <b-form-input type="text" class="form-control-warning" id="register-code" placeholder="Digite o registro de pessoa física" required></b-form-input>
                            <b-form-valid-feedback>
                                CPF inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                            </b-form-valid-feedback>
                            <b-form-invalid-feedback>
                                Insira o CPF do Cliente <span class="fa fa-frown-o fa-lg mt-2"></span>
                            </b-form-invalid-feedback>
                        </b-form>
                    </b-form-group>
                    <b-form-group validated novalidate
                        label="Email:"
                        label-for="normalEmail"
                        >
                        <b-form-input id="normalEmail" class="form-control-warning" type="email" placeholder="Entre com o Email pessoal do cliente" required></b-form-input>
                        <b-form-valid-feedback>
                            Email inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                        </b-form-valid-feedback>
                        <b-form-invalid-feedback>
                            Insira o Email do Cliente <span class="fa fa-frown-o fa-lg mt-2"></span>
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Cadastrar!</b-button>
                        <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Apagar campos</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name: 'clientFormPhysical',
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

