<template lang="pug">
.flex
  el-input(v-model="inputValue" clearable @input="inputHandle")
  el-button(@click='addTodoItem') {{ props.text }}
</template>
  
<script setup>
import { ref, defineProps, defineEmits, watchEffect } from 'vue'
const props = defineProps({ 'modelValue': String, text: { type: String, default: '新增' } })
const emits = defineEmits(['onAdd', 'update:modelValue'])

const inputValue = ref(props.modelValue)
watchEffect(() => (inputValue.value = props.modelValue))

const inputHandle = value => emits('update:modelValue', value)
const addTodoItem = () => {
  if (props.modelValue) {
    emits('onAdd', props.modelValue)
    emits('update:modelValue', '')
  }
}
</script>
  