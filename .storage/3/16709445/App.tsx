import React, { useState } from "react";
import "./remov3.css";
import dataJson from "./data.json";

type Service = { id: string; name: string };
type Testimonial = { name: string; rating: number; quote: string };
type CalConfig = { link?: string };
type WhatsappConfig = { number?: string; message?: string };
type ContactConfig = { phone?: string; email?: string; address?: string; schedule?: string; mapEmbedUrl?: string };
type SiteData = {
  services?: Service[];
  testimonials?: Testimonial[];
  cal?: CalConfig;
  whatsapp?: WhatsappConfig;
  contact?: ContactConfig;
};

const data = dataJson as SiteData;

const App: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "cat">("es");

  const servicesSrc: Service[] = [
    { id: "readaptacion", name: "Readaptación de lesiones" },
    { id: "entreno-mujeres", name: "Entrenamiento de fuerza para mujeres" },
    { id: "formacion", name: "Formación" }
  ];

  const testimonialsSrc: Testimonial[] = (data.testimonials ?? [
    { name: "Laura, 34 años", rating: 5, quote: "Llegué con dolor de rodilla crónico y miedo a hacer ejercicio. En pocas semanas entendí qué me pasaba y ahora vuelvo a entrenar sin miedo." },
    { name: "Jordi, 29 años", rating: 5, quote: "El enfoque de Adrià es súper claro: te explica todo, te da herramientas y te acompaña en cada fase. Noto progreso real, no solo alivio puntual." },
    { name: "Marta, 41 años", rating: 5, quote: "Por primera vez siento que entreno con seguridad. Hemos trabajado fuerza, movilidad y hábitos, y mi lumbar ya no es un problema constante." }
  ]);

  const cal = data.cal ?? {};
  const whatsapp = data.whatsapp ?? {};
  const contact = data.contact ?? {};

  const phoneRaw = whatsapp.number || contact.phone || "+34 664 89 20 20";
  const waNumber = phoneRaw.replace(/\D/g, "");
  const waMessage = whatsapp.message || "Hola, me gustaría reservar una cita en RE:MOV3.";
  const waUrl = waNumber ? `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}` : "#";
  const calLink = cal.link || "#";

  const t = {
    es: {
      brandTagline: "readaptación · entrenamiento mujeres · formación",
      nav: { about: "Sobre mí", services: "Servicios", testimonials: "Testimonios", contact: "Contacto", reserve: "Reservar cita" },
      hero: {
        title: "RE:MOV3",
        subtitle: "readaptación · entrenamiento mujeres · formación",
        text: "Recupera tu movilidad y vuelve a moverte sin miedo. Acompañamiento profesional, paso a paso, para que sientas tu cuerpo fuerte, estable y sin dolor."
      },
      buttons: { reserve: "Reservar cita", whatsapp: "WhatsApp" },
      services: { title: "SERVICIOS", cta: "Reservar un servicio conmigo" },
      process: {
        title: "Tu proceso en RE:MOV3",
        lead: "Para que sepas qué esperar antes de empezar, este es el camino que seguiremos juntos.",
        steps: [
          { title: "Cuestionario inicial", text: "Entendemos tu caso, dolor, objetivos y contexto (horarios, nivel, historial)." },
          { title: "Sesión de inicio", text: "Videollamada + test de movimiento → identificamos el punto de partida." },
          { title: "Plan y seguimiento", text: "Programa claro y progresivo + revisión y ajustes en base a tu progreso." }
        ]
      },
      about: {
        title: "Sobre mí",
        lead: "Soy Adrià Vidal Noguera, especialista en movimiento, readaptación y entrenamiento de fuerza.",
        paragraphs: [
          "Trabajo con personas que quieren recuperar su cuerpo, volver a moverse sin miedo o mejorar su rendimiento desde un enfoque claro: movimiento inteligente, fuerza bien aplicada y educación basada en evidencia.",
          "Mi trayectoria combina formación oficial y experiencia real acompañando a personas en procesos de recuperación, prevención y mejora física.",
          "Como ex jugador de baloncesto y profesional del rendimiento, entiendo lo que significa avanzar con seguridad, progresar con criterio y volver más fuerte.",
          "En RE:MOV3 integro readaptación, entrenamiento y hábitos saludables para que cada persona entienda su cuerpo, tome el control de su proceso y note resultados reales, sostenibles y medibles.",
          "Mi misión es simple: ayudarte a moverte mejor, sentirte más fuerte y construir una relación sana, segura y duradera con tu cuerpo."
        ],
        pills: ["Movimiento inteligente", "Fuerza bien aplicada", "Educación basada en evidencia"]
      },
      testimonials: { title: "Testimonios", lead: "Personas que ya han confiado en RE:MOV3." },
      reserve: {
        title: "Agenda tu cita",
        text: "Reserva tu sesión de forma rápida y sencilla a través de nuestra agenda online.",
        btnCal: "Reservar cita",
        btnWa: "Prefiero hablar por WhatsApp",
        note: "Si no encuentras horario disponible o tienes dudas, escríbeme por WhatsApp y buscamos la mejor opción para ti."
      },
      contact: {
        title: "Contacto y ubicación",
        intro: "Estoy en Barcelona, en un espacio preparado para trabajar tu movimiento con calma, seguridad y criterio.",
        labels: { contactData: "Datos de contacto", address: "Dirección", schedule: "Horario", phone: "Teléfono", email: "Email" },
        formTitle: "Formulario de contacto"
      },
      form: {
        name: "Nombre", email: "Email", phone: "Teléfono", message: "Mensaje",
        ph_name: "Tu nombre", ph_email: "tu@email.com", ph_phone: "+34 XXX XXX XXX",
        ph_message: "Cuéntame tu caso o qué necesitas…", submit: "Enviar mensaje"
      },
      footer: { secondary: "Fisioterapia · readaptación · entrenamiento mujeres · Barcelona", copyright: "© 2025 RE:MOV3 · Adrià Vidal Noguera" }
    },
    cat: {
      brandTagline: "readaptació · entrenament dones · formació",
      nav: { about: "Qui soc", services: "Serveis", testimonials: "Testimonis", contact: "Contacte", reserve: "Reservar" },
      hero: {
        title: "RE:MOV3",
        subtitle: "readaptació · entrenament dones · formació",
        text: "Recupera la teva mobilitat i torna a moure’t sense por. Acompanyament professional, pas a pas, perquè sentis el teu cos fort, estable i sense dolor."
      },
      buttons: { reserve: "Reservar cita", whatsapp: "WhatsApp" },
      services: { title: "SERVEIS", cta: "Reservar un servei amb mi" },
      process: {
        title: "El teu procés a RE:MOV3",
        lead: "Perquè sàpigues què esperar abans de començar, aquest és el camí que seguirem junts.",
        steps: [
          { title: "Qüestionari inicial", text: "Entenem el teu cas, dolor, objectius i context (horaris, nivell, historial)." },
          { title: "Sessió d’inici", text: "Videotrucada + test de moviment → definim el punt de partida." },
          { title: "Pla i seguiment", text: "Programa clar i progressiu + revisió i ajustos segons evolució." }
        ]
      },
      about: {
        title: "Qui soc",
        lead: "Soc Adrià Vidal Noguera, especialista en moviment, readaptació i entrenament de força.",
        paragraphs: [
          "Treballo amb persones que volen recuperar el seu cos, tornar a moure’s sense por o millorar el seu rendiment amb un enfocament clar: moviment intel·ligent, força ben aplicada i educació basada en evidència.",
          "La meva trajectòria combina formació oficial i experiència real acompanyant persones en processos de recuperació, prevenció i millora física.",
          "Com a ex jugador de bàsquet i professional del rendiment, entenc què significa avançar amb seguretat, progressar amb criteri i tornar més fort.",
          "A RE:MOV3 integro readaptació, entrenament i hàbits saludables perquè cadascú entengui el seu cos, prengui el control del seu procés i noti resultats reals, sostenibles i mesurables.",
          "La meva missió és simple: ajudar-te a moure’t millor, sentir-te més fort i construir una relació sana, segura i duradora amb el teu cos."
        ],
        pills: ["Moviment intel·ligent", "Força ben aplicada", "Educació basada en evidència"]
      },
      testimonials: { title: "Testimonis", lead: "Persones que ja han confiat en RE:MOV3." },
      reserve: {
        title: "Agenda la teva cita",
        text: "Reserva la teva sessió de manera ràpida i senzilla a través de la nostra agenda en línia.",
        btnCal: "Reservar cita",
        btnWa: "Prefereixo parlar per WhatsApp",
        note: "Si no trobes horari disponible o tens dubtes, escriu-me per WhatsApp i buscarem la millor opció per a tu."
      },
      contact: {
        title: "Contacte i ubicació",
        intro: "Soc a Barcelona, en un espai preparat per treballar el teu moviment amb calma, seguretat i criteri.",
        labels: { contactData: "Dades de contacte", address: "Adreça", schedule: "Horari", phone: "Telèfon", email: "Email" },
        formTitle: "Formulari de contacte"
      },
      form: {
        name: "Nom", email: "Email", phone: "Telèfon", message: "Missatge",
        ph_name: "El teu nom", ph_email: "el.teu@email.com", ph_phone: "+34 XXX XXX XXX",
        ph_message: "Explica’m el teu cas o què necessites…", submit: "Enviar missatge"
      },
      footer: { secondary: "Fisioteràpia · readaptació · entrenament dones · Barcelona", copyright: "© 2025 RE:MOV3 · Adrià Vidal Noguera" }
    }
  }[lang];

  const services =
    lang === "es"
      ? servicesSrc
      : servicesSrc.map((s) => {
          const map: Record<string, { name: string }> = {
            readaptacion: { name: "Readaptació de lesions" },
            "entreno-mujeres": { name: "Entrenament per a dones" },
            formacion: { name: "Formació" }
          };
          const tx = map[s.id] || { name: s.name };
          return { ...s, name: tx.name };
        });

  const testimonials =
    lang === "es"
      ? testimonialsSrc
      : testimonialsSrc.map((t, i) => {
          const quotes = [
            { name: "Laura, 34 anys", quote: "Vaig arribar amb dolor crònic al genoll i por a fer exercici. En poques setmanes vaig entendre què passava i ara torno a entrenar sense por." },
            { name: "Jordi, 29 anys", quote: "L’enfocament de l’Adrià és molt clar: t’ho explica tot, et dona eines i t’acompanya en cada fase. Noto un progrés real, no només alleujament puntual." },
            { name: "Marta, 41 anys", quote: "Per primer cop sento que entreno amb seguretat. Hem treballat força, mobilitat i hàbits, i la meva zona lumbar ja no és un problema constant." }
          ];
          const q = quotes[i] || { name: t.name, quote: t.quote };
          return { ...t, name: q.name, quote: q.quote };
        });

  return (
    <div className="app">
      {/* HEADER */}
      <header className="navbar">
        <div className="container nav-inner">
          {/* RE:MOV3 a la izquierda del todo */}
          <div className="brand">
            <span className="brand-logo">RE:MOV3</span>
            <span className="brand-tagline">{t.brandTagline}</span>
          </div>

          {/* Menú pegado hacia la derecha, junto a ES/CAT y Reservar */}
          <div className="nav-right">
            <nav className={`nav-links ${navOpen ? "open" : ""}`}>
              <a href="#sobre-mi">{t.nav.about}</a>
              <a href="#servicios">{t.nav.services}</a>
              <a href="#testimonios">{t.nav.testimonials}</a>
              <a href="#contacto">{t.nav.contact}</a>
            </nav>

            <div className="right-controls">
              <div className="lang-switch" aria-label="Selector de idioma">
                <div className="lang-group">
                  <button
                    className={`lang-btn ${lang === "es" ? "active" : ""}`}
                    onClick={() => setLang("es")}
                    aria-pressed={lang === "es"}
                  >
                    ES
                  </button>
                  <button
                    className={`lang-btn ${lang === "cat" ? "active" : ""}`}
                    onClick={() => setLang("cat")}
                    aria-pressed={lang === "cat"}
                  >
                    CAT
                  </button>
                </div>
              </div>

              <a href="#reserva" className="btn btn-primary header-cta">
                {t.nav.reserve}
              </a>

              <button
                className="nav-toggle"
                aria-label={lang === "es" ? "Abrir menú" : "Obrir menú"}
                onClick={() => setNavOpen((o) => !o)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO — contenido totalmente centrado */}
      <section className="hero" id="inicio">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/photo1764264480.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de vídeo.
        </video>

        <div className="hero-overlay" />

        <div className="hero-content container">
          <h1>{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-text">{t.hero.text}</p>
          <div className="hero-buttons">
            <a href="#reserva" className="btn btn-primary">{t.buttons.reserve}</a>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-outline">{t.buttons.whatsapp}</a>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ / QUI SOC */}
      <section className="section" id="sobre-mi">
        <div className="container section-grid">
          <div className="section-image">
            <img
              src="/images/photo1764264480.jpg"
              alt={lang === "es" ? "Adrià Vidal Noguera, fisioterapeuta en Barcelona" : "Adrià Vidal Noguera, fisioterapeuta a Barcelona"}
              loading="lazy"
            />
          </div>
          <div className="section-content">
            <h2>{t.about.title}</h2>
            <p className="section-lead">{t.about.lead}</p>
            {t.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            <ul className="pill-list">
              {t.about.pills.map((pill, idx) => (
                <li key={idx}>{pill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICIOS — mismo formato que PROCESO, solo títulos */}
      <section className="section section-alt" id="servicios">
        <div className="container">
          <div className="section-header">
            <h2>{t.services.title}</h2>
          </div>
          <div className="process-grid">
            {services.map((s) => (
              <div className="process-step service-step" key={s.id}>
                <h3 className="process-title">{s.name}</h3>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <a href="#reserva" className="btn btn-primary">{t.services.cta}</a>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section process" id="proceso">
        <div className="container">
          <div className="section-header">
            <h2>{t.process.title}</h2>
            <p>{t.process.lead}</p>
          </div>
          <div className="process-grid">
            {t.process.steps.map((step, idx) => (
              <div className="process-step" key={idx}>
                <div className="process-index">{idx + 1}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS / TESTIMONIS */}
      <section className="section" id="testimonios">
        <div className="container">
          <div className="section-header">
            <h2>{t.testimonials.title}</h2>
            <p>{t.testimonials.lead}</p>
          </div>
          <div className="card-grid">
            {testimonials.map((tt, i) => (
              <article key={i} className="card card--center">
                <p className="testimonial-quote">“{tt.quote}”</p>
                <div className="testimonial-name">{tt.name}</div>
                <div className="testimonial-stars">{"★".repeat(tt.rating || 5)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVA / CAL */}
      <section className="section section-alt" id="reserva">
        <div className="container reserva">
          <div className="reserva-content">
            <h2>{t.reserve.title}</h2>
            <p>{t.reserve.text}</p>
            <div className="reserva-buttons">
              <a href={calLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                {t.reserve.btnCal}
              </a>
              <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                {t.reserve.btnWa}
              </a>
            </div>
            <p className="reserva-note">{t.reserve.note}</p>
          </div>
        </div>
      </section>

      {/* CONTACTO / CONTACTE con FORM */}
      <section className="section" id="contacto">
        <div className="container contacto-grid">
          <div className="contacto-info">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.intro}</p>

            <div className="contact-block">
              <h3>{t.contact.labels.contactData}</h3>
              <p>
                {t.contact.labels.phone}:{" "}
                <a href={`tel:${(contact.phone || "+34664892020").replace(/\s+/g, "")}`}>
                  {contact.phone || (lang === "es" ? "+34 664 89 20 20" : "+34 664 89 20 20")}
                </a>
              </p>
              <p>
                {t.contact.labels.email}:{" "}
                <a href={`mailto:${contact.email || "remov3@gmail.com"}`}>
                  {contact.email || "remov3@gmail.com"}
                </a>
              </p>
            </div>

            <div className="contact-block">
              <h3>{t.contact.labels.address}</h3>
              <p>{contact.address || (lang === "es" ? "Carrer de Ejemplo, 123, 08001 Barcelona" : "Carrer d'Exemple, 123, 08001 Barcelona")}</p>
            </div>

            <div className="contact-block">
              <h3>{t.contact.labels.schedule}</h3>
              <p>{contact.schedule || (lang === "es" ? "Lunes a viernes de 9:00 a 20:00 (con cita previa)." : "De dilluns a divendres de 9:00 a 20:00 (amb cita prèvia).")}</p>
            </div>
          </div>

          <div className="contacto-form">
            <div className="contact-form-card">
              <h3>{t.contact.formTitle}</h3>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">{t.form.name} *</label>
                  <input id="name" name="name" type="text" placeholder={t.form.ph_name} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.form.email} *</label>
                  <input id="email" name="email" type="email" placeholder={t.form.ph_email} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t.form.phone}</label>
                  <input id="phone" name="phone" type="tel" placeholder={t.form.ph_phone} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t.form.message} *</label>
                  <textarea id="message" name="message" placeholder={t.form.ph_message} rows={5} required />
                </div>
                <button type="submit" className="btn btn-primary">{t.form.submit}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER OSCURO */}
      <footer className="footer-dark">
        <div className="container footer-cols">
          <div className="footer-col">
            <div className="footer-brand">RE:MOV3</div>
            <div className="footer-tagline">{t.brandTagline}</div>
          </div>
          <div className="footer-col">
            <div className="footer-heading">{lang === "es" ? "Contacto" : "Contacte"}</div>
            <ul className="footer-list">
              <li><a href={`tel:${(contact.phone || "+34664892020").replace(/\s+/g, "")}`}>{contact.phone || "+34 664 89 20 20"}</a></li>
              <li><a href={`mailto:${contact.email || "remov3@gmail.com"}`}>{contact.email || "remov3@gmail.com"}</a></li>
              <li>{contact.address || (lang === "es" ? "Barcelona" : "Barcelona")}</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-heading">{lang === "es" ? "RRSS" : "Xarxes"}</div>
            <ul className="footer-list">
              <li><a href="https://www.instagram.com/remov3training/" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <div className="footer-copy">{t.footer.copyright}</div>
        </div>
      </footer>
    </div>
  );
};

export default App;