import { useState } from "react";
import { Button } from "@/components/ui/button";

export type Language = "en" | "es" | "cat";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher = ({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) => {
  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "cat", label: "CAT" },
  ];

  return (
    <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm rounded-full p-1 border border-border/50">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          onClick={() => onLanguageChange(lang.code)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-smooth ${
            currentLanguage === lang.code
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          }`}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};
