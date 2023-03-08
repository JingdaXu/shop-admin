<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader />
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import AppMenu from './components/AppMenu/index.vue'
import AppHeader from './components/AppHeader/index.vue'
</script>

<style lang="scss" scoped>

.el-header,
.el-footer{
    background-color: #b3c0d1;
    color:#333;
}
.el-aside{
    background-color: #304156;
    color:#333;
    width: auto;
}
.el-main{
    background-color: #e9eef3;
    color:#333;
}
.el-container{
  height: 100vh;
}
</style>
