<template>
  <mapgis-ui-borderbox11 class="dashboard-center" :title="title" :color="color">
  </mapgis-ui-borderbox11>
</template>

<script>
export default {
  data() {
    return {
      title: "标题",
      color: ["#0de7c2", "#7acaec"],
    };
  },
};
</script>

<style lang="scss">
.dashboard-center {
  height: 100%;
  width: 100vw;
  z-index: 1000;
}
</style>