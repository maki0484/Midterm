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

