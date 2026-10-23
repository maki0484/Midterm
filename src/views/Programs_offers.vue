<script setup>
const programs = [
  {
    code: 'BSIT',
    name: 'Information Technology',
    description:
      'Design, develop, and manage technology solutions that help organizations and communities meet real-world needs.',
    accent: 'it',
    faculty: 'it',
    route: '/programs/bsit',
  },
  {
    code: 'BSCS',
    name: 'Computer Science',
    description:
      'Explore computing foundations, algorithms, and software development to solve complex problems with code.',
    accent: 'cs',
    faculty: 'cs',
    route: '/programs/bscs',
  },
  {
    code: 'BSDMIA',
    name: 'Digital Media and Interactive Arts',
    description:
      'Combine art, design, and technology through digital storytelling, animation, video editing, 3D modeling, and interactive experiences.',
    accent: 'dmia',
    faculty: 'dmia',
    route: '/programs/bsdmia',
  },
  {
    code: 'BLIS',
    name: 'Library and Information Science',
    description:
      'Connect people with knowledge by organizing, managing, and making information accessible in many forms.',
    accent: 'lis',
    faculty: 'lis',
    route: '/programs/blis',
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
        <div class="card-actions">
          <RouterLink :to="program.route" class="program-link">
            <span>Program details</span>
            <span class="link-arrow" aria-hidden="true">↗</span>
          </RouterLink>
          <RouterLink :to="{ path: '/faculty', hash: `#faculty-${program.faculty}` }" class="faculty-link">
            <span>Meet the faculty</span>
            <span class="link-arrow" aria-hidden="true">↗</span>
          </RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>

