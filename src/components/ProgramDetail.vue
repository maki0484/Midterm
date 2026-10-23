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
            <a href="#program-faculty" class="secondary-action">Meet the faculty</a>
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

    <section id="program-faculty" class="faculty-section">
      <div class="faculty-inner">
        <header class="faculty-heading">
          <div>
            <p class="section-kicker">The people who teach it</p>
            <h2>{{ program.code }} faculty</h2>
          </div>
          <p>Meet the faculty members associated with this program.</p>
        </header>

        <div class="faculty-grid">
          <article v-for="person in program.faculty" :key="person.name" class="faculty-person">
            <img :src="person.image" :alt="person.name" />
            <div class="faculty-person-details">
              <h3>{{ person.name }}</h3>
              <p>{{ person.title }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <footer class="program-footer">
      <p>Compare your options</p>
      <RouterLink to="/programs">Explore all CCS programs</RouterLink>
    </footer>
  </article>
</template>

<style scoped>
.program-page {
  --ink: #15212b;
  --muted: #596873;
  margin: -2rem -5rem 0;
  color: var(--ink);
  background: #f6f6f1;
}

.program-hero {
  padding: 3rem 5rem;
  background: #10202c;
  color: #f8f8f2;
}

.hero-inner,
.faculty-inner {
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
}

.hero-inner {
  grid-template-columns: minmax(0, 1fr);
}

.hero-copy {
  max-width: 900px;
}

.back-link {
  display: inline-block;
  margin-bottom: 2.5rem;
  color: #d4dfe3;
  font-size: 0.9rem;
  text-decoration-color: var(--program-accent);
  text-underline-offset: 4px;
}

.program-code,
.section-kicker {
  margin: 0 0 0.8rem;
  color: var(--program-accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.program-code span {
  margin-left: 0.7rem;
  color: #aebec4;
  font-weight: 600;
}

.hero-copy h1 {
  max-width: 720px;
  margin: 0;
  font-size: 3.7rem;
  font-weight: 750;
  letter-spacing: 0;
  line-height: 1.04;
}

.hero-description {
  max-width: 610px;
  margin: 1.4rem 0 0;
  color: #c5d0d2;
  font-size: 1.08rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.4rem;
  margin-top: 2rem;
}

.primary-action,
.secondary-action {
  color: #f8f8f2;
  font-size: 0.92rem;
  font-weight: 700;
  text-underline-offset: 5px;
}

.primary-action {
  padding: 0.8rem 1rem;
  border-radius: 4px;
  background: var(--program-accent);
  color: #10202c;
  text-decoration: none;
}

.secondary-action {
  text-decoration-color: var(--program-accent);
}

.program-details {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4.5rem 5rem 4rem;
  scroll-margin-top: 1rem;
}

.details-heading {
  max-width: 760px;
  margin-bottom: 3rem;
}

.details-heading h2,
.faculty-heading h2 {
  margin: 0;
  color: #142735;
  font-size: 2.4rem;
  font-weight: 750;
  letter-spacing: 0;
  line-height: 1.15;
}

.details-heading > p:last-child,
.faculty-heading > p,
.career-heading > p {
  color: var(--muted);
  line-height: 1.75;
}

.study-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4rem;
}

.study-section {
  padding-top: 1.2rem;
  border-top: 2px solid #d9dfd9;
}

.study-section h3,
.career-heading h3 {
  margin: 0 0 1.2rem;
  color: #142735;
  font-size: 1.5rem;
  letter-spacing: 0;
}

.detail-list {
  display: grid;
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.detail-list li {
  position: relative;
  padding: 0 0 0.8rem 1.25rem;
  border-bottom: 1px solid #e1e4df;
  color: #42515b;
  line-height: 1.6;
}

.detail-list li::before {
  position: absolute;
  top: 0.6em;
  left: 0;
  width: 6px;
  height: 6px;
  background: var(--program-accent);
  content: '';
}

.career-section {
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 2px solid #d9dfd9;
}

.career-heading,
.faculty-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
}

.career-heading > p {
  max-width: 370px;
  margin: 0 0 0.25rem;
}

.career-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin: 1.8rem 0 0;
  padding: 0;
  border-top: 1px solid #d9dfd9;
  list-style: none;
}

.career-list li {
  min-height: 72px;
  padding: 1.1rem 1rem 1.1rem 0;
  border-bottom: 1px solid #d9dfd9;
  color: #293a45;
  font-weight: 650;
  line-height: 1.45;
}

.faculty-section {
  padding: 3.5rem 5rem 4rem;
  background: #e9ede8;
  scroll-margin-top: 1rem;
}

.faculty-heading {
  margin-bottom: 2rem;
}

.faculty-heading > p {
  max-width: 340px;
  margin: 0 0 0.25rem;
}

.faculty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

.faculty-person {
  width: min(100%, calc((1280px - 2rem) / 3));
  justify-self: start;
  overflow: hidden;
  border: 1px solid #d5dbd5;
  border-radius: 4px;
  background: #ffffff;
}

.faculty-person img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 4.5;
  object-fit: cover;
  object-position: center 25%;
}

.faculty-person-details {
  padding: 0.9rem;
}

.faculty-person h3 {
  margin: 0;
  color: #142735;
  font-size: 0.98rem;
  line-height: 1.35;
}

.faculty-person p {
  margin: 0.35rem 0 0;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.5;
}

.program-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 5rem 2rem;
  color: var(--muted);
}

.program-footer p {
  margin: 0;
}

.program-footer a {
  color: #142735;
  font-weight: 700;
  text-decoration-color: var(--program-accent);
  text-underline-offset: 4px;
}

</style>