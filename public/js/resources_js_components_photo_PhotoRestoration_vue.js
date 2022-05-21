"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_photo_PhotoRestoration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PhotoRestoration",
  data: function data() {
    return {
      isEmpty: true,
      isLoading: false,
      imageFile: {},
      colorFile: '',
      previewImage: null
    };
  },
  mounted: function mounted() {
    var plugin = document.createElement("script");
    plugin.setAttribute("src", "//unpkg.com/img-comparison-slider@3/dist/component/component.esm.js");
    plugin.setAttribute("src", "//unpkg.com/img-comparison-slider@3/dist/component/component.js");
    plugin.async = true;
    document.head.appendChild(plugin);
  },
  methods: {
    previewFiles: function previewFiles(event) {
      this.isEmpty = false;
      this.imageFile = event.target.files[0];
      this.previewImage = URL.createObjectURL(this.imageFile);
    },
    colorPhoto: function colorPhoto() {
      var _this = this;

      this.isLoading = true;
      var headers = {
        "api-key": "quickstart-QUdJIGlzIGNvbWluZy4uLi4K",
        'Content-Type': 'multipart/form-data'
      };
      var formData = new FormData();
      formData.append('image', this.imageFile);
      axios.post('https://api.deepai.org/api/colorizer', formData, {
        headers: headers
      }).then(function (response) {
        _this.colorFile = response.data.output_url;
        _this.isLoading = false;
        _this.isEmpty = true;
        _this.imageFile = {};
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://unpkg.com/img-comparison-slider@3/dist/collection/styles/initial.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoRestoration_vue_vue_type_style_index_0_id_cfd9ae18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoRestoration_vue_vue_type_style_index_0_id_cfd9ae18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoRestoration_vue_vue_type_style_index_0_id_cfd9ae18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/photo/PhotoRestoration.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/photo/PhotoRestoration.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhotoRestoration_vue_vue_type_template_id_cfd9ae18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoRestoration.vue?vue&type=template&id=cfd9ae18&scoped=true& */ "./resources/js/components/photo/PhotoRestoration.vue?vue&type=template&id=cfd9ae18&scoped=true&");
/* harmony import */ var _PhotoRestoration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoRestoration.vue?vue&type=script&lang=js& */ "./resources/js/components/photo/PhotoRestoration.vue?vue&type=script&lang=js&");
/* harmony import */ var _PhotoRestoration_vue_vue_type_style_index_0_id_cfd9ae18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css& */ "./resources/js/components/photo/PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhotoRestoration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoRestoration_vue_vue_type_template_id_cfd9ae18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PhotoRestoration_vue_vue_type_template_id_cfd9ae18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cfd9ae18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/photo/PhotoRestoration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/photo/PhotoRestoration.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/photo/PhotoRestoration.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoRestoration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhotoRestoration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoRestoration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/photo/PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/photo/PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoRestoration_vue_vue_type_style_index_0_id_cfd9ae18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=style&index=0&id=cfd9ae18&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/photo/PhotoRestoration.vue?vue&type=template&id=cfd9ae18&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/photo/PhotoRestoration.vue?vue&type=template&id=cfd9ae18&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoRestoration_vue_vue_type_template_id_cfd9ae18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoRestoration_vue_vue_type_template_id_cfd9ae18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoRestoration_vue_vue_type_template_id_cfd9ae18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhotoRestoration.vue?vue&type=template&id=cfd9ae18&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=template&id=cfd9ae18&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=template&id=cfd9ae18&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/photo/PhotoRestoration.vue?vue&type=template&id=cfd9ae18&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container px-4 px-lg-5 my-5" }, [
    _c("div", { staticClass: "row gx-4 gx-lg-5 align-items-center" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _vm.colorFile
            ? _c("img-comparison-slider", [
                _c("img", {
                  attrs: { slot: "before", src: _vm.colorFile },
                  slot: "before",
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    slot: "after",
                    src: _vm.previewImage,
                    width: _vm.colorFile.width,
                    height: _vm.colorFile.height,
                  },
                  slot: "after",
                }),
              ])
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "small mb-1" }, [
          _vm._v("based on deep.ai, model by Jason Antic\n            "),
        ]),
        _vm._v(" "),
        _c("h1", { staticClass: "display-5 fw-bolder" }, [
          _vm._v("Koloryzuj swoje stare zdjęcia"),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "lead" }, [
          _vm._v(
            "\n                Wystarczy wybrać zdjęcie używając formularza poniżej i poczekać aż process zostanie zakończony.\n            "
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex" }, [
          _c("input", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isLoading,
                expression: "!isLoading",
              },
            ],
            staticClass: "input-file",
            attrs: { type: "file", disabled: _vm.isLoading, accept: "image/*" },
            on: { change: _vm.previewFiles },
          }),
          _vm._v(" "),
          _vm.isLoading
            ? _c("p", [
                _vm._v(
                  "\n                    Koloryzacja....\n                "
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.isEmpty
            ? _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isLoading,
                      expression: "!isLoading",
                    },
                  ],
                  staticClass: "btn btn-primary",
                  on: { click: _vm.colorPhoto },
                },
                [_vm._v("Koloryzuj")]
              )
            : _vm._e(),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);