<template lang="pug">
.flex.items-center.txt-h5(:class="{ 'txt-minor': isFinished }")
  el-checkbox.pd-r-8(v-model="props.items.isFinished" @change="changeHandle")
  .flex-1.pd-v-8(@click="changeHandle(!isFinished)") {{ text }}
  delete.txt-h3(style="width: 1em; height: 1em" @click="clearHandle")
</template>
  
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ items: Object })
const emits = defineEmits(['refresh', 'clear'])
const { isFinished, text } = props.items

const changeHandle = value => emits('refresh', { ...props.items, isFinished: value })

const clearHandle = () => emits('clear', props.items)

</script>
  
<script>
export default {
  name: 'todo-item'
}
</script>
  