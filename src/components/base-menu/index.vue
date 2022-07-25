<template lang="pug">
div(v-for="(column, index) in columns" :key="column.path + index")
  el-sub-menu(:index="column.path" v-if="column.children && column.children.length")
    template(#title) {{ column.name }}
    base-menu(:columns="column.children" @click="handleClick")
  el-menu-item(:index="column.path" v-else @click="handleClick(column)")
    template(#title) {{ column.name }}
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const { columns } = defineProps(['columns'])
const emit = defineEmits(['click'])
const handleClick = item => emit('click', item)
</script>

<script>
export default {
  name: 'base-menu'
}
</script>
