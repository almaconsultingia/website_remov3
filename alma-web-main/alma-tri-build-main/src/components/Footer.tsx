import { Instagram, Linkedin } from "lucide-react";
import { Language } from "./LanguageSwitcher";

interface FooterProps {
  language: Language;
}

const content = {
  en: {
    legal: "Legal Notice",
    privacy: "Privacy Policy",
    copyright: "© 2025 Alma Consulting IA. All rights reserved.",
  },
  es: {
    legal: "Aviso Legal",
    privacy: "Política de Privacidad",
    copyright: "© 2025 Alma Consulting IA. Todos los derechos reservados.",
  },
  cat: {
    legal: "Avís Legal",
    privacy: "Política de Privacitat",
    copyright: "© 2025 Alma Consulting IA. Tots els drets reservats.",
  },
};

export const Footer = ({ language }: FooterProps) => {
  const t = content[language];

  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text">Alma Consulting IA</h3>
            <p className="text-sm text-muted-foreground mt-1">almaconsulting.ia</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/almaconsulting.ia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/50 hover:bg-white transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/50 hover:bg-white transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#legal" className="hover:text-foreground transition-smooth">
              {t.legal}
            </a>
            <a href="#privacy" className="hover:text-foreground transition-smooth">
              {t.privacy}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
