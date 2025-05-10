<template>
  <div class="page">
    <h2>Отправка формы</h2>
    <form @submit.prevent="submitForm">
      <label>
        Заголовок:
        <input v-model="form.title" required />
      </label>
      <label>
        Текст:
        <textarea v-model="form.body" required></textarea>
      </label>
      <button type="submit">Отправить</button>
    </form>

    <div v-if="response" class="response">
      <h3>Ответ сервера:</h3>
      <pre>{{ response }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  title: '',
  body: '',
})

const response = ref('')

const submitForm = async () => {
  const payload = {
    title: form.value.title,
    body: form.value.body,
    userId: 1,
  }

  const res = await axios.post('https://jsonplaceholder.typicode.com/posts', payload)
  response.value = JSON.stringify(res.data, null, 2)
}
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

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 1rem;
  font-weight: bold;
}

input, textarea {
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color:rgb(68, 94, 174);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: fit-content;
}

.response {
  margin-top: 2rem;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 6px;
}
</style>
