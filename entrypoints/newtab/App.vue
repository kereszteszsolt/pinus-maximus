<template>
  <main class="container">
    <h1>New Tab</h1>
    <p>Welcome — this is the extension's new tab page.</p>
  </main>
</template>

<script setup lang="ts">
// No props yet; simple static page
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial;
  padding: 1rem;
  box-sizing: border-box;
}

h1 {
  margin: 0 0 0.5rem 0;
  font-size: 1.6rem;
}

p {
  margin: 0;
  color: #444;
}
</style>
