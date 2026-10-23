<template>
  <section id="home1" class="hero-section">
    <p class="eyebrow">Central Philippine University</p>
    <h1>Welcome to the College of Computer Studies</h1>
    <p class="hero-description">
      Learn, create, and prepare for a future shaped by computing and technology.
    </p>
    <RouterLink to="/#programs" class="hero-link">Explore our programs</RouterLink>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
  color: #ffffff;
  background: linear-gradient(120deg, var(--secondary-purple), var(--primary-purple));
  border-radius: 12px;
}

.eyebrow {
  margin: 0 0 0.75rem;
  color: var(--accent-gold);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  max-width: 700px;
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
}

.hero-description {
  max-width: 600px;
  margin: 1rem 0 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.hero-link {
  padding: 0.75rem 1.2rem;
  border-radius: 6px;
  background: var(--accent-gold);
  color: var(--secondary-purple);
  font-weight: 700;
  text-decoration: none;
}
</style>
