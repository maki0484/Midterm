<template>
  <section id="announcements" class="announcements-page">
    <header class="page-heading">
      <p class="eyebrow">College updates</p>
      <h1>Announcements</h1>
      <p class="intro">
        Important notices and updates from the College of Computer Studies.
      </p>
    </header>

    <section class="announcement-feed" aria-labelledby="updates-title">
      <div class="feed-heading">
        <h2 id="updates-title">Latest updates</h2>
        <span>CCS</span>
      </div>

      <div class="empty-state" role="status">
        <span class="empty-mark" aria-hidden="true">i</span>
        <div>
          <h3>No announcements yet</h3>
          <p>New college notices will appear here when they are published.</p>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.announcements-page {
  max-width: 1180px;
  min-height: 65vh;
  margin: 0 auto;
  padding: 2rem 0 5rem;
  scroll-margin-top: 1.5rem;
  color: #172a32;
}

.page-heading {
  padding: 2.5rem 0 2rem;
  border-bottom: 1px solid #d7dfdc;
}

.eyebrow {
  margin: 0 0 0.75rem;
  color: #378b5f;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: #102a36;
  font-size: 2.8rem;
  line-height: 1.1;
}

.intro {
  max-width: 620px;
  margin: 1rem 0 0;
  color: #53666d;
  font-size: 1.05rem;
  line-height: 1.7;
}

.announcement-feed {
  padding-top: 2rem;
}

.feed-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #172a32;
}

.feed-heading h2 {
  margin: 0;
  font-size: 1.35rem;
}

.feed-heading span {
  color: #378b5f;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.empty-state {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem 0;
  border-bottom: 1px solid #d7dfdc;
}

.empty-mark {
  display: grid;
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  place-items: center;
  border: 1px solid #8cb89a;
  border-radius: 50%;
  color: #378b5f;
  font-weight: 800;
}

.empty-state h3 {
  margin: 0;
  color: #172a32;
  font-size: 1.05rem;
}

.empty-state p {
  margin: 0.4rem 0 0;
  color: #53666d;
  line-height: 1.6;
}
</style>