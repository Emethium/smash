webpackHotUpdate(0,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainChart_vue__ = __webpack_require__(1153);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(27);\n\n\n\n\n\n\nvar MONTH_NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'dashboard',\n  components: {\n    MainChart: __WEBPACK_IMPORTED_MODULE_0__MainChart_vue__[\"a\" /* default */]\n  },\n  data: function data() {\n    return {\n      render: false,\n      costumer_number: 0,\n      equipment_number: 0,\n      service_number: 0,\n      earnings: 0,\n      monthly_services: [],\n      month: '',\n      year: '',\n      selected: 'Month',\n      tableFields: {\n        avatar: {\n          label: '<i class=\"icon-people\"></i>',\n          class: 'text-center'\n        },\n        user: {\n          label: 'User'\n        },\n        country: {\n          label: 'Country',\n          class: 'text-center'\n        },\n        usage: {\n          label: 'Usage'\n        },\n        payment: {\n          label: 'Payment method',\n          class: 'text-center'\n        },\n        activity: {\n          label: 'Activity'\n        }\n      }\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    if (!__WEBPACK_IMPORTED_MODULE_2__store__[\"a\" /* default */].state.isLogged) {\n      this.$router.push('/');\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/v1/home', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n      _this.loading = true;\n      _this.costumer_number = response.data.data.total_costumer_number;\n      _this.equipment_number = response.data.data.total_equipment_number;\n      _this.service_number = response.data.data.total_service_number;\n      _this.monthly_services = response.data.data.monthly_services;\n      _this.calculateEarnings();\n      _this.getDate();\n    }).catch(function (e) {\n      _this.errors.push(e);\n    });\n  },\n\n  methods: {\n    variant: function variant(value) {\n      var $variant = void 0;\n      if (value <= 25) {\n        $variant = 'info';\n      } else if (value > 25 && value <= 50) {\n        $variant = 'success';\n      } else if (value > 50 && value <= 75) {\n        $variant = 'warning';\n      } else if (value > 75 && value <= 100) {\n        $variant = 'danger';\n      }\n      return $variant;\n    },\n    flag: function flag(value) {\n      return 'flag-icon flag-icon-' + value;\n    },\n    calculateEarnings: function calculateEarnings() {\n      var earn = 0;\n      this.monthly_services.forEach(function (service) {\n        earn = earn + service.cost;\n      });\n      this.earnings = earn;\n    },\n    getDate: function getDate() {\n      var d = new Date();\n      this.month = MONTH_NAMES[d.getMonth()];\n      this.year = d.getFullYear();\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0hvbWVWaWV3LnZ1ZT8yNzAzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICA8Yi1jYXJkLWdyb3VwIGNsYXNzPVwibWItNFwiPlxuICAgICAgPGItY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgxIHRleHQtbXV0ZWQgdGV4dC1yaWdodCBtYi00XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJpY29uLXBlb3BsZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoNCBtYi0wXCI+e3t0aGlzLmNvc3R1bWVyX251bWJlcn19PC9kaXY+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZFwiPkNsaWVudGVzIGNhZGFzdHJhZG9zIG5vIHNpc3RlbWE8L3NtYWxsPlxuICAgICAgICA8Yi1wcm9ncmVzcyBoZWlnaHQ9e30gY2xhc3M9XCJwcm9ncmVzcy14cyBtdC0zIG1iLTBcIiB2YXJpYW50PVwiaW5mb1wiIDp2YWx1ZT1cIjk5XCIvPlxuICAgICAgPC9iLWNhcmQ+XG4gICAgICA8Yi1jYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaDEgdGV4dC1tdXRlZCB0ZXh0LXJpZ2h0IG1iLTRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImljb24tc3BlZWRvbWV0ZXJcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaDQgbWItMFwiPnt7dGhpcy5lcXVpcG1lbnRfbnVtYmVyfX08L2Rpdj5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1ib2xkXCI+VG90YWwgZGUgZXF1aXBhbWVudG9zIGNhZGFzdHJhZG9zPC9zbWFsbD5cbiAgICAgICAgPGItcHJvZ3Jlc3MgaGVpZ2h0PXt9IGNsYXNzPVwicHJvZ3Jlc3MteHMgbXQtMyBtYi0wXCIgdmFyaWFudD1cInN1Y2Nlc3NcIiA6dmFsdWU9XCI5OVwiLz5cbiAgICAgIDwvYi1jYXJkPlxuICAgICAgPGItY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgxIHRleHQtbXV0ZWQgdGV4dC1yaWdodCBtYi00XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJpY29uLWJhc2tldC1sb2FkZWRcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaDQgbWItMFwiPnt7dGhpcy5tb250aGx5X3NlcnZpY2VzLmxlbmd0aH19PC9kaXY+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZFwiPlNlcnZpw6dvcyBhdGVuZGlkb3MgZSBwcm92aXNpb25hZG9zIG5vIG3DqnM8L3NtYWxsPlxuICAgICAgICA8Yi1wcm9ncmVzcyBoZWlnaHQ9e30gY2xhc3M9XCJwcm9ncmVzcy14cyBtdC0zIG1iLTBcIiB2YXJpYW50PVwid2FybmluZ1wiIDp2YWx1ZT1cIjk5XCIvPlxuICAgICAgPC9iLWNhcmQ+XG4gICAgICA8Yi1jYXJkPiAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoMSB0ZXh0LW11dGVkIHRleHQtcmlnaHQgbWItNFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi10cm9waHlcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaDQgbWItMFwiPnt7dGhpcy5zZXJ2aWNlX251bWJlcn19PC9kaXY+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZFwiPlRvdGFsIGRlIHNlcnZpw6dvcyByZWFsaXphZG9zPC9zbWFsbD5cbiAgICAgICAgPGItcHJvZ3Jlc3MgaGVpZ2h0PXt9IGNsYXNzPVwicHJvZ3Jlc3MteHMgbXQtMyBtYi0wXCIgOnZhbHVlPVwiOTlcIi8+XG4gICAgICA8L2ItY2FyZD5cbiAgICAgIDxiLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoMSB0ZXh0LW11dGVkIHRleHQtcmlnaHQgbWItNFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbW9uZXlcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaDQgbWItMFwiPlIkIHt7dGhpcy5lYXJuaW5nc319PC9kaXY+XG4gICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtYm9sZFwiPlByZXZpc8OjbyBkZSBhcnJlY2FkYcOnw6NvIG1lbnNhbDwvc21hbGw+XG4gICAgICAgIDxiLXByb2dyZXNzIGhlaWdodD17fSBjbGFzcz1cInByb2dyZXNzLXhzIG10LTMgbWItMFwiIHZhcmlhbnQ9XCJkYW5nZXJcIiA6dmFsdWU9XCI5OVwiLz5cbiAgICAgIDwvYi1jYXJkPlxuICAgIDwvYi1jYXJkLWdyb3VwPlxuXG4gICAgPGItY2FyZD5cbiAgICAgIDxiLXJvdz5cbiAgICAgICAgPGItY29sIHNtPVwiNVwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPkRlbW9uc3RyYXRpdm8gZGUgc2VydmnDp29zIGRvIG3DqnM8L2g0PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbCB0ZXh0LW11dGVkXCI+e3t0aGlzLm1vbnRofX0ge3t0aGlzLnllYXJ9fTwvZGl2PlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICAgIDxtYWluLWNoYXJ0IGNsYXNzPVwiY2hhcnQtd3JhcHBlclwiIHN0eWxlPVwiaGVpZ2h0OjMwMHB4O21hcmdpbi10b3A6NDBweDtcIiBoZWlnaHQ9XCIzMDBcIj48L21haW4tY2hhcnQ+XG4gICAgPC9iLWNhcmQ+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTWFpbkNoYXJ0IGZyb20gJy4vTWFpbkNoYXJ0LnZ1ZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlJ1xuXG5jb25zdCBNT05USF9OQU1FUyA9IFsnSmFuZWlybycsICdGZXZlcmVpcm8nLCAnTWFyw6dvJywgJ0FicmlsJywgJ01haW8nLCAnSnVuaG8nLFxuICAnSnVsaG8nLCAnQWdvc3RvJywgJ1NldGVtYnJvJywgJ091dHVicm8nLCAnTm92ZW1icm8nLCAnRGV6ZW1icm8nXG5dXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Rhc2hib2FyZCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNYWluQ2hhcnRcbiAgfSxcbiAgZGF0YTogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICByZW5kZXI6IGZhbHNlLFxuICAgICAgY29zdHVtZXJfbnVtYmVyOiAwLFxuICAgICAgZXF1aXBtZW50X251bWJlcjogMCxcbiAgICAgIHNlcnZpY2VfbnVtYmVyOiAwLFxuICAgICAgZWFybmluZ3M6IDAsXG4gICAgICBtb250aGx5X3NlcnZpY2VzOiBbXSxcbiAgICAgIG1vbnRoOiAnJyxcbiAgICAgIHllYXI6ICcnLFxuICAgICAgc2VsZWN0ZWQ6ICdNb250aCcsXG4gICAgICB0YWJsZUZpZWxkczoge1xuICAgICAgICBhdmF0YXI6IHtcbiAgICAgICAgICBsYWJlbDogJzxpIGNsYXNzPVwiaWNvbi1wZW9wbGVcIj48L2k+JyxcbiAgICAgICAgICBjbGFzczogJ3RleHQtY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgbGFiZWw6ICdVc2VyJ1xuICAgICAgICB9LFxuICAgICAgICBjb3VudHJ5OiB7XG4gICAgICAgICAgbGFiZWw6ICdDb3VudHJ5JyxcbiAgICAgICAgICBjbGFzczogJ3RleHQtY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICB1c2FnZToge1xuICAgICAgICAgIGxhYmVsOiAnVXNhZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHBheW1lbnQ6IHtcbiAgICAgICAgICBsYWJlbDogJ1BheW1lbnQgbWV0aG9kJyxcbiAgICAgICAgICBjbGFzczogJ3RleHQtY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICBhY3Rpdml0eToge1xuICAgICAgICAgIGxhYmVsOiAnQWN0aXZpdHknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgaWYgKCFzdG9yZS5zdGF0ZS5pc0xvZ2dlZCkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgYXhpb3MuZ2V0KGAvYXBpL3YxL2hvbWVgLCB7aGVhZGVyczoge0F1dGhvcml6YXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfX0pLnRoZW4oXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy5jb3N0dW1lcl9udW1iZXIgPSByZXNwb25zZS5kYXRhLmRhdGEudG90YWxfY29zdHVtZXJfbnVtYmVyXG4gICAgICAgIHRoaXMuZXF1aXBtZW50X251bWJlciA9IHJlc3BvbnNlLmRhdGEuZGF0YS50b3RhbF9lcXVpcG1lbnRfbnVtYmVyXG4gICAgICAgIHRoaXMuc2VydmljZV9udW1iZXIgPSByZXNwb25zZS5kYXRhLmRhdGEudG90YWxfc2VydmljZV9udW1iZXJcbiAgICAgICAgdGhpcy5tb250aGx5X3NlcnZpY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1vbnRobHlfc2VydmljZXNcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVFYXJuaW5ncygpXG4gICAgICAgIHRoaXMuZ2V0RGF0ZSgpXG4gICAgICB9KS5jYXRjaChlID0+IHsgdGhpcy5lcnJvcnMucHVzaChlKSB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdmFyaWFudCAodmFsdWUpIHtcbiAgICAgIGxldCAkdmFyaWFudFxuICAgICAgaWYgKHZhbHVlIDw9IDI1KSB7XG4gICAgICAgICR2YXJpYW50ID0gJ2luZm8nXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID4gMjUgJiYgdmFsdWUgPD0gNTApIHtcbiAgICAgICAgJHZhcmlhbnQgPSAnc3VjY2VzcydcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiA1MCAmJiB2YWx1ZSA8PSA3NSkge1xuICAgICAgICAkdmFyaWFudCA9ICd3YXJuaW5nJ1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IDc1ICYmIHZhbHVlIDw9IDEwMCkge1xuICAgICAgICAkdmFyaWFudCA9ICdkYW5nZXInXG4gICAgICB9XG4gICAgICByZXR1cm4gJHZhcmlhbnRcbiAgICB9LFxuICAgIGZsYWcgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gJ2ZsYWctaWNvbiBmbGFnLWljb24tJyArIHZhbHVlXG4gICAgfSxcbiAgICBjYWxjdWxhdGVFYXJuaW5ncyAoKSB7XG4gICAgICB2YXIgZWFybiA9IDBcbiAgICAgIHRoaXMubW9udGhseV9zZXJ2aWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gICAgICAgIGVhcm4gPSBlYXJuICsgc2VydmljZS5jb3N0XG4gICAgICB9KVxuICAgICAgdGhpcy5lYXJuaW5ncyA9IGVhcm5cbiAgICB9LFxuICAgIGdldERhdGUgKCkge1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKClcbiAgICAgIHRoaXMubW9udGggPSBNT05USF9OQU1FU1tkLmdldE1vbnRoKCldXG4gICAgICB0aGlzLnllYXIgPSBkLmdldEZ1bGxZZWFyKClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhvbWVWaWV3LnZ1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBeURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7O0FBRUE7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUZBOztBQUtBO0FBREE7O0FBSUE7QUFDQTtBQUZBOztBQUtBO0FBREE7O0FBSUE7QUFDQTtBQUZBOztBQUtBO0FBREE7QUFuQkE7QUFWQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQTFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///283\n");

/***/ })

})