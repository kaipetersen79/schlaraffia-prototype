<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="sippung"
        class="fixed inset-0 bg-black/50 backdrop-blur z-50 flex items-center justify-center"
        @click.self="$emit('close')"
      >
        <transition name="scale">
          <div class="bg-white max-w-6xl w-[98vw] max-h-[96vh] overflow-y-auto rounded-xl shadow-xl relative">
            <!-- Button close -->
            <button
              class="absolute top-4 right-4 text-gray-500 hover:text-orange-700 text-2xl leading-none z-20 transition-transform hover:scale-125"
              @click="$emit('close')"
              aria-label="Schließen"
            >×</button>
            <div class="p-6 flex flex-col items-center">
              <h2 class="text-2xl font-bold mb-4">{{ sippung.title }}</h2>
              <!-- Navigation buttons -->
              <div class="relative w-full flex items-center justify-center min-h-[300px]"> 
                <button
                  v-if="sippung.images.length > 1"
                  @click="prev"
                  class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-3 z-10 transition-transform hover:scale-125"
                  aria-label="Vorheriges Bild"
                >
                  ‹
                </button>
                <transition name="img-fade" mode="out-in">
                  <img
                    :src="sippung.images[currentIndex]"
                    :key="sippung.images[currentIndex]"
                    @error="onError"
                    class="max-h-[70vh] max-w-full w-auto rounded shadow mx-auto transition-transform duration-300"
                    :alt="sippung.title"
                  />
                </transition>
                <button
                  v-if="sippung.images.length > 1"
                  @click="next"
                  class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-3 z-10 transition-transform hover:scale-125"
                  aria-label="Nächstes Bild"
                >
                  ›
                </button>
              </div>
              <!-- Load Image -->
              <div class="mt-4 flex gap-2 justify-center flex-wrap w-full">
                <img
                  v-for="(img, idx) in sippung.images"
                  :key="img"
                  :src="img"
                  @click="currentIndex = idx"
                  :class="[
                    'h-16 w-24 object-cover rounded cursor-pointer border-2 flex-shrink-0 transition-all duration-200',
                    idx === currentIndex ? 'border-blue-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  ]"
                  :alt="`${sippung.title} Vorschau ${idx+1}`"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ sippung: Object })

const currentIndex = ref(0)

watch(
  () => props.sippung,
  () => { currentIndex.value = 0 }
)

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
  else currentIndex.value = props.sippung.images.length - 1
}
function next() {
  if (currentIndex.value < props.sippung.images.length - 1) currentIndex.value++
  else currentIndex.value = 0
}
function onError(event) {
  event.target.style.display = 'none'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity .2s }
.fade-enter-from,
.fade-leave-to      { opacity: 0 }

.scale-enter-active,
.scale-leave-active { transition: transform .2s }
.scale-enter-from   { transform: scale(.9) }
.scale-leave-to     { transform: scale(.9) }

.img-fade-enter-active,
.img-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.img-fade-enter-from,
.img-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>