<template lang="pug">
.txt-h1 Todo List
todo-input.pd-t-8(v-model="inputValue" @[EVENT_ADD_NAME]="addHandle")
todo-group.pd-t-8(v-for="([key, title]) in todoGroupOpts" :key="key" :title="title" :items="todoGroupList[key]" @refresh="refreshHandle" @clear="clearHandle")
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodoStore } from "@/stores"
import TodoInput from './components/todo-input'
import TodoGroup from './components/todo-group'
const EVENT_ADD_NAME = 'onAdd'
const TYPE_UN_FINISH = 'unfinished'
const TYPE_FINISH = 'finished'

const todoStore = useTodoStore()

const inputValue = ref('')
const todoGroupList = computed(() => ({ [TYPE_UN_FINISH]: todoStore.unfinishedTodos, [TYPE_FINISH]: todoStore.finishedTodos }))
const todoGroupOpts = [[TYPE_UN_FINISH, '未完成'], [TYPE_FINISH, '已完成']]

const refreshHandle = item => {
  const todos = todoStore.todos
  const index = todos.findIndex(items => item.id === items.id)
  todos.splice(index, 1, item)
}
const addHandle = (value) => todoStore.addTodos(value)
const clearHandle = (value) => todoStore.delTodos(value)
</script>

<script>
export default {
  name: 'todo-list'
}
</script>
