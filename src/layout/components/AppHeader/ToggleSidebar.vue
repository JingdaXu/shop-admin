<template>
  <el-icon>
    <el-icon
      :size="size"
      :color="color"
    >
      <Expand
        @click="comStore.changeCollapsed"
        v-if="comStore.isCollapsed"
      />
      <Fold
        @click="comStore.changeCollapsed"
        v-else
      />
    </el-icon>
  </el-icon>
</template>

<script setup lang='ts'>
import { commonStore } from '@/store/index'
import { ref } from 'vue'
const comStore = commonStore()
const size = ref('20')
const color = ref('black')
</script>

<style lang="scss" scoped>
i{
    width: 20px;
    height: 20px;
    display: inline-block;
    cursor: pointer;
}
</style>
