<script setup>
import Navbar from './components/Navbar.vue' 
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <Navbar />

    <main class="page-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
:root {
  --bg-light: #ffffff;
  --text-dark: #1e293b;
  --primary-purple: #102a54;   /* CPU Navy Blue */
  --secondary-purple: #0b1d3a; /* CPU Deep Navy */
  --accent-gold: #d4af37;     /* CPU Gold (Excellence) */
}

/* Reset default browser margins */
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html {
  scroll-behavior: smooth;
}

.app-container {
  min-height: 100vh;
  background-color: #f8fafc;
}

.page-content {
  padding: 2rem 5rem;
}
</style>
