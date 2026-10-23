<script setup>
import ProgramDetail from './ProgramDetail.vue'

const program = {
  code: 'BSIT',
  name: 'Information Technology',
  accentColor: '#f07b51',
  overview: 'Build practical technology solutions by connecting people, processes, and digital systems.',
  objectives: [
    'Translate user and organizational needs into practical information technology solutions.',
    'Design, develop, and support information systems throughout their lifecycle.',
    'Apply technical, communication, and teamwork skills responsibly in changing technology environments.',
  ],
  studyAreas: [
    'Programming and web or application development',
    'Database design and information management',
    'Networking, cloud platforms, and cybersecurity foundations',
    'Systems analysis, IT service delivery, and project work',
  ],
  careers: [
    'Software or web developer',
    'IT support specialist',
    'Systems analyst',
    'Network or cloud administrator',
    'Database administrator',
    'Cybersecurity analyst',
    'IT project coordinator',
  ],
}
</script>

<template>
  <ProgramDetail :program="program" />
</template>