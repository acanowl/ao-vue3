<template lang="pug">
el-menu(:default-active="activeIndex" :mode="modeType" router @open="handleOpen" @close="handleClose")
  base-menu(:columns="columns" @click="handleClick")
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseMenu from '../base-menu'

const route = useRoute()
const props = defineProps({
  columns: Array,
  mode: {
    type: Boolean,
    default: false
  }
})
const [columnItem = {}] = props.columns
const { path = route.path } = columnItem
const activeIndex = ref(path)
const modeType = computed(() => props.mode ? 'horizontal' : 'vertical' )

const emit = defineEmits(['open', 'close', 'click'])
// key, keyPath
const handleOpen = key => emit('open', key)
const handleClose = key => emit('close', key)
const handleClick = item => emit('click', item)

</script>

<script>
export default {
  name: 'vertical-menus'
}
</script>
