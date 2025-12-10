<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 bg-black/50 backdrop-blur z-40 flex items-center justify-center"
        @click.self="$emit('close')">
        <transition name="scale">
          <div
            class="bg-white max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl relative">
            <button
              @click="$emit('close')"
              class="absolute top-4 right-4 text-gray-500 hover:text-orange-700 text-2xl leading-none">×
            </button>
            <slot></slot>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
defineProps({ open: Boolean })
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
</style>

