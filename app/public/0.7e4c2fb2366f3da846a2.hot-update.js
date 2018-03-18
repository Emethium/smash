webpackHotUpdate(0,{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1271);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(1274);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_chartjs__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);\n\n\n\n\n\n\nvar brandSuccess = '#4dbd74';\nvar brandInfo = '#63c2de';\n\n\nfunction convertHex(hex, opacity) {\n  hex = hex.replace('#', '');\n  var r = parseInt(hex.substring(0, 2), 16);\n  var g = parseInt(hex.substring(2, 4), 16);\n  var b = parseInt(hex.substring(4, 6), 16);\n\n  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';\n  return result;\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  extends: __WEBPACK_IMPORTED_MODULE_2_vue_chartjs__[\"c\" /* Line */],\n  props: ['height'],\n  mounted: function mounted() {\n    var _this = this;\n\n    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {\n      var services, data1, data2;\n      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              services = [];\n              data1 = new Array(31).fill(0);\n              data2 = new Array(31).fill(0);\n              _context.next = 5;\n              return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('/api/v1/home', { headers: { Authorization: localStorage.getItem('token') } }).then(function (response) {\n                services = response.data.data.monthly_services;\n                services.forEach(function (service) {\n                  var tokenDate = new Date(service.done_at);\n                  var day1 = tokenDate.getUTCDate();\n                  tokenDate = new Date(service.next_service);\n                  var day2 = tokenDate.getUTCDate();\n\n                  data1[day1 - 1] = data1[day1 - 1] + 1;\n                  data2[day2 - 1] = data2[day2 - 1] + 1;\n                });\n              }).catch(function (e) {\n                _this.errors.push(e);\n              });\n\n            case 5:\n              _this.renderChart({\n                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],\n                datasets: [{\n                  label: 'Serviços atendidos',\n                  backgroundColor: convertHex(brandInfo, 10),\n                  borderColor: brandSuccess,\n                  pointHoverBackgroundColor: '#fff',\n                  borderWidth: 2,\n                  data: data1\n                }, {\n                  label: 'Serviços provisionados',\n                  backgroundColor: 'transparent',\n                  borderColor: brandInfo,\n                  pointHoverBackgroundColor: '#fff',\n                  borderWidth: 2,\n                  data: data2\n                }]\n              }, {\n                maintainAspectRatio: false,\n                legend: {\n                  display: true\n                },\n                scales: {\n                  xAxes: [{\n                    gridLines: {\n                      drawOnChartArea: true\n                    }\n                  }],\n                  yAxes: [{\n                    ticks: {\n                      beginAtZero: true,\n                      maxTicksLimit: 5,\n                      stepSize: Math.ceil(50 / 5),\n                      max: 50\n                    },\n                    gridLines: {\n                      display: true\n                    }\n                  }]\n                },\n                elements: {\n                  point: {\n                    radius: 0,\n                    hitRadius: 10,\n                    hoverRadius: 5,\n                    hoverBorderWidth: 3\n                  }\n                }\n              });\n\n            case 6:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, _this);\n    }))();\n  },\n\n  methods: {\n    renderAgain: function renderAgain(data1, data2) {\n      this.renderChart({\n        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],\n        datasets: [{\n          label: 'Serviços atendidos',\n          backgroundColor: convertHex(brandInfo, 10),\n          borderColor: brandSuccess,\n          pointHoverBackgroundColor: '#fff',\n          borderWidth: 2,\n          data: data1\n        }, {\n          label: 'Serviços provisionados',\n          backgroundColor: 'transparent',\n          borderColor: brandInfo,\n          pointHoverBackgroundColor: '#fff',\n          borderWidth: 2,\n          data: data2\n        }]\n      }, {\n        maintainAspectRatio: false,\n        legend: {\n          display: true\n        },\n        scales: {\n          xAxes: [{\n            gridLines: {\n              drawOnChartArea: true\n            }\n          }],\n          yAxes: [{\n            ticks: {\n              beginAtZero: true,\n              maxTicksLimit: 1,\n              stepSize: Math.ceil(30 / 5),\n              max: 30\n            },\n            gridLines: {\n              display: true\n            }\n          }]\n        },\n        elements: {\n          point: {\n            radius: 0,\n            hitRadius: 10,\n            hoverRadius: 4,\n            hoverBorderWidth: 3\n          }\n        }\n      });\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL01haW5DaGFydC52dWU/YTE2NCJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3Z1ZS1jaGFydGpzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyBjb25zdCBicmFuZFByaW1hcnkgPSAnIzIwYThkOCdcbmNvbnN0IGJyYW5kU3VjY2VzcyA9ICcjNGRiZDc0J1xuY29uc3QgYnJhbmRJbmZvID0gJyM2M2MyZGUnXG4vLyBjb25zdCBicmFuZERhbmdlciA9ICcjZjg2YzZiJ1xuXG5mdW5jdGlvbiBjb252ZXJ0SGV4IChoZXgsIG9wYWNpdHkpIHtcbiAgaGV4ID0gaGV4LnJlcGxhY2UoJyMnLCAnJylcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwgMiksIDE2KVxuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpXG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNilcblxuICBjb25zdCByZXN1bHQgPSAncmdiYSgnICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgb3BhY2l0eSAvIDEwMCArICcpJ1xuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZXh0ZW5kczogTGluZSxcbiAgcHJvcHM6IFsnaGVpZ2h0J10sXG4gIGFzeW5jIG1vdW50ZWQgKCkge1xuICAgIHZhciBzZXJ2aWNlcyA9IFtdXG4gICAgdmFyIGRhdGExID0gbmV3IEFycmF5KDMxKS5maWxsKDApXG4gICAgdmFyIGRhdGEyID0gbmV3IEFycmF5KDMxKS5maWxsKDApXG5cbiAgICBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdjEvaG9tZWAsIHtoZWFkZXJzOiB7QXV0aG9yaXphdGlvbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9fSkudGhlbihcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2VydmljZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubW9udGhseV9zZXJ2aWNlc1xuICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzZXJ2aWNlKSB7XG4gICAgICAgICAgdmFyIHRva2VuRGF0ZSA9IG5ldyBEYXRlKHNlcnZpY2UuZG9uZV9hdClcbiAgICAgICAgICB2YXIgZGF5MSA9IHRva2VuRGF0ZS5nZXRVVENEYXRlKClcbiAgICAgICAgICB0b2tlbkRhdGUgPSBuZXcgRGF0ZShzZXJ2aWNlLm5leHRfc2VydmljZSlcbiAgICAgICAgICB2YXIgZGF5MiA9IHRva2VuRGF0ZS5nZXRVVENEYXRlKClcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU2VydmljZSBkb25lIGF0IC0+ICcgKyBkYXkxICsgJyBhbmQgcmV2aXNpb24gcGxhbm5lZCB0byBkYXkgJyArIGRheTIpXG4gICAgICAgICAgZGF0YTFbZGF5MSAtIDFdID0gZGF0YTFbZGF5MSAtIDFdICsgMVxuICAgICAgICAgIGRhdGEyW2RheTIgLSAxXSA9IGRhdGEyW2RheTIgLSAxXSArIDFcbiAgICAgICAgfSlcbiAgICAgIH0pLmNhdGNoKGUgPT4geyB0aGlzLmVycm9ycy5wdXNoKGUpIH0pXG4gICAgdGhpcy5yZW5kZXJDaGFydCh7XG4gICAgICBsYWJlbHM6IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnLCAnMjQnLCAnMjUnLCAnMjYnLCAnMjcnLCAnMjgnLCAnMjknLCAnMzAnLCAnMzEnXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1NlcnZpw6dvcyBhdGVuZGlkb3MnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29udmVydEhleChicmFuZEluZm8sIDEwKSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogYnJhbmRTdWNjZXNzLFxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICBkYXRhOiBkYXRhMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdTZXJ2acOnb3MgcHJvdmlzaW9uYWRvcycsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBicmFuZEluZm8sXG4gICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgIGRhdGE6IGRhdGEyXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LCB7XG4gICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiB0cnVlXG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZHJhd09uQ2hhcnRBcmVhOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogNSxcbiAgICAgICAgICAgIHN0ZXBTaXplOiBNYXRoLmNlaWwoNTAgLyA1KSxcbiAgICAgICAgICAgIG1heDogNTBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBwb2ludDoge1xuICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICBoaXRSYWRpdXM6IDEwLFxuICAgICAgICAgIGhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgIGhvdmVyQm9yZGVyV2lkdGg6IDNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICByZW5kZXJBZ2FpbiAoZGF0YTEsIGRhdGEyKSB7XG4gICAgICB0aGlzLnJlbmRlckNoYXJ0KHtcbiAgICAgICAgbGFiZWxzOiBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJywgJzI0JywgJzI1JywgJzI2JywgJzI3JywgJzI4JywgJzI5JywgJzMwJywgJzMxJ10sXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZXJ2acOnb3MgYXRlbmRpZG9zJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29udmVydEhleChicmFuZEluZm8sIDEwKSxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBicmFuZFN1Y2Nlc3MsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIGRhdGE6IGRhdGExXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1NlcnZpw6dvcyBwcm92aXNpb25hZG9zJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBicmFuZEluZm8sXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgICAgIGRhdGE6IGRhdGEyXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgIGRyYXdPbkNoYXJ0QXJlYTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dLFxuICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDEsXG4gICAgICAgICAgICAgIHN0ZXBTaXplOiBNYXRoLmNlaWwoMzAgLyA1KSxcbiAgICAgICAgICAgICAgbWF4OiAzMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgcmFkaXVzOiAwLFxuICAgICAgICAgICAgaGl0UmFkaXVzOiAxMCxcbiAgICAgICAgICAgIGhvdmVyUmFkaXVzOiA0LFxuICAgICAgICAgICAgaG92ZXJCb3JkZXJXaWR0aDogM1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE1haW5DaGFydC52dWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFYQTtBQXFCQTs7QUFFQTtBQURBOzs7O0FBTUE7QUFEQTtBQURBOzs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBREE7QUFQQTtBQU5BOzs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBdkJBO0FBQ0E7Ozs7Ozs7O0FBK0JBO0FBQ0E7O0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVhBO0FBcUJBOztBQUVBO0FBREE7Ozs7QUFNQTtBQURBO0FBREE7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7O0FBT0E7QUFEQTtBQVBBO0FBTkE7OztBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUF2QkE7QUFnQ0E7QUF0REE7QUExRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///328\n");

/***/ })

})