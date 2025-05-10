<template>
  <div class="page">
    <h2>Посты с JSONPlaceholder</h2>
    <button @click="fetchPosts">Загрузить посты</button>
    <div v-if="loading">Загрузка...</div>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.title }}</strong><br />
        <span>{{ post.body }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useDataStore } from '../stores/dataStore'
import { onMounted } from 'vue'

const store = useDataStore()
const { posts, fetchPosts, loading } = store

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
.page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px #ccc;
}

button {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  background:rgb(68, 94, 174);
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

li {
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #f0f0f0;
  border-radius: 6px;
}
</style>
