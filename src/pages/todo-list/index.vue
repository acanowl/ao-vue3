<template lang="pug">
.todo-list
  .flex
    el-input(v-model="inputValue" clearable)
    el-button(@click='addTodoItem') 新增
  el-tabs(v-model="filterValue" @tab-click="changeTabs")
    el-tab-pane(:label="item" :name="item" v-for="item in ['all', 'finished', 'unfinished']" :key="item")
      .flex-ver(v-for="(item, index) in todoStore.filterTodos" :key="item.id")
        .flex(:class="{ 'txt-minor': item.isFinished }")
          .flex-1 {{ index + 1 }}、{{ item.text }}
          div(@click="finishHandle(item)") {{ cptIcon(item) }}
  
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTodoStore } from "@/stores"
const todoStore = useTodoStore()

const inputValue = ref('')
const addTodoItem = () => {
  todoStore.addTodos(inputValue.value)
  inputValue.value = ''
}

const filterValue = ref('all')
const changeTabs = () => {
  todoStore.$patch({ filter: filterValue })
}

const finishHandle = (item) => {
  const { id, isFinished } = item
  if (isFinished) {
    const sliceTodos = todoStore.todos
    console.log(sliceTodos, 'sliceTodos')
    sliceTodos.splice(sliceTodos.findIndex(item => item.id === id), 1)
    console.log(sliceTodos, 'sliceTodos')
    todoStore.$patch({ todos: sliceTodos })
  } else {
    todoStore.$patch({ todos: todoStore.todos.map(item => item.id === id ? { ...item, isFinished: true } : item) })
  }
}

const cptIcon = computed(() => item => item.isFinished ? 'X' : '√')
</script>

<script>
export default {
  name: 'todo-list'
}
</script>

<style lang="scss">
.todo-list {}
</style>
