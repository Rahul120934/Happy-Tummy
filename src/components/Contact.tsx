import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;
  const customTransition = { duration: 1.2, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <section id="contact" className="section-cream py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={customTransition}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 text-orange px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            Find Us
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-charcoal mt-2 mb-6 tracking-tight">
            Location & Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={customTransition}
            className="space-y-6"
          >
            {/* Address (Double Bezel) */}
            <div className="group p-1.5 bg-black/5 rounded-[1.5rem] ring-1 ring-black/5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.05)]">
              <div className="flex items-start gap-4 bg-cream rounded-[calc(1.5rem-0.375rem)] p-6 border border-orange/5 shadow-[inset_0_2px_12px_rgba(255,255,255,0.8)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent pointer-events-none" />
                <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 text-orange">
                  <MapPin className="w-7 h-7 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
                    Address
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            {/* Phone (Double Bezel) */}
            <div className="group p-1.5 bg-black/5 rounded-[1.5rem] ring-1 ring-black/5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.05)]">
              <div className="flex items-start gap-4 bg-cream rounded-[calc(1.5rem-0.375rem)] p-6 border border-orange/5 shadow-[inset_0_2px_12px_rgba(255,255,255,0.8)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent pointer-events-none" />
                <div className="w-14 h-14 bg-green/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 text-green">
                  <Phone className="w-7 h-7 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
                    Phone
                  </h3>
                  <a
                    href={`tel:+91${siteConfig.contact.phonePrimary}`}
                    className="text-charcoal/70 hover:text-orange transition-colors block text-lg font-medium no-underline mb-0.5"
                  >
                    +91 {siteConfig.contact.phonePrimary}
                  </a>
                  <a
                    href={`tel:+91${siteConfig.contact.phoneSecondary}`}
                    className="text-charcoal/50 hover:text-orange transition-colors block text-sm no-underline"
                  >
                    +91 {siteConfig.contact.phoneSecondary}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours (Double Bezel) */}
            <div className="group p-1.5 bg-black/5 rounded-[1.5rem] ring-1 ring-black/5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.05)]">
              <div className="flex items-start gap-4 bg-cream rounded-[calc(1.5rem-0.375rem)] p-6 border border-orange/5 shadow-[inset_0_2px_12px_rgba(255,255,255,0.8)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent pointer-events-none" />
                <div className="w-14 h-14 bg-red/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 text-red">
                  <Clock className="w-7 h-7 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
                    Hours
                  </h3>
                  <p className="text-charcoal/70 font-medium mb-0.5">{siteConfig.contact.hours}</p>
                  <p className="text-charcoal/50 text-sm">{siteConfig.contact.daysOpen}</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-cta"
                className="group flex-1 inline-flex items-center justify-between gap-4 bg-green hover:bg-green-light text-white pl-6 pr-2 py-2 rounded-full text-base font-bold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-[0_8px_32px_rgba(34,197,94,0.25)] no-underline"
              >
                WhatsApp Us
                <div className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </div>
              </a>
              <a
                href={`tel:+91${siteConfig.contact.phonePrimary}`}
                id="contact-call-cta"
                className="group flex-1 inline-flex items-center justify-between gap-4 bg-orange hover:bg-orange-hover text-dark pl-6 pr-2 py-2 rounded-full text-base font-bold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-[0_8px_32px_rgba(249,115,22,0.25)] no-underline"
              >
                Call to Order
                <div className="w-9 h-9 rounded-full bg-dark/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...customTransition, delay: 0.2 }}
            className="w-full h-[400px] lg:h-full min-h-[400px] rounded-[2.5rem] overflow-hidden p-2 bg-black/5 ring-1 ring-black/5"
          >
            <div className="w-full h-full rounded-[calc(2.5rem-0.5rem)] overflow-hidden">
              <iframe
                title="Happy Tummy location — Alto Porvorim, Bardez, Goa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15378.69!2d73.859!3d15.522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1e04e0a2c17%3A0xce90d60ec6e7a2d1!2sAlto%20Porvorim%2C%20Bardez%2C%20Goa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
