webpackHotUpdate(0,{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__ = __webpack_require__(34);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__(41);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'vehicleSearch',\n  components: {\n    Autocomplete: __WEBPACK_IMPORTED_MODULE_1_vuejs_auto_complete___default.a\n  },\n  data: function data() {\n    return {\n      autoCompleteData: [],\n      vehicles: [],\n      clients: [],\n      plate: '',\n      chassis: '',\n      control: '',\n      kind: '',\n      proprietary: '',\n      kinds: '',\n      result: false\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipment_types').then(function (response) {\n      _this.loading = true;\n      _this.$data.kinds = response.data.data;\n      _this.$data.kinds = _this.sortByKey(_this.$data.kinds, 'kind');\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipments').then(function (response) {\n      _this.loading = true;\n      _this.$data.autoCompleteData = response.data.data;\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/costumers').then(function (response) {\n      _this.loading = true;\n      _this.$data.clients = response.data.data;\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n  },\n\n  methods: {\n    sortByKey: function sortByKey(array, key) {\n      return array.sort(function (a, b) {\n        var x = a[key];\n        var y = b[key];\n        return x < y ? -1 : x > y ? 1 : 0;\n      });\n    },\n    formattedDisplay: function formattedDisplay(result) {\n      return result.plate;\n    },\n    formattedDisplayChassis: function formattedDisplayChassis(result) {\n      return result.chassis;\n    },\n    setAttributes: function setAttributes(vehicle) {\n      this.$data.plate = vehicle.selectedObject.plate;\n      this.$data.chassis = vehicle.selectedObject.chassis;\n      this.$data.control = vehicle.selectedObject.control_number;\n      this.$data.kind = vehicle.selectedObject.kind;\n      this.$data.proprietary = vehicle.selectedObject.proprietary;\n      console.log(this.$data.plate + '\\n' + this.$data.chassis + '\\n' + this.$data.control + '\\n' + this.$data.kind);\n    },\n    clearText: function clearText() {\n      this.$data.plate = '';\n      this.$data.chassis = '';\n      this.$data.control = '';\n      this.$data.kind = '';\n      this.$data.proprietary = '';\n      this.$refs.autocomplete.clearValues();\n      console.log('cleared all entry text fields');\n    },\n    submitSearch: function submitSearch() {\n      var _this2 = this;\n\n      console.log('searching for data with parameters:\\n' + 'plate -> ' + this.$data.plate + '\\nchassis -> ' + this.$data.chassis + '\\ncontrol -> ' + this.$data.control + '\\nkind -> ' + this.$data.kind);\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/equipments/search', {\n        params: {\n          plate: this.$data.plate,\n          chassis: this.$data.chassis,\n          control_number: this.$data.control,\n          kind: this.$data.kind,\n          proprietary: this.$data.proprietary\n        }\n      }).then(function (response) {\n        _this2.$data.vehicles = response.data.data;\n        _this2.$data.vehicles.sort(function (a, b) {\n          return a.plate > b.plate ? 1 : b.plate > a.plate ? -1 : 0;\n        });\n      }).then(this.showList());\n    },\n    showList: function showList() {\n      this.$data.result = true;\n    },\n    goToEdit: function goToEdit(id) {\n      console.log('trying to edit vehicle with id -> ' + id);\n      this.$router.push({ path: '/vehicles/edit/' + id });\n    },\n    createQueryPdf: function createQueryPdf() {\n      var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf___default.a();\n      var j = 0;\n      var collumn = 0;\n      var token = new Date();\n\n      doc.setFontSize(12);\n      doc.text(55, 6, 'CONSULTA DE EQUIPAMENTOS - DATA: ' + token.getDate() + '/' + token.getUTCMonth() + '/' + token.getFullYear() + '\\n\\n');\n      this.vehicles.forEach(function (vehicle, i) {\n        if (i % 8 === 0 && i !== 0 && collumn === 1) {\n          j = 0;\n          collumn = 0;\n          doc.addPage();\n        } else if (i % 8 === 0 && i !== 0 && collumn === 0) {\n          collumn = 1;\n          j = 0;\n        }\n        doc.text(20 + collumn * 85, 10 + j * 35, '----------------------------------------------------------\\n' + 'Número de controle: ' + vehicle.control_number + '\\n' + 'Placa: ' + vehicle.plate + '\\n' + 'Chassis: ' + vehicle.chassis + '\\n' + 'Proprietário: ' + vehicle.proprietary + '\\n' + 'Tipo: ' + vehicle.kind + '\\n');\n        j++;\n      });\n      doc.save('consulta_equipamentos_' + token.getDate() + '_' + token.getUTCMonth() + '_' + token.getFullYear() + '.pdf');\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1ZlaGljbGVTZWFyY2gudnVlP2VjZWIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW4gbXhcIj5cbiAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiIGNsYXNzPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxiLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5CdXNjYSBkZSBWZcOtY3VsbyA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZSBiYWRnZS1pbmZvIGJhZGdlLXBpbGxcIiB2LWItcG9wb3Zlci5ob3Zlcj1cIidPcyBjYW1wb3MgbsOjbyBwcmVlbmNoaWRvcyBuw6NvIHNlcsOjbyB1dGlsaXphZG9zIG5hIGJ1c2NhISdcIiB0aXRsZT1cIkF0ZW7Dp8OjbyFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXF1ZXN0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+PHN0cm9uZz5QbGFjYTo8L3N0cm9uZz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxhdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXRlQ29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnNob3dOb1Jlc3VsdHM9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6c291cmNlPVwiYXV0b0NvbXBsZXRlRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLXByb3BlcnR5PVwicGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlc3VsdHMtZGlzcGxheT1cImZvcm1hdHRlZERpc3BsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkPVwic2V0QXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1jbGFzcz1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRyZSBjb20gYSBwbGFjYSBkbyB2ZcOtY3Vsb1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwb3N0YWwtY29kZVwiPjxzdHJvbmc+TsO6bWVybyBkbyBDaGFzc2lzOjwvc3Ryb25nPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJjaGFzc2lzXCIgdHlwZT1cInRleHRcIiBpZD1cImNoYXNzaXNcIiBwbGFjZWhvbGRlcj1cIkVudHJlIGNvbSBvIGNoYXNzaXMgZG8gdmXDrWN1bG9cIj48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicG9zdGFsLWNvZGVcIj48c3Ryb25nPk7Dum1lcm8gZGUgUGF0cmltw7RuaW8gb3UgQ29udHJvbGU6PC9zdHJvbmc+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cImNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGlkPVwiY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gbsO6bWVybyBkZSBwYXRyaW3DtG5pbyBvdSBjb250cm9sZVwiPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9wcmlldGFyeVwiPjxzdHJvbmc+Tm9tZSBkbyBwcm9wcmlldMOhcmlvOjwvc3Ryb25nPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJwcm9wcmlldGFyeVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9wcmlldGFyeVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gbm9tZSBkbyBwcm9wcmlldMOhcmlvXCI+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpcG8gZGUgZXF1aXBhbWVudG86XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLWZvcj1cImJhc2ljU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbC1jb2xzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aG9yaXpvbnRhbD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IGlkPVwia2luZFwiIHYtbW9kZWw9XCJraW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFpbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTZWxlY2lvbmUgbyB0aXBvIGRvIGVxdWlwYW1lbnRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImsgaW4ga2luZHNcIj57e2sua2luZH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2LW9uOmNsaWNrPVwiY2xlYXJUZXh0KClcIiB0eXBlPVwicmVzZXRcIiBzaXplPVwic21cIiB2YXJpYW50PVwid2FybmluZ1wiPjxpIGNsYXNzPVwiZmEgZmEtYmFuXCI+PC9pPiBBcGFnYXIgY2FtcG9zPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2LW9uOmNsaWNrPVwic3VibWl0U2VhcmNoKClcIiAgc3R5bGU9XCJmbG9hdDpyaWdodFwiIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwic21cIiB2YXJpYW50PVwicHJpbWFyeVwiPjxpIGNsYXNzPVwiZmEgZmEtc2VuZFwiPjwvaT4gUGVzcXVpc2FyITwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgPCEtLSBIaWRkZW4gcmVzdWx0IGxpc3QgLS0+XG4gICAgICAgIDxiLXJvdz5cbiAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCIgY2xhc3M9XCJteC1hdXRvXCI+XG4gICAgICAgICAgICA8Yi1hbGVydCA6c2hvdz1cInJlc3VsdFwiIHZhcmlhbnQ9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICA8Yi1jYXJkIGhlYWRlci10YWc9XCJoZWFkZXJcIiBmb290ZXItdGFnPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbGlnbi1qdXN0aWZ5XCI+PC9pPjxzdHJvbmc+UmVzdWx0YWRvIGRhIGJ1c2NhPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8Yi1idXR0b24gc2l6ZT1cInNtXCIgdi1vbjpjbGljaz1cImNyZWF0ZVF1ZXJ5UGRmKClcIiBzdHlsZT1cImZsb2F0OnJpZ2h0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkV4cG9ydGFyIGNvbnN1bHRhIGVtIFBERjwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGItbGlzdC1ncm91cD5cbiAgICAgICAgICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbSAgdi1tb2RlbD1cInZlaGljbGVzXCIgaHJlZj1cIiNcIiBjbGFzcz1cImZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCIgdi1mb3I9XCJ2IGluIHZlaGljbGVzXCIgdi1vbjpjbGljaz1cImdvVG9FZGl0KHYuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMVwiPlBsYWNhOiB7e3YucGxhdGV9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkNvbnRyb2xlOiB7e3YuY29udHJvbF9udW1iZXJ9fTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDaGFzc2lzOiB7e3YuY2hhc3Npc319XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGlwbyBkZSBlcXVpcGFtZW50bzoge3t2LmtpbmR9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFByb3ByaWV0w6FyaW86IHt7di5wcm9wcmlldGFyeX19XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvYi1saXN0LWdyb3VwLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9iLWxpc3QtZ3JvdXA+XG4gICAgICAgICAgICAgIDwvYi1jYXJkPlxuICAgICAgICAgICAgPC9iLWFsZXJ0PlxuICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgIDwvYi1yb3c+XG4gICAgICAgIDwhLS0gRW5kIG9mIGhpZGRlbiByZXN1bHQgbGlzdCAtLT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJ3Z1ZWpzLWF1dG8tY29tcGxldGUnXG5pbXBvcnQgSnNQREYgZnJvbSAnanNwZGYnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ZlaGljbGVTZWFyY2gnLFxuICBjb21wb25lbnRzOiB7XG4gICAgQXV0b2NvbXBsZXRlXG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhdXRvQ29tcGxldGVEYXRhOiBbXSxcbiAgICAgIHZlaGljbGVzOiBbXSxcbiAgICAgIGNsaWVudHM6IFtdLFxuICAgICAgcGxhdGU6ICcnLFxuICAgICAgY2hhc3NpczogJycsXG4gICAgICBjb250cm9sOiAnJyxcbiAgICAgIGtpbmQ6ICcnLFxuICAgICAgcHJvcHJpZXRhcnk6ICcnLFxuICAgICAga2luZHM6ICcnLFxuICAgICAgcmVzdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgYXhpb3MuZ2V0KGAvYXBpL3YxL2VxdWlwbWVudF90eXBlc2ApLnRoZW4oXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy4kZGF0YS5raW5kcyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICB0aGlzLiRkYXRhLmtpbmRzID0gdGhpcy5zb3J0QnlLZXkodGhpcy4kZGF0YS5raW5kcywgJ2tpbmQnKVxuICAgICAgfSkuY2F0Y2goZSA9PiB7IHRoaXMuZXJyb3JzLnB1c2goZSkgfSlcbiAgICBheGlvcy5nZXQoYC9hcGkvdjEvZXF1aXBtZW50c2ApLnRoZW4oXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy4kZGF0YS5hdXRvQ29tcGxldGVEYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICB9KS5jYXRjaChlID0+IHsgdGhpcy5lcnJvcnMucHVzaChlKSB9KVxuICAgIGF4aW9zLmdldChgL2FwaS92MS9jb3N0dW1lcnNgKS50aGVuKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuJGRhdGEuY2xpZW50cyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSkuY2F0Y2goZSA9PiB7IHRoaXMuZXJyb3JzLnB1c2goZSkgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNvcnRCeUtleSAoYXJyYXksIGtleSkge1xuICAgICAgcmV0dXJuIGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHggPSBhW2tleV1cbiAgICAgICAgdmFyIHkgPSBiW2tleV1cbiAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBmb3JtYXR0ZWREaXNwbGF5IChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQucGxhdGVcbiAgICB9LFxuICAgIGZvcm1hdHRlZERpc3BsYXlDaGFzc2lzIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuY2hhc3Npc1xuICAgIH0sXG4gICAgc2V0QXR0cmlidXRlcyAodmVoaWNsZSkge1xuICAgICAgdGhpcy4kZGF0YS5wbGF0ZSA9IHZlaGljbGUuc2VsZWN0ZWRPYmplY3QucGxhdGVcbiAgICAgIHRoaXMuJGRhdGEuY2hhc3NpcyA9IHZlaGljbGUuc2VsZWN0ZWRPYmplY3QuY2hhc3Npc1xuICAgICAgdGhpcy4kZGF0YS5jb250cm9sID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5jb250cm9sX251bWJlclxuICAgICAgdGhpcy4kZGF0YS5raW5kID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5raW5kXG4gICAgICB0aGlzLiRkYXRhLnByb3ByaWV0YXJ5ID0gdmVoaWNsZS5zZWxlY3RlZE9iamVjdC5wcm9wcmlldGFyeVxuICAgICAgY29uc29sZS5sb2codGhpcy4kZGF0YS5wbGF0ZSArICdcXG4nICsgdGhpcy4kZGF0YS5jaGFzc2lzICsgJ1xcbicgKyB0aGlzLiRkYXRhLmNvbnRyb2wgKyAnXFxuJyArIHRoaXMuJGRhdGEua2luZClcbiAgICB9LFxuICAgIGNsZWFyVGV4dCAoKSB7XG4gICAgICB0aGlzLiRkYXRhLnBsYXRlID0gJydcbiAgICAgIHRoaXMuJGRhdGEuY2hhc3NpcyA9ICcnXG4gICAgICB0aGlzLiRkYXRhLmNvbnRyb2wgPSAnJ1xuICAgICAgdGhpcy4kZGF0YS5raW5kID0gJydcbiAgICAgIHRoaXMuJGRhdGEucHJvcHJpZXRhcnkgPSAnJ1xuICAgICAgdGhpcy4kcmVmcy5hdXRvY29tcGxldGUuY2xlYXJWYWx1ZXMoKVxuICAgICAgY29uc29sZS5sb2coJ2NsZWFyZWQgYWxsIGVudHJ5IHRleHQgZmllbGRzJylcbiAgICB9LFxuICAgIHN1Ym1pdFNlYXJjaCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2VhcmNoaW5nIGZvciBkYXRhIHdpdGggcGFyYW1ldGVyczpcXG4nICsgJ3BsYXRlIC0+ICcgKyB0aGlzLiRkYXRhLnBsYXRlICsgJ1xcbmNoYXNzaXMgLT4gJyArXG4gICAgICAgICAgdGhpcy4kZGF0YS5jaGFzc2lzICsgJ1xcbmNvbnRyb2wgLT4gJyArIHRoaXMuJGRhdGEuY29udHJvbCArICdcXG5raW5kIC0+ICcgKyB0aGlzLiRkYXRhLmtpbmQpXG5cbiAgICAgIGF4aW9zLmdldCgnL2FwaS92MS9lcXVpcG1lbnRzL3NlYXJjaCcsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGxhdGU6IHRoaXMuJGRhdGEucGxhdGUsXG4gICAgICAgICAgY2hhc3NpczogdGhpcy4kZGF0YS5jaGFzc2lzLFxuICAgICAgICAgIGNvbnRyb2xfbnVtYmVyOiB0aGlzLiRkYXRhLmNvbnRyb2wsXG4gICAgICAgICAga2luZDogdGhpcy4kZGF0YS5raW5kLFxuICAgICAgICAgIHByb3ByaWV0YXJ5OiB0aGlzLiRkYXRhLnByb3ByaWV0YXJ5XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLiRkYXRhLnZlaGljbGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgIHRoaXMuJGRhdGEudmVoaWNsZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gKGEucGxhdGUgPiBiLnBsYXRlKSA/IDEgOiAoKGIucGxhdGUgPiBhLnBsYXRlKSA/IC0xIDogMCkgfSlcbiAgICAgIH0pLnRoZW4odGhpcy5zaG93TGlzdCgpKVxuICAgIH0sXG4gICAgc2hvd0xpc3QgKCkge1xuICAgICAgdGhpcy4kZGF0YS5yZXN1bHQgPSB0cnVlXG4gICAgfSxcbiAgICBnb1RvRWRpdCAoaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZWRpdCB2ZWhpY2xlIHdpdGggaWQgLT4gJyArIGlkKVxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6IGAvdmVoaWNsZXMvZWRpdC8ke2lkfWB9KVxuICAgIH0sXG4gICAgY3JlYXRlUXVlcnlQZGYgKCkge1xuICAgICAgdmFyIGRvYyA9IG5ldyBKc1BERigpXG4gICAgICB2YXIgaiA9IDBcbiAgICAgIHZhciBjb2xsdW1uID0gMFxuICAgICAgbGV0IHRva2VuID0gbmV3IERhdGUoKVxuICAgICAgLy8gU2V0dGluZyBmb250IHNpemUgYW5kIGFkZGluZyB0aGUgbmVlZGVkIG51bWJlciBvZiBwYWdlc1xuICAgICAgZG9jLnNldEZvbnRTaXplKDEyKVxuICAgICAgZG9jLnRleHQoNTUsIDYsICdDT05TVUxUQSBERSBFUVVJUEFNRU5UT1MgLSBEQVRBOiAnICsgdG9rZW4uZ2V0RGF0ZSgpICsgJy8nICsgdG9rZW4uZ2V0VVRDTW9udGgoKSArICcvJyArIHRva2VuLmdldEZ1bGxZZWFyKCkgKyAnXFxuXFxuJylcbiAgICAgIHRoaXMudmVoaWNsZXMuZm9yRWFjaChmdW5jdGlvbiAodmVoaWNsZSwgaSkge1xuICAgICAgICBpZiAoaSAlIDggPT09IDAgJiYgaSAhPT0gMCAmJiBjb2xsdW1uID09PSAxKSB7XG4gICAgICAgICAgaiA9IDBcbiAgICAgICAgICBjb2xsdW1uID0gMFxuICAgICAgICAgIGRvYy5hZGRQYWdlKClcbiAgICAgICAgfSBlbHNlIGlmIChpICUgOCA9PT0gMCAmJiBpICE9PSAwICYmIGNvbGx1bW4gPT09IDApIHtcbiAgICAgICAgICBjb2xsdW1uID0gMVxuICAgICAgICAgIGogPSAwXG4gICAgICAgIH1cbiAgICAgICAgZG9jLnRleHQoMjAgKyAoY29sbHVtbiAqIDg1KSwgMTAgKyAoaiAqIDM1KSxcbiAgICAgICAgICAnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbicgK1xuICAgICAgICAgICdOw7ptZXJvIGRlIGNvbnRyb2xlOiAnICsgdmVoaWNsZS5jb250cm9sX251bWJlciArICdcXG4nICtcbiAgICAgICAgICAnUGxhY2E6ICcgKyB2ZWhpY2xlLnBsYXRlICsgJ1xcbicgK1xuICAgICAgICAgICdDaGFzc2lzOiAnICsgdmVoaWNsZS5jaGFzc2lzICsgJ1xcbicgK1xuICAgICAgICAgICdQcm9wcmlldMOhcmlvOiAnICsgdmVoaWNsZS5wcm9wcmlldGFyeSArICdcXG4nICtcbiAgICAgICAgICAnVGlwbzogJyArIHZlaGljbGUua2luZCArICdcXG4nXG4gICAgICAgIClcbiAgICAgICAgaisrXG4gICAgICB9KVxuICAgICAgZG9jLnNhdmUoJ2NvbnN1bHRhX2VxdWlwYW1lbnRvc18nICsgdG9rZW4uZ2V0RGF0ZSgpICsgJ18nICsgdG9rZW4uZ2V0VVRDTW9udGgoKSArICdfJyArIHRva2VuLmdldEZ1bGxZZWFyKCkgKyAnLnBkZicpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZlaGljbGVTZWFyY2gudnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQXlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTs7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFTQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQW5GQTtBQXJDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///334\n");

/***/ })

})