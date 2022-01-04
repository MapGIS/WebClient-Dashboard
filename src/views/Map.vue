<template>
  <mapgis-web-map
    crs="EPSG:4326"
    :mapStyle="map.style"
    :center="map.center"
    :zoom="map.zoom"
    @load="loadMap"
  >
    <mapgis-rastertile-layer
      v-for="(l, i) in backgrounds"
      :key="i"
      :layerId="l.layerId"
      :tileSize="l.tileSize"
      :source="{ tileSize: 256 }"
      :url="l.url"
    />
    <!-- <mapgis-geojson-layer v-bind="geojson_china_bounds" /> -->
    <mapgis-mvt-style-layer v-bind="vectortile" />
    <div class="map-toolbar-wrapper">
      <mapgis-ui-decoration9 class="map-toolbar"> </mapgis-ui-decoration9>
      <mapgis-ui-decoration11
        class="map-toolbar-item"
        v-for="(t, i) in toolbars"
        :key="i"
      >
        <span @click="handleMenus(t)">{{ t.title }}</span>
      </mapgis-ui-decoration11>
      <mapgis-ui-decoration12 class="map-toolbar"> </mapgis-ui-decoration12>
    </div>
    <div class="map-legend-wrapper">
      <mapgis-ui-decoration11 class="map-legend-upgrade">
        <span @click="handleUpgradeLegend">更新图例</span>
      </mapgis-ui-decoration11>
      <mapgis-ui-borderbox4
        :color="color"
        :backgroundColor="background"
        class="map-legend-item"
        reverse
      >
        <mapgis-mvt-legend ref="legend" enableControl />
      </mapgis-ui-borderbox4>
    </div>
  </mapgis-web-map>
</template>

<script>
import axios from "axios";
import { Style } from "@mapgis/webclient-es6-service";
const { MarkerStyle, LineStyle, PointStyle, FillStyle } = Style;

export default {
  name: "webclient-dashboard-map",
  data() {
    return {
      color: ["#0de7c2", "#7acaec"],
      background: '#282c34',
      toolbars: [],
      map: {
        style: {
          version: 8,
          sources: {},
          layers: [
            {
              id: "背景",
              type: "background",
              paint: { "background-color": "#282c34" },
            },
          ],
        },
        center: [114.3, 30.5],
        zoom: 3,
      },
      backgrounds: [
        {
          layerId: "矢量图",
          url: "http://t1.tianditu.com/DataServer?T=vec_c&L={z}&Y={y}&X={x}&tk=9c157e9585486c02edf817d2ecbc7752",
          tileSize: 256,
        },
        {
          layerId: "注记",
          url: "http://t1.tianditu.com/DataServer?T=cia_c&L={z}&Y={y}&X={x}&tk=9c157e9585486c02edf817d2ecbc7752",
          tileSize: 256,
        },
      ],
      geojson_china_bounds: {
        layerId: "geojson_layer_id",
        layerStyle: new FillStyle({
          color: "#7acaec",
          opacity: 0.25,
          outlineColor: "#0de7c2",
        }),

        highlightStyle: {
          polygon: new FillStyle({
            width: 8,
            color: "#7acaec",
            opacity: 0.5,
            outlineColor: "#ff0000",
          }),
        },
        data: `http://develop.smaryun.com/static/data/geojson/china.geojson`,
        enablePopup: true,
        enableTips: false,
      },
      originmvt: {
        version: 8,
        sources: {},
        layers: [
          {
            id: "背景",
            type: "background",
            paint: { "background-color": "#282c34" },
          },
        ],
      },
      vectortile: {
        // mvtStyle: `http://192.168.82.89:6163/igs/rest/mrms/vtiles/styles/国土空间规划总体规划多规合一_style.json`,
        // mvtStyle: `http://192.168.82.89:6163/igs/rest/mrms/vtiles/styles/国土空间规划总体规划规划地类_style.json`,
        // mvtStyle: `http://192.168.82.89:6163/igs/rest/mrms/vtiles/styles/国土空间规划总体规划建设用地管制分区规划_style.json`,
        // mvtStyle: `http://192.168.82.89:6163/igs/rest/mrms/vtiles/styles/国土空间规划总体规划生态保护红线规划_style.json`,
        // mvtStyle: `http://192.168.82.89:6163/igs/rest/mrms/vtiles/styles/国土空间规划总体规划土地利用规划_style.json`,
        mvtStyle: `http://192.168.82.89:6163/igs/rest/mrms/vtiles/styles/国土空间规划总体规划土地整治规划_style.json`,
        mode: "set",
      },
    };
  },
  mounted() {
    this.parseTools();
  },
  methods: {
    loadMap(payload) {
      const { map } = payload;
      window.map2d = map;
    },
    handleMenus(toolbar) {
      console.log("click", toolbar);
      const { title } = toolbar;

      switch (title) {
        case "定位到范围":
          const bbox = [
            [105.625667944, 28.4538458430001],
            [107.094359533, 29.5733275260001],
          ];
          window.map2d.fitBounds(bbox, {
            padding: { top: 10, bottom: 10, left: 10, right: 10 },
          });
          break;
        case "视角旋转":
          break;
        case "卷帘对比":
          break;
        case "地图文档":
          break;
      }
    },
    handleUpgradeLegend() {
      if (!this.$refs.legend) return;
      console.log("legend");
      this.$refs.legend.refresh();
    },
    parseTools() {
      const vm = this;
      axios.get("config/template/toolbar.json").then((res) => {
        let { data } = res;
        vm.toolbars = data;
      });
    },
  },
};
</script>

<style lang="scss">
.map-toolbar-wrapper {
  position: absolute;
  top: 0px;
  left: 10px;
  z-index: 9999;
  .map-toolbar {
    height: 130px;
    width: 130px;
  }
  .map-toolbar-item {
    height: 50px;
    width: 150px;
    .border-box-content {
      top: -45px;
    }
  }
}
.map-legend-wrapper {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 9998;
  height: 350px;

  overflow-y: scroll;
  .map-legend-item {
    height: 350px;
    width: 250px;
  }
  .map-legend-upgrade {
    position: absolute;
    z-index: 9999;
    top: 10px;
    height: 60px;
    width: 240px;
  }
}
#mapgis-legend-standard {
  height: 260px;
  overflow-y: scroll;
}
</style>