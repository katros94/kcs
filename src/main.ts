import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import sv from './locales/sv.json';

const i18n = createI18n({
  legacy: false, // Använd Composition API
  locale: 'en', // Standardspråk
  fallbackLocale: 'en', // Fallback-språk
  messages: { en, sv }, // Lägg till översättningar
});

async function detectUserCountry() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country; // Returnerar landskoden (t.ex. "SE" för Sverige)
  } catch (error) {
    console.error('Kunde inte hämta användarens land:', error);
    return null;
  }
}

async function detectBrowserLanguage() {
  const country = await detectUserCountry();

  // Kontrollera om användaren kommer från Sverige
  if (country === 'SE') {
    i18n.global.locale.value = 'sv'; // Sätt språk till svenska
  } else {
    // Fallback till webbläsarens språk om geolokalisering misslyckas
    const browserLanguage = navigator.language;
    if (browserLanguage.startsWith('sv')) {
      i18n.global.locale.value = 'sv'; // Sätt språk till svenska
    } else {
      i18n.global.locale.value = 'en'; // Sätt språk till engelska
    }
  }
}

// Kör funktionen när appen startar
detectBrowserLanguage();

const app = createApp(App);

app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions);

app.use(i18n);

app.use(router).mount('#app');