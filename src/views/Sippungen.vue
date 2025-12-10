<template>
  <section>    <!-- Hero Section -->    
    <div class="sippungen-hero-section relative mb-12 overflow-hidden h-[48rem]">
      <hr class="animated-divider absolute top-0 w-full my-0 z-10">
      <img class="page-image"
        src="../assets/BackgroundImages/IMG_4317-1920w.webp"
        alt="Sippung Impression"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      <div class="stars-container" ref="starsContainer"></div>      <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div class="hero-title-container text-center animate__animated animate__fadeInDown">
           <h1 class="page-title">
            Unsere Sippungen
          </h1>
          <p class="page-undertitle">
            Impressionen aus der Sippung
          </p>
        </div>
      </div>
      <hr class="animated-divider absolute bottom-0 w-full my-0">
    </div>
    <div class="container mx-auto px-4 py-16">
    <!-- Einführung -->
      <div class="mb-20">
        <div class="schlaraffia-quote text-center mb-12">
          <h2 class="text-4xl font-bold title-font mb-6 text-gray-800">
            Das Herz der Schlaraffia
          </h2>
          <p class="text-lg text-gray-700">
            Unsere Sippungen sind mehr als nur Treffen - sie sind Inseln der Kultur 
            und Freundschaft in unserem Alltag
          </p>
        </div>
      </div>
      <!-- Was ist eine Sippung -->
      <div class="mb-20 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl shadow-xl px-10 py-12 relative overflow-visible border border-amber-200" data-aos="fade-up">
        <div class="absolute top-0 right-0 -mt-10 -mr-10 h-28 w-28 rounded-full bg-amber-300 opacity-20 floating-element"></div>
        <div class="absolute bottom-0 left-0 -mb-10 -ml-10 h-24 w-24 rounded-full bg-red-400 opacity-10 floating-element-reverse"></div>
        <div class="absolute top-1/2 left-1/2 h-16 w-16 rounded-full bg-blue-400 opacity-10 floating-element-delay" style="transform: translate(-50%, -50%)"></div>
        <div class="relative z-10">
          <div class="flex flex-col md:flex-row items-center mb-10 gap-8">
            <div class="md:w-1/3 mb-6 md:mb-0 flex justify-center relative group">
              <img 
                src="/src/assets/logo.png" 
                alt="Schlaraffia Wappen" 
                class="mx-auto h-28 md:h-36 object-contain transition-transform duration-300 hover:scale-105"
                data-aos="zoom-in" data-aos-delay="200"
              >
              <div 
                class="absolute left-1/2 top-1/2 pointer-events-none"
                style="transform: translate(-50%, -50%);"
              >
                <span 
                  class="kuckuck-box kuckuck-left"
                >Lululu!</span>
              </div>
            </div>
            <div class="md:w-2/3 md:pl-8 text-center md:text-left">
              <h3 class="text-3xl md:text-4xl font-extrabold text-amber-700 mb-3 tracking-tight" data-aos="fade-left" data-aos-delay="200">
                Was ist eine Sippung?
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed mb-2" data-aos="fade-left" data-aos-delay="300">
                Sippungen sind das Herzstück unseres Vereinslebens – sie verbinden Ritual, Kultur und Freundschaft zu einem besonderen Erlebnis. Jede Sippung ist einzigartig, aber immer geprägt von schlaraffischem Geist, Humor und Gemeinschaft.
              </p>
              <p class="text-amber-700 font-semibold italic" data-aos="fade-left" data-aos-delay="350">
                "Hier treffen sich Kunst, Freundschaft und Lebensfreude!"
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="bg-white rounded-xl shadow-md p-7 flex flex-col items-center hover:shadow-xl transition-all duration-300 border border-amber-100" data-aos="fade-up" data-aos-delay="100">
              <div class="text-yellow-600 text-4xl mb-3"><i class="fas fa-crown"></i></div>
              <h4 class="text-lg font-bold text-gray-800 mb-2">Rituelle Struktur</h4>
              <p class="text-gray-600 text-center">
                Vom feierlichen Einzug bis zur Verabschiedung – das Ritual gibt Halt und verbindet Generationen.
              </p>
            </div>
            <div class="bg-white rounded-xl shadow-md p-7 flex flex-col items-center hover:shadow-xl transition-all duration-300 border border-amber-100" data-aos="fade-up" data-aos-delay="200">
              <div class="text-yellow-600 text-4xl mb-3"><i class="fas fa-palette"></i></div>
              <h4 class="text-lg font-bold text-gray-800 mb-2">Kulturelle Beiträge</h4>
              <p class="text-gray-600 text-center">
                Musik, Literatur, Vorträge – jeder bringt sich ein, niemand wird gedrängt. Die Vielfalt macht jede Sippung besonders.
              </p>
            </div>
            <div class="bg-white rounded-xl shadow-md p-7 flex flex-col items-center hover:shadow-xl transition-all duration-300 border border-amber-100" data-aos="fade-up" data-aos-delay="300">
              <div class="text-yellow-600 text-4xl mb-3"><i class="fas fa-handshake"></i></div>
              <h4 class="text-lg font-bold text-gray-800 mb-2">Geselligkeit</h4>
              <p class="text-gray-600 text-center">
                Nach dem offiziellen Teil folgt die gemütliche Runde. Freundschaft und Austausch stehen im Mittelpunkt.
              </p>
            </div>
            <div class="bg-white rounded-xl shadow-md p-7 flex flex-col items-center hover:shadow-xl transition-all duration-300 border border-amber-100" data-aos="fade-up" data-aos-delay="400">
              <div class="text-yellow-600 text-4xl mb-3"><i class="fas fa-laugh"></i></div>
              <h4 class="text-lg font-bold text-gray-800 mb-2">Humor & Spiel</h4>
              <p class="text-gray-600 text-center">
                Wortspiele, schlaraffische Neckereien und Humor sind fester Bestandteil – Lachen ist ausdrücklich erwünscht!
              </p>
            </div>
          </div>
        </div>
      </div>


      <!-- Sippungskalender -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold title-font mb-4 text-gray-800">
            Sippungskalender
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-6"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Regelmäßige Sippungen -->
          <div class="sippung-card">
            <div class="sippung-image bg-gradient-to-br from-blue-400 to-blue-600">
              <i class="fas fa-calendar-week text-blue-600"></i>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold title-font mb-4 text-blue-800">
                Regelmäßige Sippungen
              </h3>
              <div class="space-y-4">
                <div class="bg-blue-50 rounded-lg p-4">
                  <h4 class="font-bold text-blue-700 mb-2">
                    <i class="fas fa-clock mr-2"></i>
                    Jeden Donnerstag
                  </h4>
                  <p class="text-sm text-gray-700">
                    19:30 Uhr
                  </p>
                </div>
                <div class="bg-blue-50 rounded-lg p-4">
                  <h4 class="font-bold text-blue-700 mb-2">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    Unsere Burg
                  </h4>
                  <p class="text-sm text-gray-700">
                    Händelhof 7, 24943 Flensburg
                  </p>
                </div>
                <div class="bg-blue-50 rounded-lg p-4">
                  <h4 class="font-bold text-blue-700 mb-2">
                    <i class="fas fa-door-open mr-2"></i>
                    Gäste sind immer willkommen!
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <!-- Besondere Sippungen -->
          <div class="sippung-card">
            <div class="sippung-image bg-gradient-to-br from-red-400 to-red-600 text-white">
              <i class="fas fa-star"></i>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold title-font mb-4 text-red-800">
                Besondere Sippungen
              </h3>
              <div class="space-y-4">
                <div class="bg-red-50 rounded-lg p-4">
                  <h4 class="font-bold text-red-700 mb-2">
                    <i class="fas fa-birthday-cake mr-2"></i>
                    Stiftungsfest
                  </h4>
                  <p class="text-sm text-gray-700">
                    Jährliche Feier unserer Gründung mit festlichem Rahmen
                  </p>
                </div>
                <div class="bg-red-50 rounded-lg p-4">
                  <h4 class="font-bold text-red-700 mb-2">
                    <i class="fas fa-snowflake mr-2"></i>
                    Winterung
                  </h4>
                  <p class="text-sm text-gray-700">
                    Besinnliche Sippung zur Weihnachtszeit
                  </p>
                </div>
                <div class="bg-red-50 rounded-lg p-4">
                  <h4 class="font-bold text-red-700 mb-2">
                    <i class="fas fa-sun mr-2"></i>
                    Sommerung
                  </h4>
                  <p class="text-sm text-gray-700">
                    Gesellige Sommersippung, oft im Freien
                  </p>
                </div>
                <div class="bg-red-50 rounded-lg p-4">
                  <h4 class="font-bold text-red-700 mb-2">
                    <i class="fas fa-users mr-2"></i>
                    Gäste-Sippungen
                  </h4>
                  <p class="text-sm text-gray-700">
                    Besondere Sippungen mit Gästen aus anderen Schlaraffien
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <!-- Galerie -->
  <div class="container mx-auto px-4">
    <SippungenGalerie />
  </div>
    
  </section>
</template>

<script setup>
import SippungenGalerie from '../components/SippungenGalerie.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { createStars } from '../utils/stars.js';

const galerieSection = ref(null)
const starsContainer = ref(null);

AOS.init()

onMounted(() => {
  AOS.refresh()
})

const handleResize = () => {
  if (starsContainer.value) {
    createStars(starsContainer.value, {
      density: 6000,       // Mehr Sterne für die Sippungen-Seite (festliche Atmosphäre)
      minDuration: 2.5,    // Mittlere Animation Geschwindigkeit
      maxDuration: 6.5
    });
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* "Lululu" beim Wappen */
.kuckuck-box {
  display: inline-block;
  min-width: 70px;
  background: #fde68a;
  color: #92400e;
  border-radius: 0.75rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 0.5rem 1.2rem;
  font-weight: bold;
  font-size: 1rem;
  border: 1.5px solid #fbbf24;
  position: absolute;
  left: 50%;
  top: 0%;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 0) scale(0.7);
  transition: opacity 0.2s, transform 0.4s cubic-bezier(0.4,0,0.2,1);
  z-index: 30;
}
.kuckuck-box.kuckuck-left {
  left: 0%;
  top: 50%;
  transform: translate(0, -50%) scale(0.7);
  opacity: 0;
  transition: opacity 0.2s, transform 0.6s cubic-bezier(0.4,0,0.2,1);
}
.group:hover .kuckuck-box.kuckuck-left {
  opacity: 1;
  transform: translate(-200px, -50%) scale(1.05);
  transition: opacity 0.2s 0.3s, transform 0.7s cubic-bezier(0.4,0,0.2,1);
}
.group:not(:hover) .kuckuck-box.kuckuck-left {
  opacity: 0;
  transform: translate(0, -50%) scale(0.7);
  transition: opacity 0.2s, transform 0.5s cubic-bezier(0.4,0,0.2,1);
}
.group:hover .kuckuck-box.kuckuck-left {
  animation: kukuck-fadein 0.5s forwards;
}
@keyframes kukuck-fadein {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }

}
</style>