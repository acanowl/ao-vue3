import { defineStore } from "pinia"

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: [],
    filter: 'all',
    nextId: 0
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter(todo => todo.isFinished)
    },
    unfinishedTodos({ todos }) {
      return todos.filter(todo => !todo.isFinished)
    },
    filterTodos() {
      if (this.filter === 'finished') {
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      } else {
        return this.todos
      }
    }
  },
  actions: {
    addTodos(text) {
      this.todos.push({ text, id: this.nextId++, isFinished: false })
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