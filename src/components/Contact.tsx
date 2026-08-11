import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <section id="contact" className="section-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange font-medium text-sm tracking-widest uppercase">
            Find Us
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mt-2 mb-6">
            Location & Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-orange/10">
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-1">
                  Address
                </h3>
                <p className="text-charcoal/70">{siteConfig.contact.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-orange/10">
              <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-1">
                  Phone
                </h3>
                <a
                  href={`tel:+91${siteConfig.contact.phonePrimary}`}
                  className="text-charcoal/70 hover:text-orange transition-colors block no-underline"
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

            {/* Hours */}
            <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-orange/10">
              <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🕐</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-1">
                  Hours
                </h3>
                <p className="text-charcoal/70">{siteConfig.contact.hours}</p>
                <p className="text-charcoal/50 text-sm">{siteConfig.contact.daysOpen}</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-cta"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green hover:bg-green-light text-white py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-green/30 no-underline"
              >
                💬 WhatsApp Us
              </a>
              <a
                href={`tel:+91${siteConfig.contact.phonePrimary}`}
                id="contact-call-cta"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-dark py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange/30 no-underline"
              >
                📞 Call to Order
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden border border-orange/10 shadow-lg"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
