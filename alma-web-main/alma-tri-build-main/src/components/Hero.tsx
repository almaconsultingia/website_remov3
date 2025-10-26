import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { Language } from "./LanguageSwitcher";

interface HeroProps {
  language: Language;
}

const content = {
  en: {
    subheadline: "We help you simplify and automate what slows you down, so you can focus on what matters.",
    cta1: "Book a meeting",
    cta2: "Contact us",
  },
  es: {
    subheadline: "Te ayudamos a simplificar y automatizar lo que te frena, para que puedas centrarte en lo importante.",
    cta1: "Reservar reunión",
    cta2: "Contactar",
  },
  cat: {
    subheadline: "T'ajudem a simplificar i automatitzar el que et frena, perquè et puguis centrar en el que importa.",
    cta1: "Reserva una reunió",
    cta2: "Contactar",
  },
};

export const Hero = ({ language }: HeroProps) => {
  const t = content[language];

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 
  className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-center"
>
  Build smarter. Work faster.
          <br />
          Real impact.
</h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          {t.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium transition-smooth shadow-lg hover:shadow-xl"
          >
            <Calendar className="mr-2 h-5 w-5" />
            {t.cta1}
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="rounded-full px-8 py-6 text-base font-medium border-2 transition-smooth hover:bg-accent/20"
          >
            <Mail className="mr-2 h-5 w-5" />
            {t.cta2}
          </Button>
        </div>
      </div>
    </section>
  );
};
