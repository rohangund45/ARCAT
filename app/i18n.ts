"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero_title: "Empowering Farmers. Predicting Weather. Saving Lives.",
      get_alerts: "Get Alerts",
    },
  },
  hi: {
    translation: {
      hero_title: "किसानों को सशक्त बनाएं। मौसम का पूर्वानुमान। जीवन बचाएं।",
      get_alerts: "अलर्ट प्राप्त करें",
    },
  },
  mr: {
    translation: {
      hero_title: "शेतकऱ्यांना सक्षम करा. हवामान भाकीत. जीव वाचा.",
      get_alerts: "अलर्ट मिळवा",
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
