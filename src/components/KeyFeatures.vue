<script setup>
import Feature from './Feature.vue'

import ContactsImage from '../assets/Contacts.png'
import DecisionsImage from '../assets/Decisions.png'
import NetworkImage from '../assets/Network.png'
import PerspectiveImage from '../assets/Perspective.png'
import TimeImage from '../assets/Time.png'

const keyFeatures = [
  {
    image: ContactsImage,
    heading: 'Make New Contacts',
    text: 'Thecosystems is all about people. Not data.'
  },
  {
    image: DecisionsImage,
    heading: 'Make Better Decisions',
    text: 'Understand your stakeholders and their needs.'
  },
  {
    image: TimeImage,
    heading: 'Stay Up to Date',
    text: 'Things change quickly.'
  },
  {
    image: NetworkImage,
    heading: 'Explore Professional Networks',
    text: 'Understand your stakeholders and their needs.'
  },
  {
    image: PerspectiveImage,
    heading: 'Identify Hidden Opportunities',
    text: 'Open a new world of possibility\n and engagement.'
  },
]

</script>

<template>
  <section class="flex flex-col justify-center sm:flex-row sm:flex-wrap gap-12 md:gap-15">
    <Feature v-for="feature, index in keyFeatures" :key="index" :keyFeature="feature" />
  </section>
</template>