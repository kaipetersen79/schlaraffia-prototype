<template>
  <section>
    <!-- HERO-BEREICH  –  Titelbild mit animiertem Sternenhimmel -->
      <div class="willekum-hero-section relative mb-12 overflow-hidden h-[48rem]">
      <hr class="animated-divider absolute top-0 w-full my-0 z-10">
      <!-- Eulen-Grafik als Seitenlogo -->
      <img class="page-image" src="../assets/owl.png" alt="Willekum" />
      <!-- Dunkles Verlauf-Overlay für bessere Textlesbarkeit -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      <!-- Hier werden die Stern-Partikel per JS eingefügt -->
      <div class="stars-container" ref="starsContainer"></div>      
      <!-- Zentrierter Haupttitel -->
      <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div class="hero-title-container text-center animate__animated animate__fadeInDown">
          <h1 class="page-title">
            Schlaraffia Flensburgia
          </h1>
          <p class="page-undertitle">Ein herzliches Willekum</p>
        </div>
      </div>
      <hr class="animated-divider absolute bottom-0 w-full my-0">
    </div>

    <!-- EINLEITUNG + DREI WERTE-KARTEN -->
    <div class="container mx-auto px-4 py-16">
      <div class="mx-auto mt-14 md:mt-20 max-w-8xl font-serif leading-relaxed">
        <!-- Überbox: Vorstellung der Schlaraffia ----------------------- -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <!-- Kopfzeile mit großem Hintergrundbild -->
          <div class="bg-[#D88F06] rounded-t-lg overflow-hidden"
            style="height: 180px; display: flex; justify-content: center; align-items: center;">
            <div style="width: 100%; height: 180px; overflow: hidden;">
              <img src="../assets//Sippungen/3176/IMG_4010-1920w.webp" alt="Titelbild Schlaraffia"
                style="width: 100%; height: 100%; object-fit: cover; object-position: center;" />
            </div>
          </div>

          <!-- Titel, Untertitel und Motto -->
          <div class="p-6 text-center border-b border-gray-200">
            <p class="text-sm uppercase tracking-wider text-gray-600 mb-1">
              Allschlaraffia
            </p>
            <h3 class="text-xl font-bold mb-4 title-font italic text-[#D88F06]">
              Ein Willekum zum Uhuversalen Reych
            </h3>
            <p class="text-lg font-medium text-gray-700 italic">
              „In arte voluptas – In der Kunst liegt das Vergnügen"
            </p>
          </div>
          <!-- Einleitungstext + drei Säulenkarten -->
          <div class="p-8">
            <!-- Kurzbeschreibung --------------------------------------- -->
            <div class="mb-10 text-center max-w-3xl mx-auto">
              <p class="text-lg text-gray-700">
                Schlaraffia ist ein weltweiter Bund zur Pflege von
                <span class="text-[var(--schlaraffia-dark-blue)] font-medium">Freundschaft</span>,
                <span class="text-[var(--schlaraffia-dark-yellow)] font-medium">Kunst</span> und 
                <span class="text-[var(--schlaraffia-dark-red)] font-medium">Humor</span> –
                gegründet im Jahre a.U. 0 (1859) in Prag.
              </p>
            </div>
            <!-- Drei Werte-Karten ------------------------------------- -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <!-- (1) Kreatives Spiel -->
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
                <div class="bg-[var(--schlaraffia-dark-blue)] p-6 flex items-center justify-center">
                  <i class="fa-solid fa-masks-theater text-white text-3xl"></i>
                </div>
                <div class="p-5">
                  <h4 class="font-bold text-lg mb-3 text-center text-[var(--schlaraffia-dark-blue)]">Kreatives Spiel</h4>
                  <p class="text-gray-700">
                    Wir pflegen das edle Spiel mit Worten, mit darstellender Kunst und mit wohlklingendem Minnegesang
                    –
                    stets mit freudigem Augenzwinkern.
                  </p>
                </div>
              </div>

              <!-- (2) Werte & Respekt -->
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
                <div class="bg-[var(--schlaraffia-dark-yellow)] p-6 flex items-center justify-center">
                  <i class="fa-solid fa-shield-halved text-white text-3xl"></i>
                </div>
                <div class="p-5">
                  <h4 class="font-bold text-lg mb-3 text-center text-[var(--schlaraffia-dark-yellow)]">Werte & Respekt</h4>
                  <p class="text-gray-700">
                    Dem Profanen wird abgeschworen; Achtung dem Ritterlichen und Toleranz
                    stehen im Codex unserer Burgregeln an erster Stelle.
                  </p>
                </div>
              </div>

              <!-- (3) Tradition -->
              <div
                class="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
                <div class="bg-[var(--schlaraffia-dark-red)] p-6 flex items-center justify-center">
                  <i class="fa-solid fa-scroll text-white text-3xl"></i>
                </div>
                <div class="p-5">
                  <h4 class="font-bold text-lg mb-3 text-center text-[var(--schlaraffia-dark-red)]">Tradition</h4>
                  <p class="text-gray-700">
                    Die ruhmreiche Flensburgia wurde gegründet im Jahre a.U. 15 (1874) –
                    als ehrenvoller Teil des weltweiten Bundes der Schlaraffen.
                  </p>
                </div>
              </div>
            </div>
            <!-- Kurzinformationen im blauen Kasten --------------------- -->
            <div class="bg-blue-50 border-l-4 border-[#0057B8] p-6 rounded shadow-md">
              <h4 class="text-xl font-bold mb-4 title-font text-center">
                Das Schlaraffische Reych
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
                <div class="flex items-center">
                  <div class="bg-[var(--schlaraffia-dark-blue)] rounded-full p-3 mr-4 flex-shrink-0">
                    <i class="fas fa-theater-masks text-white"></i>
                  </div>
                  <p>
                    Das schlaraffische Treiben gedeiht in einem Uhuversalen Reych;
                    Das Profane verlässt man am Burgtor.
                  </p>
                </div>

                <div class="flex items-center">
                  <div class="bg-[var(--schlaraffia-dark-yellow)] rounded-full p-3 mr-4 flex-shrink-0">
                    <i class="fas fa-music text-white"></i>
                  </div>
                  <p>
                    Unsere ehrwürdigen „Sippungen" folgen dem ritterlichen Ceremoniale,
                    geprägt von Aha, Fechsung und fröhlichem Tamtam.
                  </p>
                </div>

                <div class="flex items-center">
                  <div class="bg-[var(--schlaraffia-dark-red)] rounded-full p-3 mr-4 flex-shrink-0">
                    <i class="fas fa-heart text-white"></i>
                  </div>
                  <p>
                    Ein Leben im Geiste des Uhu – mit freudigem Lulu und
                    stets bereit zum fröhlichen Quell der Amusität.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- PILLAR-KARTEN  –  dynamisch aus JSON generiert -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <router-link v-for="pillar in pillars" :key="pillar.title" :to="pillar.link" class="schlaraffia-card bg-white shadow-lg rounded-lg cursor-pointer
                 transform transition hover:-translate-y-1 hover:shadow-xl
                 focus-visible:ring-4 focus-visible:ring-orange-400">
          <div :class="`${pillar.bgColor} p-8 flex items-center justify-center rounded-t-lg`">
            <i :class="`${pillar.icon} text-white text-5xl`"></i>
          </div>
          <div class="p-6 text-center">
            <p class="text-sm uppercase tracking-wider text-gray-600 mb-1">
              {{ pillar.tagline }}
            </p>
            <h3 class="text-xl font-bold mb-4 title-font italic text-orange-700">
              {{ pillar.title }}
            </h3>
            <p class="text-gray-700" v-if="pillar.text">
              {{ pillar.text }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <!-- WISSENSWERTES  –  Faktenblock mit Animation -->
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-center mb-10 title-font" data-aos="fade-up">Wissenswertes</h2>
      <!-- Farbiger Infoblock ------------------------------------------ -->
      <div
        class="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl shadow-lg p-8 mb-4 hover:shadow-xl transition-all duration-300 relative overflow-hidden max-w-4xl mx-auto"
        data-aos="fade-up" data-aos-delay="100">
        <!-- Dekorative Kreise mit Schwebeanimation -->
        <div
          class="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-yellow-400 opacity-20 floating-element">
        </div>
        <div
          class="absolute bottom-0 left-0 -mb-4 -ml-4 h-12 w-12 rounded-full bg-blue-500 opacity-20 floating-element-reverse">
        </div>
        <!-- Zwei-Spalten-Facts -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <!-- (a) Gründung -->
          <div class="flex items-center transform transition hover:-translate-y-1 hover:scale-105" data-aos="fade-right"
            data-aos-delay="150">
            <div class="bg-[var(--schlaraffia-dark-blue)] rounded-full p-4 mr-5 flex items-center justify-center relative"
              style="min-width: 3.5rem; height: 3.5rem;">
              <div class="absolute inset-0 bg-[var(--schlaraffia-dark-blue)] rounded-full opacity-30 pulse-slow"></div>
              <i class="fas fa-landmark text-white text-xl relative z-10"></i>
            </div>
            <p class="font-semibold text-gray-800 text-lg">Gegründet&nbsp;1874&nbsp;(a.U.&nbsp;135)</p>
          </div>
          <!-- (b) Weltbund -->
          <div class="flex items-center transform transition hover:-translate-y-1 hover:scale-105" data-aos="fade-left"
            data-aos-delay="300">
            <div class="bg-[var(--schlaraffia-dark-yellow)] rounded-full p-4 mr-5 flex items-center justify-center relative"
              style="min-width: 3.5rem; height: 3.5rem;">
              <div class="absolute inset-0 bg-[var(--schlaraffia-dark-yellow)] rounded-full opacity-30 pulse-slow"></div>
              <i class="fas fa-globe text-white text-xl relative z-10"></i>
            </div>
            <p class="font-semibold text-gray-800 text-lg">
              Teil des weltweiten Bundes&nbsp;Allschlaraffia
            </p>
          </div>
          <!-- (c) Burgadresse -->
          <div class="flex items-center transform transition hover:-translate-y-1 hover:scale-105" data-aos="fade-right"
            data-aos-delay="450">
            <div class="bg-[var(--schlaraffia-dark-red)] rounded-full p-4 mr-5 flex items-center justify-center relative"
              style="min-width: 3.5rem; height: 3.5rem;">
              <div class="absolute inset-0 bg-[var(--schlaraffia-dark-red)] rounded-full opacity-30 pulse-slow"></div>
              <i class="fas fa-map-marker-alt text-white text-xl relative z-10"></i>
            </div>
            <p class="font-semibold text-gray-800 text-lg">
              Burg:&nbsp;Händelhof&nbsp;7,&nbsp;24943&nbsp;Flensburg
            </p>
          </div>
          <!-- (d) Symbol -->
          <div class="flex items-center transform transition hover:-translate-y-1 hover:scale-105" data-aos="fade-left"
            data-aos-delay="600">
            <div class="bg-yellow-700 rounded-full p-4 mr-5 flex items-center justify-center relative"
              style="min-width: 3.5rem; height: 3.5rem;">
              <div class="absolute inset-0 bg-yellow-600 rounded-full opacity-30 pulse-slow"></div>
              <i class="fas fa-feather text-white text-xl relative z-10"></i>
            </div>
            <p class="font-semibold text-gray-800 text-lg">
              Symbol: Der Uhu als Zeichen für Weisheit
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Trennlinie ----------------------------------------------------- -->
    <div class="w-full my-12 flex items-center justify-center overflow-hidden">
      <hr class="animated-divider w-full my-0">
    </div>
    <!-- AKTUELLES  –  News-Grid + Modal -->
    <div class="py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 title-font">Aktuelles</h2>
        <!-- News-Karten ------------------------------------------------ -->
        <div class="grid gap-10 md:grid-cols-3">
          <!-- Karte als Div: öffnet Modal -->
          <div v-for="item in news" :key="item.slug" class="block bg-white rounded-xl shadow-md hover:shadow-2xl transition
                   overflow-hidden group cursor-pointer" @click="openArticle(item.slug)">
              <!-- Vorschaubild (per Background-Image) -->
              <div class="h-40 bg-center bg-cover group-hover:scale-105 transition-transform"
              :style="`background-image: url('${imgUrl(item.image)}')`"></div>
            <!-- Karte: Textinhalt -->
            <div class="p-6 flex flex-col h-full">
              <p class="text-sm text-gray-500 mb-2">
                {{ formatDate(item.date) }}
              </p>
              <h3 class="text-lg font-semibold mb-3 title-font group-hover:text-orange-700 transition">
                {{ item.title }}
              </h3>
              <p class="text-gray-700 flex-grow">{{ item.excerpt }}</p>

              <span class="mt-5 inline-flex items-center text-sm font-medium text-blue-600">
                Mehr lesen
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal mit dynamischer Komponente ---------------------------- -->
      <NewsModal :open="modalOpen" @close="closeModal">
        <component :is="modalComponent" />
      </NewsModal>
    </div>
  </section>
</template>

<script setup>
/* IMPORTS */
import { ref, shallowRef, onMounted, onUnmounted } from 'vue'
import { createStars } from '../utils/stars.js'

import pillars from '@/data/homePillars.json' // Daten für Pillar-Karten
import news from '@/data/news.json'           // News-Einträge

/* Dynamische News-Komponenten (Modal-Inhalt) */
import GaesteHoag2025 from '@/components/GaesteHoag2025.vue'
import Sommerung2025 from '@/components/Sommerung2025.vue'
import WahlOberschlaraffe2025 from '@/components/WahlOberschlaraffe2025.vue'

import NewsModal from '@/components/NewsModal.vue'

/* STERNENHIMMEL – Container + Resize-Handler */
const starsContainer = ref(null);

/* erzeugt / aktualisiert die Sterne (dichte & geschwindigkeit) */
const handleResize = () => {
  if (starsContainer.value) {
    createStars(starsContainer.value, {
      density: 7000,        // Sterne pro Pixel
      minDuration: 2,       // kürzeste Animationsdauer (s)
      maxDuration: 6        // längste Animationsdauer (s)
    });
  }
};

onMounted(() => {
  handleResize();                                 // einmal beim Mounten
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

/*  MODAL-LOGIK  –  Zuordnung slug → Komponente */
const componentMap = {
  'gaeste-hoag-2025': GaesteHoag2025,
  'sommerung-2025': Sommerung2025,
  'wahl-oberschlaraffe-2025': WahlOberschlaraffe2025,
}

const modalOpen = ref(false)
const modalComponent = shallowRef(null)

/* öffnet Modal mit passender Komponente */
function openArticle(slug) {
  modalComponent.value = componentMap[slug] || null
  if (modalComponent.value) modalOpen.value = true
}
/* schließt Modal */
function closeModal() {
  modalOpen.value = false
}
/* HELPER – Bild-URL & Datum formatieren */

const imgUrl = src => new URL(src, import.meta.url).href
function formatDate(iso) {
  return new Date(iso).toLocaleDateString('de-DE', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}
</script>
