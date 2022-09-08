<template lang="pug">
.todo-group
  .txt-h3.txt-bold {{ props.title }}
  todo-item(:items="item" v-for="item in props.items" :key="item.id" v-bind="$attrs")
</template>
  
<script setup>
import { defineProps } from 'vue'
import TodoItem from '../todo-item'
const props = defineProps({ title: String, items: Array })

</script>
  
<script>
export default {
  name: 'todo-group'
}
</script>
  