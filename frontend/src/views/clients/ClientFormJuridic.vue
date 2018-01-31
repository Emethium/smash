<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro</strong> de Pessoa Jurídica
                    </div>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Nome fantasia da empresa:">
                                <b-form-input type="text" class="form-control-warning" placeholder="Digite o nome da empresa" id="name" required></b-form-input>
                                <b-form-valid-feedback>
                                    Nome inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Insira o nome fantasia da empresa <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Razão Social:">
                                <b-form-input type="text" class="form-control-warning" placeholder="Digite a razão social da empresa" id="social" required></b-form-input>
                                <b-form-valid-feedback>
                                    Razão social inserida <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Insira a razão social da empresa <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <label for="postal-code">CNPJ:</label>
                            <b-form-input type="text" class="form-control-warning" id="register-code" placeholder="Digite o CNPJ:" required></b-form-input>
                            <b-form-valid-feedback>
                                CNPJ inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                            </b-form-valid-feedback>
                            <b-form-invalid-feedback>
                                Insira o CNPJ da empresa <span class="fa fa-frown-o fa-lg mt-2"></span>
                            </b-form-invalid-feedback>
                        </b-form>
                    </b-form-group>
                    <b-form-group validated novalidate
                        label="Email:"
                        label-for="normalEmail"
                        >
                        <b-form-input id="normalEmail" class="form-control-warning" type="email" placeholder="Entre com o Email institucional" required></b-form-input>
                        <b-form-valid-feedback>
                            Email inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                        </b-form-valid-feedback>
                        <b-form-invalid-feedback>
                            Insira o Email da empresa <span class="fa fa-frown-o fa-lg mt-2"></span>
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
  name: 'clientFormJuridic',
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

