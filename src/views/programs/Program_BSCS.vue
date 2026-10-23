<script setup>
import ProgramDetail from './ProgramDetail.vue'

const program = {
  code: 'BSCS',
  name: 'Computer Science',
  accentColor: '#58b78a',
  overview: 'Explore the foundations of computing and learn to create software that solves complex problems.',
  objectives: [
    'Use computational thinking to analyze problems and develop effective solutions.',
    'Apply computer science principles to design, implement, and evaluate software.',
    'Communicate technical ideas and continue learning as computing evolves.',
  ],
  studyAreas: [
    'Algorithms, data structures, and computational problem-solving',
    'Programming languages and software design',
    'Computer architecture, operating systems, and networks',
    'Data science, artificial intelligence, and intelligent systems',
  ],
  careers: [
    'Software engineer',
    'Application developer',
    'Data analyst',
    'AI or machine learning associate',
    'Quality assurance engineer',
    'Systems developer',
    'Computing research assistant',
  ],
}
</script>

<template>
  <ProgramDetail :program="program" />
</template>