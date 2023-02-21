import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// 检测当前浏览器的语言或者从服务器获取配置资源
import XHR from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translation_en from './en-US';
import translation_zh from './zh-CN';

const resources = {
  en: {
    translation: translation_en,
  },
  zh: {
    translation: translation_zh,
  },
};

void i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // 默认语言
    fallbackLng: 'zh',
    lng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
