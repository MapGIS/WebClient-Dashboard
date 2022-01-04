<template>
  <div class="webclient-bashboard-subheader">
    <mapgis-ui-decoration5 class="subtop-decoration"> </mapgis-ui-decoration5>
    <mapgis-ui-decoration11 class="toolbar-item"> </mapgis-ui-decoration11>
    <div class="sub-toolbar-wrapper">
      <mapgis-ui-borderbox8
        v-for="(sub, i) in subtools"
        :key="i"
        :title="sub.title"
        class="sub-toolbar-item"
      >
        {{ sub.title }}
      </mapgis-ui-borderbox8>
    </div>
    <div class="sub-action-wrapper">
      <mapgis-ui-decoration7
        v-for="(sub, i) in subactions"
        :key="i"
        :title="sub.title"
        class="sub-action-item"
      >
        {{ sub.title }}
      </mapgis-ui-decoration7>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard-subheader",
  data() {
    return {
      subtools: [
        { title: "子菜单1", key: "" },
        { title: "子菜单2", key: "" },
        { title: "子菜单3", key: "" },
      ],
      subactions: [
        { title: "行为1", key: "" },
        { title: "行为2", key: "" },
        { title: "行为3", key: "" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.webclient-bashboard-subheader {
  height: 48px;
  width: 100vw;
  position: absolute;
  background: transparent !important;
  z-index: 9000;
  .toolbar-item {
    position: absolute;
    top: -40px;
    width: 200px;
    height: 60px;
    z-index: 9000;
  }
  .sub-toolbar-wrapper {
    position: absolute;
    top: 0px;
    left: 230px;
    display: flex;
    .sub-toolbar-item {
      width: 80px;
      height: 24px;
      z-index: 9000;
    }
  }

  .sub-action-wrapper {
    position: absolute;
    top: 0px;
    right: 230px;
    display: flex;
    .sub-action-item {
      width: 80px;
      height: 24px;
      z-index: 9000;
      margin: 0 10px;
    }
  }

  .subtop-decoration {
    top: -20px;
    position: absolute;
    width: 40vw;
    left: 30vw;
    height: 32px;
  }
}
</style>