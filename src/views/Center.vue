<template>
  <mapgis-ui-borderbox11
    class="dashboard-center"
    :title="title"
    :color="color"
    :backgroundColor="background"
  >
    <Map />
  </mapgis-ui-borderbox11>
</template>

<script>
import Map from "./Map.vue";

export default {
  components: { Map },
  data() {
    return {
      title: "标题",
      color: ["#0de7c2", "#7acaec"],
      background: "#282c34",
    };
  },
};
</script>

<style lang="scss">
.dashboard-center {
  height: 100%;
  width: 100vw;
  z-index: 1000;
  background: #282c34;
  .border-box-content {
    padding: 60px 20px 60px 20px;
    .mapboxgl-map {
      height: calc(100vh - 64px - 24px - 2px - 80px);
    }
  }
}
</style>