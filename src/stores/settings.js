// import { defineStore } from 'pinia';

// export const useSettingsStore = defineStore('settings', {
//     state: () => ({
//         darkMode: false,
//         language: 'en-US',
//         rtl: false,
//     }),
//     actions: {
//         toggleDarkMode() {
//             this.darkMode = !this.darkMode;
//             document.body.classList.toggle('body--dark', this.darkMode);
//         },
//         setLanguage(lang) {
//             this.language = lang;
//             this.rtl = lang === 'ar-AR';
//             document.documentElement.lang = lang;
//             document.documentElement.dir = this.rtl ? 'rtl' : 'ltr';
//         },
//     },
//     persist: true,
// });

import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    darkMode: JSON.parse(localStorage.getItem('darkMode')) ?? false,
    language: localStorage.getItem('language') || 'en'
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode))
    },
    setLanguage(lang) {
      this.language = lang
      localStorage.setItem('language', lang)
    }
  }
})
