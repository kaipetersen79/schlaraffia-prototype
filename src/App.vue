<template>
  <div>
    <!-- Navigationskomponente für die Hauptnavigation der App -->
    <Navigation />    
    <main>      
      <!-- Router-View mit Übergangseffekt zwischen Seitenwechseln -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <!-- Dynamische Komponente basierend auf der aktuellen Route -->
          <component 
            :is="Component" 
            @navigate="navigateTo" 
            @openLogin="showLoginModal = true" 
          />
        </transition>
      </router-view>
    </main>

    <!-- "Zurück nach oben" Button für bessere Benutzerfreundlichkeit -->
    <BackToTop />

    <!-- Footer-Komponente mit Abstand nach oben -->
    <Footer class="mt-16"/>
  </div>
</template>

<script setup>
// Importiere notwendige Vue-Funktionen und Komponenten
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'

// Initialisiere Router und aktuelle Route
const router = useRouter()
const route = useRoute()
// Reaktive Variable für den Login-Modal-Status
const showLoginModal = ref(false)

/**
 * Funktion zur Navigation zu einer bestimmten Route
 * @param {string} route - Die Zielroute ohne führenden Schrägstrich
 */
function navigateTo(route) {
  router.push('/' + route)
}
</script> 

<style scoped>

/* Seitenübergangseffekte */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>