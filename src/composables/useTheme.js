// src/composables/useTheme.ts
import { useDark, useToggle } from '@vueuse/core'
//import { useQuasar } from 'quasar'
//import { useSettingsStore } from 'src/stores/settings'

export function useTheme() {
  //const $q = useQuasar()
  // const settingsStore = useSettingsStore();
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'body--dark',
    valueLight: 'body--light',
    // onChanged(dark) {
    //   $q.dark.set(dark)
    //   if (dark) {
    //     document.body.classList.add('body--dark')
    //     document.body.classList.remove('body--light')
    //     // settingsStore.darkMode = true
    //   } else {
    //     document.body.classList.remove('body--dark')
    //     document.body.classList.add('body--light')
    //     // settingsStore.darkMode = false
    //   }
    // },
  })
  const toggleTheme = useToggle(isDark)
  return { isDark, toggleTheme }
}
