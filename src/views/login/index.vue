<template>
  <h1>登录</h1>
</template>

<script setup lang="ts">
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { onMounted, ref } from 'vue'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then(data => {
    // res: axios包装的响应对象，data、status
    // res.data:后端返回的数据
    // console.log(res.data.login_logo)
    // console.log(data)
    // console.log(res)
    list.value = data.slide
  })
})
</script>

<style lang="scss" scoped></style>
