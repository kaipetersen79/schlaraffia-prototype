<template>
  <!-- Back to Top Button -->
  <button 
    @click="scrollToTop"
    class="fixed bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300"
    aria-label="Nach oben scrollen"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>