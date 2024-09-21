<script setup>
  import NavbarViwe from '@/components/NavbarViwe.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <NavbarViwe/>
    <RouterView/>
  </div>
</template>