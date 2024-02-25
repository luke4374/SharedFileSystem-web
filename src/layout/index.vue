<template>
  <div class="layout_container">

    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <!-- logo标签 -->
      <Logo></Logo>
      <!-- 左侧菜单列表 -->
      <el-scrollbar class="scrollbar">
        <el-menu class="left-menu" background-color="#141718" text-color="white" active-text-color="#009490"
          :default-active="$route.path">
          <Menu :menuList="userStore.menuRouters"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部菜单 -->
    <div class="layout_topbar">
      <p>顶部</p>
    </div>
    <!-- 内容页面 -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
// 获取路由信息
import { useRoute } from "vue-router";
import Logo from "@/layout/logo/index.vue";
import Main from "./main/index.vue";
import useUserStore from "@/store/modules/user";
import { ref } from "vue";
// 菜单组件
import Menu from "./menu/index.vue";

const isCollapse = ref(false)
let userStore = useUserStore()

let $route = useRoute();

</script>

<style lang="scss" scoped>
.layout_container {
  // display: flex;
  width: 100%;
  height: 100vh;
  background: #b7e64c;

  .layout_slider {

    height: 100vh;
    width: $home-menu-left-width;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $home-menu-top-height);

      .el-menu {
        border-right: none;
      }
    }

    .left-menu {
      min-height: 100vh;
      background-color: $home-menu-left-color;

    }
  }

  .layout_topbar {
    background: #eeaa22;
    position: fixed;
    width: calc(100% - $home-menu-left-width);
    height: $home-menu-top-height;
    top: 0px;
    left: $home-menu-left-width;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $home-menu-left-width);
    height: calc(100vh - $home-menu-top-height);
    left: $home-menu-left-width;
    top: $home-menu-top-height;
    padding: 20px;
    overflow: auto; // 滚动条自适应

    p {
      height: 10000px;
      background-color: $home-menu-left-color;
      border: 1px solid;
    }
  }

}
</style>