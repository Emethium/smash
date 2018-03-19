webpackHotUpdate(0,{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(27);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'subsidiaryEdit',\n  data: function data() {\n    return {\n      name: '',\n      social_reason: '',\n      cnpj: '',\n      email: '',\n      city: '',\n      state: '',\n      dismissSecs: 3,\n      dismissCountDown: 0,\n      showDismissibleAlert: false\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    if (!__WEBPACK_IMPORTED_MODULE_1__store__[\"a\" /* default */].state.isLogged) {\n      this.$router.push('/login');\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    var id = this.$route.params.id;\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/v1/companies/' + id, { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.name = response.data.data.name;\n      _this.social_reason = response.data.data.social_reason;\n      _this.cnpj = response.data.data.cnpj;\n      _this.email = response.data.data.email;\n      _this.city = response.data.data.city;\n      _this.state = response.data.data.state;\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n  },\n\n  methods: {\n    countDownChanged: function countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown;\n    },\n    showAlert: function showAlert() {\n      this.dismissCountDown = this.dismissSecs;\n    },\n\n    clearText: function clearText() {\n      console.log('cleared fields');\n      this.$data.name = '';\n      this.$data.social_reason = '';\n      this.$data.cnpj = '';\n      this.$data.email = '';\n      this.$data.city = '';\n      this.$data.state = '';\n    },\n    notifyUser: function notifyUser() {\n      this.showAlert();\n      this.goBack();\n    },\n    goBack: function goBack() {\n      var self = this;\n      setTimeout(function () {\n        self.$router.go(-1);\n      }, 3000);\n    },\n    goBackNow: function goBackNow() {\n      this.$router.go(-1);\n    },\n    updateData: function updateData() {\n      var _this2 = this;\n\n      var id = this.$route.params.id;\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.patch('/api/v1/companies/' + id, {\n        name: this.name,\n        social_reason: this.social_reason,\n        cnpj: this.cnpj,\n        email: this.email,\n        city: this.city,\n        state: this.state\n      }, { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n        console.log(response);\n      }).catch(function (e) {\n        _this2.errors.push(e);\n        console.log(e);\n      }).then(this.notifyUser());\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1N1YnNpZGlhcnlFZGl0LnZ1ZT8wZDcyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImFuaW1hdGVkIGZhZGVJbiBteFwiPlxuICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCIgY2xhc3M9XCJteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGItY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkVkaXRhciBkYWRvcyBkZSBmaWxpYWw8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiLWFsZXJ0IDpzaG93PVwiZGlzbWlzc0NvdW50RG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgQGRpc21pc3NlZD1cImRpc21pc3NDb3VudGRvd249MFwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBkaXNtaXNzLWNvdW50LWRvd249XCJjb3VudERvd25DaGFuZ2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIERhZG9zIGF0dWFsaXphZG9zIGNvbSBzdWNlc3NvIVxuICAgICAgICAgICAgICAgICAgICA8L2ItYWxlcnQ+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtIHZhbGlkYXRlZCBub3ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXAgbGFiZWwtZm9yPVwibmFtZVwiIGxhYmVsPVwiQWx0ZXJhciBub21lIGRlIGZhbnRhc2lhOlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbC13YXJuaW5nXCIgaWQ9XCJuYW1lXCI+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtIHZhbGlkYXRlZCBub3ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXAgbGFiZWwtZm9yPVwic29jaWFsX3JlYXNvblwiIGxhYmVsPVwiQWx0ZXJhciByYXrDo28gc29jaWFsOlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJzb2NpYWxfcmVhc29uXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbC13YXJuaW5nXCIgaWQ9XCJzb2NpYWxfcmVhc29uXCI+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtIHZhbGlkYXRlZCBub3ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXAgbGFiZWwtZm9yPVwiY25walwiIGxhYmVsPVwiQWx0ZXJhciBjbnBqOlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJjbnBqXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbC13YXJuaW5nXCIgaWQ9XCJjbnBqXCI+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtIHZhbGlkYXRlZCBub3ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXAgbGFiZWwtZm9yPVwiZW1haWxcIiBsYWJlbD1cIkFsdGVyYXIgZW1haWw6XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wtd2FybmluZ1wiIGlkPVwiZW1haWxcIj48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHNtPVwiN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+Q2lkYWRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGlkPVwiY2l0eVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIGEgY2lkYWRlIGRhIGVtcHJlc2FcIj48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgc209XCI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFc3RhZG86XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1mb3I9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsLWNvbHM9XCIxMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IGlkPVwic3RhdGVcIiB2LW1vZGVsPVwic3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFpbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiWydBQycsJ0FMJywgJ0FQJywgJ0FNJywgJ0JBJywgJ0NFJywgJ0RGJywgJ0VTJywgJ0dPJywgJ01BJywgJ01UJywgJ01TJywgJ01HJywgJ1BBJywgJ1BCJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUFInLCAnUEUnLCAnUEknLCAnUkonLCAnUk4nLCAnUlMnLCAnUk8nLCAnUlInLCAnU0MnLCAnU1AnLCAnU0UnLCAnVE8nXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdi1vbjpjbGljaz1cImdvQmFja05vdygpXCIgIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwic21cIiB2YXJpYW50PVwiZGFuZ2VyXCI+PGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT4gVm9sdGFyPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2LW9uOmNsaWNrPVwiY2xlYXJUZXh0KClcIiB0eXBlPVwicmVzZXRcIiBzaXplPVwic21cIiB2YXJpYW50PVwid2FybmluZ1wiPjxpIGNsYXNzPVwiZmEgZmEtYmFuXCI+PC9pPiBBcGFnYXIgY2FtcG9zPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2LW9uOmNsaWNrPVwidXBkYXRlRGF0YSgpXCIgc3R5bGU9XCJmbG9hdDpyaWdodFwiIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwic21cIiB2YXJpYW50PVwicHJpbWFyeVwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT4gQWx0ZXJhciBkYWRvcyE8L2ItYnV0dG9uPiAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2ItY2FyZD5cbiAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgIDwvYi1yb3c+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdzdWJzaWRpYXJ5RWRpdCcsXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHNvY2lhbF9yZWFzb246ICcnLFxuICAgICAgY25wajogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIGRpc21pc3NTZWNzOiAzLFxuICAgICAgZGlzbWlzc0NvdW50RG93bjogMCxcbiAgICAgIHNob3dEaXNtaXNzaWJsZUFsZXJ0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICBpZiAoIXN0b3JlLnN0YXRlLmlzTG9nZ2VkKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkXG4gICAgYXhpb3MuZ2V0KGAvYXBpL3YxL2NvbXBhbmllcy8ke2lkfWAsIHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9fSkudGhlbihcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLm5hbWUgPSByZXNwb25zZS5kYXRhLmRhdGEubmFtZVxuICAgICAgICB0aGlzLnNvY2lhbF9yZWFzb24gPSByZXNwb25zZS5kYXRhLmRhdGEuc29jaWFsX3JlYXNvblxuICAgICAgICB0aGlzLmNucGogPSByZXNwb25zZS5kYXRhLmRhdGEuY25walxuICAgICAgICB0aGlzLmVtYWlsID0gcmVzcG9uc2UuZGF0YS5kYXRhLmVtYWlsXG4gICAgICAgIHRoaXMuY2l0eSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5jaXR5XG4gICAgICAgIHRoaXMuc3RhdGUgPSByZXNwb25zZS5kYXRhLmRhdGEuc3RhdGVcbiAgICAgIH0pLmNhdGNoKGUgPT4geyB0aGlzLmVycm9ycy5wdXNoKGUpIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjb3VudERvd25DaGFuZ2VkIChkaXNtaXNzQ291bnREb3duKSB7XG4gICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSBkaXNtaXNzQ291bnREb3duXG4gICAgfSxcbiAgICBzaG93QWxlcnQgKCkge1xuICAgICAgdGhpcy5kaXNtaXNzQ291bnREb3duID0gdGhpcy5kaXNtaXNzU2Vjc1xuICAgIH0sXG4gICAgY2xlYXJUZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYXJlZCBmaWVsZHMnKVxuICAgICAgdGhpcy4kZGF0YS5uYW1lID0gJydcbiAgICAgIHRoaXMuJGRhdGEuc29jaWFsX3JlYXNvbiA9ICcnXG4gICAgICB0aGlzLiRkYXRhLmNucGogPSAnJ1xuICAgICAgdGhpcy4kZGF0YS5lbWFpbCA9ICcnXG4gICAgICB0aGlzLiRkYXRhLmNpdHkgPSAnJ1xuICAgICAgdGhpcy4kZGF0YS5zdGF0ZSA9ICcnXG4gICAgfSxcbiAgICBub3RpZnlVc2VyICgpIHtcbiAgICAgIHRoaXMuc2hvd0FsZXJ0KClcbiAgICAgIHRoaXMuZ29CYWNrKClcbiAgICB9LFxuICAgIGdvQmFjayAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLiRyb3V0ZXIuZ28oLTEpXG4gICAgICB9LCAzMDAwKVxuICAgIH0sXG4gICAgZ29CYWNrTm93ICgpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5nbygtMSlcbiAgICB9LFxuICAgIHVwZGF0ZURhdGEgKCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWRcbiAgICAgIGF4aW9zLnBhdGNoKGAvYXBpL3YxL2NvbXBhbmllcy8ke2lkfWAsIHtcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICBzb2NpYWxfcmVhc29uOiB0aGlzLnNvY2lhbF9yZWFzb24sXG4gICAgICAgIGNucGo6IHRoaXMuY25waixcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgIGNpdHk6IHRoaXMuY2l0eSxcbiAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGVcbiAgICAgIH0sIHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9fSkudGhlbihyZXNwb25zZSA9PiB7IGNvbnNvbGUubG9nKHJlc3BvbnNlKSB9KS5jYXRjaChlID0+IHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlKVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfSkudGhlbih0aGlzLm5vdGlmeVVzZXIoKSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gU3Vic2lkaWFyeUVkaXQudnVlIl0sIm1hcHBpbmdzIjoiOzs7OztBQTBFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUNBO0FBakNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///304\n");

/***/ })

})