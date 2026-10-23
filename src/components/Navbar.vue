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
      <RouterLink to="/#contact-page" class="nav-link">Contact Us</RouterLink>
    </nav>

    <div class="action-block">
      <RouterLink to="/programs" class="portal-cta">Explore Programs</RouterLink>
    </div>
  </header>
</template>

