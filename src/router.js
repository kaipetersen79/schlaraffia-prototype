import { createRouter, createWebHistory } from 'vue-router'
import Willekum from './views/Willekum.vue'
import UeberUns from './views/UeberUns.vue'
import Kontakt from './views/Kontakt.vue'
import Sippungen from './views/Sippungen.vue'
import Historie from './views/Historie.vue'
import Impressum from './views/Impressum.vue'
import Datenschutz from './views/Datenschutz.vue'
import Gruender from './views/Gruender.vue'
import Ehrenschlaraffen from './views/Ehrenschlaraffen.vue'
import SassenView from './views/SassenView.vue'
import Schlaraffenlatein from './views/Schlaraffenlatein.vue'
import Erinnerungen from './views/Erinnerungen.vue'

const routes = [
  { path: '/', redirect: '/willekum' },  
  { path: '/willekum', component: Willekum }, 
  { path: '/ueber-uns', component: UeberUns },  
  { path: '/gruender', component: Gruender },  
  { path: '/ehrenschlaraffen', component: Ehrenschlaraffen },  
  { path: '/sassen-view', component: SassenView },  
  { path: '/sippungen', component: Sippungen },  
  { path: '/schlaraffenlatein', component: Schlaraffenlatein }, { path: '/historie', component: Historie },  
  { path: '/erinnerungen', component: Erinnerungen },  
  { path: '/kontakt', component: Kontakt },  
  { path: '/impressum', component: Impressum },  
  { path: '/datenschutz', component: Datenschutz },  
]

const router = createRouter({
  history: createWebHistory('/schlaraffia-prototype/'), 
  routes,  
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }  
  },
})
export default router