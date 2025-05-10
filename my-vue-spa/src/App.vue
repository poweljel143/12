<script setup>
</script>

<template>
  <div>
    <header>
      <h1>Vue SPA с Vue Router и Pinia</h1>
      <nav>
        <RouterLink to="/">Главная</RouterLink> |
        <RouterLink to="/api">API страница</RouterLink> |
        <RouterLink to="/form">Форма</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  background-color: #f0f0f0;
  padding: 1em;
  margin-bottom: 1em;
  text-align: center;
}

nav a {
  margin: 0 1em;
  text-decoration: none;
  color:rgb(68, 94, 174);
  font-weight: bold;
}

nav a.router-link-active {
  text-decoration: underline;
}
</style>
