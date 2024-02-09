<template>
  <div class="layout_container">

    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <el-scrollbar class="scrollbar">
        <!-- <Logo></Logo> -->

        <el-menu class="el-menu-vertical" :collapse="isCollapse" @open="handleOpen" @close="handleClose" text-color="red">
          <!-- Logo子标签 -->
          <el-menu-item index="1">
            <el-icon>
              <img :src="settings.logo_path" />
            </el-icon>
            <template #title>
              <div>
                韩亚文件系统
              </div>
            </template>
          </el-menu-item>
          <!-- Logo结束 -->
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <Folder />
              </el-icon>
              <span>文件夹</span>
            </template>
            <el-menu-item-group>
              <template #title><span>部门文件夹</span></template>
              <el-menu-item index="1-1">002</el-menu-item>
              <el-menu-item index="1-2">003</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="我的文件夹">
              <el-menu-item index="1-3">010</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="3">
            <el-icon>
              <document />
            </el-icon>
            <template #title>文档</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting />
            </el-icon>
            <template #title>设置</template>
          </el-menu-item>

        </el-menu>

      </el-scrollbar>
    </div>
    <!-- 顶部菜单 -->
    <div class="layout_topbar">
      <h1> 顶部</h1>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">ex</el-radio-button>
        <el-radio-button :label="true">co</el-radio-button>
      </el-radio-group>
    </div>
    <!-- 内容页面 -->
    <div class="layout_main">
      <h1 style="height: 10000px;">内容</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/layout/logo/index.vue";
import settings from "@/settings";
import {
  Document,
  Folder,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ref } from "vue";

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.layout_container {
  // display: flex;
  width: 100%;
  height: 100vh;
  background-color: #b7e64c;

  .layout_slider {

    .scrollbar {
      width: 100%;
      height: 100vh;
    }

    .el-menu-vertical {
      .el-menu-item:first-child {
        height: $home-menu-left-logoHeight;

        div {
          margin: 14px;
          font-size: 24px;
        }
      }

      width: $home-menu-left-width;
      min-height: 100vh;
      background: $home-menu-left-color;

    }

    .el-menu--collapse {
      width: 4vw;
    }

    height: 100vh;
    // width: $home-menu-left-width;

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
  }

}
</style>