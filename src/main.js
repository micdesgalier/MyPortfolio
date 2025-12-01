import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // <-- nouveau
import './style.css'

createApp(App)
  .use(router)                 // <-- monter le router
  .mount('#app')