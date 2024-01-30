<template>
  <svg :style="{ width: width, height: height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
// 接收父组件传来的参数
defineProps({
  // xlink:href属性值前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  // 提供使用图表的名字
  name: String,
  color: {
    type: String,
    default: ""
  },
  width: {
    type: String,
    default: '24px'
  },
  height: {
    type: String,
    default: '24px'
  }
})
</script>
