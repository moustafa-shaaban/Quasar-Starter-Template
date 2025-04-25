import { useSettingsStore } from '../stores/settings';

export function useSettings() {
    const settingsStore = useSettingsStore();

    const availableLanguages = [
        { value: 'en-US', label: 'English' },
        { value: 'ar-AR', label: 'العربية' },
    ];

    return {
        settingsStore,
        availableLanguages,
    };
}