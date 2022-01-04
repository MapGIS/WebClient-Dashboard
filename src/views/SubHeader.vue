<template>
  <div class="webclient-bashboard-subheader">
    <mapgis-ui-decoration5 class="subtop-decoration"> </mapgis-ui-decoration5>
    <mapgis-ui-decoration11 class="toolbar-item"
      >{{ firsttool }}
    </mapgis-ui-decoration11>
    <div class="sub-toolbar-wrapper">
      <mapgis-ui-borderbox8
        v-for="(sub, i) in firstmenus.children"
        :key="i"
        :title="sub.title"
        class="sub-toolbar-item"
      >
        {{ sub.title }}
      </mapgis-ui-borderbox8>
    </div>
    <div class="second-toolbar-wrapper">
      <mapgis-ui-borderbox8
        v-for="(sub, i) in secondmenus.children"
        :key="i"
        :title="sub.title"
        class="second-toolbar-item"
      >
        {{ sub.tooltip }}
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
import axios from "axios";

export default {
  name: "dashboard-subheader",
  data() {
    return {
      firsttool: "菜单1",
      secondtool: "子菜单1",
      subtools: [
        {
          title: "菜单1",
          children: [
            {
              title: "子菜单1",
              tooltip: "子菜单1",
              children: [
                {
                  title: "孙菜单1",
                  tooltip: "孙菜单1",
                },
              ],
            },
          ],
        },
      ],
      subactions: [
        { title: "行为1", key: "" },
        { title: "行为2", key: "" },
        { title: "行为3", key: "" },
      ],
    };
  },
  mounted() {
    this.parseTools();
  },
  computed: {
    firstmenus: function () {
      return this.findNode(this.firsttool) || [];
    },
    secondmenus: function () {
      return this.findNode(this.secondtool) || [];
    },
  },
  methods: {
    parseTools() {
      axios.get("config/template/header-menus.json").then((res) => {
        let { data } = res;
        this.subtools = data;
        this.firsttool = data[0].title;
        this.secondtool = data[0].children[0].title;
      });
    },
    findNode(title) {
      let result = undefined;
      const { subtools } = this;
      const vm = this;
      if (subtools) {
        subtools.forEach((c) => {
          result = result || vm.loopNode(c, title);
        });
      }
      return result;
    },
    loopNode(node, title) {
      let result = undefined;
      const vm = this;
      if (node && node.title == title) {
        return node;
      }
      if (node.children) {
        node.children.forEach((c) => {
          result = result || vm.loopNode(c, title);
        });
      }
      return result;
    },
  },
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
    top: -24px;
    left: 200px;
    display: flex;
    .sub-toolbar-item {
      width: 80px;
      height: 24px;
      z-index: 9000;
      white-space: nowrop;
      white-space: nowrop;
      text-overflow: ellipsis;
    }
  }

  .second-toolbar-wrapper {
    position: absolute;
    top: 0px;
    left: 200px;
    display: flex;
    .second-toolbar-item {
      width: 80px;
      height: 24px;
      z-index: 9000;
      white-space: nowrop;
      white-space: nowrop;
      text-overflow: ellipsis;
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