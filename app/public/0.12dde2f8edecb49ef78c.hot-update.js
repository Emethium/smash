webpackHotUpdate(0,{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__ = __webpack_require__(34);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__(41);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'vehicleSearch',\n  components: {\n    Autocomplete: __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default.a\n  },\n  data: function data() {\n    return {\n      autoCompleteData: [],\n      vehicles: [],\n      clients: [],\n      plate: '',\n      chassis: '',\n      control: '',\n      kind: '',\n      proprietary: '',\n      kinds: '',\n      result: false\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipment_types').then(function (response) {\n      _this.loading = true;\n      _this.$data.kinds = response.data.data;\n      _this.$data.kinds = _this.sortByKey(_this.$data.kinds, 'kind');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipments').then(function (response) {\n      _this.loading = true;\n      _this.$data.autoCompleteData = response.data.data;\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/costumers').then(function (response) {\n      _this.loading = true;\n      _this.$data.clients = response.data.data;\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n  },\n\n  methods: {\n    sortByKey: function sortByKey(array, key) {\n      return array.sort(function (a, b) {\n        var x = a[key];\n        var y = b[key];\n        return x < y ? -1 : x > y ? 1 : 0;\n      });\n    },\n    formattedDisplay: function formattedDisplay(result) {\n      return result.plate;\n    },\n    formattedDisplayChassis: function formattedDisplayChassis(result) {\n      return result.chassis;\n    },\n    formattedDisplayClient: function formattedDisplayClient(client) {\n      return client.name;\n    },\n    setAttributes: function setAttributes(vehicle) {\n      this.$data.plate = vehicle.selectedObject.plate;\n      this.$data.chassis = vehicle.selectedObject.chassis;\n      this.$data.control = vehicle.selectedObject.control_number;\n      this.$data.kind = vehicle.selectedObject.kind;\n      this.$data.proprietary = vehicle.selectedObject.proprietary;\n      this.$refs.clientComplete.display = vehicle.selectedObject.proprietary;\n      console.log(this.$data.plate + '\\n' + this.$data.chassis + '\\n' + this.$data.control + '\\n' + this.$data.kind);\n    },\n    setClientName: function setClientName(client) {\n      this.$data.proprietary = client.selectedObject.name;\n    },\n    clearText: function clearText() {\n      this.$data.plate = '';\n      this.$data.chassis = '';\n      this.$data.control = '';\n      this.$data.kind = '';\n      this.$data.proprietary = '';\n      this.$refs.autocomplete.clearValues();\n      this.$refs.clientComplete.clearValues();\n      console.log('cleared all entry text fields');\n    },\n    submitSearch: function submitSearch() {\n      var _this2 = this;\n\n      console.log('searching for data with parameters:\\n' + 'plate -> ' + this.$data.plate + '\\nchassis -> ' + this.$data.chassis + '\\ncontrol -> ' + this.$data.control + '\\nkind -> ' + this.$data.kind);\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipments/search', {\n        params: {\n          plate: this.$data.plate,\n          chassis: this.$data.chassis,\n          control_number: this.$data.control,\n          kind: this.$data.kind,\n          proprietary: this.$data.proprietary\n        }\n      }).then(function (response) {\n        _this2.$data.vehicles = response.data.data;\n        _this2.$data.vehicles.sort(function (a, b) {\n          return a.plate > b.plate ? 1 : b.plate > a.plate ? -1 : 0;\n        });\n      }).then(this.showList());\n    },\n    showList: function showList() {\n      this.$data.result = true;\n    },\n    goToEdit: function goToEdit(id) {\n      console.log('trying to edit vehicle with id -> ' + id);\n      this.$router.push({ path: '/vehicles/edit/' + id });\n    },\n    createQueryPdf: function createQueryPdf() {\n      var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf___default.a();\n      var j = 0;\n      var collumn = 0;\n      var token = new Date();\n\n      doc.setFontSize(12);\n      doc.text(55, 6, 'CONSULTA DE EQUIPAMENTOS - DATA: ' + token.getDate() + '/' + token.getUTCMonth() + '/' + token.getFullYear() + '\\n\\n');\n      this.vehicles.forEach(function (vehicle, i) {\n        if (i % 8 === 0 && i !== 0 && collumn === 1) {\n          j = 0;\n          collumn = 0;\n          doc.addPage();\n        } else if (i % 8 === 0 && i !== 0 && collumn === 0) {\n          collumn = 1;\n          j = 0;\n        }\n        doc.text(20 + collumn * 85, 10 + j * 35, '----------------------------------------------------------\\n' + 'Número de controle: ' + vehicle.control_number + '\\n' + 'Placa: ' + vehicle.plate + '\\n' + 'Chassis: ' + vehicle.chassis + '\\n' + 'Proprietário: ' + vehicle.proprietary + '\\n' + 'Tipo: ' + vehicle.kind + '\\n');\n        j++;\n      });\n      doc.save('consulta_equipamentos_' + token.getDate() + '_' + token.getUTCMonth() + '_' + token.getFullYear() + '.pdf');\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1ZlaGljbGVTZWFyY2gudnVlP2VjZWIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW4gbXhcIj5cbiAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiIGNsYXNzPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5CdXNjYSBkZSBWZcOtY3VsbyA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZSBiYWRnZS1pbmZvIGJhZGdlLXBpbGxcIiB2LWItcG9wb3Zlci5ob3Zlcj1cIidPcyBjYW1wb3MgbsOjbyBwcmVlbmNoaWRvcyBuw6NvIHNlcsOjbyB1dGlsaXphZG9zIG5hIGJ1c2NhISdcIiB0aXRsZT1cIkF0ZW7Dp8OjbyFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXF1ZXN0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+PHN0cm9uZz5QbGFjYTo8L3N0cm9uZz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxhdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXRlQ29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnNob3dOb1Jlc3VsdHM9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6c291cmNlPVwiYXV0b0NvbXBsZXRlRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLXByb3BlcnR5PVwicGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlc3VsdHMtZGlzcGxheT1cImZvcm1hdHRlZERpc3BsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkPVwic2V0QXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRyZSBjb20gYSBwbGFjYSBkbyB2ZcOtY3Vsb1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwb3N0YWwtY29kZVwiPjxzdHJvbmc+TsO6bWVybyBkbyBDaGFzc2lzOjwvc3Ryb25nPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJjaGFzc2lzXCIgdHlwZT1cInRleHRcIiBpZD1cImNoYXNzaXNcIiBwbGFjZWhvbGRlcj1cIkVudHJlIGNvbSBvIGNoYXNzaXMgZG8gdmXDrWN1bG9cIj48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicG9zdGFsLWNvZGVcIj48c3Ryb25nPk7Dum1lcm8gZGUgUGF0cmltw7RuaW8gb3UgQ29udHJvbGU6PC9zdHJvbmc+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cImNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGlkPVwiY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gbsO6bWVybyBkZSBwYXRyaW3DtG5pbyBvdSBjb250cm9sZVwiPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPjxzdHJvbmc+Tm9tZSBkbyBDbGllbnRlIG91IEVtcHJlc2EgQ29udHJhdGFudGU6PC9zdHJvbmc+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8YXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjbGllbnRDb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNsaWVudENvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93Tm9SZXN1bHRzPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnNvdXJjZT1cImNsaWVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy1wcm9wZXJ0eT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlc3VsdHMtZGlzcGxheT1cImZvcm1hdHRlZERpc3BsYXlDbGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkPVwic2V0Q2xpZW50TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRvIENsaWVudGUgb3UgRW1wcmVzYSBDb250cmF0YW50ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaXBvIGRlIGVxdWlwYW1lbnRvOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1mb3I9XCJiYXNpY1NlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWwtY29scz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhvcml6b250YWw9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCBpZD1cImtpbmRcIiB2LW1vZGVsPVwia2luZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cGxhaW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU2VsZWNpb25lIG8gdGlwbyBkbyBlcXVpcGFtZW50b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJrIGluIGtpbmRzXCI+e3trLmtpbmR9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdi1vbjpjbGljaz1cImNsZWFyVGV4dCgpXCIgdHlwZT1cInJlc2V0XCIgc2l6ZT1cInNtXCIgdmFyaWFudD1cIndhcm5pbmdcIj48aSBjbGFzcz1cImZhIGZhLWJhblwiPjwvaT4gQXBhZ2FyIGNhbXBvczwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdi1vbjpjbGljaz1cInN1Ym1pdFNlYXJjaCgpXCIgIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIiB0eXBlPVwic3VibWl0XCIgc2l6ZT1cInNtXCIgdmFyaWFudD1cInByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLXNlbmRcIj48L2k+IFBlc3F1aXNhciE8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2ItY2FyZD5cbiAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgIDwvYi1yb3c+XG4gICAgICAgIDwhLS0gSGlkZGVuIHJlc3VsdCBsaXN0IC0tPlxuICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgPGItY29sIG1kPVwiNlwiIGNsYXNzPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgPGItYWxlcnQgOnNob3c9XCJyZXN1bHRcIiB2YXJpYW50PVwiYmctZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgPGItY2FyZCBoZWFkZXItdGFnPVwiaGVhZGVyXCIgZm9vdGVyLXRhZz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT48c3Ryb25nPlJlc3VsdGFkbyBkYSBidXNjYTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHNpemU9XCJzbVwiIHYtb246Y2xpY2s9XCJjcmVhdGVRdWVyeVBkZigpXCIgc3R5bGU9XCJmbG9hdDpyaWdodFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5FeHBvcnRhciBjb25zdWx0YSBlbSBQREY8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0gIHYtbW9kZWw9XCJ2ZWhpY2xlc1wiIGhyZWY9XCIjXCIgY2xhc3M9XCJmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiIHYtZm9yPVwidiBpbiB2ZWhpY2xlc1wiIHYtb246Y2xpY2s9XCJnb1RvRWRpdCh2LmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTFcIj5QbGFjYToge3t2LnBsYXRlfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Db250cm9sZToge3t2LmNvbnRyb2xfbnVtYmVyfX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ2hhc3Npczoge3t2LmNoYXNzaXN9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRpcG8gZGUgZXF1aXBhbWVudG86IHt7di5raW5kfX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICBQcm9wcmlldMOhcmlvOiB7e3YucHJvcHJpZXRhcnl9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2ItbGlzdC1ncm91cC1pdGVtPlxuICAgICAgICAgICAgICAgIDwvYi1saXN0LWdyb3VwPlxuICAgICAgICAgICAgICA8L2ItY2FyZD5cbiAgICAgICAgICAgIDwvYi1hbGVydD5cbiAgICAgICAgICA8L2ItY29sPlxuICAgICAgICA8L2Itcm93PlxuICAgICAgICA8IS0tIEVuZCBvZiBoaWRkZW4gcmVzdWx0IGxpc3QgLS0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICd2dWVqcy1hdXRvLWNvbXBsZXRlJ1xuaW1wb3J0IEpzUERGIGZyb20gJ2pzcGRmJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd2ZWhpY2xlU2VhcmNoJyxcbiAgY29tcG9uZW50czoge1xuICAgIEF1dG9jb21wbGV0ZVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXV0b0NvbXBsZXRlRGF0YTogW10sXG4gICAgICB2ZWhpY2xlczogW10sXG4gICAgICBjbGllbnRzOiBbXSxcbiAgICAgIHBsYXRlOiAnJyxcbiAgICAgIGNoYXNzaXM6ICcnLFxuICAgICAgY29udHJvbDogJycsXG4gICAgICBraW5kOiAnJyxcbiAgICAgIHByb3ByaWV0YXJ5OiAnJyxcbiAgICAgIGtpbmRzOiAnJyxcbiAgICAgIHJlc3VsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIGF4aW9zLmdldChgL2FwaS92MS9lcXVpcG1lbnRfdHlwZXNgKS50aGVuKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuJGRhdGEua2luZHMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgdGhpcy4kZGF0YS5raW5kcyA9IHRoaXMuc29ydEJ5S2V5KHRoaXMuJGRhdGEua2luZHMsICdraW5kJylcbiAgICAgIH0pLmNhdGNoKGUgPT4geyB0aGlzLmVycm9ycy5wdXNoKGUpIH0pXG4gICAgYXhpb3MuZ2V0KGAvYXBpL3YxL2VxdWlwbWVudHNgKS50aGVuKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuJGRhdGEuYXV0b0NvbXBsZXRlRGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSkuY2F0Y2goZSA9PiB7IHRoaXMuZXJyb3JzLnB1c2goZSkgfSlcbiAgICBheGlvcy5nZXQoYC9hcGkvdjEvY29zdHVtZXJzYCkudGhlbihcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLiRkYXRhLmNsaWVudHMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgIH0pLmNhdGNoKGUgPT4geyB0aGlzLmVycm9ycy5wdXNoKGUpIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzb3J0QnlLZXkgKGFycmF5LCBrZXkpIHtcbiAgICAgIHJldHVybiBhcnJheS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciB4ID0gYVtrZXldXG4gICAgICAgIHZhciB5ID0gYltrZXldXG4gICAgICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZm9ybWF0dGVkRGlzcGxheSAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LnBsYXRlXG4gICAgfSxcbiAgICBmb3JtYXR0ZWREaXNwbGF5Q2hhc3NpcyAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmNoYXNzaXNcbiAgICB9LFxuICAgIGZvcm1hdHRlZERpc3BsYXlDbGllbnQgKGNsaWVudCkge1xuICAgICAgcmV0dXJuIGNsaWVudC5uYW1lXG4gICAgfSxcbiAgICBzZXRBdHRyaWJ1dGVzICh2ZWhpY2xlKSB7XG4gICAgICB0aGlzLiRkYXRhLnBsYXRlID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5wbGF0ZVxuICAgICAgdGhpcy4kZGF0YS5jaGFzc2lzID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5jaGFzc2lzXG4gICAgICB0aGlzLiRkYXRhLmNvbnRyb2wgPSB2ZWhpY2xlLnNlbGVjdGVkT2JqZWN0LmNvbnRyb2xfbnVtYmVyXG4gICAgICB0aGlzLiRkYXRhLmtpbmQgPSB2ZWhpY2xlLnNlbGVjdGVkT2JqZWN0LmtpbmRcbiAgICAgIHRoaXMuJGRhdGEucHJvcHJpZXRhcnkgPSB2ZWhpY2xlLnNlbGVjdGVkT2JqZWN0LnByb3ByaWV0YXJ5XG4gICAgICB0aGlzLiRyZWZzLmNsaWVudENvbXBsZXRlLmRpc3BsYXkgPSB2ZWhpY2xlLnNlbGVjdGVkT2JqZWN0LnByb3ByaWV0YXJ5XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRkYXRhLnBsYXRlICsgJ1xcbicgKyB0aGlzLiRkYXRhLmNoYXNzaXMgKyAnXFxuJyArIHRoaXMuJGRhdGEuY29udHJvbCArICdcXG4nICsgdGhpcy4kZGF0YS5raW5kKVxuICAgIH0sXG4gICAgc2V0Q2xpZW50TmFtZSAoY2xpZW50KSB7XG4gICAgICB0aGlzLiRkYXRhLnByb3ByaWV0YXJ5ID0gY2xpZW50LnNlbGVjdGVkT2JqZWN0Lm5hbWVcbiAgICB9LFxuICAgIGNsZWFyVGV4dCAoKSB7XG4gICAgICB0aGlzLiRkYXRhLnBsYXRlID0gJydcbiAgICAgIHRoaXMuJGRhdGEuY2hhc3NpcyA9ICcnXG4gICAgICB0aGlzLiRkYXRhLmNvbnRyb2wgPSAnJ1xuICAgICAgdGhpcy4kZGF0YS5raW5kID0gJydcbiAgICAgIHRoaXMuJGRhdGEucHJvcHJpZXRhcnkgPSAnJ1xuICAgICAgdGhpcy4kcmVmcy5hdXRvY29tcGxldGUuY2xlYXJWYWx1ZXMoKVxuICAgICAgdGhpcy4kcmVmcy5jbGllbnRDb21wbGV0ZS5jbGVhclZhbHVlcygpXG4gICAgICBjb25zb2xlLmxvZygnY2xlYXJlZCBhbGwgZW50cnkgdGV4dCBmaWVsZHMnKVxuICAgIH0sXG4gICAgc3VibWl0U2VhcmNoICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZWFyY2hpbmcgZm9yIGRhdGEgd2l0aCBwYXJhbWV0ZXJzOlxcbicgKyAncGxhdGUgLT4gJyArIHRoaXMuJGRhdGEucGxhdGUgKyAnXFxuY2hhc3NpcyAtPiAnICtcbiAgICAgICAgICB0aGlzLiRkYXRhLmNoYXNzaXMgKyAnXFxuY29udHJvbCAtPiAnICsgdGhpcy4kZGF0YS5jb250cm9sICsgJ1xcbmtpbmQgLT4gJyArIHRoaXMuJGRhdGEua2luZClcblxuICAgICAgYXhpb3MuZ2V0KCcvYXBpL3YxL2VxdWlwbWVudHMvc2VhcmNoJywge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwbGF0ZTogdGhpcy4kZGF0YS5wbGF0ZSxcbiAgICAgICAgICBjaGFzc2lzOiB0aGlzLiRkYXRhLmNoYXNzaXMsXG4gICAgICAgICAgY29udHJvbF9udW1iZXI6IHRoaXMuJGRhdGEuY29udHJvbCxcbiAgICAgICAgICBraW5kOiB0aGlzLiRkYXRhLmtpbmQsXG4gICAgICAgICAgcHJvcHJpZXRhcnk6IHRoaXMuJGRhdGEucHJvcHJpZXRhcnlcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuJGRhdGEudmVoaWNsZXMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgdGhpcy4kZGF0YS52ZWhpY2xlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiAoYS5wbGF0ZSA+IGIucGxhdGUpID8gMSA6ICgoYi5wbGF0ZSA+IGEucGxhdGUpID8gLTEgOiAwKSB9KVxuICAgICAgfSkudGhlbih0aGlzLnNob3dMaXN0KCkpXG4gICAgfSxcbiAgICBzaG93TGlzdCAoKSB7XG4gICAgICB0aGlzLiRkYXRhLnJlc3VsdCA9IHRydWVcbiAgICB9LFxuICAgIGdvVG9FZGl0IChpZCkge1xuICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBlZGl0IHZlaGljbGUgd2l0aCBpZCAtPiAnICsgaWQpXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDogYC92ZWhpY2xlcy9lZGl0LyR7aWR9YH0pXG4gICAgfSxcbiAgICBjcmVhdGVRdWVyeVBkZiAoKSB7XG4gICAgICB2YXIgZG9jID0gbmV3IEpzUERGKClcbiAgICAgIHZhciBqID0gMFxuICAgICAgdmFyIGNvbGx1bW4gPSAwXG4gICAgICBsZXQgdG9rZW4gPSBuZXcgRGF0ZSgpXG4gICAgICAvLyBTZXR0aW5nIGZvbnQgc2l6ZSBhbmQgYWRkaW5nIHRoZSBuZWVkZWQgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICBkb2Muc2V0Rm9udFNpemUoMTIpXG4gICAgICBkb2MudGV4dCg1NSwgNiwgJ0NPTlNVTFRBIERFIEVRVUlQQU1FTlRPUyAtIERBVEE6ICcgKyB0b2tlbi5nZXREYXRlKCkgKyAnLycgKyB0b2tlbi5nZXRVVENNb250aCgpICsgJy8nICsgdG9rZW4uZ2V0RnVsbFllYXIoKSArICdcXG5cXG4nKVxuICAgICAgdGhpcy52ZWhpY2xlcy5mb3JFYWNoKGZ1bmN0aW9uICh2ZWhpY2xlLCBpKSB7XG4gICAgICAgIGlmIChpICUgOCA9PT0gMCAmJiBpICE9PSAwICYmIGNvbGx1bW4gPT09IDEpIHtcbiAgICAgICAgICBqID0gMFxuICAgICAgICAgIGNvbGx1bW4gPSAwXG4gICAgICAgICAgZG9jLmFkZFBhZ2UoKVxuICAgICAgICB9IGVsc2UgaWYgKGkgJSA4ID09PSAwICYmIGkgIT09IDAgJiYgY29sbHVtbiA9PT0gMCkge1xuICAgICAgICAgIGNvbGx1bW4gPSAxXG4gICAgICAgICAgaiA9IDBcbiAgICAgICAgfVxuICAgICAgICBkb2MudGV4dCgyMCArIChjb2xsdW1uICogODUpLCAxMCArIChqICogMzUpLFxuICAgICAgICAgICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuJyArXG4gICAgICAgICAgJ07Dum1lcm8gZGUgY29udHJvbGU6ICcgKyB2ZWhpY2xlLmNvbnRyb2xfbnVtYmVyICsgJ1xcbicgK1xuICAgICAgICAgICdQbGFjYTogJyArIHZlaGljbGUucGxhdGUgKyAnXFxuJyArXG4gICAgICAgICAgJ0NoYXNzaXM6ICcgKyB2ZWhpY2xlLmNoYXNzaXMgKyAnXFxuJyArXG4gICAgICAgICAgJ1Byb3ByaWV0w6FyaW86ICcgKyB2ZWhpY2xlLnByb3ByaWV0YXJ5ICsgJ1xcbicgK1xuICAgICAgICAgICdUaXBvOiAnICsgdmVoaWNsZS5raW5kICsgJ1xcbidcbiAgICAgICAgKVxuICAgICAgICBqKytcbiAgICAgIH0pXG4gICAgICBkb2Muc2F2ZSgnY29uc3VsdGFfZXF1aXBhbWVudG9zXycgKyB0b2tlbi5nZXREYXRlKCkgKyAnXycgKyB0b2tlbi5nZXRVVENNb250aCgpICsgJ18nICsgdG9rZW4uZ2V0RnVsbFllYXIoKSArICcucGRmJylcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVmVoaWNsZVNlYXJjaC52dWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBbUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBOztBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFTQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQTNGQTtBQXJDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///334\n");

/***/ })

})