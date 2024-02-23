<!-- 菜单组件根据路由关系动态生成 -->
<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 无子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>

    <!-- 只有一个子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path">
        <template #title>
          <span> {{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有两个以上子路由 递归调用 -->
    <template v-if="item.children && item.children.length > 1">
      <el-sub-menu v-if="!item.children[0].meta.hidden" :index="item.path">
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>

  </template>
</template>

<script setup lang="ts">
defineOptions({
  name: "Menu"
})

// 获取父组件传入的全部路由数据
defineProps(['menuList'])

</script>

<style lang="scss" scoped></style>