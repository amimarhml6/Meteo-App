import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Algiers": "Algiers",
      "clear sky": "Clear Sky",
      "Wind": "Wind",
      "Cloudy": "Cloudy",
      "Humidity": "Humidity",
      "Temp Max": "Temp Max",
      "Temp Min": "Temp Min",
      "Current weather conditions in": "Current weather conditions in",
      "Choose the Region :": "Choose the Region :",
      "Boumerdes": "Boumerdes",
    }
  },
  ar: {
    translation: {
      "Algiers": "الجزائر",
      "clear sky": "سماء صافية",
      "Wind": "الرياح",
      "Cloudy": "غائم",
      "Humidity": "الرطوبة",
      "Temp Max": "الحد الأقصى",
      "Temp Min": "الحد الأدنى",
      "Current weather conditions in": "حالة الطقس الحالية في",
      "Choose the Region :": "اختر المنطقة",
      "Boumerdes": "بومرداس",

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;