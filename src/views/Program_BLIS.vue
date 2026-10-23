<script setup>
import ProgramDetail from '../components/ProgramDetail.vue'
import coordinatorPhoto from '../assets/faculty/head_blis.jpg'

const faculty = [
  { name: 'Ana Mae B. Cantel', title: 'Program Coordinator (BLIS and MLIS)', image: coordinatorPhoto },
]

const program = {
  code: 'BLIS',
  name: 'Library and Information Science',
  accentColor: '#62bce1',
  overview: 'Connect people with knowledge by organizing information and making it accessible in many forms.',
  faculty,
  objectives: [
    'Organize, preserve, and provide access to information resources for diverse communities.',
    'Support research, learning, and information literacy through user-centered services.',
    'Use information technologies and professional practices to manage knowledge resources.',
  ],
  studyAreas: [
    'Cataloguing, classification, and knowledge organization',
    'Reference services, research support, and information literacy',
    'Library systems, databases, and digital repositories',
    'Archives, records management, and information preservation',
  ],
  careers: [
    'Academic or public librarian',
    'Information specialist',
    'Cataloguing or metadata specialist',
    'Records manager',
    'Archivist',
    'Digital collections assistant',
    'Research services professional',
  ],
}
</script>

<template>
  <ProgramDetail :program="program" />
</template>