<template>
  <div>
    <!-- Schlaraffenlatein -->
    <h3 class="text-2xl font-bold mb-6 title-font text-center">Schlaraffisches Wörterbuch</h3>
    <p class="text-center mb-8">Klicken Sie auf die Begriffe, um ihre Bedeutung zu erfahren.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="(item, index) in items" :key="index" 
           class="glossary-item bg-white" @click="toggle(index)">
        <div class="flex justify-between items-center">
          <span class="glossary-term">{{ item.term }}</span>
          <i :class="['fas', item.active ? 'fa-chevron-up' : 'fa-chevron-down', 'text-gray-500']"></i>
        </div>
        <div :class="['glossary-definition', { 'active': item.active }]">
          <p class="text-gray-700">{{ item.definition }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: { type: Array, required: true }
})

function toggle(idx) {
  props.items[idx].active = !props.items[idx].active
}
</script>
