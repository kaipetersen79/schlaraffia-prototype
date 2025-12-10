<template>
  <section>
    <div class="container mx-auto px-4 py-16">
      <h2 class="page-subtitle">Schlaraffenlatein</h2>
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500"></div>
      </div>

      <div v-else>
        <!-- Einführung -->
        <div class="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div class="md:flex">
            <div class="md:w-1/3 bg-amber-50 p-6 flex items-center justify-center">
              <div class="text-center">
                <img :src="logoImage" alt="Wappen" class="h-32 mx-auto mb-4" />
                <p class="text-amber-800 font-semibold italic">"In Arte Voluptas"</p>
              </div>
            </div>
            <div class="md:w-2/3 p-6">
              <h3 class="text-xl font-bold mb-4 title-font">Die Sprache der Schlaraffen</h3>
              <p class="mb-4">Das Schlaraffenlatein ist die einzigartige Sprache der Schlaraffia, die bei unseren
                Zusammenkünften und in unseren Schriften verwendet wird. Diese besondere Sprachform verleiht unserer
                Gemeinschaft ihre unverwechselbare Identität und verbindet Schlaraffen weltweit.</p>
              <p>In diesem Glossar finden Sie die wichtigsten Begriffe des Schlaraffenlateins mit ihren Erklärungen,
                alphabetisch geordnet für Ihre einfache Nutzung. Klicken Sie auf die Buchstaben, um direkt zu den
                jeweiligen Abschnitten zu springen.</p>
            </div>
          </div>
        </div>
      </div> <!-- Statistik -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-6 no-print">
        <div class="text-sm text-gray-500" v-if="!searchQuery">
          <p>{{ glossaryItems.length }} Begriffe im Schlaraffenlatein-Wörterbuch</p>
        </div>
        <div class="text-sm text-gray-500" v-else>
          <p>{{ filteredTerms.length }} von {{ glossaryItems.length }} Begriffen gefunden für "{{ searchQuery }}"</p>
        </div>

        <button @click="printGlossary"
          class="mt-2 md:mt-0 flex items-center px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg shadow-sm transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Glossar drucken
        </button>
      </div> <!-- Alphabet Schnellnavigation -->
      <div
        class="alphabet-nav sticky top-4 z-10 flex flex-wrap justify-center gap-2 mb-10 border-t border-b border-amber-200 py-4 px-6 mx-8 bg-amber-50 rounded-lg shadow-sm">
        <a v-for="letter in alphabet" :key="letter" :href="`#section-${letter}`"
          :class="['w-7 h-7 flex items-center justify-center rounded-full font-semibold transition-all text-sm',
            hasMatchingTerms(letter) ? 'bg-amber-100 hover:bg-amber-300 hover:scale-110 text-amber-800 shadow-sm' : 'bg-gray-100 text-gray-400 cursor-not-allowed']">
          {{ letter }}
        </a>
      </div>

      <!-- Suchfeld -->
      <div class="max-w-lg mx-auto mb-10">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input type="text" v-model="searchQuery" placeholder="Begriff oder Definition suchen..."
            class="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm" />
          <button v-if="searchQuery" @click="searchQuery = ''"
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Glossar nach Alphabet -->
      <div v-for="letter in visibleLetters" :key="letter" :id="`section-${letter}`" class="mb-12 relative">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold pb-2 border-b-2 border-amber-400 inline-block">{{ letter }}</h3>
          <a href="#" @click.prevent="scrollToTop"
            class="text-amber-600 hover:text-amber-800 text-sm flex items-center group">
            <span>Zurück nach oben</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1 group-hover:translate-y-[-2px] transition-transform" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div v-for="(item, index) in getFilteredItemsByLetter(letter)" :key="index"
            class="glossary-item border-b border-gray-100 last:border-b-0 hover:bg-amber-50 transition-colors">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              <div class="md:col-span-1">
                <h4 class="font-bold text-lg text-amber-800">
                  {{ item.term }}
                  <span v-if="isImportantTerm(item)"
                    class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800"
                    title="Wichtiger Begriff mit ausführlicher Definition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Wichtig
                  </span>
                </h4>
              </div>
              <div class="md:col-span-2">
                <p class="text-gray-700" v-html="renderDefinition(item.definition)"></p>
              </div>
            </div>
          </div>
        </div>
        <!-- Keine Ergebnisse -->
        <div v-if="getFilteredItemsByLetter(letter).length === 0"
          class="text-center py-6 bg-gray-50 rounded-lg border border-gray-200">
          <p class="text-gray-500">Keine Begriffe unter diesem Buchstaben gefunden.</p>
        </div>
      </div>
      <div v-if="filteredTerms.length === 0 && searchQuery"
        class="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-xl text-gray-500 mb-2">Keine Ergebnisse für "{{ searchQuery }}" gefunden.</p>
        <p class="text-gray-500">Versuchen Sie einen anderen Suchbegriff oder durchsuchen Sie das Alphabet.</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import glossaryDataRaw from '../assets/Schlaraffenlatein/schlaraffenlatein.csv?raw';
import { parseCSV } from '../utils/csvParser.js';
import logoImage from '../assets/logo.png';

const emit = defineEmits(['navigate']);
const searchQuery = ref('');
const isLoading = ref(true);

const glossaryItems = ref([]);

onMounted(() => {
  setTimeout(() => {
    glossaryItems.value = parseCSV(glossaryDataRaw);
    glossaryItems.value.sort((a, b) => a.term.localeCompare(b.term, 'de'));
    isLoading.value = false;
  }, 500);
});

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const filteredTerms = computed(() => {
  if (!searchQuery.value) return glossaryItems.value;

  const query = searchQuery.value.toLowerCase();
  return glossaryItems.value.filter(item =>
    item.term.toLowerCase().includes(query) ||
    item.definition.toLowerCase().includes(query)
  );
});

const visibleLetters = computed(() => {
  if (!searchQuery.value) return alphabet.filter(letter => hasMatchingTerms(letter));

  const letters = new Set();
  filteredTerms.value.forEach(item => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (alphabet.includes(firstLetter)) {
      letters.add(firstLetter);
    }
  });

  return Array.from(letters).sort();
});

const getFilteredItemsByLetter = (letter) => {
  return filteredTerms.value.filter(item => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    return firstLetter === letter;
  });
};

const hasMatchingTerms = (letter) => {
  return getFilteredItemsByLetter(letter).length > 0;
};

const renderDefinition = (definition) => {
  if (!searchQuery.value.trim() || !definition) return definition || "Keine Definition verfügbar";

  const query = searchQuery.value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${query})`, 'gi');
  return definition.replace(regex, '<span class="highlight">$1</span>');
};

const isImportantTerm = (item) => {
  return item.definition && item.definition.length > 100;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    element.classList.add('section-highlight');
    setTimeout(() => {
      element.classList.remove('section-highlight');
    }, 1500);
  }
};

const printGlossary = () => {
  const currentQuery = searchQuery.value;
  searchQuery.value = '';
  const printStyle = document.createElement('style');
  printStyle.id = 'print-style-temporary';
  printStyle.innerHTML = `
    @media print {
      body * {
        visibility: hidden;
      }
      #print-content, #print-content * {
        visibility: visible;
      }
      #print-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }
      
      #print-content .glossary-item {
        break-inside: avoid;
        page-break-inside: avoid;
        margin-bottom: 10px;
      }
      
      #print-content .letter-section {
        margin-bottom: 20px;
        break-inside: avoid;
        page-break-after: auto;
      }
      
      #print-content .letter-heading {
        font-size: 18pt;
        border-bottom: 2px solid #000;
        display: inline-block;
        margin-bottom: 10px;
        page-break-after: avoid;
      }
      
      #print-content .term {
        font-weight: bold;
        font-size: 12pt;
      }
      
      #print-content .definition {
        font-size: 10pt;
      }
      
      @page {
        margin: 1.5cm;
        size: portrait;
      }
    }
  `;
  document.head.appendChild(printStyle);

  const glossaryByLetter = {};
  alphabet.forEach(letter => {
    const items = glossaryItems.value.filter(item =>
      item.term.charAt(0).toUpperCase() === letter
    );
    if (items.length > 0) {
      glossaryByLetter[letter] = items;
    }
  });
  let printContent = `
    <div id="print-content" style="font-family: Arial, sans-serif; line-height: 1.5;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="${logoImage}" alt="Wappen" style="height: 100px; margin: 0 auto;" />
        <h1 style="text-align: center; font-size: 24pt; margin-top: 10px;">Schlaraffenlatein Glossar</h1>
        <p style="font-style: italic; color: #92400e; font-weight: 600;">"In Arte Voluptas"</p>
      </div>
  `;

  // Add glossary content
  Object.keys(glossaryByLetter).sort().forEach(letter => {
    printContent += `
      <div class="letter-section">
        <h2 class="letter-heading">${letter}</h2>
        <div class="letter-content">
    `;

    glossaryByLetter[letter].forEach(item => {
      printContent += `
        <div class="glossary-item">
          <div class="term">${item.term}</div>
          <div class="definition">${item.definition}</div>
        </div>
      `;
    });

    printContent += `
        </div>
      </div>
    `;
  });

  printContent += `</div>`;

  const container = document.querySelector('.container');
  const originalContent = container.innerHTML;
  container.innerHTML = printContent;

  setTimeout(() => {
    window.print();
    setTimeout(() => {
      document.getElementById('print-style-temporary').remove();
      container.innerHTML = originalContent;
      searchQuery.value = currentQuery;
      initializeEventListeners();
    }, 500);
  }, 100);
};

onMounted(() => {
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    scrollToSection(id);
  }
  const letterLinks = document.querySelectorAll('.alphabet-nav a');
  letterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.classList.contains('cursor-not-allowed')) {
        e.preventDefault();
        return;
      }
      const sectionId = link.getAttribute('href').substring(1);
      e.preventDefault();
      scrollToSection(sectionId);
    });
  });
});

const initializeEventListeners = () => {
  const letterLinks = document.querySelectorAll('.alphabet-nav a');
  letterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.classList.contains('cursor-not-allowed')) {
        e.preventDefault();
        return;
      }

      const sectionId = link.getAttribute('href').substring(1);
      e.preventDefault();
      scrollToSection(sectionId);
    });
  });
};
</script>
