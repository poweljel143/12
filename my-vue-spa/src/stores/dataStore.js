// src/stores/dataStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore('data', {
  state: () => ({
    posts: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPosts() {
      this.loading = true
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.posts = res.data
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  }
})
