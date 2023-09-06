<script setup>
const props = defineProps({
  keyFeature: {
    image: String,
    heading: String,
    text: String
  }
})

</script>
<template>
  <div
    class="flex-1 flex flex-col items-center text-center rounded-[5px] border border-[#425765]/20 p-8 md:p-11 lg:p-15 sm:min-w-[300px] lg:min-w-[410px]">
    <div class="flex h-24 md:h-30 mb-10 md:mb-15">
      <img class="h-auto max-w-full object-contain" :src="keyFeature.image" :alt="keyFeature.heading" />
    </div>
    <h2 class="mb-5 text-primary !leading-10 font-bold text-xl md:text-26">{{ keyFeature.heading }}</h2>
    <p class="whitespace-pre-line text-primary md:text-lg">{{ keyFeature.text }}</p>
  </div>
</template>
