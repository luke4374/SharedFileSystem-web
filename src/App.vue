<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts" name="main">
import { onMounted } from "vue";
import { reqLogin } from "./api/user";
import { RouterView } from "vue-router";

onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '111111'
  })
}
)
</script>


<style scoped lang="scss"></style>