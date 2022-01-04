<template>
  <div class="dashboard-footer-warpper" @click="changeShow">
    <mapgis-ui-borderbox13 :class="{ 'dashboard-footer': true, show: show }">
      <!-- 表格，敬请期待!!! -->
    </mapgis-ui-borderbox13>
  </div>
</template>

<script>
export default {
  name: "dashboard-footer",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss">
.dashboard-footer-warpper {
  height: 23px;
  width: 100vw;
  overflow: hidden;
  .dashboard-footer {
    width: 100vw;
    height: 400px;
    z-index: 9999;
  }
  .show {
    position: absolute;
    top: calc(100vh - 8px - 400px);
  }
}
</style>