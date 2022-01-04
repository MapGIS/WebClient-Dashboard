import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@mapgis/webclient-vue-ui/dist-libs/webclient-vue-ui.css';
import '@mapgis/webclient-vue-cesium/dist-libs/webclient-vue-cesium.css';

import MapgisUi from "@mapgis/webclient-vue-ui";
import Mapgis3d from "@mapgis/webclient-vue-cesium";
import Mapgis2d from "@mapgis/webclient-vue-mapboxgl";

Vue.config.productionTip = false
Vue.use(MapgisUi);
Vue.use(Mapgis2d);
Vue.use(Mapgis3d);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
