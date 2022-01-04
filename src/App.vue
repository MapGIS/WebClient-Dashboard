<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import mapgisui from '@mapgis/webclient-vue-ui';

export default {
  name: 'app',
  mounted() {
    mapgisui.setTheme('technology');
    mapgisui.setLayout('standard');
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #282c34;
}
</style>
