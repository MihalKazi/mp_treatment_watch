"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "bn" | "en";

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "bn",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("bn");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "en" || stored === "bn") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Renders bn or en text depending on active language — the single place dual-text collapses to one. */
export function Bi({ bn, en, className }: { bn: string; en: string; className?: string }) {
  const { lang } = useLanguage();
  return <span className={className}>{lang === "bn" ? bn : en}</span>;
}
