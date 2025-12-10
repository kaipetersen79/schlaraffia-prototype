<template>
  <nav class="bg-[#f8f5e6] shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Willekum -->
        <div class="flex items-center">
          <router-link to="/willekum" class="flex items-center">
            <img :src="logoImage" alt="Wappen" class="h-14 mr-3" />
            <div>
              <h1 class="text-xl font-bold title-font text-black">Schlaraffia Flensburgia</h1>
              <p class="text-xs text-gray-600">Gegründet a.U. 135 (1874)</p>
            </div>
          </router-link>
        </div>
        <div class="hidden md:flex space-x-6">
          <template v-for="(item, idx) in navItems" :key="idx">
            <!-- Über uns -->
            <div v-if="item.id === 'ueber-uns' || item.id === 'historie'" class="relative group">
              <router-link :to="'/' + item.id" class="nav-link flex items-center" :class="{ 'active': $route.path.startsWith('/' + item.id) }">
                {{ item.label }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </router-link>

              <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <router-link v-for="subItem in item.subItems" :key="subItem.id" :to="'/' + subItem.id"
                  class="block px-4 py-2 text-lg text-black hover:bg-gray-100"
                  :class="{ 'bg-gray-100': $route.path === '/' + subItem.id }">
                  {{ subItem.label }}
                </router-link>
              </div>
            </div>
            <!-- Schlaraffenlateinbuch -->
            <router-link v-else-if="item.id !== 'schlaraffenlatein'" :to="'/' + item.id" class="nav-link"
              :class="{ 'active': $route.path === '/' + item.id }">{{ item.label }}</router-link>
            <router-link v-else :to="'/' + item.id" class="nav-link"
              :class="{ 'active': $route.path === '/' + item.id }" title="Schlaraffenlatein">
              <i class="fas fa-book"></i>
            </router-link>
          </template>
        </div>
        <div class="md:hidden">
          <button @click="mobileNavOpen = !mobileNavOpen" class="text-black hover:text-gray-600 focus:outline-none">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
    <div v-if="mobileNavOpen" class="md:hidden bg-white">
      <template v-for="(item, idx) in navItems" :key="idx">
        <router-link v-if="!item.subItems && item.id !== 'schlaraffenlatein'" :to="'/' + item.id"
          class="block py-2 px-4 text-black hover:bg-gray-100 font-medium" @click="mobileNavOpen = false">{{ item.label}}
        </router-link>
        <router-link v-else-if="item.id === 'schlaraffenlatein'" :to="'/' + item.id"
          class="block py-2 px-4 text-black hover:bg-gray-100 font-medium" @click="mobileNavOpen = false"
          title="Schlaraffenlatein">
          <i class="fas fa-book mr-2"></i> Schlaraffenlatein
        </router-link>
        <div v-else>
          <router-link :to="'/' + item.id" class="block py-2 px-4 text-black hover:bg-gray-100 font-medium"
            @click="toggleSubMenu(item.id)">
            {{ item.label }}
            <span class="float-right">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </router-link>
          <div v-if="openSubMenus.includes(item.id)" class="bg-gray-50">
            <router-link v-for="subItem in item.subItems" :key="subItem.id" :to="'/' + subItem.id"
              class="block py-2 px-6 text-gray-700 hover:bg-gray-100"
              @click="mobileNavOpen = false; openSubMenus = []">{{ subItem.label }}
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import logoImage from '../assets/logo.png'

const route = useRoute()
const mobileNavOpen = ref(false)
const openSubMenus = ref([])

const navItems = [{ id: 'willekum', label: 'Willekum' },
{
  id: 'ueber-uns',
  label: 'Über uns',
  subItems: [
    { id: 'gruender', label: 'Gründerväter' },
    { id: 'ehrenschlaraffen', label: 'Ehrenschlaraffen' },
    { id: 'sassen-view', label: 'Sassen' }
  ]
},
{ id: 'sippungen', label: 'Sippungen' },
{
  id: 'historie',
  label: 'Historie',
  subItems: [
    { id: 'erinnerungen', label: 'Erinnerungen' }
  ]
},
{ id: 'kontakt', label: 'Kontakt' },
{ id: 'schlaraffenlatein', label: '' } 
]

function toggleSubMenu(id) {
  if (openSubMenus.value.includes(id)) {
    openSubMenus.value = openSubMenus.value.filter(x => x !== id)
  } else {
    openSubMenus.value.push(id)
  }
}
</script>
