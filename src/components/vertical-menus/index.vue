<template>
  <el-menu :default-active="activeIndex" router @open="handleOpen" @close="handleClose">
    <base-menu :columns="props.columns" />
  </el-menu>
</template>

<script setup>
import { defineProps, defineEmits, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import BaseMenu from '../base-menu'

const route = useRoute()
const props = defineProps(['columns'])
const [columnItem = {}] = reactive(props.columns)
const { path = route.path } = columnItem
const activeIndex = ref(path)

const emit = defineEmits(['open', 'close'])
const handleOpen = key => emit('open', key)
// key, keyPath
const handleClose = key => emit('close', key)
</script>

<script>
export default {
  name: 'vertical-menus'
}
</script>
