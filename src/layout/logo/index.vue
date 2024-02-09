<template>
  <div class="logo">
    <img :src="settings.logo_path" alt="HanaIcon" />
    <p>{{ settings.title }}</p>
  </div>
</template>

<script setup lang="ts">
import settings from '@/settings';

</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $home-menu-left-logoHeight;
  display: flex;
  align-items: center;
  padding: 12px;

  img {
    width: 36px;
    height: 36px;
  }

  p {
    font-size: 23px;
    color: white;
    // font-family: $login-chn-font;
    margin-left: 12px;
  }
}
</style>