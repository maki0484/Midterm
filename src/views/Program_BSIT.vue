<script setup>
import ProgramDetail from '../components/ProgramDetail.vue'
import coordinatorPhoto from '../assets/faculty/head_it.jpg'
import beldiaPhoto from '../assets/faculty/beldia.jpg'
import antonioPhoto from '../assets/faculty/antonio.jpg'
import lesleyPhoto from '../assets/faculty/lesley.jpg'
import doniePhoto from '../assets/faculty/donie.jpg'
import rosePhoto from '../assets/faculty/rose.jpg'
import rodPhoto from '../assets/faculty/rod.jpg'

const faculty = [
  { name: 'Rea P. Balontong', title: 'Department Head (IT & IS)', image: coordinatorPhoto },
  { name: 'Leo Paulo B. Beldia', title: 'BSIT and BSIS Program', image: beldiaPhoto },
  { name: 'Antonio M. Montaño, Jr.', title: 'BSIT and BSIS Program', image: antonioPhoto },
  { name: 'Lesley Joy L. Dignadice', title: 'BSIT and BSIS Program', image: lesleyPhoto },
  { name: 'Donie S. Jardeleza', title: 'BSIT and BSIS Program', image: doniePhoto },
  { name: 'Rose Leah Joy A. Ojacastro', title: 'BSIT and BSIS Program', image: rosePhoto },
  { name: 'Rodolfo C. Eregia, Jr.', title: 'BSIT and BSIS Program', image: rodPhoto },
]

const program = {
  code: 'BSIT',
  name: 'Information Technology',
  accentColor: '#f07b51',
  overview: 'Build practical technology solutions by connecting people, processes, and digital systems.',
  faculty,
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