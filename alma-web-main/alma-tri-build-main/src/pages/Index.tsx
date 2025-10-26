import { useState } from "react";
import { LanguageSwitcher, Language } from "@/components/LanguageSwitcher";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="min-h-screen">
      {/* Header with Language Switcher */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold gradient-text">Alma Consulting IA</h2>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Hero language={language} />
        <Services language={language} />
        <About language={language} />
        <Testimonials language={language} />
        <Contact language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default Index;
