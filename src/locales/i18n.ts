import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translation_en from './en-US'
import translation_zh from './zh-CN'

const resources = {
  en: {
    translation: translation_en,
  },
  zh: {
    translation: translation_zh,
  },
}

i18n.use(initReactI18next).init({
  resources,
  // 默认语言
  fallbackLng: 'zh',
  lng: 'zh',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
