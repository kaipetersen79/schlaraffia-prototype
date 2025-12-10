<template>
  <section>
    <div class="container mx-auto px-4 py-16">
      <!-- Hauptüberschrift -->
      <h2 class="page-subtitle">Unsere Ehrenschlaraffen</h2>

      <!-- Einführungscontainer mit Hintergrundeffekten -->
      <div
        class="mb-16 max-w-5xl mx-auto bg-gradient-to-r from-yellow-50 via-white to-indigo-50 rounded-xl shadow-xl p-10 backdrop-blur-sm relative overflow-hidden intro-container"
        data-aos="fade-up">
        <!-- Animierte Hintergrundelemente für visuelle Effekte -->
        <div class="absolute -top-12 -right-12 w-40 h-40 bg-yellow-100 rounded-full opacity-50 animate-pulse"></div>
        <div class="absolute -bottom-12 -left-12 w-36 h-36 bg-red-200 rounded-full opacity-40 animate-pulse"
          style="animation-delay: 1s;"></div>
        <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-amber-300 rounded-full opacity-20 floating-element"></div>
        <div
          class="absolute bottom-1/4 left-1/3 w-20 h-20 bg-indigo-400 rounded-full opacity-10 floating-element-reverse">
        </div>

        <!-- Titelzeile -->
        <h3 class="text-3xl font-bold mb-8 text-indigo-900 text-center relative z-10">Die Ehrenschlaraffen</h3>

        <!-- Einführungstext mit Animationseffekten -->
        <div class="prose prose-lg max-w-none relative z-10">
          <!-- Erster Absatz mit Schmuckinitiale -->
          <p class="mb-5 text-lg leading-relaxed text-indigo-900 fade-in-up" style="animation-delay: 0.3s;">
            <span
              class="text-3xl text-red-700 font-serif float-left mr-3 mt-1 p-2 bg-yellow-100 rounded-lg">"E</span>hrenschlaraffen
            sind verdiente Mitglieder, die durch außergewöhnliches Engagement und besondere Leistungen zur Förderung und
            Erhaltung der Schlaraffia Flensburgia beigetragen haben. Diese Auszeichnung wird nur jenen zuteil, die über
            viele Jahre hinweg die schlaraffischen Ideale von Freundschaft, Kunst und Humor vorbildlich gelebt haben.
          </p>

          <!-- Zweiter Absatz -->
          <p class="text-lg leading-relaxed text-indigo-900 fade-in-up" style="animation-delay: 0.6s;">
            In unserer Gemeinschaft genießen sie höchste Anerkennung und haben durch ihre Werke, ihre Weisheit und ihren
            Charakter die Geschichte unseres Reyches maßgeblich geprägt.
          </p>

          <!-- Zitat mit Schatteneffekt -->
          <p class="text-lg leading-relaxed text-amber-800 italic fade-in-up mt-6"
            style="animation-delay: 0.9s; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">
            "Im Uhuversum des Reyches, wo der Geist Uhus waltet, erhebet sich der würdige Sasse zum Quell der Freude und
            Weisheit empor, bis er die Ehrenkrone des Schlaraffenthums zu tragen vermag. Als Hüter der Fechsungen und
            Meister der Ahnungen wird ihm die höchste Weihe des Schlaraffischen Lebens zuteil, auf dass er als
            leuchtendes Vorbild das Aha zum Ehe führe, wie es seit Uhus Zeiten Brauch."
          </p>
        </div>

        <!-- Infoboxen mit Icons und Hover-Effekten -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-6 fade-in-up" style="animation-delay: 1.2s;">
          <!-- Schlaraffischer Adel -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-red-100 p-3 rounded-full mr-4 text-red-600">
              <i class="fas fa-crown text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-indigo-900 mb-1">Schlaraffischer Adel</h4>
              <p class="text-sm text-gray-700">Repräsentieren die höchste Würde und tragen besondere Insignien bei
                offiziellen Zeremonien</p>
            </div>
          </div>

          <!-- Hüter der Tradition -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-amber-100 p-3 rounded-full mr-4 text-amber-600">
              <i class="fas fa-book-open text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-indigo-900 mb-1">Hüter der Tradition</h4>
              <p class="text-sm text-gray-700">Bewahren das historische Wissen und geben die Traditionen an jüngere
                Generationen weiter</p>
            </div>
          </div>

          <!-- Botschafter des Reyches -->
          <div
            class="flex items-start bg-white/60 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
            <div class="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-600">
              <i class="fas fa-handshake text-xl"></i>
            </div>
            <div>
              <h4 class="font-bold text-indigo-900 mb-1">Botschafter des Reyches</h4>
              <p class="text-sm text-gray-700">Vertreten das Reych bei überregionalen Treffen und pflegen Beziehungen zu
                anderen Schlaraffien</p>
            </div>
          </div>
        </div>

        <!-- Dekorativer Abschluss mit Animation -->
        <div class="text-center mt-8 fade-in-up" style="animation-delay: 0.9s;">
          <span
            class="inline-block px-5 py-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 rounded-full text-sm font-medium bounce-animation">
            <i class="fas fa-award mr-2"></i>Höchste Auszeichnung der Schlaraffia
          </span>
        </div>
      </div>

      <!-- Ehrenschlaraffen Bildergalerie mit responsivem Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-12">
        <!-- Dynamische Anzeige der Ehrenschlaraffen aus der Liste -->
        <div v-for="(ritter, index) in ehrenListe" :key="index" class="ritter-card">
          <div class="overflow-hidden bg-white rounded-2xl shadow-xl h-full">
            <div class="overflow-hidden" style="height: 480px;">
              <img :src="ritter.bildUrl" :alt="ritter.name"
                class="w-full h-full object-cover object-top">
            </div>
            <div class="p-6 bg-white backdrop-blur-sm">
              <h4 class="font-bold text-xl text-gray-900 mb-2">{{ ritter.name }}</h4>
              <p v-if="ritter.titel" class="text-amber-700 italic font-medium text-lg mb-2">{{ ritter.titel }}</p>
              <p class="text-sm text-gray-700 leading-relaxed">{{ ritter.beschreibung || 'Ehrenmitglied seit ' +
                ritter.jahr }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigationsbutton zurück zur Übersichtsseite -->
      <div class="text-center mt-12">
        <a href="#" @click.prevent="$emit('navigate', 'ueber-uns')"
          class="inline-block px-8 py-4 bg-gradient-to-r from-[var(--schlaraffia-dark-blue)] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium">
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

// Grunddaten der Ehrenschlaraffen mit detaillierten Informationen
const ehrenDaten = [
  {
    name: "Ehrenschlaraffe 1",
    titel: "Ehrenspiegel",
    jahr: "2010",
    beschreibung: "Als Gründer des Musikprogramms hat er über drei Jahrzehnte die kulturellen Veranstaltungen bereichert und unzählige musikalische Höhepunkte geschaffen."
  },
  {
    name: "Ehrenschlaraffe 2",
    titel: "Ehrenkantzler",
    jahr: "2012",
    beschreibung: "Für seine langjährige Tätigkeit als Organisator und seine Verdienste um die Erhaltung der Traditionen im Reych."
  },
  {
    name: "Ehrenschlaraffe 3",
    titel: "Ehrenschriftführer",
    jahr: "2015",
    beschreibung: "Als Verfasser der Chronik hat er die Geschichte unseres Reyches für kommende Generationen bewahrt."
  },
  {
    name: "Ehrenschlaraffe 4",
    titel: "Ehrenzeremonienmeister",
    jahr: "2018",
    beschreibung: "Durch seine würdevolle Gestaltung der Zeremonien hat er dem Reych zu besonderem Ansehen verholfen."
  },
  {
    name: "Ehrenschlaraffe 5",
    titel: "Ehrenreychsmarschall",
    jahr: "2020",
    beschreibung: "Für seine Verdienste als Kulturbeauftragter und die Förderung junger Talente in der Schlaraffia."
  },
  {
    name: "Ehrenschlaraffe 6",
    titel: "Ehrenbotschafter",
    jahr: "2022",
    beschreibung: "Als internationaler Botschafter hat er die Verbindungen zu anderen Reychen weltweit gestärkt und ausgebaut."
  }
];

// Reaktive Liste für die Anzeige in der Benutzeroberfläche
const ehrenListe = ref([]);

// Wird ausgeführt, wenn die Komponente in den DOM eingehängt wird
onMounted(() => {
  // Ehrenschlaraffen-Daten aufbereiten und mit Bildpfaden versehen
  for (let i = 1; i <= 6; i++) {
    // Fallback-Daten verwenden, falls kein Eintrag im Array vorhanden
    const daten = ehrenDaten[i - 1] || { 
      name: `Ehrenschlaraffe ${i}`, 
      titel: "Ehrenmitglied", 
      jahr: "2020" 
    };
    
    // Füge Daten mit Bildpfad zur Anzeige-Liste hinzu
    ehrenListe.value.push({
      name: daten.name,
      titel: daten.titel,
      beschreibung: daten.beschreibung,
      jahr: daten.jahr,
      bildUrl: new URL(`../assets/UeberUns/ehrenschlaraffen/${i}.png`, import.meta.url).href
    });
  }
})
</script>
