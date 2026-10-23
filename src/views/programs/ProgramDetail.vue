<script setup>
defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="program-page" :style="{ '--program-accent': program.accentColor }">
    <section class="program-hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <RouterLink to="/programs" class="back-link">All programs</RouterLink>
          <p class="program-code">{{ program.code }} <span>Undergraduate program</span></p>
          <h1>{{ program.name }}</h1>
          <p class="hero-description">{{ program.overview }}</p>
          <div class="hero-actions">
            <a href="#program-details" class="primary-action">Explore the program</a>
          </div>
        </div>
      </div>
    </section>

    <section id="program-details" class="program-details">
      <header class="details-heading">
        <p class="section-kicker">A closer look</p>
        <h2>Learn to make an impact through {{ program.code }}.</h2>
        <p>{{ program.overview }}</p>
      </header>

      <div class="study-grid">
        <section class="study-section">
          <p class="section-kicker">01 / Outcomes</p>
          <h3>Program objectives</h3>
          <ul class="detail-list">
            <li v-for="objective in program.objectives" :key="objective">{{ objective }}</li>
          </ul>
        </section>

        <section class="study-section">
          <p class="section-kicker">02 / Curriculum</p>
          <h3>Areas of study</h3>
          <ul class="detail-list">
            <li v-for="area in program.studyAreas" :key="area">{{ area }}</li>
          </ul>
        </section>
      </div>

      <section class="career-section">
        <div class="career-heading">
          <div>
            <p class="section-kicker">03 / Where it can lead</p>
            <h3>Career opportunities</h3>
          </div>
          <p>Build a path around your strengths, interests, and the needs of your community.</p>
        </div>
        <ul class="career-list">
          <li v-for="career in program.careers" :key="career">{{ career }}</li>
        </ul>
      </section>
    </section>

    <footer class="program-footer">
      <p>Compare your options</p>
      <RouterLink to="/programs">Explore all CCS programs</RouterLink>
    </footer>
  </article>
</template>
