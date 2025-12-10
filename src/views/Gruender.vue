<template>
  <section>
    <div class="container mx-auto px-4 py-16">
      <!-- Hauptüberschrift -->
      <h2 class="page-subtitle">Unsere Gründerväter</h2>

      <!-- Informationscontainer über Gründerväter mit Hintergrundeffekten -->
      <div
        class="mb-16 max-w-5xl mx-auto bg-gradient-to-r from-amber-50 via-white to-amber-50 rounded-xl shadow-xl p-10 backdrop-blur-sm relative overflow-hidden intro-container"
        data-aos="fade-up">
        <!-- Animierte Hintergrundelemente für visuelle Effekte -->
        <div class="absolute -top-12 -right-12 w-40 h-40 bg-amber-100 rounded-full opacity-50 animate-pulse"></div>
        <div class="absolute -bottom-12 -left-12 w-36 h-36 bg-red-200 rounded-full opacity-40 animate-pulse"
          style="animation-delay: 1s;"></div>
        <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 floating-element"></div>
        <div
          class="absolute bottom-1/4 left-1/3 w-20 h-20 bg-amber-400 rounded-full opacity-10 floating-element-reverse">
        </div>

        <!-- Logo mit Animation und Glüheffekt -->
        <div class="flex justify-center mb-4 relative z-10">
          <div class="relative logo-container">
            <div class="absolute inset-0 bg-white rounded-full opacity-30 animate-ping-slow"></div>
            <img src="/src/assets/logo.png" alt="Schlaraffia Logo"
              class="h-24 object-contain hover:scale-110 transition-transform duration-300 logo-glow">
          </div>
        </div>

        <!-- Jahreszahl im Schlaraffia-Format -->
        <h3 class="text-3xl font-bold mb-6 text-amber-800 text-center relative z-10">Anno Uhui 135</h3>

        <!-- Einführungstext mit Schmuckinitiale -->
        <div class="prose prose-lg max-w-none relative z-10">
          <p class="mb-5 text-lg leading-relaxed text-amber-900 fade-in-up" style="animation-delay: 0.3s;">
            <span class="text-3xl text-red-700 font-serif float-left mr-3 mt-1 p-2 bg-yellow-100 rounded-lg">"D</span>ie
            Gründerväter der Schlaraffia Flensburgia legten im Jahre 135 der Uhuzahl den Grundstein für unsere
            Vereinigung. Ihrem Weitblick und ihrer Begeisterung für die schlaraffischen Ideale verdanken wir unsere
            lange Tradition und den blühenden Geist unseres Reyches.
          </p>

          <!-- Zitat mit Schatteneffekt -->
          <p class="text-lg leading-relaxed text-amber-800 italic fade-in-up mt-4"
            style="animation-delay: 0.6s; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
            "Als Uhu sein Licht erstmals über Flensburgia erstrahlte, da vereinten sich edle Recken unter seinem Banner,
            auf dass ein Reych entstehe, in dem Freundschaft, Kunst und Humor in Ewigkeit gedeihen mögen."
          </p>
        </div>

        <!-- Faktenboxen mit Icons und Hover-Effekten -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 fade-in-up"
          style="animation-delay: 0.9s;">
          <!-- Erste Sippung -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-amber-100 p-3 rounded-full mr-4 text-amber-600">
              <i class="fas fa-landmark text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-amber-900 mb-1">Erste Sippung</h4>
              <p class="text-sm text-gray-700">Am 15. Oktober 1874 fand die Gründungssippung in feierlichem Rahmen statt
              </p>
            </div>
          </div>

          <!-- Reychsvertrag -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-red-100 p-3 rounded-full mr-4 text-red-600">
              <i class="fas fa-scroll text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-amber-900 mb-1">Erster Reychsvertrag</h4>
              <p class="text-sm text-gray-700">Verfassten die ersten Schlaraffischen Spielregeln für das Reych
                Flensburgia</p>
            </div>
          </div>

          <!-- Schlaraffisches Erbe -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-600">
              <i class="fas fa-feather-alt text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-amber-900 mb-1">Schlaraffisches Erbe</h4>
              <p class="text-sm text-gray-700">Begründeten die Traditionen und Werte, die bis heute unser Reych prägen
              </p>
            </div>
          </div>
        </div>

        <!-- Dekorativer Abschluss mit Animation -->
        <div class="text-center mt-8 fade-in-up" style="animation-delay: 1.2s;">
          <span
            class="inline-block px-5 py-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 rounded-full text-sm font-medium bounce-animation">
            <i class="fas fa-history mr-2"></i>Wegbereiter des Schlaraffischen Geistes
          </span>
        </div>
      </div>

      <!-- Gründerväter Bildergalerie mit responsivem Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
        <!-- Dynamische Anzeige der Gründerväter aus der Liste -->
        <div v-for="(ritter, index) in gruenderListe" :key="index" class="ritter-card">
          <div
            class="overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl shadow-xl h-full">
            <div class="overflow-hidden" style="height: 480px;">
              <img :src="ritter.bildUrl" :alt="ritter.name"
                class="w-full h-full object-cover object-top">
            </div>
            <div class="p-6 bg-white/90 backdrop-blur-sm">
              <h4 class="font-bold text-xl text-amber-900 mb-2">{{ ritter.name }}</h4>
              <p v-if="ritter.titel" class="text-amber-800 italic font-medium text-lg mb-2">{{ ritter.titel }}</p>
              <p class="text-sm text-amber-700 leading-relaxed">{{ ritter.beschreibung }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigationsbutton zurück zur Übersichtsseite -->
      <div class="text-center mt-12">
        <a href="#" @click.prevent="$emit('navigate', 'ueber-uns')"
          class="inline-block px-8 py-4 bg-gradient-to-r from-[var(--schlaraffia-dark-yellow)] to-amber-700 text-white rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium">
          Zurück zur Übersicht
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Definition der Ereignisse (Events), die diese Komponente auslösen kann
const emit = defineEmits(['navigate'])

// Grunddaten der Gründerväter
const gruenderDaten = [
  { name: "Gründer 1", titel: "Erster Vorsitzender", beschreibung: "Initiator der Flensburgia" },
  { name: "Gründer 2", titel: "Schriftführer", beschreibung: "Protokollant der ersten Sippungen" },
  { name: "Gründer 3", titel: "Zeremonienmeister", beschreibung: "Gestaltete die ersten Rituale" },
  { name: "Gründer 4", titel: "Schatzmeister", beschreibung: "Verwaltete die ersten Geldmittel" }
];

// Reaktive Liste für die Anzeige in der Benutzeroberfläche
const gruenderListe = ref([]);

// Wird ausgeführt, wenn die Komponente in den DOM eingehängt wird
onMounted(() => {
  // Gründerväter-Daten aufbereiten und mit Bildpfaden versehen
  for (let i = 1; i <= 4; i++) {
    // Fallback-Daten verwenden, falls kein Eintrag im Array vorhanden
    const daten = gruenderDaten[i - 1] || { 
      name: `Gründer ${i}`, 
      titel: "Gründungsvater", 
      beschreibung: "Mitglied des Gründungszirkels" 
    };
    
    // Füge Daten mit Bildpfad zur Anzeige-Liste hinzu
    gruenderListe.value.push({
      name: daten.name,
      titel: daten.titel,
      beschreibung: daten.beschreibung,
      bildUrl: `src/assets/UeberUns/gruender/${i}.png`
    });
  }
})
</script>
