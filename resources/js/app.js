/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import { LMap, LTileLayer, LMarker, LPopup, LIcon, LImageOverlay, LPolyline, LTooltip } from 'vue2-leaflet'

import VGeosearch from 'vue2-leaflet-geosearch';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
L.Icon.Default.imagePath = '/';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-tooltip', LTooltip);
Vue.component('l-icon',LIcon);
Vue.component('l-image-overlay',LImageOverlay);
Vue.component('l-polyline', LPolyline);
Vue.component('v-geosearch', VGeosearch);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('main-map', function (resolve) { require(['./components/MainMap'], resolve).default });
Vue.component('photo-restore', function (resolve) { require(['./components/photo/PhotoRestoration'], resolve).default });
Vue.component('edit-mode', function (resolve) { require(['./components/EditMode'], resolve).default });
Vue.component('add-marker', function (resolve) { require(['./components/editViews/AddMarker'], resolve).default });
Vue.component('edit-mode-side', function (resolve) { require(['./components/editViews/EditModeSide'], resolve).default });
Vue.component('edit-mode-top', function (resolve) { require(['./components/editViews/EditModeTop'], resolve).default });
Vue.component('browse-mode', function (resolve) { require(['./components/BrowseMode'], resolve).default });
Vue.component('browse-mode-side', function (resolve) { require(['./components/browseViews/BrowseModeSide'], resolve).default });
Vue.component('browse-mode-top', function (resolve) { require(['./components/browseViews/BrowseModeTop'], resolve).default });

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
