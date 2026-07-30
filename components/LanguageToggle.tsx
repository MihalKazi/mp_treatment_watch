"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border rule bg-surface p-0.5 text-xs font-medium shrink-0">
      <button
        onClick={() => setLang("bn")}
        aria-pressed={lang === "bn"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === "bn" ? "bg-accent text-white" : "text-muted hover:text-foreground"
        }`}
      >
        বাং
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === "en" ? "bg-accent text-white" : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}
