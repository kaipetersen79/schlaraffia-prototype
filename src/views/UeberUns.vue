<template>
  <section> 
    <!-- Hero Section mit Hintergrundbild und Sternenhimmel -->    
    <div class="ueberuns-hero-section relative mb-12 overflow-hidden h-[48rem]">      
      <hr class="animated-divider absolute top-0 w-full my-0 z-10">
      <img class="page-image" src="../assets/News/Gaeste-Hoag.webp" alt="Über Uns" style="filter: brightness(0.85);" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      
      <!-- Sterne-Partikel Container -->
      <div class="stars-container" ref="starsContainer"></div>      
      
      <!-- Titel-Container -->
      <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div class="hero-title-container text-center animate__animated animate__fadeInDown">
          <h1 class="page-title">
            Über Uns
          </h1>
          <p class="page-undertitle">
            Schlaraffia Flensburgia
          </p>
        </div>
      </div>
      <hr class="animated-divider absolute bottom-0 w-full my-0">
    </div>

    <div class="container mx-auto px-4 py-16">
      <!-- Einführungstext zur Schlaraffia -->
      <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg shadow-lg p-8 mb-16 relative overflow-hidden"
        data-aos="fade-up">
        <!-- Dekorative Elemente für visuelle Aufwertung -->
        <div class="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-amber-400 opacity-10 floating-element">
        </div>
        <div
          class="absolute bottom-0 left-0 -mb-8 -ml-8 h-20 w-20 rounded-full bg-red-500 opacity-10 floating-element-reverse">
        </div>
        <div class="absolute top-1/3 left-1/4 h-16 w-16 rounded-full bg-blue-500 opacity-10 floating-element-delay">
        </div>

        <div class="relative z-10">
          <!-- Logo und Einführungstext -->
          <div class="flex flex-col md:flex-row items-center mb-8">
            <div class="md:w-1/4 mb-6 md:mb-0 text-center">
              <img src="@/assets/logo.png" alt="Schlaraffia Wappen" class="mx-auto h-32 md:h-40 object-contain"
                data-aos="zoom-in" data-aos-delay="300">
            </div>
            <div class="md:w-3/4 md:pl-8">
              <h2 class="text-3xl font-bold text-amber-800 mb-4" data-aos="fade-left" data-aos-delay="200">Die
                Schlaraffia Flensburgia</h2>
              <p class="text-gray-700 leading-relaxed" data-aos="fade-left" data-aos-delay="300">
                Gegründet im Jahre 1874, ist die Schlaraffia Flensburgia eine der traditionsreichsten Vereinigungen in
                der Region. Als Teil des weltweiten Verbundes "Allschlaraffia" pflegen wir die Freundschaft, Kunst und
                Humor unter dem Wahlspruch "In arte voluptas" (In der Kunst liegt das Vergnügen).
              </p>
            </div>
          </div>

          <hr class="border-t border-amber-200 my-6">

          <!-- Struktur der Schlaraffischen Gesellschaft -->
          <h3 class="text-2xl font-bold text-amber-800 mb-4" data-aos="fade-up" data-aos-delay="100">Die Struktur
            unserer Schlaraffischen Gesellschaft</h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Karte: Die Führung -->
            <div
              class="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              data-aos="fade-up" data-aos-delay="150">
              <div class="text-amber-600 text-3xl mb-3"><i class="fas fa-crown"></i></div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Die Führung</h4>
              <p class="text-gray-600">
                An der Spitze steht der Oberschlaraffe, unterstützt vom Kanzler und dem Marschall. Diese bilden zusammen
                mit weiteren Würdenträgern die Führungsriege unseres Reyches.
              </p>
            </div>

            <!-- Karte: Die Ritter -->
            <div
              class="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              data-aos="fade-up" data-aos-delay="250">
              <div class="text-amber-600 text-3xl mb-3"><i class="fas fa-chess-knight"></i></div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Die Ritter</h4>
              <p class="text-gray-600">
                Nach bestandener Prüfung werden Knappen zum Ritter geschlagen. Die Ritter bilden den Kern unserer
                Gemeinschaft und tragen stolz ihr individuelles Wappen und ihren schlaraffischen Namen.
              </p>
            </div>

            <!-- Karte: Die Junker & Knappen -->
            <div
              class="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              data-aos="fade-up" data-aos-delay="350">
              <div class="text-amber-600 text-3xl mb-3"><i class="fas fa-user-graduate"></i></div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Die Junker & Knappen</h4>
              <p class="text-gray-600">
                Neumitglieder beginnen als Pilger, werden zu Junker und schließlich zu Knappen erhoben. In dieser Zeit
                lernen sie die Traditionen, Bräuche und das Schlaraffenlatein kennen.
              </p>
            </div>
          </div>

          <!-- Zitat -->
          <div data-aos="fade-up" data-aos-delay="400">
            <p class="text-gray-700 leading-relaxed italic bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              "Die Schlaraffia ist ein Bund zur Pflege der Freundschaft, der Kunst und des Humors unter dem Schutz und
              Schirm ritterlicher Formen und Gebräuche."
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation zu den Mitgliederseiten -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"> 
        <!-- Gründerväter Card -->
        <div class="ritter-card">
          <div class="overflow-hidden bg-white rounded-xl shadow-lg">
            <div class="overflow-hidden" style="height: 380px;">
              <img src="@/assets/UeberUns/gruender/1.png" alt="Gründerväter" class="w-full h-full object-cover"
                onerror="this.src=require('@/assets/BackgroundImages/IMG_4317-1920w.webp')"
                style="object-position: center 25%;">
            </div>
            <div class="border-b-4 text-[var(--schlaraffia-dark-yellow)]"></div>
            <div class="p-6 bg-white">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Unsere Gründerväter</h3>              
              <p class="text-gray-600 mb-6">Die Wegbereiter und Gründer der Schlaraffia Flensburgia aus dem Jahr 1874, die
                den Grundstein für unsere Vereinigung legten.</p>
              <router-link to="/gruender"
                class="inline-flex items-center px-5 py-3 bg-[var(--schlaraffia-dark-yellow)] text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg">
                <span>Kennenlernen</span>
                <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div> 
        
        <!-- Ehrenschlaraffen Card -->
        <div class="ritter-card">
          <div class="overflow-hidden bg-white rounded-xl shadow-lg">
            <div class="overflow-hidden" style="height: 380px;">
              <img src="@/assets/UeberUns/ehrenschlaraffen/6.png" alt="Ehrenschlaraffen"
                class="w-full h-full object-cover" onerror="this.src=require('@/assets/BackgroundImages/IMG_4317-1920w.webp')"
                style="object-position: center 25%;">
            </div>
            <div class="border-b-4 text-[var(--schlaraffia-dark-blue)]"></div>
            <div class="p-6 bg-white">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Unsere Ehrenschlaraffen</h3>              
              <p class="text-gray-600 mb-6">Besonders verdiente Mitglieder, die durch ihr außergewöhnliches Engagement mit
                der Ehrenmitgliedschaft ausgezeichnet wurden.</p>
              <router-link to="/ehrenschlaraffen"
                class="inline-flex items-center px-5 py-3 bg-[var(--schlaraffia-dark-blue)] text-white rounded-lg hover:bg-blue-900 transition-colors shadow-md hover:shadow-lg">
                <span>Kennenlernen</span>
                <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Sassen Card -->
        <div class="ritter-card">
          <div class="overflow-hidden bg-white rounded-xl shadow-lg">
            <div class="overflow-hidden" style="height: 380px;">
              <img src="@/assets/UeberUns/sassen/1.webp" alt="Aktive Sassen" class="w-full h-full object-cover"
                onerror="this.src='@/assets/BackgroundImages/IMG_4317-1920w.webp'"
                style="object-position: center 25%;">
            </div>
            <div class="border-b-4 text-[var(--schlaraffia-dark-red)]"></div>
            <div class="p-6 bg-white">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Unsere Sassen</h3>              
              <p class="text-gray-600 mb-6">Die aktiven Mitglieder, die derzeit das schlaraffische Leben in Flensburgia
                gestalten und die Tradition fortführen.</p>
              <router-link to="/sassen-view"
                class="inline-flex items-center px-5 py-3 bg-[var(--schlaraffia-dark-red)] text-white rounded-lg hover:bg-red-800 transition-colors shadow-md hover:shadow-lg">
                <span>Kennenlernen</span>
                <i class="fas fa-arrow-right ml-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Kontakt/Mitmach-Bereich -->
      <div
        class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl shadow-lg p-8 mb-12 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        data-aos="fade-up" data-aos-delay="100">
        <!-- Dekorative Elemente -->
        <div
          class="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-yellow-400 opacity-20 floating-element">
        </div>
        <div
          class="absolute bottom-0 left-0 -mb-4 -ml-4 h-12 w-12 rounded-full bg-amber-500 opacity-20 floating-element-reverse">
        </div>
        
        <div class="flex flex-col md:flex-row items-center relative z-10">
          <div class="md:w-2/3 md:pr-8">
            <h3 class="text-amber-800">
              <i class="fas fa-envelope-open-text text-amber-600 mr-3"></i>Interesse an Schlaraffia geweckt?
            </h3>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Wir freuen uns immer über Gäste und neue Interessenten. Wenn Sie mehr über die Schlaraffia Flensburgia
              erfahren oder uns kennenlernen möchten, nehmen Sie gerne Kontakt mit uns auf. Wir laden Sie herzlich ein,
              an einer unserer Sippungen teilzunehmen.
            </p>
            <router-link to="/kontakt"
              class="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg">
              <span>Kontakt aufnehmen</span>
              <i class="fas fa-paper-plane ml-2"></i>
            </router-link>
          </div>
          <div class="md:w-1/3 mt-8 md:mt-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="relative">
              <div class="absolute inset-0 bg-white rounded-full opacity-30 animate-ping-slow"></div>
              <img src="@/assets/logo.png" alt="Schlaraffia Wappen"
                class="mx-auto h-48 object-contain hover:scale-105 transition-transform duration-300 relative z-10">
            </div>
          </div>
        </div>
      </div>

      <!-- Footer-Anker und Scroll-To-Top Button -->
      <div class="text-center pt-8 pb-16">
        <button @click="scrollToTop"
          class="inline-flex items-center justify-center p-3 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300">
          <i class="fas fa-chevron-up"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import AOS from 'aos';
import { createStars } from '../utils/stars.js';

// Referenz zum Sternen-Container
const starsContainer = ref(null);

// Resize-Handler für die Sterne-Animation
const handleResize = () => {
  if (starsContainer.value) {
    createStars(starsContainer.value, {
      density: 8000,       // Mehr Sterne (niedrigerer Wert = mehr Sterne)
      minDuration: 2,      // Schnellere Animation
      maxDuration: 6       // Maximale Animationsdauer
    });
  }
};

// Lifecycle-Hooks
onMounted(() => {
  // AOS (Animate On Scroll) Bibliothek initialisieren
  AOS.refresh();
  
  // Sterne-Animation erstellen
  handleResize();
  
  // Event-Listener für Fenstergrößenänderungen
  window.addEventListener('resize', handleResize);
});

// Event-Listener entfernen, wenn Komponente unmounted wird
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Event-Emitter für Navigation
const emit = defineEmits(['navigate']);
</script>
