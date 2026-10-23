<template>
  <header class="navbar-wrapper">
    <div class="brand-block">
      <img src="../assets/CCSLogo.png" alt="CCS Logo" class="brand-logo" />
      <div class="brand-text">
        <h1 class="uni-title">Central Philippine University</h1>
        <p class="uni-motto">College of Computer Studies</p>
      </div>
    </div>

    <nav class="navigation-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/programs" class="nav-link">Programs</RouterLink>
      <RouterLink to="/#announcements" class="nav-link">Announcements</RouterLink>
      <RouterLink to="/about" class="nav-link">About The College</RouterLink>
    </nav>

    <div class="action-block">
      <RouterLink to="/programs" class="portal-cta">Explore Programs</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 5rem;
  background-color: var(--bg-light);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.uni-title {
  font-size: 1.35rem;
  color: var(--secondary-purple);
  margin: 0;
  font-weight: 700;
  font-family: serif;
}

.uni-motto {
  font-size: 0.75rem;
  color: var(--accent-gold);
  letter-spacing: 2px;
  margin: 0;
  font-weight: 700;
}

.navigation-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-size: 0.88rem;
  font-weight: 500;
  padding: 6px 0;
  border-bottom: 3px solid transparent;
  transition: all 0.15s ease;
  cursor: pointer;
}

.nav-link:hover {
  color: var(--primary-purple);
  font-weight: bold;
  border-bottom: 3px solid var(--accent-gold);
}

.portal-cta {
  display: inline-block;
  background-color: var(--secondary-purple);
  color: #ffffff;
  border: none;
  padding: 0.7rem 1.6rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
}

.portal-cta:hover {
  background-color: var(--primary-purple);
}
</style>
