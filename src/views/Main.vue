<template>
  <mapgis-ui-layout-pro>
    <template slot="header"> <Header /> </template>
    <template slot="content-center" class="mapgis-pro-centent">
      <SubHeader />
      <Center />
    </template>
    <template slot="footer">
      <Footer />
    </template>
  </mapgis-ui-layout-pro>
</template>

<script>
import Header from "./Header.vue";
import SubHeader from "./SubHeader.vue";
import Center from "./Center.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  components: { Header, SubHeader, Center, Footer },
};
</script>
<style lang="scss">
.mapgis-ui-layout-header {
  height: 64px !important;
}

.mapgis-ui-pro-layout-content-center {
  height: calc(100vh - 64px - 24px - 2px) !important;
}
.mapgis-ui-layout-footer {
  height: 24px !important;
  padding: 0px 0px !important;
}
</style>
