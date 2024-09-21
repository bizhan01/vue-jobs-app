<script setup>
import JobListing from './jobListing.vue'
import jobData from '@/jobs.json';
import { ref, defineProps } from 'vue';

const props = defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
});

const jobs = ref(jobData);
</script>


<template>
    <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job"/>
        </div>
    </div>
</template>
  
