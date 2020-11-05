<template>
  <div class="app-wrapper">
    <!-- 顶部导航栏 -->
    <nav-bar />
    <!-- 主体 -->
    <router-view />
    <!-- <app-main /> -->
    <!-- 个人信息模块 -->
  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
</style>