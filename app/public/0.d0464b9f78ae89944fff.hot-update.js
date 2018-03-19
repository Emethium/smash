webpackHotUpdate(0,{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__ = __webpack_require__(20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__(36);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(27);\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'vehicleSearch',\n  components: {\n    Autocomplete: __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default.a\n  },\n  data: function data() {\n    return {\n      autoCompleteData: [],\n      vehicles: [],\n      clients: [],\n      plate: '',\n      chassis: '',\n      control: '',\n      kind: '',\n      proprietary: '',\n      kinds: '',\n      result: false\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    if (!__WEBPACK_IMPORTED_MODULE_3__store__[\"a\" /* default */].state.isLogged) {\n      this.$router.push('/');\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipment_types', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.kinds = response.data.data;\n      _this.$data.kinds = _this.sortByKey(_this.$data.kinds, 'kind');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipments', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.autoCompleteData = response.data.data;\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/costumers', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.$data.clients = response.data.data;\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n  },\n\n  methods: {\n    sortByKey: function sortByKey(array, key) {\n      return array.sort(function (a, b) {\n        var x = a[key];\n        var y = b[key];\n        return x < y ? -1 : x > y ? 1 : 0;\n      });\n    },\n    formattedDisplay: function formattedDisplay(result) {\n      return result.plate;\n    },\n    formattedDisplayChassis: function formattedDisplayChassis(result) {\n      return result.chassis;\n    },\n    formattedDisplayClient: function formattedDisplayClient(client) {\n      return client.name;\n    },\n    setAttributes: function setAttributes(vehicle) {\n      this.$data.plate = vehicle.selectedObject.plate;\n      this.$data.chassis = vehicle.selectedObject.chassis;\n      this.$data.control = vehicle.selectedObject.control_number;\n      this.$data.kind = vehicle.selectedObject.kind;\n      this.$data.proprietary = vehicle.selectedObject.proprietary;\n      this.$refs.clientComplete.display = vehicle.selectedObject.proprietary;\n      console.log(this.$data.plate + '\\n' + this.$data.chassis + '\\n' + this.$data.control + '\\n' + this.$data.kind);\n    },\n    setClientName: function setClientName(client) {\n      this.$data.proprietary = client.selectedObject.name;\n    },\n    clearText: function clearText() {\n      this.$data.plate = '';\n      this.$data.chassis = '';\n      this.$data.control = '';\n      this.$data.kind = '';\n      this.$data.proprietary = '';\n      this.$refs.autocomplete.clearValues();\n      this.$refs.clientComplete.clearValues();\n      console.log('cleared all entry text fields');\n    },\n    submitSearch: function submitSearch() {\n      var _this2 = this;\n\n      console.log('searching for data with parameters:\\n' + 'plate -> ' + this.$data.plate + '\\nchassis -> ' + this.$data.chassis + '\\ncontrol -> ' + this.$data.control + '\\nkind -> ' + this.$data.kind + '\\nproprietary ->' + this.proprietary);\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipments/search', {\n        headers: {\n          Authorization: localStorage.getItem('token')\n        },\n        params: {\n          plate: this.$data.plate,\n          chassis: this.$data.chassis,\n          control_number: this.$data.control,\n          kind: this.$data.kind,\n          proprietary: this.$data.proprietary\n        }\n      }).then(function (response) {\n        _this2.$data.vehicles = response.data.data;\n        _this2.$data.vehicles.sort(function (a, b) {\n          return a.plate > b.plate ? 1 : b.plate > a.plate ? -1 : 0;\n        });\n      }).then(this.showList());\n    },\n    showList: function showList() {\n      this.$data.result = true;\n    },\n    goToEdit: function goToEdit(id) {\n      console.log('trying to edit vehicle with id -> ' + id);\n      this.$router.push({ path: '/vehicles/edit/' + id });\n    },\n    createQueryPdf: function createQueryPdf() {\n      var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf___default.a();\n      var j = 0;\n      var collumn = 0;\n      var token = new Date();\n\n      doc.setFontSize(12);\n      doc.text(55, 6, 'CONSULTA DE EQUIPAMENTOS - DATA: ' + token.getDate() + '/' + token.getUTCMonth() + '/' + token.getFullYear() + '\\n\\n');\n      this.vehicles.forEach(function (vehicle, i) {\n        if (i % 8 === 0 && i !== 0 && collumn === 1) {\n          j = 0;\n          collumn = 0;\n          doc.addPage();\n        } else if (i % 8 === 0 && i !== 0 && collumn === 0) {\n          collumn = 1;\n          j = 0;\n        }\n        doc.text(20 + collumn * 85, 10 + j * 35, '----------------------------------------------------------\\n' + 'Número de controle: ' + vehicle.control_number + '\\n' + 'Placa: ' + vehicle.plate + '\\n' + 'Chassis: ' + vehicle.chassis + '\\n' + 'Proprietário: ' + vehicle.proprietary + '\\n' + 'Tipo: ' + vehicle.kind + '\\n');\n        j++;\n      });\n      doc.save('consulta_equipamentos_' + token.getDate() + '_' + token.getUTCMonth() + '_' + token.getFullYear() + '.pdf');\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjk0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1ZlaGljbGVTZWFyY2gudnVlP2VjZWIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW4gbXhcIj5cbiAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiIGNsYXNzPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5CdXNjYSBkZSBFcXVpcGFtZW50byA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZSBiYWRnZS1pbmZvIGJhZGdlLXBpbGxcIiB2LWItcG9wb3Zlci5ob3Zlcj1cIidPcyBjYW1wb3MgbsOjbyBwcmVlbmNoaWRvcyBuw6NvIHNlcsOjbyB1dGlsaXphZG9zIG5hIGJ1c2NhISdcIiB0aXRsZT1cIkF0ZW7Dp8OjbyFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXF1ZXN0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+PHN0cm9uZz5QbGFjYTo8L3N0cm9uZz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxhdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXRlQ29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnNob3dOb1Jlc3VsdHM9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6c291cmNlPVwiYXV0b0NvbXBsZXRlRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLXByb3BlcnR5PVwicGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlc3VsdHMtZGlzcGxheT1cImZvcm1hdHRlZERpc3BsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkPVwic2V0QXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRyZSBjb20gYSBwbGFjYSBkbyBlcXVpcGFtZW50b1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwb3N0YWwtY29kZVwiPjxzdHJvbmc+TsO6bWVybyBkbyBDaGFzc2lzOjwvc3Ryb25nPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJjaGFzc2lzXCIgdHlwZT1cInRleHRcIiBpZD1cImNoYXNzaXNcIiBwbGFjZWhvbGRlcj1cIkVudHJlIGNvbSBvIGNoYXNzaXMgZG8gZXF1aXBhbWVudG9cIj48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicG9zdGFsLWNvZGVcIj48c3Ryb25nPk7Dum1lcm8gZGUgUGF0cmltw7RuaW8gb3UgQ29udHJvbGU6PC9zdHJvbmc+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cImNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGlkPVwiY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gbsO6bWVybyBkZSBwYXRyaW3DtG5pbyBvdSBjb250cm9sZVwiPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPjxzdHJvbmc+Tm9tZSBkbyBDbGllbnRlIG91IEVtcHJlc2EgQ29udHJhdGFudGU6PC9zdHJvbmc+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8YXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjbGllbnRDb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNsaWVudENvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93Tm9SZXN1bHRzPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnNvdXJjZT1cImNsaWVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy1wcm9wZXJ0eT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlc3VsdHMtZGlzcGxheT1cImZvcm1hdHRlZERpc3BsYXlDbGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkPVwic2V0Q2xpZW50TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRvIENsaWVudGUgb3UgRW1wcmVzYSBDb250cmF0YW50ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaXBvIGRlIGVxdWlwYW1lbnRvOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1mb3I9XCJiYXNpY1NlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWwtY29scz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhvcml6b250YWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCBpZD1cImtpbmRcIiB2LW1vZGVsPVwia2luZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cGxhaW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU2VsZWNpb25lIG8gdGlwbyBkbyBlcXVpcGFtZW50b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJrIGluIGtpbmRzXCI+e3trLmtpbmR9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdi1vbjpjbGljaz1cImNsZWFyVGV4dCgpXCIgdHlwZT1cInJlc2V0XCIgc2l6ZT1cInNtXCIgdmFyaWFudD1cIndhcm5pbmdcIj48aSBjbGFzcz1cImZhIGZhLWJhblwiPjwvaT4gQXBhZ2FyIGNhbXBvczwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdi1vbjpjbGljaz1cInN1Ym1pdFNlYXJjaCgpXCIgIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIiB0eXBlPVwic3VibWl0XCIgc2l6ZT1cInNtXCIgdmFyaWFudD1cInByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLXNlbmRcIj48L2k+IFBlc3F1aXNhciE8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2ItY2FyZD5cbiAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgIDwvYi1yb3c+XG4gICAgICAgIDwhLS0gSGlkZGVuIHJlc3VsdCBsaXN0IC0tPlxuICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgPGItY29sIG1kPVwiNlwiIGNsYXNzPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgPGItYWxlcnQgOnNob3c9XCJyZXN1bHRcIiB2YXJpYW50PVwiYmctZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgPGItY2FyZCBoZWFkZXItdGFnPVwiaGVhZGVyXCIgZm9vdGVyLXRhZz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT48c3Ryb25nPlJlc3VsdGFkbyBkYSBidXNjYTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHNpemU9XCJzbVwiIHYtb246Y2xpY2s9XCJjcmVhdGVRdWVyeVBkZigpXCIgc3R5bGU9XCJmbG9hdDpyaWdodFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5FeHBvcnRhciBjb25zdWx0YSBlbSBQREY8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0gIHYtbW9kZWw9XCJ2ZWhpY2xlc1wiIGhyZWY9XCIjXCIgY2xhc3M9XCJmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiIHYtZm9yPVwidiBpbiB2ZWhpY2xlc1wiIHYtb246Y2xpY2s9XCJnb1RvRWRpdCh2LmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTFcIj5QbGFjYToge3t2LnBsYXRlfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Db250cm9sZToge3t2LmNvbnRyb2xfbnVtYmVyfX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ2hhc3Npczoge3t2LmNoYXNzaXN9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRpcG8gZGUgZXF1aXBhbWVudG86IHt7di5raW5kfX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICBQcm9wcmlldMOhcmlvOiB7e3YucHJvcHJpZXRhcnl9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2ItbGlzdC1ncm91cC1pdGVtPlxuICAgICAgICAgICAgICAgIDwvYi1saXN0LWdyb3VwPlxuICAgICAgICAgICAgICA8L2ItY2FyZD5cbiAgICAgICAgICAgIDwvYi1hbGVydD5cbiAgICAgICAgICA8L2ItY29sPlxuICAgICAgICA8L2Itcm93PlxuICAgICAgICA8IS0tIEVuZCBvZiBoaWRkZW4gcmVzdWx0IGxpc3QgLS0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICd2dWVqcy1hdXRvLWNvbXBsZXRlJ1xuaW1wb3J0IEpzUERGIGZyb20gJ2pzcGRmJ1xuaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ZlaGljbGVTZWFyY2gnLFxuICBjb21wb25lbnRzOiB7XG4gICAgQXV0b2NvbXBsZXRlXG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhdXRvQ29tcGxldGVEYXRhOiBbXSxcbiAgICAgIHZlaGljbGVzOiBbXSxcbiAgICAgIGNsaWVudHM6IFtdLFxuICAgICAgcGxhdGU6ICcnLFxuICAgICAgY2hhc3NpczogJycsXG4gICAgICBjb250cm9sOiAnJyxcbiAgICAgIGtpbmQ6ICcnLFxuICAgICAgcHJvcHJpZXRhcnk6ICcnLFxuICAgICAga2luZHM6ICcnLFxuICAgICAgcmVzdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICBpZiAoIXN0b3JlLnN0YXRlLmlzTG9nZ2VkKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXG4gICAgfVxuICB9LFxuICBjcmVhdGVkICgpIHtcbiAgICBheGlvcy5nZXQoYC9hcGkvdjEvZXF1aXBtZW50X3R5cGVzYCwge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX19KS50aGVuKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuJGRhdGEua2luZHMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgdGhpcy4kZGF0YS5raW5kcyA9IHRoaXMuc29ydEJ5S2V5KHRoaXMuJGRhdGEua2luZHMsICdraW5kJylcbiAgICAgIH0pLmNhdGNoKGUgPT4geyB0aGlzLmVycm9ycy5wdXNoKGUpIH0pXG4gICAgYXhpb3MuZ2V0KGAvYXBpL3YxL2VxdWlwbWVudHNgLCB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfX0pLnRoZW4oXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy4kZGF0YS5hdXRvQ29tcGxldGVEYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICB9KS5jYXRjaChlID0+IHsgdGhpcy5lcnJvcnMucHVzaChlKSB9KVxuICAgIGF4aW9zLmdldChgL2FwaS92MS9jb3N0dW1lcnNgLCB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfX0pLnRoZW4oXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy4kZGF0YS5jbGllbnRzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICB9KS5jYXRjaChlID0+IHsgdGhpcy5lcnJvcnMucHVzaChlKSB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc29ydEJ5S2V5IChhcnJheSwga2V5KSB7XG4gICAgICByZXR1cm4gYXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgeCA9IGFba2V5XVxuICAgICAgICB2YXIgeSA9IGJba2V5XVxuICAgICAgICByZXR1cm4gKCh4IDwgeSkgPyAtMSA6ICgoeCA+IHkpID8gMSA6IDApKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGZvcm1hdHRlZERpc3BsYXkgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5wbGF0ZVxuICAgIH0sXG4gICAgZm9ybWF0dGVkRGlzcGxheUNoYXNzaXMgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5jaGFzc2lzXG4gICAgfSxcbiAgICBmb3JtYXR0ZWREaXNwbGF5Q2xpZW50IChjbGllbnQpIHtcbiAgICAgIHJldHVybiBjbGllbnQubmFtZVxuICAgIH0sXG4gICAgc2V0QXR0cmlidXRlcyAodmVoaWNsZSkge1xuICAgICAgdGhpcy4kZGF0YS5wbGF0ZSA9IHZlaGljbGUuc2VsZWN0ZWRPYmplY3QucGxhdGVcbiAgICAgIHRoaXMuJGRhdGEuY2hhc3NpcyA9IHZlaGljbGUuc2VsZWN0ZWRPYmplY3QuY2hhc3Npc1xuICAgICAgdGhpcy4kZGF0YS5jb250cm9sID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5jb250cm9sX251bWJlclxuICAgICAgdGhpcy4kZGF0YS5raW5kID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5raW5kXG4gICAgICB0aGlzLiRkYXRhLnByb3ByaWV0YXJ5ID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5wcm9wcmlldGFyeVxuICAgICAgdGhpcy4kcmVmcy5jbGllbnRDb21wbGV0ZS5kaXNwbGF5ID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5wcm9wcmlldGFyeVxuICAgICAgY29uc29sZS5sb2codGhpcy4kZGF0YS5wbGF0ZSArICdcXG4nICsgdGhpcy4kZGF0YS5jaGFzc2lzICsgJ1xcbicgKyB0aGlzLiRkYXRhLmNvbnRyb2wgKyAnXFxuJyArIHRoaXMuJGRhdGEua2luZClcbiAgICB9LFxuICAgIHNldENsaWVudE5hbWUgKGNsaWVudCkge1xuICAgICAgdGhpcy4kZGF0YS5wcm9wcmlldGFyeSA9IGNsaWVudC5zZWxlY3RlZE9iamVjdC5uYW1lXG4gICAgfSxcbiAgICBjbGVhclRleHQgKCkge1xuICAgICAgdGhpcy4kZGF0YS5wbGF0ZSA9ICcnXG4gICAgICB0aGlzLiRkYXRhLmNoYXNzaXMgPSAnJ1xuICAgICAgdGhpcy4kZGF0YS5jb250cm9sID0gJydcbiAgICAgIHRoaXMuJGRhdGEua2luZCA9ICcnXG4gICAgICB0aGlzLiRkYXRhLnByb3ByaWV0YXJ5ID0gJydcbiAgICAgIHRoaXMuJHJlZnMuYXV0b2NvbXBsZXRlLmNsZWFyVmFsdWVzKClcbiAgICAgIHRoaXMuJHJlZnMuY2xpZW50Q29tcGxldGUuY2xlYXJWYWx1ZXMoKVxuICAgICAgY29uc29sZS5sb2coJ2NsZWFyZWQgYWxsIGVudHJ5IHRleHQgZmllbGRzJylcbiAgICB9LFxuICAgIHN1Ym1pdFNlYXJjaCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2VhcmNoaW5nIGZvciBkYXRhIHdpdGggcGFyYW1ldGVyczpcXG4nICsgJ3BsYXRlIC0+ICcgKyB0aGlzLiRkYXRhLnBsYXRlICsgJ1xcbmNoYXNzaXMgLT4gJyArXG4gICAgICAgICAgdGhpcy4kZGF0YS5jaGFzc2lzICsgJ1xcbmNvbnRyb2wgLT4gJyArIHRoaXMuJGRhdGEuY29udHJvbCArICdcXG5raW5kIC0+ICcgKyB0aGlzLiRkYXRhLmtpbmQgKyAnXFxucHJvcHJpZXRhcnkgLT4nICsgdGhpcy5wcm9wcmlldGFyeSlcblxuICAgICAgYXhpb3MuZ2V0KCcvYXBpL3YxL2VxdWlwbWVudHMvc2VhcmNoJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGxhdGU6IHRoaXMuJGRhdGEucGxhdGUsXG4gICAgICAgICAgY2hhc3NpczogdGhpcy4kZGF0YS5jaGFzc2lzLFxuICAgICAgICAgIGNvbnRyb2xfbnVtYmVyOiB0aGlzLiRkYXRhLmNvbnRyb2wsXG4gICAgICAgICAga2luZDogdGhpcy4kZGF0YS5raW5kLFxuICAgICAgICAgIHByb3ByaWV0YXJ5OiB0aGlzLiRkYXRhLnByb3ByaWV0YXJ5XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLiRkYXRhLnZlaGljbGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgIHRoaXMuJGRhdGEudmVoaWNsZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gKGEucGxhdGUgPiBiLnBsYXRlKSA/IDEgOiAoKGIucGxhdGUgPiBhLnBsYXRlKSA/IC0xIDogMCkgfSlcbiAgICAgIH0pLnRoZW4odGhpcy5zaG93TGlzdCgpKVxuICAgIH0sXG4gICAgc2hvd0xpc3QgKCkge1xuICAgICAgdGhpcy4kZGF0YS5yZXN1bHQgPSB0cnVlXG4gICAgfSxcbiAgICBnb1RvRWRpdCAoaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZWRpdCB2ZWhpY2xlIHdpdGggaWQgLT4gJyArIGlkKVxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6IGAvdmVoaWNsZXMvZWRpdC8ke2lkfWB9KVxuICAgIH0sXG4gICAgY3JlYXRlUXVlcnlQZGYgKCkge1xuICAgICAgdmFyIGRvYyA9IG5ldyBKc1BERigpXG4gICAgICB2YXIgaiA9IDBcbiAgICAgIHZhciBjb2xsdW1uID0gMFxuICAgICAgbGV0IHRva2VuID0gbmV3IERhdGUoKVxuICAgICAgLy8gU2V0dGluZyBmb250IHNpemUgYW5kIGFkZGluZyB0aGUgbmVlZGVkIG51bWJlciBvZiBwYWdlc1xuICAgICAgZG9jLnNldEZvbnRTaXplKDEyKVxuICAgICAgZG9jLnRleHQoNTUsIDYsICdDT05TVUxUQSBERSBFUVVJUEFNRU5UT1MgLSBEQVRBOiAnICsgdG9rZW4uZ2V0RGF0ZSgpICsgJy8nICsgdG9rZW4uZ2V0VVRDTW9udGgoKSArICcvJyArIHRva2VuLmdldEZ1bGxZZWFyKCkgKyAnXFxuXFxuJylcbiAgICAgIHRoaXMudmVoaWNsZXMuZm9yRWFjaChmdW5jdGlvbiAodmVoaWNsZSwgaSkge1xuICAgICAgICBpZiAoaSAlIDggPT09IDAgJiYgaSAhPT0gMCAmJiBjb2xsdW1uID09PSAxKSB7XG4gICAgICAgICAgaiA9IDBcbiAgICAgICAgICBjb2xsdW1uID0gMFxuICAgICAgICAgIGRvYy5hZGRQYWdlKClcbiAgICAgICAgfSBlbHNlIGlmIChpICUgOCA9PT0gMCAmJiBpICE9PSAwICYmIGNvbGx1bW4gPT09IDApIHtcbiAgICAgICAgICBjb2xsdW1uID0gMVxuICAgICAgICAgIGogPSAwXG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMjAgKyAoY29sbHVtbiAqIDg1KSwgMTAgKyAoaiAqIDM1KSxcbiAgICAgICAgICAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbicgK1xuICAgICAgICAgICdOw7ptZXJvIGRlIGNvbnRyb2xlOiAnICsgdmVoaWNsZS5jb250cm9sX251bWJlciArICdcXG4nICtcbiAgICAgICAgICAnUGxhY2E6ICcgKyB2ZWhpY2xlLnBsYXRlICsgJ1xcbicgK1xuICAgICAgICAgICdDaGFzc2lzOiAnICsgdmVoaWNsZS5jaGFzc2lzICsgJ1xcbicgK1xuICAgICAgICAgICdQcm9wcmlldMOhcmlvOiAnICsgdmVoaWNsZS5wcm9wcmlldGFyeSArICdcXG4nICtcbiAgICAgICAgICAnVGlwbzogJyArIHZlaGljbGUua2luZCArICdcXG4nXG4gICAgICAgIClcbiAgICAgICAgaisrXG4gICAgICB9KVxuICAgICAgZG9jLnNhdmUoJ2NvbnN1bHRhX2VxdWlwYW1lbnRvc18nICsgdG9rZW4uZ2V0RGF0ZSgpICsgJ18nICsgdG9rZW4uZ2V0VVRDTW9udGgoKSArICdfJyArIHRva2VuLmdldEZ1bGxZZWFyKCkgKyAnLnBkZicpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZlaGljbGVTZWFyY2gudnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFtR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFJQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBWUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUE5RkE7QUExQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///294\n");

/***/ })

})