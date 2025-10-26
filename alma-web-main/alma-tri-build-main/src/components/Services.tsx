import { Lightbulb, GraduationCap, Zap, Brain } from "lucide-react";
import { Language } from "./LanguageSwitcher";

interface ServicesProps {
  language: Language;
}

const content = {
  en: {
    title: "Services",
    services: [
      {
        icon: Lightbulb,
        title: "Consulting",
        description: "We help you identify opportunities where AI and automation can deliver measurable results. From strategy to implementation, we simplify complexity and turn ideas into action."
      },
      {
        icon: GraduationCap,
        title: "Training",
        description: "Empower your team with practical knowledge. We design custom workshops and training sessions that demystify AI tools and teach your people how to use them effectively."
      },
      {
        icon: Zap,
        title: "Automation",
        description: "Stop wasting time on repetitive tasks. We build smart automation systems that integrate seamlessly into your workflow, freeing your team to focus on high-value work."
      },
      {
        icon: Brain,
        title: "AI Strategy",
        description: "Navigate the AI landscape with confidence. We craft clear, actionable strategies tailored to your business goals, ensuring you invest in the right solutions that scale."
      }
    ]
  },
  es: {
    title: "Servicios",
    services: [
      {
        icon: Lightbulb,
        title: "Consultoría",
        description: "Te ayudamos a identificar oportunidades donde la IA y la automatización pueden ofrecer resultados medibles. Desde la estrategia hasta la implementación, simplificamos la complejidad."
      },
      {
        icon: GraduationCap,
        title: "Formación",
        description: "Potencia a tu equipo con conocimiento práctico. Diseñamos talleres y sesiones personalizadas que desmitifican las herramientas de IA y enseñan a usarlas eficazmente."
      },
      {
        icon: Zap,
        title: "Automatización",
        description: "Deja de perder tiempo en tareas repetitivas. Construimos sistemas de automatización inteligentes que se integran en tu flujo de trabajo, liberando a tu equipo para el trabajo estratégico."
      },
      {
        icon: Brain,
        title: "Estrategias de IA",
        description: "Navega el panorama de IA con confianza. Creamos estrategias claras y accionables adaptadas a tus objetivos empresariales, asegurando inversiones inteligentes y escalables."
      }
    ]
  },
  cat: {
    title: "Serveis",
    services: [
      {
        icon: Lightbulb,
        title: "Consultoria",
        description: "T'ajudem a identificar oportunitats on la IA i l'automatització poden oferir resultats mesurables. Des de l'estratègia fins a la implementació, simplifiquem la complexitat."
      },
      {
        icon: GraduationCap,
        title: "Formació",
        description: "Potencia el teu equip amb coneixement pràctic. Dissenyem tallers i sessions personalitzades que desmitifiquen les eines d'IA i ensenyen a usar-les eficaçment."
      },
      {
        icon: Zap,
        title: "Automatització",
        description: "Deixa de perdre temps en tasques repetitives. Construïm sistemes d'automatització intel·ligents que s'integren al teu flux de treball, alliberant el teu equip pel treball estratègic."
      },
      {
        icon: Brain,
        title: "Estratègies d'IA",
        description: "Navega el panorama d'IA amb confiança. Creem estratègies clares i accionables adaptades als teus objectius empresarials, assegurant inversions intel·ligents i escalables."
      }
    ]
  }
};

export const Services = ({ language }: ServicesProps) => {
  const t = content[language];

  return (
    <section className="py-24 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {t.services.map((service, index) => (
            <div 
              key={index}
              className="card-elevated rounded-2xl p-8 transition-smooth hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
