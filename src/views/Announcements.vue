<script setup>
import { computed, ref } from 'vue'

const activeCategory = ref('All')
const categories = ['All', 'News', 'Events', 'Announcements']

// Replace these sample entries with verified CCS updates before publishing.
const updates = [
  {
    id: 1,
    category: 'News',
    date: 'College Update',
    title: 'College of Computer Studies News',
    description: 'Share the latest achievements, student projects, faculty milestones, and other updates from the CCS community.',
    label: 'Latest News',
  },
  {
    id: 2,
    category: 'Events',
    date: 'Upcoming Event',
    title: 'Technology Talks and Workshops',
    description: 'Feature upcoming seminars, hands-on workshops, guest talks, and activities that help students build practical skills.',
    label: 'Events',
  },
  {
    id: 3,
    category: 'Announcements',
    date: 'Important Notice',
    title: 'Academic Reminders and Deadlines',
    description: 'Post verified reminders about enrollment, schedules, requirements, submission dates, and other important notices.',
    label: 'Announcements',
  },
]

const filteredUpdates = computed(() => activeCategory.value === 'All'
  ? updates
  : updates.filter((item) => item.category === activeCategory.value))
</script>

<template>
  <section id="announcements" class="updates-section" aria-labelledby="updates-heading">
    <div class="section-heading">
      <p class="eyebrow">STAY INFORMED</p>
      <h2 id="updates-heading">News, Events & Announcements</h2>
      <p class="section-intro">Keep up with activities, achievements, and important updates from the College of Computer Studies.</p>
    </div>

    <div class="category-filters" role="group" aria-label="Filter updates by category">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        class="filter-button"
        :class="{ active: activeCategory === category }"
        :aria-pressed="activeCategory === category"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="updates-grid">
      <article v-for="item in filteredUpdates" :key="item.id" class="update-card">
        <div class="card-topline">
          <span class="category-tag" :class="item.category.toLowerCase()">{{ item.category }}</span>
          <span class="update-date">{{ item.date }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <span class="read-more" aria-label="Sample content placeholder">{{ item.label }} <span aria-hidden="true">→</span></span>
      </article>
    </div>
  </section>
</template>
