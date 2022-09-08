<template lang="pug">
el-container
  el-aside
    base-menus(:currentRoute="currentRoute" :columns="homeRouters" @open="openHandle" @close="closeHandle" @click="clickHandle")
  el-main
    router-view
</template>

<script setup>
import { ref } from 'vue'
import BaseMenus from '@/components/base-menus'
import { homeRouters } from '@/router/router-maps'
import router from '@/router'

const currentRoute = ref(router?.currentRoute?.value?.path || '')

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

<style lang="scss">
.el-container {
  height: 100vh;
}
</style>
