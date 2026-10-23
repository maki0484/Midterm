<script setup>
import deanPhoto from '../assets/faculty/the_dean.png'
import itCoordinatorPhoto from '../assets/faculty/head_it.jpg'
import dmiaCoordinatorPhoto from '../assets/faculty/head_dmia.jpg'
import blisCoordinatorPhoto from '../assets/faculty/head_blis.jpg'
import clCoordinatorPhoto from '../assets/faculty/cl_coord.jpg'
import pedroPhoto from '../assets/faculty/pedro.jpg'
import beldiaPhoto from '../assets/faculty/beldia.jpg'
import antonioPhoto from '../assets/faculty/antonio.jpg'
import doniePhoto from '../assets/faculty/donie.jpg'
import rosePhoto from '../assets/faculty/rose.jpg'
import sapulPhoto from '../assets/faculty/sapul.jpg'
import ampPhoto from '../assets/faculty/amp.jpg'
import chrislynPhoto from '../assets/faculty/chrislyn.jpg'
import rodPhoto from '../assets/faculty/rod.jpg'
import lesleyPhoto from '../assets/faculty/lesley.jpg'
import donnaPhoto from '../assets/faculty/donna.png'
import adorPhoto from '../assets/faculty/ador.jpg'

const dean = {
  name: 'Ma. Christina A. Quijano, MSCS',
  title: 'Dean',
  image: deanPhoto,
}

const coordinators = [
  { name: 'Rea P. Balontong', title: 'Department Head (IT & IS)', image: itCoordinatorPhoto },
  { name: 'Marjee Rose B. Parreño', title: 'Program coordinator (BSCS, BSDMIA, and MSCS)', image: dmiaCoordinatorPhoto },
  { name: 'Ana Mae B. Cantel', title: 'Program Coordinator (BLIS and MLIS)', image: blisCoordinatorPhoto },
  { name: 'Lennon D. Pajar', title: 'Computer Laboratory Coordinator', image: clCoordinatorPhoto },
]

const teachers = [
  { name: 'Pedro Peter Rhys B. Cambronero', title: 'BSCS Program', image: pedroPhoto },
  { name: 'Leo Paulo B. Beldia', title: 'BSIT and BSIS Program', image: beldiaPhoto },
  { name: 'Antonio M. Montaño, Jr.', title: 'BSIT and BSIS Program', image: antonioPhoto },
  { name: 'Lesley Joy L. Dignadice', title: 'BSIT and BSIS Program', image: lesleyPhoto },
  { name: 'Donie S. Jardeleza', title: 'BSIT and BSIS Program', image: doniePhoto },
  { name: 'Rose Leah Joy A. Ojacastro', title: 'BSIT and BSIS Program', image: rosePhoto },
  { name: 'Ma. Sheila C. Sapul', title: 'BSCS Program', image: sapulPhoto },
  { name: 'Rodolfo C. Eregia, Jr.', title: 'BSIT and BSIS Program', image: rodPhoto },
]

const facultyStaff = [
  { name: 'Chrislyn C. Castaño', title: 'Secretary', image: chrislynPhoto },
  { name: 'A.M.P. Latter P. Taasan', title: 'Computer Laboratory Technician', image: ampPhoto },
  { name: 'Chriselda Elaine Ador', title: 'Guidance Counselor', image: adorPhoto },
  { name: 'Donna May Rivera', title: 'Library Liaison Officer', image: donnaPhoto },
]

const departments = [
  {
    id: 'faculty-it',
    name: 'Information Technology',
    coordinator: coordinators[0],
    teachers: teachers.filter((person) => person.title.includes('BSIT')),
  },
  {
    id: 'faculty-cs',
    name: 'Computer Science',
    coordinator: coordinators[1],
    teachers: teachers.filter((person) => person.title.includes('BSCS')),
  },
  {
    id: 'faculty-dmia',
    name: 'Digital Media and Interactive Arts',
    coordinator: coordinators[1],
    teachers: [],
  },
  {
    id: 'faculty-lis',
    name: 'Library and Information Science',
    coordinator: coordinators[2],
    teachers: [],
  },
]
</script>

<template>
  <section id="faculty" class="content-section">
    <p class="eyebrow">Our community</p>
    <h2>Faculty &amp; Staff</h2>
    <p class="section-intro">
      Meet the faculty and staff of the College of Computer Studies.
    </p>

    <div class="people-section dean-section">
      <h3 class="group-title">Dean</h3>
      <article class="person-card dean-card">
        <img :src="dean.image" :alt="dean.name" />
        <div class="person-details">
          <h4>{{ dean.name }}</h4>
          <p>{{ dean.title }}</p>
        </div>
      </article>
    </div>

    <div class="people-section">
      <h3 class="group-title">Head Coordinators</h3>
      <div class="people-grid">
        <article v-for="person in coordinators" :key="person.title" class="person-card">
          <img :src="person.image" :alt="person.name" />
          <div class="person-details">
            <h4>{{ person.name }}</h4>
            <p>{{ person.title }}</p>
          </div>
        </article>
      </div>
    </div>

    <div
      v-for="department in departments"
      :id="department.id"
      :key="department.id"
      class="people-section department-section"
    >
      <h3 class="group-title">{{ department.name }}</h3>
      <div class="people-grid">
        <article class="person-card">
          <img :src="department.coordinator.image" :alt="department.coordinator.name" />
          <div class="person-details">
            <h4>{{ department.coordinator.name }}</h4>
            <p>{{ department.coordinator.title }}</p>
          </div>
        </article>
        <article v-for="person in department.teachers" :key="person.name" class="person-card">
          <img :src="person.image" :alt="person.name" />
          <div class="person-details">
            <h4>{{ person.name }}</h4>
            <p>{{ person.title }}</p>
          </div>
        </article>
      </div>
    </div>

    <div class="people-section">
      <h3 class="group-title">Faculty Staff</h3>
      <div class="people-grid">
        <article v-for="(person, index) in facultyStaff" :key="index" class="person-card">
          <img :src="person.image" :alt="person.name" />
          <div class="person-details">
            <h4>{{ person.name }}</h4>
            <p>{{ person.title }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

