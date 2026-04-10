import { useSettingsStore } from 'src/stores/settings'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const settingsStore = useSettingsStore()

export function switchLanguage() {
  const newLang = settingsStore.language === 'en' ? 'ar' : 'en'
  settingsStore.setLanguage(newLang)
  locale.value = newLang
}
