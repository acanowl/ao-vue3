<template>
  <div v-for="(column, index) in columns" :key="column.path + index">
    <el-sub-menu :index="column.path" v-if="column.children && column.children.length">
      <template #title>
        <span>{{ column.name }}</span>
      </template>
      <base-menu :columns="column.children"></base-menu>
    </el-sub-menu>
    <el-menu-item :index="column.path" v-else>
      <template #title>{{ column.name }}</template>
    </el-menu-item>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
const props = defineProps(['columns'])
const columns = reactive(props.columns)
</script>

<script>
export default {
  name: 'base-menu'
}
</script>
