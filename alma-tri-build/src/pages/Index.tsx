import { useState, useEffect } from "react";
import { LanguageSwitcher, Language } from "@/components/LanguageSwitcher";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  // translations for section labels (en, es, cat)
  const labels: Record<string, Record<Language, string>> = {
    services: { en: "Services", es: "Servicios", cat: "Serveis" },
    about: { en: "About Us", es: "Sobre nosotros", cat: "Sobre nosaltres" },
    testimonials: { en: "Testimonials", es: "Testimonios", cat: "Testimonis" },
    contact: { en: "Contact Us", es: "Contacto", cat: "Contacte" },
  };

  // list the sections you want shortcuts for (order determines Alt+1..Alt+N)
  const sections = [
    { id: "services", key: "2" },
    { id: "about", key: "3" },
    { id: "testimonials", key: "4" },
    { id: "contact", key: "5" },
  ];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // use Alt + digit (Alt+1..Alt+9)
      if (e.altKey && !e.ctrlKey && !e.shiftKey) {
        const s = sections.find((x) => x.key === (e as any).key);
        if (s) {
          e.preventDefault();
          const el = document.getElementById(s.id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          // update hash without adding history entry
          history.replaceState(null, "", `#${s.id}`);
        }
      }
    };
    window.addEventListener("keydown", onKey as any);
    return () => window.removeEventListener("keydown", onKey as any);
    // sections is stable in this file, language doesn't affect the handler behavior
  }, []);

  // Tailwind classes to enforce a consistent font family & size for all sections
  const sectionClass = "font-sans text-base md:text-lg leading-relaxed";

  return (
    <div className="min-h-screen">
      {/* Header with Language Switcher */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-bold gradient-text">Alma Consulting IA</h2>
            <nav className="hidden md:flex items-center gap-3">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-primary hover:underline"
                  title={`Alt+${s.key}`}
                >
                  {labels[s.id]?.[language] ?? labels[s.id]?.en}
                </a>
              ))}
            </nav>
          </div>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* wrap each component in a section with the matching id so anchors/shortcuts target them,
            and apply a uniform font family & size via sectionClass */}
        <section id="hero" className={sectionClass}>
          <Hero language={language} />
        </section>

        <section id="services" className={sectionClass}>
          <Services language={language} />
        </section>

        <section id="about" className={sectionClass}>
          <About language={language} />
        </section>

        <section id="testimonials" className={sectionClass}>
          <Testimonials language={language} />
        </section>

        <section id="contact" className={sectionClass}>
          <Contact language={language} />
        </section>
      </main>

      {/* floating scroll-to-top button */}
      <ScrollToTop />

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default Index;