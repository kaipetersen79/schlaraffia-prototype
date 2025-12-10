<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <!-- Footer -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Schlaraffia Flensburgia</h3>
          <p class="mb-2">Gegründet a.U. 135 (1874)</p>
          <p class="mb-2">Händelhof 7, 24394 Flensburg</p>
          <p>In arte voluptas - In der Kunst liegt das Vergnügen</p>
        </div>
        <!-- Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Links</h3>
          <ul class="space-y-2">
            <li><a href="https://www.schlaraffia.org/" target="_blank" class="hover:text-yellow-400">Verband Allschlaraffia</a></li>
            <li><a href="https://www.schlaraffia-im-norden.de/" target="_blank" class="hover:text-yellow-400">Schlaraffia im Norden</a></li>
            <li><router-link to="/impressum" class="hover:text-yellow-400">Impressum</router-link></li>
            <li><router-link to="/datenschutz" class="hover:text-yellow-400">Datenschutz</router-link></li>
          </ul>
        </div>
        <!-- Logo -->
        <div class="flex flex-col items-center justify-center">
              <img
                src="@/assets/logo.png"
                alt="Schlaraffia Flensburgia Logo"
                class="w-40 h-40 object-contain mb-4 bg-transparent shadow-none border-none rounded-none border-4 border-white"
              />
        </div>
        <!-- Kontakt -->
        <div>
          <h3 class="text-xl font-bold mb-4">Kontakt</h3>
          <p class="mb-4">Interessiert an der Schlaraffia? Wir freuen uns auf Ihre Nachricht!</p>
          <router-link to="/kontakt" class="btn-schlaraffia btn-yellow">Kontakt aufnehmen</router-link>
        </div>
      </div>
      <div class="mt-8 pt-6 border-t border-gray-700 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Schlaraffia Flensburgia e.V. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const emit = defineEmits(['navigate'])
function navigate(section) {
  emit('navigate', section)
}
</script>