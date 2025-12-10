<template>
  <section>
    <div class="container mx-auto px-4 py-16">
      <h2 class="page-subtitle">Unsere Sassen</h2>

      <!-- Informationscontainer über Sassen mit Hintergrundelementen und Animationen -->
      <div
        class="mb-16 max-w-5xl mx-auto bg-gradient-to-r from-amber-50 via-white to-blue-50 rounded-xl shadow-xl p-10 backdrop-blur-sm relative overflow-hidden intro-container"
        data-aos="fade-up">
        <!-- Animierte Hintergrundelemente für visuelle Effekte -->
        <div class="absolute -top-12 -right-12 w-40 h-40 bg-amber-100 rounded-full opacity-50 animate-pulse"></div>
        <div class="absolute -bottom-12 -left-12 w-36 h-36 bg-blue-200 rounded-full opacity-40 animate-pulse"
          style="animation-delay: 1s;"></div>
        <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-red-300 rounded-full opacity-20 floating-element"></div>
        <div
          class="absolute bottom-1/4 left-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-10 floating-element-reverse">
        </div>

        <h3 class="text-3xl font-bold mb-8 text-amber-900 text-center relative z-10">Die Sassen der Schlaraffia</h3>
        
        <!-- Einführungstext über Sassen mit Animationen -->
        <div class="prose prose-lg max-w-none relative z-10">
          <p class="mb-5 text-lg leading-relaxed text-amber-900 fade-in-up" style="animation-delay: 0.3s;">
            <span
              class="text-3xl text-red-700 font-serif float-left mr-3 mt-1 p-2 bg-yellow-100 rounded-lg">"S</span>assen
            sind die aktiven Mitglieder unserer schlaraffischen Gemeinschaft. Sie gestalten das kulturelle Leben,
            pflegen Traditionen und führen die historischen Rituale fort. Als Ritter der Schlaraffia widmen sie sich den
            drei Säulen unseres Bundes: Freundschaft, Kunst und Humor.
          </p>

          <p class="text-lg leading-relaxed text-amber-800 italic fade-in-up mt-4"
            style="animation-delay: 0.6s; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
            "Im Kreise der Sassen, wo der Freundschaft Banner weht, da regieret Uhu mit milder Hand. Jeder Ritter
            schmücket unsre Tafelrunde mit seinen Gaben und mehret den Schatz des Reyches durch seiner Künste Fechsung."
          </p>
        </div>

        <!-- Infoboxen mit Icons zu den verschiedenen Rollen der Sassen -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-6 fade-in-up"
          style="animation-delay: 1.2s;">
          <!-- Hüter der Rituale -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-amber-100 p-3 rounded-full mr-4 text-amber-600">
              <i class="fas fa-theater-masks text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-amber-900 mb-1">Hüter der Rituale</h4>
              <p class="text-sm text-gray-700">Bewahren die zeremoniellen Traditionen und führen die historischen
                Rituale der Schlaraffia bei jeder Sippung durch</p>
            </div>
          </div>

          <!-- Förderer der Kunst -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
              <i class="fas fa-music text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-blue-900 mb-1">Förderer der Kunst</h4>
              <p class="text-sm text-gray-700">Kultivieren Musik, Poesie und darstellende Künste und bereichern damit
                jede Zusammenkunft</p>
            </div>
          </div>

          <!-- Träger der Gemeinschaft -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-red-100 p-3 rounded-full mr-4 text-red-600">
              <i class="fas fa-hands-helping text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-red-900 mb-1">Träger der Gemeinschaft</h4>
              <p class="text-sm text-gray-700">Pflegen tiefe Freundschaften und sorgen für den Zusammenhalt zwischen
                allen Mitgliedern des Reyches</p>
            </div>
          </div>

          <!-- Rangfolge der Würden -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-600">
              <i class="fas fa-award text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-yellow-900 mb-1">Rangfolge der Würden</h4>
              <p class="text-sm text-gray-700">Vom Prüfling über den Knappen und Junker bis zum Ritter - jeder Sasse
                durchläuft eine traditionelle Entwicklung</p>
            </div>
          </div>

          <!-- Bewahrer und Erneuerer -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-green-100 p-3 rounded-full mr-4 text-green-600">
              <i class="fas fa-seedling text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-green-900 mb-1">Bewahrer und Erneuerer</h4>
              <p class="text-sm text-gray-700">Halten die Balance zwischen Tradition und Erneuerung, um die Zukunft des
                Reyches zu sichern</p>
            </div>
          </div>

          <!-- Meister der Fröhlichkeit -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
              <i class="fas fa-glass-cheers text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-purple-900 mb-1">Meister der Fröhlichkeit</h4>
              <p class="text-sm text-gray-700">Kultivieren den schlaraffischen Humor und sorgen für heitere Stimmung in
                jeder Zusammenkunft</p>
            </div>
          </div>
        </div>

        <!-- Animierter Hinweis zur Bedeutung der Sassen -->
        <div class="text-center mt-8 fade-in-up" style="animation-delay: 1.5s;">
          <span
            class="inline-block px-5 py-2 bg-gradient-to-r from-amber-100 to-blue-100 text-red-800 rounded-full text-sm font-medium bounce-animation">
            <i class="fas fa-users mr-2"></i>Das Herz der Schlaraffia
          </span>
        </div>
      </div>
      
      <!-- Galerie der aktuellen Sassen mit Karten -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 mb-12">
        <div v-for="(ritter, index) in sassenListe" :key="index" class="ritter-card">
          <div class="overflow-hidden bg-white rounded-2xl shadow-xl h-full">
            <div class="overflow-hidden" style="height: 380px;">
              <img :src="ritter.bildUrl" :alt="ritter.name"
                class="w-full h-full object-cover object-top">
            </div>
            <div class="p-6 bg-white backdrop-blur-sm">
              <h4 class="font-bold text-xl text-amber-900 mb-2">{{ ritter.name }}</h4>
              <p v-if="ritter.titel" class="text-blue-700 italic font-medium text-lg mb-2">{{ ritter.titel }}</p>
              <p v-if="ritter.funktion" class="text-sm text-gray-700 leading-relaxed">{{ ritter.funktion }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Zurück-Button -->
      <div class="text-center mt-12">
        <a href="#" @click.prevent="$emit('navigate', 'ueber-uns')"
          class="inline-block px-8 py-4 bg-gradient-to-r from-[var(--schlaraffia-dark-red)] to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium">
          Zurück zur Übersicht
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importieren der benötigten Komponenten und Funktionen
import { ref, onMounted } from 'vue'

// Event-Emitter für die Navigation definieren
const emit = defineEmits(['navigate'])

// Daten für die Sassen mit ihren Funktionsbeschreibungen
const sassenDaten = [
  { name: "Ben", titel: "Oberschlaraffe", funktion: "Vorsitzender" },
  { name: "Tammes", titel: "Junker", funktion: "Musiker" },
  { name: "Mika", titel: "Knappe", funktion: "Zeremonienmeister" },
  { name: "Matthias", titel: "Oberschlaraffe", funktion: "Schriftführer" },
  { name: "Wilhelm", titel: "Junker", funktion: "Kassenwart" },
  { name: "Heinrich", titel: "Knappe", funktion: "Materialwart" },
  { name: "Gustav", titel: "Oberschlaraffe", funktion: "Stellvertretender Vorsitzender" },
  { name: "Otto", titel: "Junker", funktion: "Bibliothekar" },
  { name: "Karl", titel: "Knappe", funktion: "Veranstaltungskoordinator" },
  { name: "Franz", titel: "Oberschlaraffe", funktion: "Chronist" },
  { name: "Ludwig", titel: "Junker", funktion: "Festwart" },
  { name: "Hermann", titel: "Knappe", funktion: "Künstlerischer Leiter" },
  { name: "Johann", titel: "Oberschlaraffe", funktion: "Medienbeauftragter" },
  { name: "Fritz", titel: "Junker", funktion: "Vertreter im Dachverband" },
  { name: "Richard", titel: "Knappe", funktion: "Nachwuchsbeauftragter" },
  { name: "Walter", titel: "Oberschlaraffe", funktion: "Ehrenrat" }
];

// Reaktive Liste für die Anzeige der Sassen
const sassenListe = ref([]);

// Beim Laden der Komponente die Daten aufbereiten
onMounted(() => {
  // Sassen-Daten laden und mit Bildpfaden verknüpfen
  for (let i = 1; i <= 16; i++) {
    const daten = sassenDaten[i - 1] || { name: `Sasse ${i}`, titel: "Schlaraffe", funktion: "Mitglied" };
    sassenListe.value.push({
      name: daten.name,
      titel: daten.titel,
      funktion: daten.funktion,
      bildUrl: `src/assets/UeberUns/sassen/${i}.webp`
    });
  }
})
</script> 
