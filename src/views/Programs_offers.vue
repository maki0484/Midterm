<template>
  <section id="programs" class="content-section">
    <p class="eyebrow">Learning at CCS</p>
    <h2>Programs</h2>
    <p class="section-intro">
      Build a strong foundation in computing through study, problem-solving, and hands-on
      learning.
    </p>
    <div class="program-grid">
      <article class="program-card">
        <h3>Computing Concepts</h3>
        <p>Explore computation, software, and the ideas behind technology.</p>
      </article>
      <article class="program-card">
        <h3>Technology in Practice</h3>
        <p>Learn to design, implement, and support technology solutions.</p>
      </article>
      <article class="program-card">
        <h3>Professional Foundations</h3>
        <p>Develop practical skills and a strong foundation for a changing field.</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  padding: 3rem 0;
  scroll-margin-top: 1.5rem;
}

.eyebrow {
  margin: 0 0 0.5rem;
  color: var(--primary-purple);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h2 {
  margin: 0;
  color: var(--secondary-purple);
  font-size: 2rem;
}

.section-intro {
  max-width: 680px;
  color: #475569;
  line-height: 1.6;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.program-card {
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #ffffff;
}

.program-card h3 {
  margin-top: 0;
  color: var(--primary-purple);
}

.program-card p {
  margin-bottom: 0;
  color: #475569;
  line-height: 1.6;
}
</style>