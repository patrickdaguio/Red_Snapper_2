<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  keyPoint: {
    tagline: String,
    heading: String,
    text: String
  }
})

const container = ref(null)
const content = ref(null)
const containerTopPosition = ref(0)

onMounted(() => {
  window.addEventListener('scroll', fadeContent)

  // Get container top position in viewport
  if (container.value) {
    containerTopPosition.value = container.value.getBoundingClientRect().top
  }

  // Fade content depending on scroll position
  function fadeContent() {
    const scrollPosition = window.scrollY
    const contentPosition = content.value.getBoundingClientRect()

    // Calculate opacity based on content position
    const opacity = Math.max(
      0, 1 - (containerTopPosition.value - scrollPosition) / contentPosition.height
    )

    // Update opacity of the content
    content.value.style.opacity = opacity.toString()
  }

})

onUnmounted(() => {
  window.removeEventListener('scroll', fadeContent)
})

</script>

<template>
  <div ref="container" class="h-screen relative">
    <div ref="content"
      class="max-w-xl md:max-w-3xl lg:max-w-[900px] mx-auto sticky -translate-y-1/2 top-[50vh] opacity-0">
      <h2 class="text-tertiary font-bold uppercase tracking-widest sm:text-xl md:text-26">{{ keyPoint.tagline }}</h2>
      <h3
        class="text-secondary font-bold text-4xl sm:text-5xl md:text-7xl mt-5 sm:mt-7 md:mt-11.5 mb-8 sm:mb-10 md:mb-15">
        {{ keyPoint.heading }}</h3>
      <p class="text-primary text-lg font-bold sm:text-2xl md:text-4xl sm:leading-9 md:leading-13">{{ keyPoint.text }}</p>
    </div>
  </div>
</template>
