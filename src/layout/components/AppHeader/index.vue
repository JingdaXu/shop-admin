<template>
  <div class="app-header">
    <ToggleSidebar />
  </div>
</template>

<script setup lang='ts'>
import ToggleSidebar from './ToggleSidebar.vue'
</script>

<style lang="scss" scoped>
.app-header{
  display: flex;
  align-items: center;
  height: 60px;
  background-color: white;
}
</style>
