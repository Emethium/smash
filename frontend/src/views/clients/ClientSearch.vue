<template>
    <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Busca por Cliente</strong>
                        <div class="badge badge-info badge-pill" v-b-popover.hover="'Os campos não preenchidos não serão utilizados na busca!'" title="Atenção!">
                            <span class="fa fa-question"></span>
                        </div>
                    </div>
                    <b-form-group>
                    <label for="name">Nome:</label>
                        <b-form-input v-model="name" type="text" id="name" placeholder="Entre com o nome do cliente ou empresa"></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <label for="postal-code">CPF/CNPJ:</label>
                        <b-form-input type="text" v-model="register_code" id="register_code" placeholder="Digite o registro de pessoa física ou jurídica"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Tipo de Cliente:"
                        label-for="basicInlineCustomCheckboxes"
                        :label-cols="2"
                        :horizontal="true">
                        <b-form-checkbox-group id="basicInlineCustomCheckboxes">
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" v-model="physical_opt" class="custom-control-input" id="customInChk1" value="1" checked>
                            <label class="custom-control-label" for="customInChk1">Pessoa Física</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" v-model="juridic_opt" class="custom-control-input" id="customInChk2" value="1" checked>
                            <label class="custom-control-label" for="customInChk2">Pessoa Jurídica</label>
                        </div>
                        </b-form-checkbox-group>
                    </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="submitSearch()" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Pesquisar!</b-button>
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Apagar campos</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'clientSearch',
  data () {
    return {
      selected: [], // Must be an array reference!
      name: '',
      register_code: '',
      kind: '',
      physical_opt: 0,
      juridic_opt: 0
    }
  },
  methods: {
    click () {
      // do nothing
    },
    clearText () {
      this.$data.name = ''
      this.$data.register_code = ''
      this.$data.physical_opt = 0
      this.$data.juridic_opt = 0
      console.log('cleared all entry text fields')
    },
    submitSearch () {
      console.log('searching for data with parameters:\n' + 'name -> ' + this.$data.name + '\nregister code -> ' +
          this.$data.register_code + '\ncostumer type -> ' + this.$data.kind)
      this.evalueKind()

      axios.get('http://localhost:3000/api/v1/costumers/search', {
        params: {
          name: this.$data.name,
          register_code: this.$data.register_code,
          kind: this.$data.kind
        }
      }).then(response => {
        console.log(response)
      })
    },
    evalueKind () {
      if (this.$data.physical_opt === 0 && this.$data.juridic_opt === 1) {
        this.$data.kind = true
      } else if (this.$data.physical_opt === 1 && this.$data.juridic_opt === 0) {
        this.$data.kind = false
      } else {
        this.$data.kind = ''
      }
      console.log('kind evalued, obtaining value of -> ' + this.$data.kind)
    }
  }
}
</script>

