<script setup>
import Point from './Point.vue';

const keyPoints = [
  {
    tagline: 'Available Now',
    heading: 'No waiting, start today',
    text: 'Traditional stakeholder mapping takes time – usually months. If we have a Thecosystem in the area you’re working in, you can have it today.'
  },
  {
    tagline: 'Global',
    heading: 'Expertise does not need a passport.',
    text: 'Brilliance, drive, and influence can emerge anywhere in the world. A system subscription gives you a global view of the real movers and shakers.'
  },
  {
    tagline: 'Clear-cut',
    heading: 'No big databases to navigate.',
    text: 'When looking for a needle in a haystack, why go digging around in a bigger haystack? Each system focuses on one therapeutic condition at a time, so you can focus on what matters.'
  },
  {
    tagline: 'Subscription',
    heading: 'Affordable',
    text: '3-, 6-, and 12-month subscriptions instantly available.'
  }
]
</script>
    
<template>
  <section ref="section" class="space-y-28 md:space-y-[180px] md-40 md:mt-70">
    <Point v-for="point, index in keyPoints" :key="index" :keyPoint="point" />
  </section>
</template>