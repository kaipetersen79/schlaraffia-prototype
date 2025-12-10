<template>  <section> <!-- Hero im Willekum-Stil -->
    <div class="willekum-hero-section relative mb-12 overflow-hidden h-[48rem]">
      <hr class="animated-divider absolute top-0 w-full my-0 z-10">
      <img class="page-image" 
        src="../assets/Sippungen/3174/IMG_4032-1920w.webp" 
        alt="Kontakt Impression" 
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      <!-- Sterne-Partikel Container -->
      <div class="stars-container" ref="starsContainer"></div>
      <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div class="hero-title-container text-center animate__animated animate__fadeInDown">
          <h1 class="page-title">
            Kontakt
          </h1>
          <p class="page-undertitle">
            Netzwisch & Quasselstrippe
          </p>
        </div>
      </div>
      <hr class="animated-divider absolute bottom-0 w-full my-0">
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <!-- Hauptbereich mit zwei Spalten: Kontaktinfos und Burg-Information -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Linke Spalte - Kontaktinformationen -->
        <div class="flex flex-col h-full">          <!-- Ansprechpartner-Container mit Kontaktdaten -->
          <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg shadow-lg p-8 backdrop-blur-sm relative overflow-hidden">
            <!-- Dekorative Elemente für Animation und visuelle Effekte -->
            <div class="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-yellow-400 opacity-20 floating-element"></div>
            <div class="absolute bottom-0 left-0 -mb-4 -ml-4 h-12 w-12 rounded-full bg-amber-500 opacity-20 floating-element-reverse"></div>
            <div class="absolute top-1/3 right-1/4 h-14 w-14 rounded-full bg-amber-300 opacity-15 floating-element-delay"></div>
            
            <div class="relative z-10">          <h3 class="text-2xl font-bold mb-5 text-amber-600 flex items-center">
                <i class="fas fa-envelope mr-3"></i>
                <span class="mr-2">Nehmen Sie Kontakt auf</span> <span class="text-sm italic mt-1">(per Netzwisch oder Quasselstrippe)</span>
              </h3>
              <h4 class="text-xl font-semibold mb-4 flex items-center">
                <i class="fas fa-user-tie mr-3 text-amber-600"></i>
                Ansprechpartner
              </h4>
              
              <!-- Kontaktpersonen mit Kontaktinformationen -->
              <div class="space-y-6">
                <!-- Frank Jähnig - Erste Kontaktperson mit Telefon und E-Mail -->
                <div class="pb-6 border-b border-amber-200">
                  <p class="font-semibold text-lg text-black">Frank Jähnig (Ritter Couplet)</p>
                  <p class="text-black mt-2 flex items-center">
                    <i class="fas fa-phone mr-3 text-amber-500 w-5 text-center"></i>
                    0461 20791
                  </p>
                  <p class="text-black mt-2 flex items-center">
                    <i class="fas fa-envelope mr-3 text-amber-500 w-5 text-center"></i>
                    couplet@t-online.de
                  </p>
                </div>
                
                <!-- Peter Gregersen - Zweite Kontaktperson mit Telefon und E-Mail -->
                <div>
                  <p class="font-semibold text-lg text-black">Peter Gregersen (Ritter Pedro Nero)</p>
                  <p class="text-black mt-2 flex items-center">
                    <i class="fas fa-phone mr-3 text-amber-500 w-5 text-center"></i>
                    04634 1861
                  </p>
                  <p class="text-black mt-2 flex items-center">
                    <i class="fas fa-envelope mr-3 text-amber-500 w-5 text-center"></i>
                    pesimabe@t-online.de
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Mitgliedschaft-Container: Informationen zur Mitgliedschaft -->
          <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg shadow-lg p-8 mt-6 relative overflow-hidden flex-grow flex flex-col justify-between">
            <!-- Dekorative Elemente für Animation und visuelle Effekte -->
            <div class="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-yellow-400 opacity-20 floating-element"></div>
            <div class="absolute bottom-0 left-0 -mb-4 -ml-4 h-12 w-12 rounded-full bg-amber-500 opacity-20 floating-element-reverse"></div>
            <div class="absolute top-1/3 right-1/4 h-14 w-14 rounded-full bg-amber-300 opacity-15 floating-element-delay"></div>
            
            <div class="relative z-10">              <h3 class="text-2xl font-bold mb-4 text-amber-600 flex items-center">
                <i class="fas fa-crown mr-3"></i>
                Interesse an der Mitgliedschaft?
              </h3>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Die Schlaraffia Flensburgia freut sich über neue <span class="text-amber-700 font-semibold">Sassen</span>, die Interesse an Kunst, 
                Kultur und Freundschaft haben. Besuchen Sie uns bei einer unserer <span class="text-amber-700 font-semibold">Sippungen</span>!
              </p>
              
              <!-- Liste der Merkmale einer Mitgliedschaft -->
              <div class="space-y-3 text-gray-700 mb-4">
                <p class="flex items-center">
                  <i class="fas fa-calendar-alt mr-3 text-amber-500 w-5 text-center"></i>
                  Jeden Donnerstag um 19:30 Uhr
                </p>
                <p class="flex items-center">
                  <i class="fas fa-map-marker-alt mr-3 text-amber-500 w-5 text-center"></i>
                  Händelhof 7, 24943 Flensburg
                </p>
                <p class="flex items-center">
                  <i class="fas fa-heart mr-3 text-amber-500 w-5 text-center"></i>
                  Offenheit für Kunst und Humor
                </p>
              </div>
              
              <!-- Zusätzliche Information zur Mitgliedschaft (Spacing-Element) -->
              <div class="pt-4 mt-auto">
                <p class="text-xs text-amber-700 italic text-center">
                  <i class="fas fa-info-circle mr-1"></i>
                  In der Mitgliedschaft sind keine Mitgliedsbeiträge enthalten.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Rechte Spalte - Burg Container mit integrierter Karte -->
        <div class="flex flex-col h-full">          <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg shadow-lg p-8 backdrop-blur-sm relative overflow-hidden h-full">
            <!-- Dekorative Elemente für Animation und visuelle Effekte -->
            <div class="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-yellow-400 opacity-20 floating-element"></div>
            <div class="absolute bottom-0 left-0 -mb-4 -ml-4 h-12 w-12 rounded-full bg-amber-500 opacity-20 floating-element-reverse"></div>
            <div class="absolute top-1/3 left-1/4 h-14 w-14 rounded-full bg-amber-300 opacity-15 floating-element-delay"></div>
              <div class="relative z-10 h-full flex flex-col">              <h3 class="text-2xl font-bold mb-5 text-amber-600 flex items-center">
                <i class="fas fa-chess-rook mr-3 text-amber-600"></i>
                Unsere Burg
              </h3>
              
              <!-- Informationen zur Burg -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 class="text-xl font-semibold mb-3 flex items-center">                    <i class="fas fa-map-marker-alt mr-3 text-amber-600"></i>
                    Adresse der Burg
                  </h4>
                  <!-- Adresse der Burg -->
                  <p class="text-black leading-relaxed">
                    Händelhof 7<br>
                    24943 Flensburg
                  </p>
                </div>
                
                <div>                  <h4 class="text-xl font-semibold mb-3 flex items-center">
                    <i class="fas fa-clock mr-3 text-amber-600"></i>
                    <span class="font-semibold">Uhutag & Glock</span>
                  </h4>
                  <!-- Sippungszeiten mit Erklärung -->
                  <p class="text-black leading-relaxed mb-2">
                    Donnerstags, 19:30 Uhr<br>
                    <span class="text-sm">(Glock 7.30 d.A.)</span>
                  </p>
                </div>
              </div>
              
              <!-- Hinweis zur Sommerung -->
              <div class="mb-6 border-t border-amber-200 pt-4">                <p class="text-gray-700 leading-relaxed italic bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 shadow-sm">
                  <i class="fas fa-info-circle mr-3 text-amber-600"></i>
                  <span>Während der <span class="text-amber-700 font-semibold">Sommerung</span> (<span class="text-amber-700 font-semibold">Wonnemond</span> bis <span class="text-amber-700 font-semibold">Herbstmond</span>) finden keine regulären Sippungen statt.</span>
                </p>
              </div>              <!-- Google Maps Karte zur Anzeige des Standorts -->
              <div class="flex-grow mt-4">
                <div class="w-full h-full min-h-[400px] rounded-lg overflow-hidden border-2 border-amber-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645.2305568246661!2d9.473048866875505!3d54.79394930063373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b3425edd97b515%3A0xb97891ca06d1d610!2sH%C3%A4ndelhof%207!5e1!3m2!1sde!2sde!4v1749034122850!5m2!1sde!2sde"
                    width="100%" 
                    height="100%"
                    style="border:0; min-height: 400px;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Standort Schlaraffia Flensburgia">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    </div>
    
    <!-- Kontaktformular-Bereich für Nachrichten an die Schlaraffia -->
    <div class="container mx-auto px-4 mb-16 -mt-4">
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl shadow-lg p-10 backdrop-blur-sm relative overflow-hidden">
        <!-- Dekorative Elemente für Animation und visuelle Effekte -->
        <div class="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-yellow-400 opacity-20 floating-element"></div>
        <div class="absolute bottom-0 left-0 -mb-4 -ml-4 h-12 w-12 rounded-full bg-amber-500 opacity-20 floating-element-reverse"></div>
        <div class="absolute top-1/3 right-1/4 h-14 w-14 rounded-full bg-amber-300 opacity-15 floating-element-delay"></div>
        
        <div class="relative z-10">          <h3 class="text-3xl font-bold mb-8 text-amber-600 flex items-center">
            <i class="fas fa-paper-plane mr-3"></i>
            <span class="mr-2">Sendbote</span> <span class="text-sm italic">(Nachricht senden)</span>
          </h3>
          
          <!-- Status-Meldungen für das Formular (Erfolg/Fehler) -->
          <div v-if="formStatus.success" class="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p class="text-amber-800 flex items-center">
              <i class="fas fa-check-circle mr-2"></i>
              {{ formStatus.message }}
            </p>
          </div>
          <div v-if="formStatus.error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-800 flex items-center">
              <i class="fas fa-exclamation-circle mr-2"></i>
              {{ formStatus.message }}
            </p>
          </div>

          <!-- Kontaktformular mit Eingabefeldern -->
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Name-Eingabefeld -->
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="contactForm.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
              <!-- E-Mail-Eingabefeld -->
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                  E-Mail <span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>
            
            <!-- Betreff-Eingabefeld -->
            <div>
              <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                Betreff <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                v-model="contactForm.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="Worum geht es?"
              />
            </div>
            
            <!-- Nachricht-Textarea -->
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                Nachricht <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                v-model="contactForm.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-vertical"
                placeholder="Ihre Nachricht an uns..."
              ></textarea>
            </div>
            
            <!-- Datenschutz-Checkbox -->
            <div class="flex items-start">
              <input
                type="checkbox"
                id="privacy"
                v-model="contactForm.privacy"
                required
                class="mt-1 mr-3 h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
              />
              <label for="privacy" class="text-sm text-gray-700">
                Ich stimme der Verarbeitung meiner Daten gemäß der 
                <router-link to="/datenschutz" class="text-amber-600 hover:text-amber-800 underline">Datenschutzerklärung</router-link> 
                zu. <span class="text-red-500">*</span>
              </label>
            </div>
            
            <!-- Absende-Button mit Lade-Animation -->
            <div class="flex justify-end">
              <button
                type="submit"
                :disabled="formSubmitting"
                class="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <i v-if="formSubmitting" class="fas fa-spinner fa-spin mr-2"></i>
                <i v-else class="fas fa-paper-plane mr-2"></i>                {{ formSubmitting ? 'Wird gesendet...' : 'Sendbote absenden' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <!-- Zusätzlicher Informationsbereich "Besuchen Sie uns" -->
    <div class="container mx-auto px-4 mb-16">
      <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
        <!-- Dekorative Elemente für Animation und visuelle Effekte -->
        <div class="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-yellow-400 opacity-20 floating-element"></div>
        <div class="absolute bottom-0 left-0 -mb-4 -ml-4 h-12 w-12 rounded-full bg-amber-500 opacity-20 floating-element-reverse"></div>
        <div class="absolute top-1/3 left-1/3 h-14 w-14 rounded-full bg-amber-300 opacity-15 floating-element-delay"></div>
        
        <!-- Überschrift und Informationstext -->
        <div class="relative z-10 text-center">          <h3 class="text-2xl font-bold mb-4 text-amber-800 flex items-center justify-center">
            <i class="fas fa-users mr-3 text-amber-600"></i>
            Besuchen Sie unsere <span class="text-amber-700 font-semibold ml-1">Sippung</span>!
          </h3>
          <p class="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            Interessierte <span class="text-amber-700 font-semibold">Pilger</span> sind herzlich zu unseren Sippungen eingeladen. Lernen Sie die Schlaraffia und 
            unsere Gemeinschaft kennen. Eine vorherige Anmeldung ist empfehlenswert.
          </p>
          
          <!-- Hervorgehobene Info-Chips -->
          <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-white px-6 py-3 rounded-lg shadow-sm border border-amber-200 transform transition-transform hover:scale-105">
              <i class="fas fa-clock text-amber-600 mr-2"></i>              <span class="font-semibold">Donnerstags 19:30 Uhr</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-sm border border-amber-200 transform transition-transform hover:scale-105">
              <i class="fas fa-users text-amber-600 mr-2"></i>
              <span class="font-semibold"><span class="text-amber-700">Pilger</span> willkommen</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-sm border border-amber-200 transform transition-transform hover:scale-105">
              <i class="fas fa-heart text-amber-600 mr-2"></i>
              <span class="font-semibold">In arte voluptas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { createStars } from '../utils/stars.js'

// Referenz zum Sternen-Container
const starsContainer = ref(null);

// Resize-Handler als benannte Funktion, damit wir sie für cleanup verwenden können
const handleResize = () => {
  if (starsContainer.value) {
    createStars(starsContainer.value, {
      density: 7000,       // Mehr Sterne für die Kontaktseite
      minDuration: 2,      // Schnellere Animation
      maxDuration: 6
    });
  }
};

onMounted(() => {
  // Sterne erstellen
  handleResize();
  
  // Bei Größenänderung neu berechnen
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Formular-Definitionen für das einfache Kontaktformular (nicht verwendet)
const form = ref({ name: '', email: '', subject: '', message: '', consent: false })
// Hilfsfunktion für das einfache Kontaktformular (nicht verwendet)
function submitContactForm() {
  if (!form.value.name || !form.value.email || !form.value.subject || !form.value.message || !form.value.consent) {
    alert('Bitte alle Pflichtfelder ausfüllen und zustimmen!')
    return
  }
  alert('Danke für Ihre Nachricht! Wir melden uns bald.')
  form.value = { name: '', email: '', subject: '', message: '', consent: false }
}

// Reaktives Formular-Objekt für das Hauptkontaktformular
const contactForm = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false
})

// Status für Erfolgs- und Fehlermeldungen
const formStatus = reactive({
  success: false,
  error: false,
  message: ''
})

// Flag für den Ladezustand während des Absendens
const formSubmitting = ref(false)

// Funktion zum Absenden des Kontaktformulars mit simulierter API-Anfrage
function submitForm() {
  formSubmitting.value = true
  formStatus.success = false
  formStatus.error = false
  
  // Simulierte API-Anfrage mit Timeout
  setTimeout(() => {
    try {
      // In einer echten Implementierung würden hier die Formulardaten an einen Server gesendet
      console.log('Form submitted:', contactForm)
      
      // Erfolgsmeldung anzeigen
      formStatus.success = true
      formStatus.message = 'Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.'
      
      // Formular zurücksetzen
      contactForm.name = ''
      contactForm.email = ''
      contactForm.subject = ''
      contactForm.message = ''
      contactForm.privacy = false
    } catch (error) {
      // Fehlermeldung anzeigen
      formStatus.error = true
      formStatus.message = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
      console.error('Form submission error:', error)
    } finally {
      formSubmitting.value = false
    }
  }, 1500) // Netzwerkverzögerung simulieren
}
</script>

