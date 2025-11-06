"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero_title: "Empowering Farmers. Predicting Weather. Saving Lives.",
      get_alerts: "Get Alerts",
      about: "About",
      how_it_works: "How It Works",
      problem: "Problem",
      solution: "Solution",
      features: "Features",
      architecture: "Architecture",
      dashboard: "Dashboard",
      admin: "Admin",
      offline_active: "Offline Sync Active",
    },
  },
  hi: {
    translation: {
      hero_title: "किसानों को सशक्त बनाएं। मौसम का पूर्वानुमान। जीवन बचाएं।",
      get_alerts: "अलर्ट प्राप्त करें",
      about: "परिचय",
      how_it_works: "कैसे काम करता है",
      problem: "समस्या",
      solution: "समाधान",
      features: "विशेषताएं",
      architecture: "आर्किटेक्चर",
      dashboard: "डैशबोर्ड",
      admin: "प्रशासन",
      offline_active: "ऑफ़लाइन सिंक सक्रिय",
    },
  },
  mr: {
    translation: {
      hero_title: "शेतकऱ्यांना सक्षम करा. हवामान भाकीत. जीव वाचा.",
      get_alerts: "अलर्ट मिळवा",
      about: "माहिती",
      how_it_works: "कसे कार्य करते",
      problem: "समस्या",
      solution: "उपाय",
      features: "वैशिष्ट्ये",
      architecture: "आर्किटेक्चर",
      dashboard: "डॅशबोर्ड",
      admin: "प्रशासन",
      offline_active: "ऑफलाइन समक्रमण सक्रिय",
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

