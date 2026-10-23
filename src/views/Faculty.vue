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
  { name: 'Add name', title: 'Teacher', image: pedroPhoto },
  { name: 'Add name', title: 'Teacher', image: beldiaPhoto },
  { name: 'Add name', title: 'Teacher', image: antonioPhoto },
  { name: 'Add name', title: 'Teacher', image: doniePhoto },
  { name: 'Add name', title: 'Teacher', image: rosePhoto },
  { name: 'Add name', title: 'Teacher', image: sapulPhoto },
  { name: 'Add name', title: 'Teacher', image: ampPhoto },
]

const facultyStaff = [
  { name: 'Add name', title: 'Faculty Staff', image: chrislynPhoto },
  { name: 'Add name', title: 'Faculty Staff', image: rodPhoto },
  { name: 'Add name', title: 'Faculty Staff', image: lesleyPhoto },
  { name: 'Add name', title: 'Faculty Staff', image: donnaPhoto },
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

    <div class="people-section">
      <h3 class="group-title">Teachers</h3>
      <div class="people-grid">
        <article v-for="(person, index) in teachers" :key="index" class="person-card">
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

<style scoped>
.content-section {
  padding: 3rem;
  scroll-margin-top: 1.5rem;
  border-radius: 10px;
  background: #ffffff;
  color: #475569;
  line-height: 1.7;
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
  max-width: 720px;
  margin-bottom: 2rem;
}

.people-section {
  margin-top: 2.5rem;
}

.group-title {
  margin: 0 0 1rem;
  color: var(--secondary-purple);
  font-size: 1.35rem;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 1.25rem;
}

.person-card {
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
}

.person-card img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center 25%;
}

.person-details {
  padding: 0.85rem 1rem 1rem;
}

.person-details h4 {
  margin: 0;
  color: var(--secondary-purple);
  font-size: 1rem;
}

.person-details p {
  margin: 0.25rem 0 0;
  color: #64748b;
  font-size: 0.9rem;
}

.dean-card {
  display: grid;
  grid-template-columns: minmax(180px, 260px) 1fr;
  max-width: 560px;
}

.dean-card img {
  height: 100%;
  min-height: 220px;
}

.dean-card .person-details {
  align-self: center;
  padding: 1.5rem;
}

@media (max-width: 600px) {
  .content-section {
    padding: 1.5rem;
  }

  .dean-card {
    grid-template-columns: 1fr;
  }

  .dean-card img {
    max-height: 300px;
  }
}
</style>
