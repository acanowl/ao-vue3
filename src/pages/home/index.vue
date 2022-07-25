<template lang="pug">
el-container
  el-aside
    base-menus(:columns="menuColumns" @open="openHandle" @close="closeHandle" @click="clickHandle")
  el-main
    router-view
</template>

<script setup>
import BaseMenus from '@/components/base-menus'
import { menuColumns } from '@/config/menus'

const openHandle = v => {
  console.log(v, 'openHandle')
}
const closeHandle = v => {
  console.log(v, 'closeHandle')
}
const clickHandle = v => {
  console.log(v, 'clickHandle')
}
</script>

<script>
export default {
  name: 'page-home'
}
</script>

<style>
.page-home {}
</style>
