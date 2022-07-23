<template>
  <el-container>
    <el-aside>
      <vertical-menus :columns="menuColumns" @open="openHandle"></vertical-menus>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup>
import VerticalMenus from '@/components/vertical-menus'
import { menuColumns } from '@/config/menus'

const openHandle = v => {
  console.log(v, 'openHandle')
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
