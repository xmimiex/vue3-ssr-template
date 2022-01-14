<template>
  <div class="locale-switcher">
    <label for="locale-switcher">
      {{ $t('localeSwitcher.title') }}
    </label>
    <select id="locale-switcher" @change="switchLocale($event.target.value)">
      <template v-for="localeOption in localeOptions" :key="localeOption.label">
        <option :value="localeOption.value" :selected="localeOption.selected">
          {{ localeOption.label }}
        </option>
      </template>
    </select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import useConfig from '@app/stores/config'
import useContext from '@app/stores/context'

interface LocaleOption {
  value: string
  label: string
  selected: boolean
}

export default defineComponent({
  name: 'LocaleSwitcher',
  setup() {
    const { t } = useI18n()
    const availableLocales = computed(() => useConfig().internationalization.languagesForCountry)
    const currentCountry = computed(() => useContext().country)
    const currentLanguage = computed(() => useContext().language)

    const localeOptions = computed<LocaleOption[]>(() =>
      Object.keys(availableLocales.value)
        .flatMap(country =>
          availableLocales.value[country].map(language => ({
            value: `/${country}/${language}`,
            label: `${t('localeSwitcher.countries.' + country)} - ${language}`,
            selected: country === currentCountry.value && language === currentLanguage.value,
          })),
        ),
    )

    const switchLocale = (value: string) => {
      window.location.href = value
    }

    return {
      localeOptions,
      switchLocale,
    }
  },
})
</script>
