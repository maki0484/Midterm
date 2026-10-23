<script setup>
import ProgramDetail from '../components/ProgramDetail.vue'
import coordinatorPhoto from '../assets/faculty/head_dmia.jpg'

const faculty = [
  { name: 'Marjee Rose B. Parreño', title: 'Program coordinator (BSCS, BSDMIA, and MSCS)', image: coordinatorPhoto },
]

const program = {
  code: 'BSDMIA',
  name: 'Digital Media and Interactive Arts',
  accentColor: '#e4b746',
  overview: 'Bring visual storytelling, design, and technology together to create digital and interactive experiences.',
  faculty,
  objectives: [
    'Develop concepts into engaging digital media and interactive experiences.',
    'Use design and production tools to communicate ideas for different audiences.',
    'Combine creative practice with technical skills in collaborative projects.',
  ],
  studyAreas: [
    'Visual communication, illustration, and digital design',
    'Animation, motion graphics, and visual effects',
    'Video production, editing, and digital storytelling',
    '3D modeling, interactive media, and web experiences',
  ],
  careers: [
    'Multimedia designer',
    'Animator or motion graphics artist',
    'Video editor or digital producer',
    'UI or UX designer',
    '3D artist',
    'Interactive media designer',
    'Digital content creator',
  ],
}
</script>

<template>
  <ProgramDetail :program="program" />
</template>