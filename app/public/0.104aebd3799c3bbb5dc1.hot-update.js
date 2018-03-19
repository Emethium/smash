webpackHotUpdate(0,{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__ = __webpack_require__(20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__(36);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(27);\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'serviceSearch',\n  components: {\n    Autocomplete: __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default.a\n  },\n  data: function data() {\n    return {\n      kind: '',\n      company: '',\n      client: '',\n      plate: '',\n      done_at: '',\n      next_service: '',\n      day1: '',\n      day2: '',\n      month1: '',\n      month2: '',\n      year1: '',\n      year2: '',\n      kinds: [],\n      companies: [],\n      vehicles: [],\n      clients: [],\n      services: [],\n      result: false\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    if (!__WEBPACK_IMPORTED_MODULE_3__store__[\"a\" /* default */].state.isLogged) {\n      this.$router.push('/');\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/service_types', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.kinds = response.data.data;\n      _this.$data.kinds = _this.sortByKey(_this.$data.kinds, 'kind');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/companies', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.companies = response.data.data;\n      _this.$data.companies = _this.sortByKey(_this.$data.companies, 'name');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipments', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.vehicles = response.data.data;\n      _this.$data.vehicles = _this.sortByKey(_this.$data.vehicles, 'plate');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/costumers', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.clients = response.data.data;\n      _this.$data.clients = _this.sortByKey(_this.$data.clients, 'name');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n  },\n\n  methods: {\n    formattedDisplay: function formattedDisplay(result) {\n      return result.plate;\n    },\n    formattedDisplayClient: function formattedDisplayClient(result) {\n      return result.name;\n    },\n    setAttributes: function setAttributes(vehicle) {\n      this.$data.plate = vehicle.selectedObject.plate;\n      this.$data.client = vehicle.selectedObject.proprietary;\n      this.$refs.autocompleteClient.display = vehicle.selectedObject.proprietary;\n    },\n    setAttributesClient: function setAttributesClient(client) {\n      this.$data.client = client.selectedObject.name;\n    },\n    sortByKey: function sortByKey(array, key) {\n      return array.sort(function (a, b) {\n        var x = a[key];\n        var y = b[key];\n        return x < y ? -1 : x > y ? 1 : 0;\n      });\n    },\n    clearText: function clearText() {\n      console.log(this.done_at);\n      this.$data.kind = '';\n      this.$data.company = '';\n      this.$data.client = '';\n      this.$data.plate = '';\n      this.$data.done_at = '';\n      this.$data.next_service = '';\n      this.day1 = '';\n      this.day2 = '';\n      this.month1 = '';\n      this.month2 = '';\n      this.year1 = '';\n      this.year2 = '';\n      this.$refs.autocomplete.clearValues();\n      this.$refs.autocompleteClient.clearValues();\n      console.log('cleared all entry text fields');\n    },\n    showList: function showList() {\n      console.log('Im showing tha list');\n      this.$data.result = true;\n    },\n    goToEdit: function goToEdit(id) {\n      console.log('trying to edit service with id -> ' + id);\n      this.$router.push({ path: '/services/edit/' + id });\n    },\n    submitSearch: function submitSearch() {\n      var _this2 = this;\n\n      this.$data.result = false;\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/services/search', {\n        headers: {\n          Authorization: localStorage.getItem('token')\n        },\n        params: {\n          name: this.$data.kind,\n          company: this.$data.company,\n          costumer: this.$data.client,\n          equipment: this.$data.plate,\n          day1: this.$data.day1,\n          day2: this.$data.day2,\n          month1: this.$data.month1,\n          month2: this.$data.month2,\n          year1: this.$data.year1,\n          year2: this.$data.year2\n        }\n      }).then(function (response) {\n        _this2.$data.services = response.data.data;\n        console.log(_this2.services);\n      }).then(this.showList());\n    },\n    reverseString: function reverseString(s) {\n      return s.split('').reverse().join('');\n    },\n    createQueryPdf: function createQueryPdf() {\n      var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf___default.a();\n      var j = 0;\n      var collumn = 0;\n      var token = new Date();\n\n      doc.setFontSize(12);\n      doc.text(55, 6, 'CONSULTA DE SERVIÇOS - DATA: ' + token.getDate() + '/' + token.getUTCMonth() + '/' + token.getFullYear() + '\\n\\n');\n      this.services.forEach(function (service, i) {\n        if (i % 6 === 0 && i !== 0 && collumn === 1) {\n          j = 0;\n          collumn = 0;\n          doc.addPage();\n        } else if (i % 6 === 0 && i !== 0 && collumn === 0) {\n          collumn = 1;\n          j = 0;\n        }\n        var token = new Date(service.done_at);\n        var token2 = new Date(service.next_service);\n        doc.text(20 + collumn * 85, 10 + j * 45, '----------------------------------------------------------\\n' + 'Registro de serviço: ' + service.id + '\\n' + 'Tipo de serviço: ' + service.name + '\\n' + 'Cliente: ' + service.costumer + '\\n' + 'Placa: ' + service.equipment + '\\n' + 'Filial: ' + service.company + '\\n' + 'Custo: R$' + service.cost + '\\n' + 'Realizado dia: ' + token.toLocaleDateString('pt-BR') + '\\n' + 'Próximo serviço dia: ' + token2.toLocaleDateString('pt-BR') + '\\n');\n        j++;\n      });\n      doc.save('consulta_servicos_' + token.getDate() + '_' + token.getUTCMonth() + '_' + token.getFullYear() + '.pdf');\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1NlcnZpY2VTZWFyY2gudnVlP2E5ODYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW4gbXhcIj5cbiAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiIGNsYXNzPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db25zdWx0YSBkZSBTZXJ2acOnbzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhZGdlIGJhZGdlLWluZm8gYmFkZ2UtcGlsbFwiIHYtYi1wb3BvdmVyLmhvdmVyPVwiJ09zIGNhbXBvcyBuw6NvIHByZWVuY2hpZG9zIG7Do28gc2Vyw6NvIHV0aWxpemFkb3MgbmEgYnVzY2EhJ1wiIHRpdGxlPVwiQXRlbsOnw6NvIVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtcXVlc3Rpb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRXNjb2xoYSBvIHRpcG8gZGUgc2VydmnDp286XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLWZvcj1cImJhc2ljU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbC1jb2xzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aG9yaXpvbnRhbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IGlkPVwia2luZFwiIHYtbW9kZWw9XCJraW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFpbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTZWxlY2lvbmUgbyB0aXBvIGRlIHNlcnZpw6dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImsgaW4ga2luZHNcIj57e2sua2luZH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpbGlhbCByZXNwb25zw6F2ZWwgcGVsb3Mgc2VydmnDp286XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLWZvcj1cImJhc2ljU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbC1jb2xzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aG9yaXpvbnRhbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IGlkPVwiY29tcGFueVwiIHYtbW9kZWw9XCJjb21wYW55XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFpbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTZWxlY2lvbmUgYSBmaWxpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiYyBpbiBjb21wYW5pZXNcIj57e2MubmFtZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBsYXRlXCI+UGxhY2EgZG8gZXF1aXBhbWVudG86PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93Tm9SZXN1bHRzPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzb3VyY2U9XCJ2ZWhpY2xlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy1wcm9wZXJ0eT1cInBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVzdWx0cy1kaXNwbGF5PVwiZm9ybWF0dGVkRGlzcGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkPVwic2V0QXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtY2xhc3M9XCJ2ZWhpY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudHJlIGNvbSBhIHBsYWNhIGRvIGVxdWlwYW1lbnRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2F1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjbGllbnRcIj5Ob21lIGRvIENsaWVudGUgb3UgRW1wcmVzYSBjb250cmF0YW50ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImF1dG9jb21wbGV0ZUNsaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjbGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93Tm9SZXN1bHRzPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzb3VyY2U9XCJjbGllbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLXByb3BlcnR5PVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlc3VsdHMtZGlzcGxheT1cImZvcm1hdHRlZERpc3BsYXlDbGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZD1cInNldEF0dHJpYnV0ZXNDbGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LWNsYXNzPVwiY2xpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudHJlIGNvbSBvIG5vbWUgZG8gQ2xpZW50ZSBvdSBFbXByZXNhIENvbnRyYXRhbnRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2F1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZG9uZV9hdFwiPjxzdHJvbmc+IERhdGEgZGUgZXhlY3XDp8OjbyBkbyBzZXJ2acOnbzo8L3N0cm9uZz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBzbT1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF5MVwiPkRpYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCBpZD1cImRheTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRheTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWluPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIlsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgc209XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibW9udGgxXCI+TcOqczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCBpZD1cIm1vbnRoMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibW9udGgxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFpbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTJdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHNtPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInllYXIxXCI+QW5vPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IGlkPVwieWVhcjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInllYXIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFpbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbMjAxNywyMDE4LDIwMTksMjAyMCwyMDIxLDIwMjIsMjAyMywyMDI0LDIwMjUsMjAyNiwyMDI3LDIwMjgsMjAyOSwyMDMwXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRvbmVfYXRcIj48c3Ryb25nPiBEYXRhIGRlIEFnZW5kYW1lbnRvIGRvIHByw7N4aW1vIHNlcnZpw6dvOjwvc3Ryb25nPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgIDxiLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgc209XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRheTJcIj5EaWE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3QgaWQ9XCJkYXkyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXkyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFpbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzFdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHNtPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vbnRoMlwiPk3DqnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3QgaWQ9XCJtb250aDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vbnRoMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhaW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiWzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBzbT1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ5ZWFyMlwiPkFubzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCBpZD1cInllYXIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ5ZWFyMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhaW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiWzIwMTcsMjAxOCwyMDE5LDIwMjAsMjAyMSwyMDIyLDIwMjMsMjAyNCwyMDI1LDIwMjYsMjAyNywyMDI4LDIwMjksMjAzMF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2LW9uOmNsaWNrPVwiY2xlYXJUZXh0KClcIiB0eXBlPVwicmVzZXRcIiBzaXplPVwic21cIiB2YXJpYW50PVwid2FybmluZ1wiPjxpIGNsYXNzPVwiZmEgZmEtYmFuXCI+PC9pPiBBcGFnYXIgY2FtcG9zPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2LW9uOmNsaWNrPVwic3VibWl0U2VhcmNoKClcIiAgc3R5bGU9XCJmbG9hdDpyaWdodFwiIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwic21cIiB2YXJpYW50PVwicHJpbWFyeVwiPjxpIGNsYXNzPVwiZmEgZmEtc2VuZFwiPjwvaT4gUGVzcXVpc2FyITwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgPCEtLSBIaWRkZW4gcmVzdWx0IGxpc3QgLS0+XG4gICAgICAgIDxiLXJvdz5cbiAgICAgICAgICA8Yi1jb2wgbWQ9XCI4XCIgY2xhc3M9XCJteC1hdXRvXCI+XG4gICAgICAgICAgICA8Yi1hbGVydCA6c2hvdz1cInJlc3VsdFwiIHZhcmlhbnQ9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICA8Yi1jYXJkIGhlYWRlci10YWc9XCJoZWFkZXJcIiBmb290ZXItdGFnPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCI+PC9pPjxzdHJvbmc+UmVzdWx0YWRvIGRhIGJ1c2NhPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8Yi1idXR0b24gc2l6ZT1cInNtXCIgdi1vbjpjbGljaz1cImNyZWF0ZVF1ZXJ5UGRmKClcIiBzdHlsZT1cImZsb2F0OnJpZ2h0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkV4cG9ydGFyIGNvbnN1bHRhIGVtIFBERjwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGItbGlzdC1ncm91cD5cbiAgICAgICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbSAgdi1tb2RlbD1cInNlcnZpY2VzXCIgaHJlZj1cIiNcIiBjbGFzcz1cImZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCIgdi1mb3I9XCJzIGluIHNlcnZpY2VzXCIgdi1vbjpjbGljaz1cImdvVG9FZGl0KHMuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItM1wiPlRpcG8gZGUgc2VydmnDp286IHt7cy5uYW1lfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5PcmRlbToge3tzLmlkfX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRmlsaWFsIHJlc3BvbnPDoXZlbDoge3tzLmNvbXBhbnl9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIFZhbG9yOiBSJHt7cy5jb3N0fX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDbGllbnRlIG91IEVtcHJlc2EgY29udHJhdGFudGU6IHt7cy5jb3N0dW1lcn19XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUGxhY2EgZG8gZXF1aXBhbWVudG86IHt7cy5lcXVpcG1lbnR9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIERhdGEgZGUgZXhlY3XDp8Ojbzoge3tzLmRvbmVfYXR9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEFnZW5kYW1lbnRvIGRlIHByw7N4aW1vIHNlcnZpw6dvOiB7e3MubmV4dF9zZXJ2aWNlfX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9iLWxpc3QtZ3JvdXAtaXRlbT5cbiAgICAgICAgICAgICAgICA8L2ItbGlzdC1ncm91cD5cbiAgICAgICAgICAgICAgPC9iLWNhcmQ+XG4gICAgICAgICAgICA8L2ItYWxlcnQ+XG4gICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgPCEtLSBFbmQgb2YgaGlkZGVuIHJlc3VsdCBsaXN0IC0tPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAndnVlanMtYXV0by1jb21wbGV0ZSdcbmltcG9ydCBKc1BERiBmcm9tICdqc3BkZidcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdzZXJ2aWNlU2VhcmNoJyxcbiAgY29tcG9uZW50czoge1xuICAgIEF1dG9jb21wbGV0ZVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2luZDogJycsXG4gICAgICBjb21wYW55OiAnJyxcbiAgICAgIGNsaWVudDogJycsXG4gICAgICBwbGF0ZTogJycsXG4gICAgICBkb25lX2F0OiAnJyxcbiAgICAgIG5leHRfc2VydmljZTogJycsXG4gICAgICBkYXkxOiAnJyxcbiAgICAgIGRheTI6ICcnLFxuICAgICAgbW9udGgxOiAnJyxcbiAgICAgIG1vbnRoMjogJycsXG4gICAgICB5ZWFyMTogJycsXG4gICAgICB5ZWFyMjogJycsXG4gICAgICBraW5kczogW10sXG4gICAgICBjb21wYW5pZXM6IFtdLFxuICAgICAgdmVoaWNsZXM6IFtdLFxuICAgICAgY2xpZW50czogW10sXG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgICByZXN1bHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBiZWZvcmVDcmVhdGUgKCkge1xuICAgIGlmICghc3RvcmUuc3RhdGUuaXNMb2dnZWQpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIGF4aW9zLmdldChgL2FwaS92MS9zZXJ2aWNlX3R5cGVzYCwge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX19KS50aGVuKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuJGRhdGEua2luZHMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgdGhpcy4kZGF0YS5raW5kcyA9IHRoaXMuc29ydEJ5S2V5KHRoaXMuJGRhdGEua2luZHMsICdraW5kJylcbiAgICAgIH0pLmNhdGNoKGUgPT4geyB0aGlzLmVycm9ycy5wdXNoKGUpIH0pXG4gICAgYXhpb3MuZ2V0KGAvYXBpL3YxL2NvbXBhbmllc2AsIHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9fSkudGhlbihcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLiRkYXRhLmNvbXBhbmllcyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICB0aGlzLiRkYXRhLmNvbXBhbmllcyA9IHRoaXMuc29ydEJ5S2V5KHRoaXMuJGRhdGEuY29tcGFuaWVzLCAnbmFtZScpXG4gICAgICB9KS5jYXRjaChlID0+IHsgdGhpcy5lcnJvcnMucHVzaChlKSB9KVxuICAgIGF4aW9zLmdldChgL2FwaS92MS9lcXVpcG1lbnRzYCwge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX19KS50aGVuKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuJGRhdGEudmVoaWNsZXMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgdGhpcy4kZGF0YS52ZWhpY2xlcyA9IHRoaXMuc29ydEJ5S2V5KHRoaXMuJGRhdGEudmVoaWNsZXMsICdwbGF0ZScpXG4gICAgICB9KS5jYXRjaChlID0+IHsgdGhpcy5lcnJvcnMucHVzaChlKSB9KVxuICAgIGF4aW9zLmdldChgL2FwaS92MS9jb3N0dW1lcnNgLCB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfX0pLnRoZW4oXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy4kZGF0YS5jbGllbnRzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgIHRoaXMuJGRhdGEuY2xpZW50cyA9IHRoaXMuc29ydEJ5S2V5KHRoaXMuJGRhdGEuY2xpZW50cywgJ25hbWUnKVxuICAgICAgfSkuY2F0Y2goZSA9PiB7IHRoaXMuZXJyb3JzLnB1c2goZSkgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZvcm1hdHRlZERpc3BsYXkgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5wbGF0ZVxuICAgIH0sXG4gICAgZm9ybWF0dGVkRGlzcGxheUNsaWVudCAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0Lm5hbWVcbiAgICB9LFxuICAgIHNldEF0dHJpYnV0ZXMgKHZlaGljbGUpIHtcbiAgICAgIHRoaXMuJGRhdGEucGxhdGUgPSB2ZWhpY2xlLnNlbGVjdGVkT2JqZWN0LnBsYXRlXG4gICAgICB0aGlzLiRkYXRhLmNsaWVudCA9IHZlaGljbGUuc2VsZWN0ZWRPYmplY3QucHJvcHJpZXRhcnlcbiAgICAgIHRoaXMuJHJlZnMuYXV0b2NvbXBsZXRlQ2xpZW50LmRpc3BsYXkgPSB2ZWhpY2xlLnNlbGVjdGVkT2JqZWN0LnByb3ByaWV0YXJ5XG4gICAgfSxcbiAgICBzZXRBdHRyaWJ1dGVzQ2xpZW50IChjbGllbnQpIHtcbiAgICAgIHRoaXMuJGRhdGEuY2xpZW50ID0gY2xpZW50LnNlbGVjdGVkT2JqZWN0Lm5hbWVcbiAgICB9LFxuICAgIHNvcnRCeUtleSAoYXJyYXksIGtleSkge1xuICAgICAgcmV0dXJuIGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHggPSBhW2tleV1cbiAgICAgICAgdmFyIHkgPSBiW2tleV1cbiAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjbGVhclRleHQgKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5kb25lX2F0KVxuICAgICAgdGhpcy4kZGF0YS5raW5kID0gJydcbiAgICAgIHRoaXMuJGRhdGEuY29tcGFueSA9ICcnXG4gICAgICB0aGlzLiRkYXRhLmNsaWVudCA9ICcnXG4gICAgICB0aGlzLiRkYXRhLnBsYXRlID0gJydcbiAgICAgIHRoaXMuJGRhdGEuZG9uZV9hdCA9ICcnXG4gICAgICB0aGlzLiRkYXRhLm5leHRfc2VydmljZSA9ICcnXG4gICAgICB0aGlzLmRheTEgPSAnJ1xuICAgICAgdGhpcy5kYXkyID0gJydcbiAgICAgIHRoaXMubW9udGgxID0gJydcbiAgICAgIHRoaXMubW9udGgyID0gJydcbiAgICAgIHRoaXMueWVhcjEgPSAnJ1xuICAgICAgdGhpcy55ZWFyMiA9ICcnXG4gICAgICB0aGlzLiRyZWZzLmF1dG9jb21wbGV0ZS5jbGVhclZhbHVlcygpXG4gICAgICB0aGlzLiRyZWZzLmF1dG9jb21wbGV0ZUNsaWVudC5jbGVhclZhbHVlcygpXG4gICAgICBjb25zb2xlLmxvZygnY2xlYXJlZCBhbGwgZW50cnkgdGV4dCBmaWVsZHMnKVxuICAgIH0sXG4gICAgc2hvd0xpc3QgKCkge1xuICAgICAgY29uc29sZS5sb2coJ0ltIHNob3dpbmcgdGhhIGxpc3QnKVxuICAgICAgdGhpcy4kZGF0YS5yZXN1bHQgPSB0cnVlXG4gICAgfSxcbiAgICBnb1RvRWRpdCAoaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZWRpdCBzZXJ2aWNlIHdpdGggaWQgLT4gJyArIGlkKVxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6IGAvc2VydmljZXMvZWRpdC8ke2lkfWB9KVxuICAgIH0sXG4gICAgc3VibWl0U2VhcmNoICgpIHtcbiAgICAgIHRoaXMuJGRhdGEucmVzdWx0ID0gZmFsc2VcbiAgICAgIGF4aW9zLmdldCgnL2FwaS92MS9zZXJ2aWNlcy9zZWFyY2gnLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLiRkYXRhLmtpbmQsXG4gICAgICAgICAgY29tcGFueTogdGhpcy4kZGF0YS5jb21wYW55LFxuICAgICAgICAgIGNvc3R1bWVyOiB0aGlzLiRkYXRhLmNsaWVudCxcbiAgICAgICAgICBlcXVpcG1lbnQ6IHRoaXMuJGRhdGEucGxhdGUsXG4gICAgICAgICAgZGF5MTogdGhpcy4kZGF0YS5kYXkxLFxuICAgICAgICAgIGRheTI6IHRoaXMuJGRhdGEuZGF5MixcbiAgICAgICAgICBtb250aDE6IHRoaXMuJGRhdGEubW9udGgxLFxuICAgICAgICAgIG1vbnRoMjogdGhpcy4kZGF0YS5tb250aDIsXG4gICAgICAgICAgeWVhcjE6IHRoaXMuJGRhdGEueWVhcjEsXG4gICAgICAgICAgeWVhcjI6IHRoaXMuJGRhdGEueWVhcjJcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuJGRhdGEuc2VydmljZXMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXJ2aWNlcylcbiAgICAgIH0pLnRoZW4odGhpcy5zaG93TGlzdCgpKVxuICAgIH0sXG4gICAgcmV2ZXJzZVN0cmluZyAocykge1xuICAgICAgcmV0dXJuIHMuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKVxuICAgIH0sXG4gICAgY3JlYXRlUXVlcnlQZGYgKCkge1xuICAgICAgdmFyIGRvYyA9IG5ldyBKc1BERigpXG4gICAgICB2YXIgaiA9IDBcbiAgICAgIHZhciBjb2xsdW1uID0gMFxuICAgICAgbGV0IHRva2VuID0gbmV3IERhdGUoKVxuICAgICAgLy8gU2V0dGluZyBmb250IHNpemUgYW5kIGFkZGluZyB0aGUgbmVlZGVkIG51bWJlciBvZiBwYWdlc1xuICAgICAgZG9jLnNldEZvbnRTaXplKDEyKVxuICAgICAgZG9jLnRleHQoNTUsIDYsICdDT05TVUxUQSBERSBTRVJWScOHT1MgLSBEQVRBOiAnICsgdG9rZW4uZ2V0RGF0ZSgpICsgJy8nICsgdG9rZW4uZ2V0VVRDTW9udGgoKSArICcvJyArIHRva2VuLmdldEZ1bGxZZWFyKCkgKyAnXFxuXFxuJylcbiAgICAgIHRoaXMuc2VydmljZXMuZm9yRWFjaChmdW5jdGlvbiAoc2VydmljZSwgaSkge1xuICAgICAgICBpZiAoaSAlIDYgPT09IDAgJiYgaSAhPT0gMCAmJiBjb2xsdW1uID09PSAxKSB7XG4gICAgICAgICAgaiA9IDBcbiAgICAgICAgICBjb2xsdW1uID0gMFxuICAgICAgICAgIGRvYy5hZGRQYWdlKClcbiAgICAgICAgfSBlbHNlIGlmIChpICUgNiA9PT0gMCAmJiBpICE9PSAwICYmIGNvbGx1bW4gPT09IDApIHtcbiAgICAgICAgICBjb2xsdW1uID0gMVxuICAgICAgICAgIGogPSAwXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRva2VuID0gbmV3IERhdGUoc2VydmljZS5kb25lX2F0KVxuICAgICAgICB2YXIgdG9rZW4yID0gbmV3IERhdGUoc2VydmljZS5uZXh0X3NlcnZpY2UpXG4gICAgICAgIGRvYy50ZXh0KDIwICsgKGNvbGx1bW4gKiA4NSksIDEwICsgKGogKiA0NSksXG4gICAgICAgICAgJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4nICtcbiAgICAgICAgICAnUmVnaXN0cm8gZGUgc2VydmnDp286ICcgKyBzZXJ2aWNlLmlkICsgJ1xcbicgK1xuICAgICAgICAgICdUaXBvIGRlIHNlcnZpw6dvOiAnICsgc2VydmljZS5uYW1lICsgJ1xcbicgK1xuICAgICAgICAgICdDbGllbnRlOiAnICsgc2VydmljZS5jb3N0dW1lciArICdcXG4nICtcbiAgICAgICAgICAnUGxhY2E6ICcgKyBzZXJ2aWNlLmVxdWlwbWVudCArICdcXG4nICtcbiAgICAgICAgICAnRmlsaWFsOiAnICsgc2VydmljZS5jb21wYW55ICsgJ1xcbicgK1xuICAgICAgICAgICdDdXN0bzogUiQnICsgc2VydmljZS5jb3N0ICsgJ1xcbicgK1xuICAgICAgICAgICdSZWFsaXphZG8gZGlhOiAnICsgdG9rZW4udG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicpICsgJ1xcbicgK1xuICAgICAgICAgICdQcsOzeGltbyBzZXJ2acOnbyBkaWE6ICcgKyB0b2tlbjIudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicpICsgJ1xcbidcbiAgICAgICAgKVxuICAgICAgICBqKytcbiAgICAgIH0pXG4gICAgICBkb2Muc2F2ZSgnY29uc3VsdGFfc2Vydmljb3NfJyArIHRva2VuLmdldERhdGUoKSArICdfJyArIHRva2VuLmdldFVUQ01vbnRoKCkgKyAnXycgKyB0b2tlbi5nZXRGdWxsWWVhcigpICsgJy5wZGYnKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBTZXJ2aWNlU2VhcmNoLnZ1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBcUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBOzs7QUFHQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFKQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQTNHQTtBQTFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///305\n");

/***/ })

})