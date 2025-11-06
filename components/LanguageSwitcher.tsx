"use client";
import "../i18n"; // ✅ make sure this path points to app/i18n.ts
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिं" },
  { code: "mr", label: "मरा" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (code: string) => {
    if (typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(code);
    } else {
      console.error("❌ i18n not initialized properly");
    }
  };

  return (
    <div className="flex gap-2">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => handleLanguageChange(l.code)}
          className={`px-2 py-1 text-sm rounded ${
            i18n.language === l.code ? "bg-primary text-white" : "glass"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
