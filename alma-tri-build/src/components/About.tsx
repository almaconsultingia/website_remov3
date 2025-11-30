import { Language } from "./LanguageSwitcher";

interface AboutProps {
  language: Language;
}

const content = {
  en: {
    title: "About Us",
    description: `
      <p>Hi, we’re Alma Consulting IA, two women who believe technology should make life easier, not more complicated.</p>
      <p>Alba brings strategic client insight, marketing & design expertise, and a network that turns ideas into opportunities.</p>
      <p>Maria, an Industrial Engineer specialized in software, adds international B2B/B2C sales experience and a natural talent for building strong relationships.</p>
      <p>We help businesses cut through the noise: we translate tech-speak into business value and turn AI from a buzzword into a real competitive edge.</p>
    `,
  },
  es: {
    title: "Sobre Nosotras",
    description: `
      <p>Hola, somos Alba y María, el dúo detrás de Alma Consulting IA. Creemos que la tecnología debe facilitarte la vida, no complicarla.</p>
      <p>Alba aporta visión estratégica de cliente, marketing y diseño, y una red que conecta ideas con oportunidades.</p>
      <p>María, ingeniera industrial especializada en software, suma años de experiencia en ventas internacionales B2B y B2C y un talento natural para crear relaciones sólidas.</p>
      <p>Ayudamos a empresas como la tuya a cortar el ruido: traducimos lo técnico a lo útil y convertimos la IA de una palabra de moda en una ventaja competitiva real.</p>
    `,
  },
  cat: {
    title: "Sobre Nosaltres",
    description: `
      <p>Som l’Alba i la Maria, el duet darrere d’Alma Consulting IA. La tecnologia ha de fer-te la vida més fàcil, no més complicada.</p>
      <p>L’Alba aporta visió estratègica de client, màrqueting i disseny, i una xarxa que transforma idees en oportunitats.</p>
      <p>La Maria, enginyera industrial especialitzada en software, suma anys d’experiència en vendes internacionals B2B i B2C i un talent natural per generar relacions sòlides.</p>
      <p>Ajudem els negocis a tallar el soroll: traduïm el llenguatge tècnic a valor de negoci i fem que la IA passi de “buzzword” a avantatge competitiu real.</p>
    `,
  },
};

export const About = ({ language }: AboutProps) => {
  const t = content[language];

  return (
    <section className="py-24 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="card-elevated rounded-3xl p-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#8EA5FF] via-[#B18CFF] to-[#FFA9E7]">
            {t.title}
          </h2>
          
          <div
            className="text-lg md:text-xl text-foreground/80 leading-relaxed space-y-5 content-text"
            dangerouslySetInnerHTML={{ __html: t.description }}
          />
        </div>
      </div>
    </section>
  );
};
