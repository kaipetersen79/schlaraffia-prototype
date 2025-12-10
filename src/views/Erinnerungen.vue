<template>
    <div class="erinnerungen-container">
        <!-- Animierter Textcontainer -->
        <div class="container mx-auto px-4 py-8">            <div class="mb-16 mx-auto rounded-xl shadow-xl p-10 relative overflow-hidden erinnerungen-intro-container"
                data-aos="fade-up">
                <h3 class="text-3xl font-bold mb-8 text-indigo-900 relative z-10 text-center w-full">Erinnerungen und
                    Würdigungen</h3>

                <div class="prose prose-lg max-w-none relative z-10">
                    <p class="mb-6">
                        In diesem Bereich ehren wir besondere Persönlichkeiten, die das Reych Flensburgia geprägt haben.
                        Hier finden sich Würdigungen, Nachrufe und Erinnerungen an verdiente Sassen, die uns
                        vorangegangen
                        sind oder deren besondere Verdienste wir hervorheben möchten.
                    </p>

                    <ul class="list-disc list-inside mb-6 text-amber-800">
                        <li class="mb-2">
                            <span class="text-indigo-900 font-medium">Ehrenvolle Würdigungen</span> - für Recken von
                            besonderem Verdienst
                        </li>
                        <li class="mb-2">
                            <span class="text-indigo-900 font-medium">Ritterliche Laudationes</span> - zum ehrenden
                            Gedenken
                        </li>
                        <li class="mb-2">
                            <span class="text-indigo-900 font-medium">Historische Dokumente</span> - Zeugnisse
                            schlaraffischer Tradition
                        </li>
                    </ul>
                </div>

                <!-- Zusätzliche Info mit Animation -->                <div class="text-center mt-8 erinnerungen-fade-in-up" style="animation-delay: 0.9s;">
                    <span
                        class="inline-block px-5 py-2 bg-gradient-to-r from-amber-100 to-red-100 text-red-800 rounded-full text-sm font-medium erinnerungen-bounce-animation">
                        <i class="fas fa-crown mr-2"></i>Den vorangegangenen Recken in Anerkennung und Dankbarkeit
                    </span>
                </div>
            </div>
        </div>

        <!-- Download-Links für Eintrittsliste und Statuten -->
        <div class="flex justify-center gap-6 mt-8 mb-12">
            <a href="/Einritt-Liste165-3313-.docx" download
                class="bg-gradient-to-r from-amber-100 to-yellow-200 hover:from-amber-200 hover:to-yellow-300 text-amber-800 px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
                <i class="fas fa-download mr-2"></i> Eynritts-Liste herunterladen
            </a>
            <a href="https://cdn.website-editor.net/s/7eedee3b3d6c4ddaa47f6dd2ec757432/files/uploaded/statuten-3312-.pdf?Expires=1751123329&Signature=LhFFpQMCGI49baD8PHkJMB2UcikRJJtpG4sj4nG6q40B9qK5zW33C26sTukAtAok0Mq6vta3lqK3KgfK5ky9TlQwNzcJO7uN3LoViDlNCvE5~YsLzg9Okxgulj-IHv5ujIhwuNK3wuCg929yTKzGJ4njHrFD2XphEnpH1ynbEf5EBTAhQic7dwfklZbpCO6z-4q3F6KIvL-iOhOI2Gby5piQGNWt5hHzOVhooCNtbeAUd79QdP6AF4A4YaLXEg3lNFFf9R~9XgQeReOJ6oiHTqUF8Tjd20K8x3XB8uOrDbCg-hhkaPm0S00N22thXVN4ZA6UQ6HjH3l42l~D9q3GXg__&Key-Pair-Id=K2NXBXLF010TJW"
                target="_blank" rel="noopener"
                class="bg-gradient-to-r from-amber-100 to-yellow-200 hover:from-amber-200 hover:to-yellow-300 text-amber-800 px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
                <i class="fas fa-file-pdf mr-2"></i> Historische Statuten herunterladen
            </a>
        </div>
        <div class="w-full text-center">
            <h4 class="text-3xl font-bold mb-6 title-font inline-block mt-8 bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent erinnerungen-title">
                Erinnerung an Rt. Rode Grütt
            </h4>
        </div>
        
        <!-- Trenner oberhalb der Storybook-Box -->
        <div class="erinnerungen-animated-trenner">
            <Trenner />
        </div>
        
          <div class="max-w-5xl mx-auto rounded-xl shadow-md mt-12 transform transition-all hover:shadow-xl">            <!-- Tabs für die verschiedenen Laudationes und Dokumente -->            <div class="erinnerungen-storybook-container">                <div class="erinnerungen-tabs-wrapper">
                    <div class="flex mb-0 flex-wrap items-center justify-between">
                        <div class="tabs-container">
                            <button @click="selectButton('block1')"
                                :class="['erinnerungen-tab-button', activeButton === 'block1' ? 'active' : '']">
                                <i class="fas fa-feather-alt mr-2"></i>Laudatio Ritter Siam
                            </button>
                            <button @click="selectButton('block2')"
                                :class="['erinnerungen-tab-button', activeButton === 'block2' ? 'active' : '']">
                                <i class="fas fa-book mr-2"></i>Laudatio Rt. Pedro Nero
                            </button>
                            <button @click="selectButton('block3')"
                                :class="['erinnerungen-tab-button', activeButton === 'block3' ? 'active' : '']">
                                <i class="fas fa-anchor mr-2"></i>Windjammer Orden
                            </button>
                        </div>
                        
                        <!-- Font-Style Schalter -->
                    </div>
                </div>                <!-- Textbox im Storybook-Stil mit Sternen-Effekt -->
                    <div class="erinnerungen-storybook relative" ref="textContainer">
                        <div class="stars-container" ref="storyStarsContainer"></div>
                        <div v-if="activeButton === 'block3'" v-html="formatWindjammerText()" class="windjammer-content"></div>
                        <div v-else style="white-space: pre-wrap;">{{ selectedText }}</div>
                    </div>
            </div>
        </div>
          <div class="erinnerungen-animated-trenner">
            <Trenner />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import Trenner from '../components/Trenner.vue'
import { createStars } from '../utils/stars.js'

const block1 = ref('')
const block2 = ref('')
const windjammerText = ref('')
const selectedText = ref('')
const activeButton = ref('block1')
const textContainer = ref(null)
const storyStarsContainer = ref(null)
const fontStyle = ref('rollenspiel') // Neue Variable für die Schriftauswahl

// Funktion zum Laden der Textdateien
async function loadTextFiles() {
    try {
        // Laden der Laudatio Ritter Siam
        const siamResponse = await fetch(new URL('../assets/History/texts/laudatio_ritter_siam.txt', import.meta.url).href)
        block1.value = await siamResponse.text()

        // Laden der Laudatio Rt. Pedro Nero
        const pedroResponse = await fetch(new URL('../assets/History/texts/laudatio_pedro_nero.txt', import.meta.url).href)
        block2.value = await pedroResponse.text()

        // Laden des Windjammer-Textes
        const windjammerResponse = await fetch(new URL('../assets/History/texts/windjammer.txt', import.meta.url).href)
        windjammerText.value = await windjammerResponse.text()

        // Standardmäßig den ersten Text anzeigen
        selectedText.value = block1.value
    } catch (error) {
        console.error('Fehler beim Laden der Textdateien:', error)
    }
}

function selectButton(block) {
    if (block === 'block1') {
        selectedText.value = block1.value
    } else if (block === 'block2') {
        selectedText.value = block2.value
    } else if (block === 'block3') {
        // For Windjammer tab, the content is rendered through v-html
    }
    activeButton.value = block
}

// Toggle-Funktion für die Windjammer-Box
function toggleWindjammerText() {
    showWindjammerContent.value = !showWindjammerContent.value
}

// Funktion zum Formatieren des Windjammer-Textes für die epische Darstellung
function formatWindjammerText() {
    if (!windjammerText.value) return '';

    return windjammerText.value.split('\n').map(line => {
        if (line.startsWith('-')) {
            return `<li class="ml-6 text-lg mb-3 erinnerungen-vintage-list-item"><span class="text-amber-800">✦</span> ${line.substring(2)}</li>`;
        } else if (line === '') {
            return '<div class="mb-4"></div>';
        } else if (line.includes('Kilianischen Windjammer-Ordens der Nordischen Reyche')) {
            return `<h3 class="font-bold text-center my-6 text-2xl bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent erinnerungen-vintage-title">${line}</h3>`;
        } else if (line.startsWith('Flensburgia, am')) {
            return `<p class="mt-8 text-lg italic text-right erinnerungen-vintage-signature">${line}</p>`;
        } else if (line.startsWith('e-Mail:')) {
            return `<p class="mt-2 text-lg">${line.replace('siamex@email.de', '<a href="mailto:siamex@email.de" class="text-blue-600 underline hover:text-blue-800">siamex@email.de</a>')}</p>`;
        } else if (line.startsWith('„Den Schlaraffen')) {
            return `<p class="text-xl mb-6 italic font-medium erinnerungen-vintage-quote">${line}</p>`;
        } else if (line.includes('Hammonia') || line.includes('Medina Mayurca')) {
            return `<div class="mb-6 text-lg erinnerungen-vintage-location border-l-4 border-amber-400 pl-4 py-2 bg-amber-50 rounded-r-md">${line.replace(/,\s/g, ',<br/>')}</div>`;
        } else if (line.startsWith('In ehrerfülltem Gedenken')) {
            return `<p class="text-lg mb-6 first-letter:text-5xl first-letter:float-left first-letter:mr-2 first-letter:font-bold first-letter:text-amber-700">${line}</p>`;
        } else if (line.startsWith('Als besondere Auszeichnungen')) {
            return `<p class="text-lg mb-4 font-semibold text-amber-800">${line}</p>`;
        } else {
            return `<p class="text-lg mb-4">${line}</p>`;
        }
    }).join('');
}

// Funktion zum Wechseln der Schriftart
function toggleFontStyle() {
    fontStyle.value = fontStyle.value === 'rollenspiel' ? 'normal' : 'rollenspiel';
}

// Überwachung für Änderungen am aktiven Button
watch(activeButton, () => {
    nextTick(() => {
        // Scrolle zum Anfang des Textcontainers, wenn der Tab gewechselt wird
        if (textContainer.value) {
            textContainer.value.scrollTop = 0
        }
    })
})

// Initialisierung beim Laden der Komponente
onMounted(() => {
    loadTextFiles()
    
    // Sterne-Effekt für die Storybook-Box erstellen
    if (storyStarsContainer.value) {
        createStars(storyStarsContainer.value, {
            density: 12000, // Höhere Dichte für mehr Sterne
            minDuration: 4,
            maxDuration: 10
        });
    }
})

// Sternen-Effekt bei Größenänderung aktualisieren
const handleResize = () => {
    if (storyStarsContainer.value) {
        createStars(storyStarsContainer.value, {
            density: 12000,
            minDuration: 4,
            maxDuration: 10
        });
    }
};

// Event-Listener für Größenänderungen hinzufügen/entfernen
onMounted(() => {
    window.addEventListener('resize', handleResize);
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
})
</script>
