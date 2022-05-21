"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_editViews_AddMarker_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddMarker",
  props: ['marker'],
  data: function data() {
    return {
      markerArr: {},
      categories: {},
      errors: []
    };
  },
  methods: {
    addToService: function addToService() {
      var _this = this;

      this.errors = [];

      if (!this.markerArr.name || !this.point || !this.markerArr.category_id) {
        this.errors.push('error');
      }

      if (this.errors.length === 0) {
        this.markerArr.type = '1';
        this.markerArr.latLng = this.point;
        axios.post('/mapobjects', this.markerArr).then(function () {
          _this.$emit('add');

          _this.markerArr = {};
        });
      } else {}
    },
    getCategories: function getCategories() {
      var _this2 = this;

      axios.get('/getcategories').then(function (response) {
        _this2.categories = response.data;
      });
    }
  },
  created: function created() {
    this.getCategories();
  },
  computed: {
    point: function point() {
      return this.marker ? "".concat(this.marker.lat, ", ").concat(this.marker.lng) : '';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody[data-v-3bf69c55] {\n    background-color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddMarker_vue_vue_type_style_index_0_id_3bf69c55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddMarker_vue_vue_type_style_index_0_id_3bf69c55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddMarker_vue_vue_type_style_index_0_id_3bf69c55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/editViews/AddMarker.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/editViews/AddMarker.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddMarker_vue_vue_type_template_id_3bf69c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddMarker.vue?vue&type=template&id=3bf69c55&scoped=true& */ "./resources/js/components/editViews/AddMarker.vue?vue&type=template&id=3bf69c55&scoped=true&");
/* harmony import */ var _AddMarker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddMarker.vue?vue&type=script&lang=js& */ "./resources/js/components/editViews/AddMarker.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddMarker_vue_vue_type_style_index_0_id_3bf69c55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css& */ "./resources/js/components/editViews/AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddMarker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddMarker_vue_vue_type_template_id_3bf69c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddMarker_vue_vue_type_template_id_3bf69c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3bf69c55",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/editViews/AddMarker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/editViews/AddMarker.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/editViews/AddMarker.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddMarker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddMarker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddMarker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/editViews/AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/editViews/AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddMarker_vue_vue_type_style_index_0_id_3bf69c55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=style&index=0&id=3bf69c55&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/editViews/AddMarker.vue?vue&type=template&id=3bf69c55&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/editViews/AddMarker.vue?vue&type=template&id=3bf69c55&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddMarker_vue_vue_type_template_id_3bf69c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddMarker_vue_vue_type_template_id_3bf69c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddMarker_vue_vue_type_template_id_3bf69c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddMarker.vue?vue&type=template&id=3bf69c55&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=template&id=3bf69c55&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=template&id=3bf69c55&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/editViews/AddMarker.vue?vue&type=template&id=3bf69c55&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "px-2 col-12" }, [
    _c("h2", [_vm._v("Dodaj marker")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "Jeśli jest to duży objekt np. budynek, to lepiej dodać go jako poligon"
      ),
    ]),
    _vm._v(" "),
    _vm.errors.length > 0
      ? _c(
          "div",
          { staticClass: "alert alert-danger", attrs: { role: "alert" } },
          [_vm._v("\n        Proszę podać wymagane informację\n    ")]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "name" } }, [_vm._v("Nazwa *")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.markerArr.name,
            expression: "markerArr.name",
          },
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "name",
          placeholder: "Podaj nazwę",
          required: "",
        },
        domProps: { value: _vm.markerArr.name },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.markerArr, "name", $event.target.value)
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "nameOld" } }, [
        _vm._v("Dawna Nazwa (jeśli występuje)"),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.markerArr.nameOld,
            expression: "markerArr.nameOld",
          },
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "nameOld",
          placeholder: "Podaj dawną nazwę",
        },
        domProps: { value: _vm.markerArr.nameOld },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.markerArr, "nameOld", $event.target.value)
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "address" } }, [_vm._v("Aktualny adres")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.markerArr.address,
            expression: "markerArr.address",
          },
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "address",
          placeholder: "np. Mościckiego 12",
        },
        domProps: { value: _vm.markerArr.address },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.markerArr, "address", $event.target.value)
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "latLng" } }, [
        _vm._v("Koordynaty (kliknij na mapie lub wpisz) *"),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.point,
            expression: "point",
          },
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          id: "latLng",
          placeholder: "51.53128791778799, 20.00830181051791",
          required: "",
        },
        domProps: { value: _vm.point },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.point = $event.target.value
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "category" } }, [_vm._v("Kategoria *")]),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.markerArr.category_id,
              expression: "markerArr.category_id",
            },
          ],
          staticClass: "form-control",
          attrs: { id: "category", required: "" },
          on: {
            change: function ($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function (o) {
                  return o.selected
                })
                .map(function (o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.$set(
                _vm.markerArr,
                "category_id",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            },
          },
        },
        _vm._l(_vm.categories, function (value, name, index) {
          return _c("option", { key: index, domProps: { value: value } }, [
            _vm._v(_vm._s(name)),
          ])
        }),
        0
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-12" }, [_vm._v("Data istnienia")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("label", { attrs: { for: "from" } }, [_vm._v("od")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.markerArr.from,
              expression: "markerArr.from",
            },
          ],
          staticClass: "form-control",
          attrs: { type: "number", id: "from", placeholder: "1820" },
          domProps: { value: _vm.markerArr.from },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.markerArr, "from", $event.target.value)
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("label", { attrs: { for: "till" } }, [_vm._v("do")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.markerArr.till,
              expression: "markerArr.till",
            },
          ],
          staticClass: "form-control",
          attrs: { type: "number", id: "till", placeholder: "2022" },
          domProps: { value: _vm.markerArr.till },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.markerArr, "till", $event.target.value)
            },
          },
        }),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "description" } }, [_vm._v("Opis/Historia")]),
      _vm._v(" "),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.markerArr.description,
            expression: "markerArr.description",
          },
        ],
        staticClass: "form-control",
        attrs: { id: "description", rows: "3" },
        domProps: { value: _vm.markerArr.description },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.markerArr, "description", $event.target.value)
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "button",
          {
            class: [
              "btn",
              _vm.errors.length > 0 ? "btn-danger" : "btn-primary",
              "m-2",
              "text-right",
            ],
            attrs: { type: "submit" },
            on: {
              click: function ($event) {
                return _vm.addToService()
              },
            },
          },
          [_vm._v("Dodaj")]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);