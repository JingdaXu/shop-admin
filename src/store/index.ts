import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const commonStore = defineStore('main', {
  state: () => {
    return { age: 30, isCollapsed: false }
  },
  getters: {
    gettersAge (state) {
      return state.age + 5
    }
  },
  actions: {
    addAge () {
      // this指向store仓库
      this.age++
    },
    changeCollapsed () {
      this.isCollapsed = !this.isCollapsed
    }
  }
})
export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 0
  })
})
