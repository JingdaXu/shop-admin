<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-submenu-item
      index="1"
    >
      <template #title>
        <el-icon><document /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_attr">
        <i class="el-icon-menu" />
        <template #title>
          商品列表
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <i class="el-icon-menu" />
        <template #title>
          商品规格
        </template>
      </el-menu-item>
    </el-submenu-item>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>导航2</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const isCollapse = ref(true)

</script>

<style lang="scss" scoped>
.el-menu{
    border-right:none
}
.el-menu:not(.el-menu--collapse){
  width: 200px;
  min-height: 400px;
}
</style>
