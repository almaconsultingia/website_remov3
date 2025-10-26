import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone } from "lucide-react";
import { Language } from "./LanguageSwitcher";
import { toast } from "sonner";

interface ContactProps {
  language: Language;
}

const content = {
  en: {
    mainTitle: "Let's talk",
    subtitle: "Let's talk about how AI can work for you.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Send message",
    bookMeetingTitle: "Book a meeting",
    bookMeetingButton: "Book a meeting",
    orText: "or",
    contactInfoTitle: "Contact info",
    emailText: "almaconsulting.ia",
    phoneText: "+34 655 800 407",
    successMessage: "Message sent successfully!",
  },
  es: {
    mainTitle: "Hablemos",
    subtitle: "Hablemos de cómo la IA puede trabajar para ti.",
    nameLabel: "Nombre",
    emailLabel: "Email",
    messageLabel: "Mensaje",
    sendButton: "Enviar mensaje",
    bookMeetingTitle: "Reservar reunión",
    bookMeetingButton: "Reservar reunión",
    orText: "o",
    contactInfoTitle: "Información de contacto",
    emailText: "almaconsulting.ia",
    phoneText: "+34 655 800 407",
    successMessage: "¡Mensaje enviado con éxito!",
  },
  cat: {
    mainTitle: "Parlem",
    subtitle: "Parlem de com la IA pot treballar per tu.",
    nameLabel: "Nom",
    emailLabel: "Email",
    messageLabel: "Missatge",
    sendButton: "Enviar missatge",
    bookMeetingTitle: "Reserva una reunió",
    bookMeetingButton: "Reserva una reunió",
    orText: "o",
    contactInfoTitle: "Informació de contacte",
    emailText: "almaconsulting.ia",
    phoneText: "+34 655 800 407",
    successMessage: "Missatge enviat amb èxit!",
  },
};

export const Contact = ({ language }: ContactProps) => {
  const t = content[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success(t.successMessage);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            {t.mainTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Form */}
          <div className="card-elevated rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.nameLabel}
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl border-border/50 bg-white/50 focus:bg-white transition-smooth"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.emailLabel}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl border-border/50 bg-white/50 focus:bg-white transition-smooth"
                  placeholder="hello@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.messageLabel}
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="rounded-xl border-border/50 bg-white/50 focus:bg-white transition-smooth resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth py-6"
              >
                {t.sendButton}
              </Button>
            </form>
          </div>

          {/* Right Column: Contact Info + Book Meeting */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="card-elevated rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-semibold mb-6 text-center">{t.contactInfoTitle}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:almaconsulting.ia@gmail.com"
                      className="text-lg font-medium hover:text-primary transition-smooth"
                    >
                      {t.emailText}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a 
                      href="tel:+34655800407"
                      className="text-lg font-medium hover:text-primary transition-smooth"
                    >
                      {t.phoneText}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Book a Meeting Card */}
            <div className="card-elevated rounded-3xl p-6 text-center">
              <p className="text-muted-foreground mb-3">{t.orText}</p>
              <Button 
                size="lg"
                variant="outline"
                className="w-full rounded-full border-2 py-6 transition-smooth hover:bg-accent/20"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t.bookMeetingButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
