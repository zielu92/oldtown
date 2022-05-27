"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_EditMode_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var leaflet_geosearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet-geosearch */ "./node_modules/leaflet-geosearch/dist/geosearch.module.js");
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
  name: "EditMode",
  data: function data() {
    return {
      polylines: [{
        latlngs: [],
        color: 'green'
      }],
      markers: [],
      marker: '',
      clickCounter: 0,
      geosearchOptions: {
        // Important part Here
        provider: new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_0__.OpenStreetMapProvider()
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.53128791778799, 20.00830181051791],
      layerOpacity: 0.9,
      layerImage: '',
      imageLayers: [{
        url: 'https://d-art.ppstatic.pl/kadry/k/r/62/e5/5ad065ed93fc4_o.jpg',
        bounds: [[51.535758, 20.000128], [51.523011, 20.015652]]
      }, {
        url: 'https://d-art.ppstatic.pl/kadry/k/r/e7/d2/5ad065e06adbc_o.jpg',
        bounds: [[51.533758, 19.989077], [51.521276, 20.005642]]
      }],
      imageLayer: {
        'url': '',
        bounds: []
      },
      task: null
    };
  },
  methods: {
    initData: function initData() {//
    },
    addSomething: function addSomething(event) {
      this.clickCounter++;

      if (this.task === 'addMarker') {
        this.marker = event.latlng;
      } else if (this.task === 'addLayer') {
        if (this.clickCounter % 2 === 1) {
          this.imageLayer.bounds = [event.latlng];
        } else {
          this.imageLayer.bounds.push(event.latlng);
        } //check if URL of image exists
        //check if bounds exists
        //add
        // this.imageLayers = {
        //
        // }

      } else {
        this.addPolyline(event);
      }
    },
    removeMarker: function removeMarker(index) {
      this.markers.splice(index, 1);
    },
    addMarker: function addMarker(event) {
      this.markers.push(event.latlng);
    },
    addLayerImage: function addLayerImage(event) {
      !!this.imageLayer.url ? this.imageLayer = {
        'url': event
      } : this.imageLayer.url = event;
    },
    addPolyline: function addPolyline(event) {
      this.polylines[0].latlngs.push([event.latlng.lat, event.latlng.lng]);
    },
    updateTask: function updateTask(event) {
      this.task = event;
    }
  },
  watch: {
    task: function task(val) {
      //reset counter on changed task
      if (val) {
        this.clickCounter = 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vue2leaflet-map[data-v-e6b22490] {\n    height: 90vh;\n    width: 100%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/leaflet-geosearch/dist/geosearch.module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/leaflet-geosearch/dist/geosearch.module.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlgoliaProvider": () => (/* binding */ j),
/* harmony export */   "BingProvider": () => (/* binding */ q),
/* harmony export */   "EsriProvider": () => (/* binding */ N),
/* harmony export */   "GeoApiFrProvider": () => (/* binding */ V),
/* harmony export */   "GeoSearchControl": () => (/* binding */ R),
/* harmony export */   "GeocodeEarthProvider": () => (/* binding */ M),
/* harmony export */   "GoogleProvider": () => (/* binding */ F),
/* harmony export */   "HereProvider": () => (/* binding */ _),
/* harmony export */   "JsonProvider": () => (/* binding */ S),
/* harmony export */   "LocationIQProvider": () => (/* binding */ O),
/* harmony export */   "MapBoxProvider": () => (/* binding */ D),
/* harmony export */   "OpenCageProvider": () => (/* binding */ I),
/* harmony export */   "OpenStreetMapProvider": () => (/* binding */ B),
/* harmony export */   "PeliasProvider": () => (/* binding */ A),
/* harmony export */   "SearchControl": () => (/* binding */ R),
/* harmony export */   "SearchElement": () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t,e,r){return(p=h()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function f(t,e,r,n){void 0===e&&(e=""),void 0===n&&(n={});var o=document.createElement(t);return e&&(o.className=e),Object.keys(n).forEach(function(t){if("function"==typeof n[t]){var e=0===t.indexOf("on")?t.substr(2).toLowerCase():t;o.addEventListener(e,n[t])}else"html"===t?o.innerHTML=n[t]:"text"===t?o.innerText=n[t]:o.setAttribute(t,n[t])}),r&&r.appendChild(o),o}function d(t){t.preventDefault(),t.stopPropagation()}var m=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.filter(Boolean).join(" ").trim()};function v(t,e){t&&t.classList&&(Array.isArray(e)?e:[e]).forEach(function(e){t.classList.contains(e)||t.classList.add(e)})}function y(t,e){t&&t.classList&&(Array.isArray(e)?e:[e]).forEach(function(e){t.classList.contains(e)&&t.classList.remove(e)})}var g,b=13,x=40,E=38,w=[b,27,x,E,37,39],L=function(){function t(t){var e=this,r=t.handleSubmit,n=t.searchLabel,o=t.classNames,s=void 0===o?{}:o;this.hasError=!1,this.container=f("div",m("geosearch",s.container)),this.form=f("form",["",s.form].join(" "),this.container,{autocomplete:"none",onClick:d,onDblClick:d,touchStart:d,touchEnd:d}),this.input=f("input",["glass",s.input].join(" "),this.form,{type:"text",placeholder:n||"search",onInput:this.onInput,onKeyUp:function(t){return e.onKeyUp(t)},onKeyPress:function(t){return e.onKeyPress(t)},onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(){e.input.focus(),e.input.dispatchEvent(new Event("focus"))}}),this.handleSubmit=r}var e=t.prototype;return e.onFocus=function(){v(this.form,"active")},e.onBlur=function(){y(this.form,"active")},e.onSubmit=function(t){try{var e=this;return d(t),y(r=e.container,"error"),v(r,"pending"),Promise.resolve(e.handleSubmit({query:e.input.value})).then(function(){y(e.container,"pending")})}catch(t){return Promise.reject(t)}var r},e.onInput=function(){this.hasError&&(y(this.container,"error"),this.hasError=!1)},e.onKeyUp=function(t){27===t.keyCode&&(y(this.container,["pending","active"]),this.input.value="",document.body.focus(),document.body.blur())},e.onKeyPress=function(t){t.keyCode===b&&this.onSubmit(t)},e.setQuery=function(t){this.input.value=t},t}(),k=function(){function t(t){var e=this,r=t.handleClick,n=t.classNames,o=void 0===n?{}:n,s=t.notFoundMessage;this.selected=-1,this.results=[],this.onClick=function(t){if("function"==typeof e.handleClick){var r=t.target;if(r&&e.container.contains(r)&&r.hasAttribute("data-key")){var n=Number(r.getAttribute("data-key"));e.clear(),e.handleClick({result:e.results[n]})}}},this.handleClick=r,this.notFoundMessage=s?f("div",m(o.notfound),void 0,{html:s}):void 0,this.container=f("div",m("results",o.resultlist)),this.container.addEventListener("click",this.onClick,!0),this.resultItem=f("div",m(o.item))}var e=t.prototype;return e.render=function(t,e){var r=this;void 0===t&&(t=[]),this.clear(),t.forEach(function(t,n){var o=r.resultItem.cloneNode(!0);o.setAttribute("data-key",""+n),o.innerHTML=e({result:t}),r.container.appendChild(o)}),t.length>0?(v(this.container.parentElement,"open"),v(this.container,"active")):this.notFoundMessage&&(this.container.appendChild(this.notFoundMessage),v(this.container.parentElement,"open")),this.results=t},e.select=function(t){return Array.from(this.container.children).forEach(function(e,r){return r===t?v(e,"active"):y(e,"active")}),this.selected=t,this.results[t]},e.count=function(){return this.results?this.results.length:0},e.clear=function(){for(this.selected=-1;this.container.lastChild;)this.container.removeChild(this.container.lastChild);y(this.container.parentElement,"open"),y(this.container,"active")},t}(),C={position:"topleft",style:"button",showMarker:!0,showPopup:!1,popupFormat:function(t){return""+t.result.label},resultFormat:function(t){return""+t.result.label},marker:{icon:leaflet__WEBPACK_IMPORTED_MODULE_0__&&leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon?new leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon.Default:void 0,draggable:!1},maxMarkers:1,maxSuggestions:5,retainZoomLevel:!1,animateZoom:!0,searchLabel:"Enter address",notFoundMessage:"",messageHideDelay:3e3,zoomLevel:18,classNames:{container:"leaflet-bar leaflet-control leaflet-control-geosearch",button:"leaflet-bar-part leaflet-bar-part-single",resetButton:"reset",msgbox:"leaflet-bar message",form:"",input:"",resultlist:"",item:"",notfound:"leaflet-bar-notfound"},autoComplete:!0,autoCompleteDelay:250,autoClose:!1,keepResult:!1,updateMap:!0},U="Leaflet must be loaded before instantiating the GeoSearch control",P={options:u({},C),classNames:u({},C.classNames),initialize:function(e){var r,s,i,a,l=this;if(!leaflet__WEBPACK_IMPORTED_MODULE_0__)throw new Error(U);if(!e.provider)throw new Error("Provider is missing from options");this.options=u({},this.options,{},e),this.classNames=u({},this.classNames,{},e.classNames),this.markers=new leaflet__WEBPACK_IMPORTED_MODULE_0__.FeatureGroup,this.classNames.container+=" leaflet-geosearch-"+this.options.style,this.searchElement=new L({searchLabel:this.options.searchLabel,classNames:{container:this.classNames.container,form:this.classNames.form,input:this.classNames.input},handleSubmit:function(t){return l.onSubmit(t)}}),this.button=f("a",this.classNames.button,this.searchElement.container,{title:this.options.searchLabel,href:"#",onClick:function(t){return l.onClick(t)}}),leaflet__WEBPACK_IMPORTED_MODULE_0__.DomEvent.disableClickPropagation(this.button),this.resetButton=f("a",this.classNames.resetButton,this.searchElement.form,{text:"×",href:"#",onClick:function(){return l.clearResults(null,!0)}}),leaflet__WEBPACK_IMPORTED_MODULE_0__.DomEvent.disableClickPropagation(this.resetButton),this.options.autoComplete&&(this.resultList=new k({handleClick:function(t){var e=t.result;l.searchElement.input.value=e.label,l.onSubmit({query:e.label,data:e})},classNames:{resultlist:this.classNames.resultlist,item:this.classNames.item,notfound:this.classNames.notfound},notFoundMessage:this.options.notFoundMessage}),this.searchElement.form.appendChild(this.resultList.container),this.searchElement.input.addEventListener("keyup",(r=function(t){return l.autoSearch(t)},void 0===(s=this.options.autoCompleteDelay)&&(s=250),void 0===i&&(i=!1),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];a&&clearTimeout(a),a=setTimeout(function(){a=null,i||r.apply(void 0,e)},s),i&&!a&&r.apply(void 0,e)}),!0),this.searchElement.input.addEventListener("keydown",function(t){return l.selectResult(t)},!0),this.searchElement.input.addEventListener("keydown",function(t){return l.clearResults(t,!0)},!0)),this.searchElement.form.addEventListener("click",function(t){t.preventDefault()},!1)},onAdd:function(t){var e=this.options,r=e.showMarker,n=e.style;if(this.map=t,r&&this.markers.addTo(t),"bar"===n){var s=t.getContainer().querySelector(".leaflet-control-container");this.container=f("div","leaflet-control-geosearch leaflet-geosearch-bar"),this.container.appendChild(this.searchElement.form),s.appendChild(this.container)}return leaflet__WEBPACK_IMPORTED_MODULE_0__.DomEvent.disableClickPropagation(this.searchElement.form),this.searchElement.container},onRemove:function(){var t;return null==(t=this.container)||t.remove(),this},onClick:function(t){t.preventDefault(),t.stopPropagation();var e=this.searchElement,r=e.container,n=e.input;r.classList.contains("active")?(y(r,"active"),this.clearResults()):(v(r,"active"),n.focus())},selectResult:function(t){if(-1!==[b,x,E].indexOf(t.keyCode))if(t.preventDefault(),t.keyCode!==b){var e=this.resultList.count()-1;if(!(e<0)){var r=this.resultList.selected,n=t.keyCode===x?r+1:r-1,o=this.resultList.select(n<0?e:n>e?0:n);this.searchElement.input.value=o.label}}else{var s=this.resultList.select(this.resultList.selected);this.onSubmit({query:this.searchElement.input.value,data:s})}},clearResults:function(t,e){if(void 0===e&&(e=!1),!t||27===t.keyCode){var r=this.options,n=r.autoComplete;!e&&r.keepResult||(this.searchElement.input.value="",this.markers.clearLayers()),n&&this.resultList.clear()}},autoSearch:function(t){try{var e=this;if(w.indexOf(t.keyCode)>-1)return Promise.resolve();var r=t.target.value,n=e.options.provider,o=function(){if(r.length)return Promise.resolve(n.search({query:r})).then(function(t){t=t.slice(0,e.options.maxSuggestions),e.resultList.render(t,e.options.resultFormat)});e.resultList.clear()}();return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},onSubmit:function(t){try{var e=this;return Promise.resolve(e.options.provider.search(t)).then(function(r){r&&r.length>0&&e.showResult(r[0],t)})}catch(t){return Promise.reject(t)}},showResult:function(t,e){var r=this.options,n=r.autoClose,o=r.updateMap,s=this.markers.getLayers();s.length>=this.options.maxMarkers&&this.markers.removeLayer(s[0]);var i=this.addMarker(t,e);o&&this.centerMap(t),this.map.fireEvent("geosearch/showlocation",{location:t,marker:i}),n&&this.closeResults()},closeResults:function(){var t=this.searchElement.container;t.classList.contains("active")&&y(t,"active"),this.clearResults()},addMarker:function(t,e){var r=this,n=this.options,o=n.marker,i=n.showPopup,a=n.popupFormat,u=new leaflet__WEBPACK_IMPORTED_MODULE_0__.Marker([t.y,t.x],o),l=t.label;return"function"==typeof a&&(l=a({query:e,result:t})),u.bindPopup(l),this.markers.addLayer(u),i&&u.openPopup(),o.draggable&&u.on("dragend",function(t){r.map.fireEvent("geosearch/marker/dragend",{location:u.getLatLng(),event:t})}),u},centerMap:function(t){var e=this.options,r=e.retainZoomLevel,n=e.animateZoom,o=t.bounds?new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLngBounds(t.bounds):new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(t.y,t.x).toBounds(10),s=o.isValid()?o:this.markers.getBounds();!r&&o.isValid()&&!t.bounds||r||!o.isValid()?this.map.setView(s.getCenter(),this.getZoom(),{animate:n}):this.map.fitBounds(s,{animate:n})},getZoom:function(){var t=this.options,e=t.zoomLevel;return t.retainZoomLevel?this.map.getZoom():e}};function R(){if(!leaflet__WEBPACK_IMPORTED_MODULE_0__)throw new Error(U);for(var r=leaflet__WEBPACK_IMPORTED_MODULE_0__.Control.extend(P),n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return p(r,o)}!function(t){t[t.SEARCH=0]="SEARCH",t[t.REVERSE=1]="REVERSE"}(g||(g={}));var S=function(){function t(t){void 0===t&&(t={}),this.options=t}var e=t.prototype;return e.getParamString=function(t){void 0===t&&(t={});var e=u({},this.options.params,{},t);return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},e.getUrl=function(t,e){return t+"?"+this.getParamString(e)},e.search=function(t){try{var e=this,r=e.endpoint({query:t.query,type:g.SEARCH});return Promise.resolve(fetch(r)).then(function(t){return Promise.resolve(t.json()).then(function(t){return e.parse({data:t})})})}catch(t){return Promise.reject(t)}},t}(),j=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var r=e.prototype;return r.endpoint=function(){return"https://places-dsn.algolia.net/1/places/query"},r.findBestMatchLevelIndex=function(t){var e=t.find(function(t){return"full"===t.matchLevel})||t.find(function(t){return"partial"===t.matchLevel});return e?t.indexOf(e):0},r.getLabel=function(t){var e,r,n,o;return[null==(e=t.locale_names)?void 0:e.default[this.findBestMatchLevelIndex(t._highlightResult.locale_names.default)],null==(r=t.city)?void 0:r.default[this.findBestMatchLevelIndex(t._highlightResult.city.default)],t.administrative[this.findBestMatchLevelIndex(t._highlightResult.administrative)],null==(n=t.postcode)?void 0:n[this.findBestMatchLevelIndex(t._highlightResult.postcode)],null==(o=t.country)?void 0:o.default].filter(Boolean).join(", ")},r.parse=function(t){var e=this;return t.data.hits.map(function(t){return{x:t._geoloc.lng,y:t._geoloc.lat,label:e.getLabel(t),bounds:null,raw:t}})},r.search=function(t){var e=t.query;try{var r=this,n="string"==typeof e?{query:e}:e;return Promise.resolve(fetch(r.endpoint(),{method:"POST",body:JSON.stringify(u({},r.options.params,{},n))})).then(function(t){return Promise.resolve(t.json()).then(function(t){return r.parse({data:t})})})}catch(t){return Promise.reject(t)}},e}(S),q=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://dev.virtualearth.net/REST/v1/Locations",e}l(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,r="string"==typeof e?{q:e}:e;return r.jsonp=t.jsonp,this.getUrl(this.searchUrl,r)},r.parse=function(t){return 0===t.data.resourceSets.length?[]:t.data.resourceSets[0].resources.map(function(t){return{x:t.point.coordinates[1],y:t.point.coordinates[0],label:t.address.formattedAddress,bounds:[[t.bbox[0],t.bbox[1]],[t.bbox[2],t.bbox[3]]],raw:t}})},r.search=function(t){var e,r,n,o=t.query;try{var s=this,i="BING_JSONP_CB_"+Date.now();return Promise.resolve((e=s.endpoint({query:o,jsonp:i}),r=i,n=f("script",null,document.body),n.setAttribute("type","text/javascript"),new Promise(function(t){window[r]=function(e){n.remove(),delete window[r],t(e)},n.setAttribute("src",e)}))).then(function(t){return s.parse({data:t})})}catch(t){return Promise.reject(t)}},e}(S),N=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find",e}l(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,r="string"==typeof e?{text:e}:e;return r.f="json",this.getUrl(this.searchUrl,r)},r.parse=function(t){return t.data.locations.map(function(t){return{x:t.feature.geometry.x,y:t.feature.geometry.y,label:t.name,bounds:[[t.extent.ymin,t.extent.xmin],[t.extent.ymax,t.extent.xmax]],raw:t}})},e}(S),A=function(t){function e(e){var r;return void 0===e&&(e={}),(r=t.call(this,e)||this).host=e.host||"http://localhost:4000",r}l(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query;switch(t.type){case g.REVERSE:return this.getUrl(this.host+"/v1/reverse","string"==typeof e?{}:e);default:return this.getUrl(this.host+"/v1/autocomplete","string"==typeof e?{text:e}:e)}},r.parse=function(t){return t.data.features.map(function(t){var e={x:t.geometry.coordinates[0],y:t.geometry.coordinates[1],label:t.properties.label,bounds:null,raw:t};return Array.isArray(t.bbox)&&4===t.bbox.length&&(e.bounds=[[t.bbox[1],t.bbox[0]],[t.bbox[3],t.bbox[2]]]),e})},e}(S),M=function(t){function e(e){return void 0===e&&(e={}),e.host="https://api.geocode.earth",t.call(this,e)||this}return l(e,t),e}(A),F=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://maps.googleapis.com/maps/api/geocode/json",e}l(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query;return this.getUrl(this.searchUrl,"string"==typeof e?{address:e}:e)},r.parse=function(t){return t.data.results.map(function(t){return{x:t.geometry.location.lng,y:t.geometry.location.lat,label:t.formatted_address,bounds:[[t.geometry.viewport.southwest.lat,t.geometry.viewport.southwest.lng],[t.geometry.viewport.northeast.lat,t.geometry.viewport.northeast.lng]],raw:t}})},e}(S),_=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://geocode.search.hereapi.com/v1/geocode",e}l(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query;return this.getUrl(this.searchUrl,"string"==typeof e?{q:e}:e)},r.parse=function(t){return t.data.items.map(function(t){return{x:t.position.lng,y:t.position.lat,label:t.address.label,bounds:null,raw:t}})},e}(S),B=function(t){function e(e){var r;void 0===e&&(e={});var n="https://nominatim.openstreetmap.org";return(r=t.call(this,e)||this).searchUrl=e.searchUrl||n+"/search",r.reverseUrl=e.reverseUrl||n+"/reverse",r}l(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,r=t.type,n="string"==typeof e?{q:e}:e;switch(n.format="json",r){case g.REVERSE:return this.getUrl(this.reverseUrl,n);default:return this.getUrl(this.searchUrl,n)}},r.parse=function(t){return(Array.isArray(t.data)?t.data:[t.data]).map(function(t){return{x:Number(t.lon),y:Number(t.lat),label:t.display_name,bounds:[[parseFloat(t.boundingbox[0]),parseFloat(t.boundingbox[2])],[parseFloat(t.boundingbox[1]),parseFloat(t.boundingbox[3])]],raw:t}})},e}(S),O=function(t){function e(e){return t.call(this,u({},e,{searchUrl:"https://locationiq.org/v1/search.php",reverseUrl:"https://locationiq.org/v1/reverse.php"}))||this}return l(e,t),e}(B),I=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://api.opencagedata.com/geocode/v1/json",e}l(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,r="string"==typeof e?{q:e}:e;return r.format="json",this.getUrl(this.searchUrl,r)},r.parse=function(t){return t.data.results.map(function(t){return{x:t.geometry.lng,y:t.geometry.lat,label:t.formatted,bounds:[[t.bounds.southwest.lat,t.bounds.southwest.lng],[t.bounds.northeast.lat,t.bounds.northeast.lng]],raw:t}})},r.search=function(e){try{return Promise.resolve(e.query.length<2?[]:t.prototype.search.call(this,e))}catch(t){return Promise.reject(t)}},e}(S),D=function(t){function e(e){var r;return void 0===e&&(e={}),(r=t.call(this,e)||this).searchUrl=e.searchUrl||"https://a.tiles.mapbox.com/v4/geocode/mapbox.places/",r}l(e,t);var r=e.prototype;return r.endpoint=function(t){return this.getUrl(""+this.searchUrl+t.query+".json")},r.parse=function(t){return(Array.isArray(t.data.features)?t.data.features:[]).map(function(t){var e=null;return t.bbox&&(e=[[parseFloat(t.bbox[1]),parseFloat(t.bbox[0])],[parseFloat(t.bbox[3]),parseFloat(t.bbox[2])]]),{x:Number(t.center[0]),y:Number(t.center[1]),label:t.place_name?t.place_name:t.text,bounds:e,raw:t}})},e}(S),V=function(t){function e(e){var r;void 0===e&&(e={});var n="https://api-adresse.data.gouv.fr";return(r=t.call(this,e)||this).searchUrl=e.searchUrl||n+"/search",r.reverseUrl=e.reverseUrl||n+"/reverse",r}l(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,r="string"==typeof e?{q:e}:e;switch(t.type){case g.REVERSE:return this.getUrl(this.reverseUrl,r);default:return this.getUrl(this.searchUrl,r)}},r.parse=function(t){return t.data.features.map(function(t){return{x:t.geometry.coordinates[0],y:t.geometry.coordinates[1],label:t.properties.label,bounds:null,raw:t}})},e}(S);
//# sourceMappingURL=geosearch.module.js.map


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditMode_vue_vue_type_style_index_0_id_e6b22490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditMode_vue_vue_type_style_index_0_id_e6b22490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditMode_vue_vue_type_style_index_0_id_e6b22490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/EditMode.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/EditMode.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditMode_vue_vue_type_template_id_e6b22490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditMode.vue?vue&type=template&id=e6b22490&scoped=true& */ "./resources/js/components/EditMode.vue?vue&type=template&id=e6b22490&scoped=true&");
/* harmony import */ var _EditMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditMode.vue?vue&type=script&lang=js& */ "./resources/js/components/EditMode.vue?vue&type=script&lang=js&");
/* harmony import */ var _EditMode_vue_vue_type_style_index_0_id_e6b22490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css& */ "./resources/js/components/EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditMode_vue_vue_type_template_id_e6b22490_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditMode_vue_vue_type_template_id_e6b22490_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e6b22490",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditMode.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditMode.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/EditMode.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditMode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditMode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditMode_vue_vue_type_style_index_0_id_e6b22490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=style&index=0&id=e6b22490&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/EditMode.vue?vue&type=template&id=e6b22490&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/EditMode.vue?vue&type=template&id=e6b22490&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditMode_vue_vue_type_template_id_e6b22490_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditMode_vue_vue_type_template_id_e6b22490_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditMode_vue_vue_type_template_id_e6b22490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditMode.vue?vue&type=template&id=e6b22490&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=template&id=e6b22490&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=template&id=e6b22490&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EditMode.vue?vue&type=template&id=e6b22490&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("edit-mode-top", { on: { "update-task": _vm.updateTask } }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-3" },
          [
            _vm.task === "addMarker"
              ? _c("add-marker", {
                  attrs: { marker: _vm.marker },
                  on: { add: _vm.initData },
                })
              : _vm.task === "addLayer"
              ? _c("add-layer", {
                  attrs: { bounds: _vm.imageLayer.bounds },
                  on: { add: _vm.initData, img: _vm.addLayerImage },
                })
              : _c("edit-mode-side"),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-9" },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.layerOpacity,
                  expression: "layerOpacity",
                },
              ],
              staticClass: "form-control-range",
              attrs: {
                type: "range",
                id: "formControlRange",
                name: "opacity",
                min: "0",
                max: "1",
                step: "0.1",
              },
              domProps: { value: _vm.layerOpacity },
              on: {
                __r: function ($event) {
                  _vm.layerOpacity = $event.target.value
                },
              },
            }),
            _vm._v(" " + _vm._s(_vm.layerOpacity) + "\n                "),
            _c(
              "l-map",
              {
                attrs: { zoom: _vm.zoom, center: _vm.center },
                on: { click: _vm.addSomething },
              },
              [
                _c("l-tile-layer", {
                  attrs: { url: _vm.url, attribution: _vm.attribution },
                }),
                _vm._v(" "),
                _c("v-geosearch", { attrs: { options: _vm.geosearchOptions } }),
                _vm._v(" "),
                _vm._l(_vm.markers, function (marker, index) {
                  return _c("l-marker", {
                    key: index,
                    attrs: { "lat-lng": marker },
                    on: {
                      click: function ($event) {
                        return _vm.removeMarker(index)
                      },
                    },
                  })
                }),
                _vm._v(" "),
                _vm.marker
                  ? _c("l-marker", { attrs: { "lat-lng": _vm.marker } })
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.polylines, function (polyline, index) {
                  return _c("l-polyline", {
                    key: index,
                    attrs: {
                      "lat-lngs": polyline.latlngs,
                      color: polyline.color,
                    },
                    on: {
                      click: function ($event) {
                        return _vm.removePolyline(index)
                      },
                    },
                  })
                }),
                _vm._v(" "),
                !!_vm.imageLayer.url
                  ? _c("l-image-overlay", {
                      attrs: {
                        url: _vm.imageLayer.url,
                        bounds: _vm.imageLayer.bounds,
                        opacity: _vm.layerOpacity,
                      },
                    })
                  : _vm._e(),
              ],
              2
            ),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);