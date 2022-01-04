<template>
  <div>
    <mapgis-ui-div class="webclient-bashboard-header">
      <mapgis-ui-decoration2 class="left-decoration"> </mapgis-ui-decoration2>
      <mapgis-ui-decoration1 class="left-sub-decoration">
      </mapgis-ui-decoration1>
      <mapgis-ui-decoration7 class="top-decoration">
        &nbsp;&nbsp;成都城镇化项目ArcGIS制图成果转换&nbsp;&nbsp;
      </mapgis-ui-decoration7>
      <mapgis-ui-decoration8 class="right-decoration" reverse>
      </mapgis-ui-decoration8>
      <mapgis-ui-decoration3 class="right-sub-decoration">
      </mapgis-ui-decoration3>
    </mapgis-ui-div>
    <mapgis-ui-decoration5 class="subtop-decoration"> </mapgis-ui-decoration5>
  </div>
</template>

<script>
export default {
  name: "dashboard-header",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.webclient-bashboard-header {
  height: 64px;
  width: 100vw;
  display: flex;

  .left-decoration {
    position: absolute;
    top: -10px;
    width: 25vw;
    height: 54px;
  }

  .left-sub-decoration {
    position: absolute;
    top: 20px;
    left: 15vw;
    width: 10vw;
    height: 30px;
  }

  .top-decoration {
    position: absolute;
    width: 50vw;
    height: 54px;
    left: 25vw;
    font-size: 36px;
  }

  .right-decoration {
    position: absolute;
    right: 0px;
    width: 25vw;
    height: 54px;
  }

  .right-sub-decoration {
    position: absolute;
    top: 24px;
    right: 15vw;
    width: 15vw;
    height: 40px;
  }
}
</style>