<template>
    <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Busca</strong> por Cliente
                    </div>
                    <b-form-group>
                    <label for="name">Nome:</label>
                        <b-form-input type="text" id="name" placeholder="Entre com o nome do cliente ou empresa"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code">CPF/CNPJ:</label>
                        <b-form-input type="text" id="register-code" placeholder="Digite o registro de pessoa física ou jurídica"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Tipo de Cliente:"
                        label-for="basicInlineCustomCheckboxes"
                        :label-cols="2"
                        :horizontal="true">
                        <b-form-checkbox-group id="basicInlineCustomCheckboxes">
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" class="custom-control-input" id="customInChk1" value="0" checked>
                            <label class="custom-control-label" for="customInChk1">Pessoa Física</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" class="custom-control-input" id="customInChk2" value="1" checked>
                            <label class="custom-control-label" for="customInChk2">Pessoa Jurídica</label>
                        </div>
                        </b-form-checkbox-group>
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
  name: 'clientSearch',
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

