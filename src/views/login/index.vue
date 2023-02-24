<template>
  <h1>登录</h1>
</template>

<script setup lang="ts">
import { getLoginInfo } from '@/api/common'
import { onMounted } from 'vue'

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped></style>
