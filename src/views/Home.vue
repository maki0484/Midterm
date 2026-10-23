<script setup>
import Hero from './Hero.vue'
import ProgramsOffers from './Programs_offers.vue'
import Faculty from './Faculty.vue'
import Partnerships from './Partnerships.vue'
</script>

<template>
  <div class="home-page">
    <Hero />
    <ProgramsOffers />
    <Faculty />
    <Partnerships />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
