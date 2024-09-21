<script setup>
  import NavbarViwe from './components/NavbarViwe.vue';
  import Hero from './components/Hero.vue';
  import HomeCards from './components/HomeCards.vue';
  import JobListings from './components/JobListings.vue';
  import JobListing from './components/jobListing.vue'

</script>

<template>
  <div>
    <NavbarViwe/>
    <Hero/>
    <HomeCards/>
    <JobListings :limit="3"/>
  </div>
</template>