<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formStatus = ref('')

function submitContactForm() {
  formStatus.value = 'Your form is complete, but it was not sent because message delivery is not connected yet.'
}
</script>

<template>
  <section id="contact-page" class="contact-page">
    <header class="contact-heading">
      <p class="eyebrow">Get in touch</p>
      <h1>Contact Us</h1>
      <p>
        Visit the College of Computer Studies at Central Philippine University or send us a message.
      </p>
    </header>

    <div class="contact-layout">
      <section class="contact-location" aria-labelledby="location-heading">
        <div class="location-copy">
          <p class="contact-kicker">Visit us</p>
          <h2 id="location-heading">CPU</h2>
          <address>
            College of Computer Studies<br />
            Central Philippine University<br />
            Iloilo City, Philippines
          </address>
          <a
            class="map-link"
            href="https://www.google.com/maps/search/?api=1&query=Central+Philippine+University%2C+Iloilo+City%2C+Philippines"
            target="_blank"
            rel="noreferrer"
          >
            Open campus map <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="map-frame">
          <iframe
            title="Map showing Central Philippine University in Iloilo City"
            src="https://www.google.com/maps?q=Central%20Philippine%20University%2C%20Iloilo%20City%2C%20Philippines&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <form class="contact-form" @submit.prevent="submitContactForm">
        <div class="form-heading">
          <p class="contact-kicker">Send a message</p>
          <h2>How can we help?</h2>
        </div>

        <div class="form-field">
          <label for="contact-name">Full name</label>
          <input
            id="contact-name"
            v-model.trim="form.name"
            name="name"
            autocomplete="name"
            required
          />
        </div>

        <div class="form-field">
          <label for="contact-email">Email address</label>
          <input
            id="contact-email"
            v-model.trim="form.email"
            name="email"
            type="email"
            autocomplete="email"
            required
          />
        </div>

        <div class="form-field">
          <label for="contact-subject">Subject</label>
          <input id="contact-subject" v-model.trim="form.subject" name="subject" required />
        </div>

        <div class="form-field">
          <label for="contact-message">Message</label>
          <textarea
            id="contact-message"
            v-model.trim="form.message"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>

        <button class="contact-submit" type="submit">Submit message</button>
        <p class="form-note">
          Message delivery is not connected yet. Submitting this form will not send your message.
        </p>
        <p v-if="formStatus" class="form-status" role="status">{{ formStatus }}</p>
      </form>
    </div>
  </section>
</template>