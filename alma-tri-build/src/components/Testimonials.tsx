import { Quote } from "lucide-react";
import { Language } from "./LanguageSwitcher";

interface TestimonialsProps {
  language: Language;
}

const content = {
  en: {
    title: "What Our Clients Say",
    testimonials: [
      {
        text: "They helped us integrate AI into our daily workflow with clarity and precision.",
        author: "Maria García",
        role: "Operations Director"
      },
      {
        text: "The automation systems they built saved us countless hours every week.",
        author: "Jordi Martínez",
        role: "CEO, Tech Startup"
      },
      {
        text: "Their training sessions made AI accessible to our entire team. Highly recommended.",
        author: "Anna Soler",
        role: "HR Manager"
      },
      {
        text: "Clear strategy, practical solutions, and measurable results. Exactly what we needed.",
        author: "David López",
        role: "Product Manager"
      }
    ]
  },
  es: {
    title: "Lo Que Dicen Nuestros Clientes",
    testimonials: [
      {
        text: "Nos ayudaron a integrar la IA en nuestro flujo de trabajo diario con claridad y precisión.",
        author: "Maria García",
        role: "Directora de Operaciones"
      },
      {
        text: "Los sistemas de automatización que construyeron nos ahorraron innumerables horas cada semana.",
        author: "Jordi Martínez",
        role: "CEO, Startup Tecnológica"
      },
      {
        text: "Sus sesiones de formación hicieron la IA accesible para todo nuestro equipo. Muy recomendables.",
        author: "Anna Soler",
        role: "Responsable de RRHH"
      },
      {
        text: "Estrategia clara, soluciones prácticas y resultados medibles. Exactamente lo que necesitábamos.",
        author: "David López",
        role: "Product Manager"
      }
    ]
  },
  cat: {
    title: "El Que Diuen Els Nostres Clients",
    testimonials: [
      {
        text: "Ens van ajudar a integrar la IA al nostre flux de treball diari amb claredat i precisió.",
        author: "Maria García",
        role: "Directora d'Operacions"
      },
      {
        text: "Els sistemes d'automatització que van construir ens van estalviar innombrables hores cada setmana.",
        author: "Jordi Martínez",
        role: "CEO, Startup Tecnològica"
      },
      {
        text: "Les seves sessions de formació van fer la IA accessible per a tot el nostre equip. Molt recomanables.",
        author: "Anna Soler",
        role: "Responsable de RRHH"
      },
      {
        text: "Estratègia clara, solucions pràctiques i resultats mesurables. Exactament el que necessitàvem.",
        author: "David López",
        role: "Product Manager"
      }
    ]
  }
};

export const Testimonials = ({ language }: TestimonialsProps) => {
  const t = content[language];

  return (
    <section className="py-24 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {t.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-elevated rounded-2xl p-8 transition-smooth hover:scale-105"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
