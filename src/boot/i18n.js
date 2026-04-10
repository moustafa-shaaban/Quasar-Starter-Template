import { defineBoot } from '#q-app/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { useSettingsStore } from 'src/stores/settings'

export default defineBoot(({ app }) => {
  const settingsStore = useSettingsStore()
  const i18n = createI18n({
    locale: settingsStore.language,
    fallbackLocale: 'en-US',
    globalInjection: true,
    messages,
  })

  // Set i18n instance on app
  app.use(i18n)
})
