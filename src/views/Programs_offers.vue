<script setup>
const programs = [
  {
    code: 'BSIT',
    name: 'Information Technology',
    description:
      'Design, develop, and manage technology solutions that help organizations and communities meet real-world needs.',
    accent: 'it',
  },
  {
    code: 'BSCS',
    name: 'Computer Science',
    description:
      'Explore computing foundations, algorithms, and software development to solve complex problems with code.',
    accent: 'cs',
  },
  {
    code: 'BSDMIA',
    name: 'Digital Media and Interactive Arts',
    description:
      'Combine art, design, and technology through digital storytelling, animation, video editing, 3D modeling, and interactive experiences.',
    accent: 'dmia',
  },
  {
    code: 'BLIS',
    name: 'Library and Information Science',
    description:
      'Connect people with knowledge by organizing, managing, and making information accessible in many forms.',
    accent: 'lis',
  },
]
</script>

<template>
  <section id="programs" class="programs-section">
    <div class="section-heading">
      <div>
        <p class="eyebrow"><span aria-hidden="true"></span>Find your field</p>
        <h2>Four paths.<br /><span>Infinite possibilities.</span></h2>
      </div>
      <p class="section-intro">
        Start with a question. Leave ready to solve problems, serve people, and shape what
        technology can do.
      </p>
    </div>

    <div class="program-grid">
      <article
        v-for="(program, index) in programs"
        :key="program.code"
        class="program-card"
        :class="`program-card--${program.accent}`"
      >
        <div class="card-topline">
          <span class="program-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="program-mark">{{ program.code }}</span>
        </div>
        <div class="card-copy">
          <p class="program-code">{{ program.code }}</p>
          <h3>{{ program.name }}</h3>
          <p class="program-description">{{ program.description }}</p>
        </div>
        <RouterLink to="/faculty" class="faculty-link">
          <span>Meet the faculty</span>
          <span class="link-arrow" aria-hidden="true">↗</span>
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.programs-section {
  --section-bg: #07111f;
  --card-bg: #101f32;
  --card-border: #20364e;
  margin: -2rem -5rem;
  padding: 3.5rem 1rem 2rem;
  scroll-margin-top: 1rem;
  background: var(--section-bg);
  color: #f3f7ff;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin: 0 0 1.5rem;
  color: #b6c8df;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.eyebrow span {
  width: 1.5rem;
  height: 3px;
  background: #52d5f2;
}

h2 {
  margin: 0;
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  font-weight: 800;
  letter-spacing: -0.065em;
  line-height: 0.98;
}

h2 span {
  color: #52d5f2;
}

.section-intro {
  max-width: 400px;
  margin: 0 0 0.35rem;
  color: #a8bed8;
  font-size: 1.05rem;
  line-height: 1.8;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.program-card {
  display: flex;
  min-height: 390px;
  flex-direction: column;
  padding: 1.6rem;
  border: 1px solid var(--card-border);
  border-top: 4px solid #36819a;
  border-radius: 15px;
  background: var(--card-bg);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;
}

.program-card:hover {
  transform: translateY(-4px);
  border-color: #3d7890;
  background: #13253a;
}

.card-topline {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.2rem;
}

.program-number {
  color: #a8bed8;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.program-mark {
  display: grid;
  width: 4.6rem;
  height: 4.6rem;
  place-items: center;
  border: 1px solid #29415d;
  border-radius: 1rem;
  background: #0a1727;
  color: var(--program-accent);
  font-size: 0.75rem;
  font-weight: 800;
}

.program-card--it {
  --program-accent: #f07b51;
}

.program-card--cs {
  --program-accent: #58b78a;
}

.program-card--dmia {
  --program-accent: #e4b746;
}

.program-card--lis {
  --program-accent: #62bce1;
}

.card-copy {
  flex: 1;
}

.program-code {
  margin: 0 0 0.45rem;
  color: #52d5f2;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.program-card h3 {
  margin: 0;
  color: #f3f7ff;
  font-size: 1.3rem;
  font-weight: 750;
  letter-spacing: -0.035em;
  line-height: 1.2;
}

.program-description {
  margin: 1.2rem 0 1.5rem;
  color: #a8bed8;
  font-size: 0.94rem;
  line-height: 1.75;
}

.faculty-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.1rem;
  border-top: 1px solid #29415a;
  color: #f3f7ff;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
}

.link-arrow {
  color: #52d5f2;
  font-size: 1.2rem;
  transition: transform 180ms ease;
}

.faculty-link:hover .link-arrow {
  transform: translate(3px, -3px);
}

.faculty-link:focus-visible {
  outline: 2px solid #52d5f2;
  outline-offset: 5px;
}

@media (max-width: 1100px) {
  .programs-section {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .program-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .programs-section {
    margin-right: -1.5rem;
    margin-left: -1.5rem;
    padding: 2.5rem 1.5rem;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .program-grid {
    grid-template-columns: 1fr;
  }

  .program-card {
    min-height: 340px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .program-card,
  .link-arrow {
    transition: none;
  }

  .program-card:hover {
    transform: none;
  }
}
</style>
