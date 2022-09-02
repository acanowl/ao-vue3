import { defineStore } from "pinia"

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: [],
    nextId: 0
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter(todo => todo.isFinished)
    },
    unfinishedTodos({ todos }) {
      return todos.filter(todo => !todo.isFinished)
    }
  },
  actions: {
    addTodos(text) {
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
    delTodos(item) {
      this.todos.splice(this.todos.findIndex(items => items.id === item.id), 1)
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage, // 默认存储 sessionStorage
      }
    ]
  }
})