<template>
  <div class="sippungen-galerie">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold title-font text-gray-800 mb-4">
        <i class="fas fa-images mr-3 text-amber-600"></i>
        Impressionen unserer Sippungen
      </h2>
      <div class="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-6"></div>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Erleben Sie die Atmosphäre unserer Sippungen in Bildern. 
        Von feierlichen Momenten bis zu geselligen Runden - 
        hier finden Sie Eindrücke aus dem schlaraffischen Leben.
      </p>
    </div>

    <!-- Favoriten Sektion -->
    <div v-if="favorites.length > 0" class="mt-0 mb-16 border-t-2 border-amber-200 pt-12">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold title-font text-gray-800 mb-4">
          <i class="fas fa-heart text-red-500 mr-2"></i>
          Ihre Lieblings-Sippungen
        </h3>
        <p class="text-gray-600">
          {{ favorites.length }} Sippung{{ favorites.length !== 1 ? 'en' : '' }} als Favorit{{ favorites.length !== 1 ? 'en' : '' }} markiert
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="sippung in favorites"
          :key="`fav-${sippung.folder}`"
          class="bg-red-50 border-2 border-red-200 rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow"
          @click="openGallery(sippung)"
        >
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-red-200 rounded-lg overflow-hidden">
              <img 
                v-if="sippung.cover" 
                :src="sippung.cover" 
                class="w-full h-full object-cover" 
                :alt="sippung.title"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-red-400">
                <i class="fas fa-heart"></i>
              </div>
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-red-800">{{ sippung.title }}</h4>
              <p class="text-sm text-red-600">{{ sippung.date }}</p>
              <p class="text-xs text-red-500">{{ sippung.images.length }} Bilder</p>
            </div>
            <button
              @click.stop="toggleFavorite(sippung)"
              class="text-red-500 hover:text-red-700 transition-colors"
            >
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Sortierung -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">Sortierung:</label>
        <select
          v-model="sortOrder"
          class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-amber-500"
        >
          <option value="newest">Neueste zuerst</option>
          <option value="oldest">Älteste zuerst</option>
        </select>
      </div>
    </div>

    <!-- Sippungen Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="sippung in filteredAndSortedSippungen"
        :key="sippung.folder"
        class="sippung-card cursor-pointer group"
        @click="openGallery(sippung)"
      >
        <!-- Sippungs-Cover -->
        <div class="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden rounded-t-2xl">
          <img 
            v-if="sippung.cover" 
            :src="sippung.cover" 
            class="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
            :alt="sippung.title" 
          />
          <div v-else class="w-full h-full flex items-center justify-center text-white">
            <i class="fas fa-camera text-4xl opacity-50"></i>
          </div>
        </div>

        <!-- Sippungs-Info -->
        <div class="bg-white p-6 rounded-b-2xl shadow-lg">
          <div class="flex items-start justify-between mb-3">
            <h3 class="text-xl font-bold text-gray-900 title-font group-hover:text-amber-700 transition-colors">
              {{ sippung.title }}
            </h3>
            <button
              @click.stop="toggleFavorite(sippung)"
              :class="[
                'p-2 rounded-full transition-colors',
                isFavorite(sippung) ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
              ]"
            >
              <i class="fas fa-heart"></i>
            </button>
          </div>
          <p v-if="sippung.description" class="text-gray-700 text-sm mb-4 leading-relaxed">
            {{ sippung.description }}
          </p>

          <!-- Tags -->
          <div v-if="sippung.tags && sippung.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in sippung.tags"
              :key="tag"
              class="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Download -->
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">
              {{ sippung.images.length }} Bild{{ sippung.images.length !== 1 ? 'er' : '' }}
            </span>
            <div class="flex gap-2">
              <button
                @click.stop="downloadGallery(sippung)"
                class="p-2 text-gray-400 hover:text-green-500 transition-colors"
                title="Download"
              >
                <i class="fas fa-download text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Keine Sippungen gefunden -->
    <div v-if="filteredAndSortedSippungen.length === 0" class="text-center py-16">
      <div class="text-gray-400 mb-4">
        <i class="fas fa-images text-6xl"></i>
      </div>
      <h3 class="text-xl font-bold text-gray-600 mb-2">Keine Sippungen gefunden</h3>
      <p class="text-gray-500">
        Für die ausgewählte Kategorie sind noch keine Bilder verfügbar.
      </p>
    </div>

    <!-- Modal für Bildergalerie -->
    <ImageModal 
      v-if="selectedSippung" 
      :sippung="selectedSippung" 
      @close="selectedSippung = null" 
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ImageModal from './ImageModal.vue'

const selectedCategory = ref('')
const sortOrder = ref('newest')
const selectedSippung = ref(null)
const favorites = ref([])

// Bilder aus Sippungen-Ordnern laden
const images = import.meta.glob('../assets/Sippungen/*/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })

const sippungenMap = new Map()
Object.keys(images).forEach(path => {
  const parts = path.split('/')
  const folder = parts[parts.length - 2]
  if (!sippungenMap.has(folder)) {
    sippungenMap.set(folder, { 
      folder, 
      title: formatSippungTitle(folder), 
      description: generateDescription(folder),
      tags: generateTags(folder),
      images: [] 
    })
  }
  sippungenMap.get(folder).images.push({ path, url: images[path] })
})

const allSippungen = Array.from(sippungenMap.values()).map(sippung => {
  sippung.images.sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }))
  const coverUrl = sippung.images.length > 0 ? sippung.images[0].url : null
  return {
    ...sippung,
    images: sippung.images.map(img => img.url),
    cover: coverUrl
  }
})

function formatSippungTitle(folder) {
  if (folder.match(/^\d{4}$/)) {
    return `Sippung ${folder}`
  }
  return folder.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

function generateDescription(folder) {
  const descriptions = {
    'stiftung': 'Feierliche Sippung anlässlich unseres Stiftungsfestes mit besonderen Ehrungen und Rückblicken.',
    'sommer': 'Gesellige Sommersippung im entspannten Rahmen, oft mit Aktivitäten im Freien.',
    'winter': 'Besinnliche Wintersippung mit weihnachtlichem Flair und traditionellen Beiträgen.',
    'gaeste': 'Besondere Sippung mit Gästen aus anderen Schlaraffien und interkulturellem Austausch.'
  }
  
  for (const [key, desc] of Object.entries(descriptions)) {
    if (folder.toLowerCase().includes(key)) {
      return desc
    }
  }
  
  return 'Eindrücke aus einer unserer traditionellen Sippungen mit Ritual, Kultur und Geselligkeit.'
}

function generateTags(folder) {
  const tags = []
  const lowerFolder = folder.toLowerCase()
  
  if (lowerFolder.includes('fest')) tags.push('Feier')
  if (lowerFolder.includes('musik')) tags.push('Musik')
  if (lowerFolder.includes('vortrag')) tags.push('Vortrag')
  if (lowerFolder.includes('gast') || lowerFolder.includes('gaeste')) tags.push('Gäste')
  if (lowerFolder.match(/\d{4}/)) tags.push('Historisch')
  
  tags.push('Schlaraffia', 'Flensburgia')
  
  return tags
}

const getSippungenByCategory = (category) => {
  return allSippungen.filter(s => s.category === category)
}

const filteredAndSortedSippungen = computed(() => {
  let filtered = selectedCategory.value 
    ? getSippungenByCategory(selectedCategory.value)
    : allSippungen

  return filtered.sort((a, b) => {
    switch (sortOrder.value) {
      case 'oldest':
        return a.folder.localeCompare(b.folder, undefined, { numeric: true })
      case 'newest':
      default:
        return b.folder.localeCompare(a.folder, undefined, { numeric: true })
    }
  })
})

const openGallery = (sippung) => {
  selectedSippung.value = sippung
}

const isFavorite = (sippung) => {
  return favorites.value.some(fav => fav.folder === sippung.folder)
}

const toggleFavorite = (sippung) => {
  const index = favorites.value.findIndex(fav => fav.folder === sippung.folder)
  
  if (index >= 0) {
    favorites.value.splice(index, 1)
  } else {
    favorites.value.push(sippung)
  }
  
  saveFavorites()
}

const loadFavorites = () => {
  try {
    const saved = localStorage.getItem('schlaraffia-gallery-favorites')
    if (saved) {
      const savedIds = JSON.parse(saved)
      favorites.value = allSippungen.filter(s => savedIds.includes(s.folder))
    }
  } catch (error) {
    console.error('Fehler beim Laden der Favoriten:', error)
  }
}

const saveFavorites = () => {
  try {
    const favoriteIds = favorites.value.map(fav => fav.folder)
    localStorage.setItem('schlaraffia-gallery-favorites', JSON.stringify(favoriteIds))
  } catch (error) {
    console.error('Fehler beim Speichern der Favoriten:', error)
  }
}

const downloadGallery = (sippung) => {
  // Implementierung für Galerie-Download wird nachträglich ergänzt
  alert(`Download-Funktion für "${sippung.title}" wird vorbereitet...`)
}

onMounted(() => {
  loadFavorites()
})
</script>

<style scoped>
.sippung-card {
  transition: all 0.3s ease;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.sippung-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  
  .sippung-card {
    margin-bottom: 2rem;
  }
}

.favorite-animation {
  animation: heartbeat 0.6s ease-in-out;
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
  75% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>
