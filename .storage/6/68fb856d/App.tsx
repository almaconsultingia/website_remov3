import { useEffect, useState } from "react";
import "./App.css";
import "./remov3.css";
import data from "./data.json";

function App() {
  // Estado para el menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cerrar el menú al cambiar tamaño por encima de 768px para evitar estados raros
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((v) => !v);

  // Items del menú (manteniendo contenido, pero asegurando el orden solicitado para móviles)
  const menuItems = [
    { id: "services", label: "Servicios" },
    { id: "process", label: "Metodología" },
    { id: "about", label: "Quién soy" },
    { id: "testimonials", label: "Testimonios" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <>
      {/* Header */}
      <header className="header sticky top-0 z-50">
        <div className="header-inner">
          <a href="#home" className="brand" aria-label="Ir al inicio">
            <img src="/images/logo.jpg" alt="RE:MOV3" className="brand-logo" />
            <span className="brand-text">RE:MOV3</span>
          </a>

          {/* Botón hamburguesa visible solo en móviles */}
          <button
            className="hamburger-btn"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="primary-navigation"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Navegación principal - desktop intacto, móvil controlado por estado */}
          <nav
            id="primary-navigation"
            className={`primary-nav ${mobileMenuOpen ? "is-open" : ""}`}
          >
            <ul className="menu-list">
              {menuItems.map((item) => (
                <li key={item.id} className="menu-item">
                  <a href={`#${item.id}`} className="menu-link">
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Botón de reserva y selector de idioma permanecen sin cambios en desktop;
                  en móviles los presentamos dentro del panel para mejor accesibilidad */}
              <li className="menu-cta">
                <a href="#book" className="btn-book">Reservar</a>
              </li>
              <li className="menu-lang">
                <button className="lang-btn" aria-label="Cambiar idioma">ES</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <video
          className="hero-video"
          src="/public/media/hero.mp4"
          poster="/images/photo1764274373.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-content">
          <h1 className="title">{data?.hero?.title ?? "RE:MOV3"}</h1>
          <p className="subtitle">
            {data?.hero?.subtitle ?? "Fisioterapia y entrenamiento para mujeres"}
          </p>
          <div className="hero-actions">
            <a href="#book" className="btn-primary">Reservar</a>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Secciones siguientes... conservadas del proyecto, no relacionadas con cambios solicitados */}
      <main>
        <section id="services" className="section services">
          <h2 className="section-title">Servicios</h2>
          {/* Render de servicios solo títulos */}
          <div className="services-grid">
            {(data?.services ?? []).map((s: any) => (
              <div key={s.id} className="service-card">
                <h3 className="service-title">{s.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="section process">
          <h2 className="section-title">Metodología</h2>
          <div className="process-steps">
            {(data?.process ?? []).map((p: any) => (
              <div key={p.id} className="process-step">
                <span className="step-number">{p.step}</span>
                <h3 className="step-title">{p.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <h2 className="section-title">Quién soy</h2>
          <div className="about-content">
            <img src="/images/AboutMe.jpg" alt="Sobre mí" className="about-image" />
            <p className="about-text">{data?.about ?? ""}</p>
          </div>
        </section>

        <section id="testimonials" className="section testimonials">
          <h2 className="section-title">Testimonios</h2>
          <div className="testimonials-list">
            {(data?.testimonials ?? []).map((t: any) => (
              <blockquote key={t.id} className="testimonial">
                <p className="testimonial-text">“{t.text}”</p>
                <footer className="testimonial-author">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <p>{data?.contact?.intro ?? ""}</p>
              <ul>
                <li><a href="mailto:info@remov3.com">info@remov3.com</a></li>
                <li><a href="tel:+34123456789">+34 123 456 789</a></li>
              </ul>
            </div>
            <form className="contact-form" aria-label="Formulario de contacto">
              <label>
                Nombre
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Mensaje
                <textarea name="message" rows={4} required />
              </label>
              <button type="submit" className="btn-primary">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand">RE:MOV3</span>
          <ul className="footer-social">
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;