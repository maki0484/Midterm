<script setup>
import Hero from './Hero.vue'
import ProgramsOffers from './Programs_offers.vue'
import About from './About.vue'
import Announcements from './Announcements.vue'
</script>

<template>
  <div class="home-page">
    <Hero />
    <ProgramsOffers />
    <About />
    <Announcements />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>