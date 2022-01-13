import { app } from '@storybook/vue3'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import countryFormats from '@app/i18n/formats/formats-FR.ts'
import languageMessages from '@app/i18n/messages/messages-fr.json'
import {createPinia} from "pinia";
import useUser from '@app/stores/user'
import useSeo from '@app/stores/seo'
import useContext from '@app/stores/context'
import './styles.scss'

// global i18n
app.use(createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'fr',
  messages: {
    ['fr']: languageMessages,
  },
  numberFormats: {
    ['fr']: countryFormats.numberFormats,
  },
  datetimeFormats: {
    ['fr']: countryFormats.datetimeFormats,
  },
}));

// global router
app.use(createRouter({
  routes: [],
  history: createWebHistory()
}));

// global pinia
const pinia = createPinia();
useUser(pinia)
useSeo(pinia)
useContext(pinia)
app.use(pinia)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
