import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function HowToOrder() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <section id="how-to-order" className="section-cream py-20 sm:py-28">
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
            Simple & Easy
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mt-2 mb-6">
            How to Order
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {siteConfig.howToOrder.steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < siteConfig.howToOrder.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-orange/40 to-orange/10" />
              )}

              {/* Icon circle */}
              <div className="relative mx-auto w-24 h-24 bg-white rounded-2xl shadow-lg shadow-orange/10 flex items-center justify-center mb-6 border border-orange/10">
                <span className="text-4xl">{step.icon}</span>
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-orange text-dark rounded-full flex items-center justify-center text-xs font-bold shadow">
                  {index + 1}
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="howto-whatsapp-cta"
            className="inline-flex items-center gap-3 bg-green hover:bg-green-light text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-green/30 no-underline"
          >
            💬 Start Ordering on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
