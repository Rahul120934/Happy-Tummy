import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function HowToOrder() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;
  const customTransition = { duration: 1.2, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <section id="how-to-order" className="section-cream py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={customTransition}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 text-orange px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            Simple & Easy
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-charcoal mt-2 mb-8 tracking-tight">
            How to Order
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20 relative">
          {/* Connector line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent z-0" />

          {siteConfig.howToOrder.steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...customTransition, delay: index * 0.15 }}
              className="relative text-center z-10 group"
            >
              {/* Icon circle (Double-Bezel) */}
              <div className="mx-auto w-24 h-24 p-1.5 bg-black/5 rounded-[2rem] ring-1 ring-black/5 mb-8 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.1)]">
                <div className="relative w-full h-full bg-cream rounded-[calc(2rem-0.375rem)] border border-orange/10 flex items-center justify-center shadow-[inset_0_2px_12px_rgba(255,255,255,0.8)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
                  <div className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 relative z-10 text-orange">
                    <step.icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute top-1.5 right-1.5 w-6 h-6 bg-orange text-dark rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm z-20">
                    {index + 1}
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-xs mx-auto">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...customTransition, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="howto-whatsapp-cta"
            className="group inline-flex items-center justify-between gap-4 bg-green hover:bg-green-light text-white pl-8 pr-2.5 py-2.5 rounded-full text-lg font-bold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-[0_8px_32px_rgba(34,197,94,0.25)] no-underline"
          >
            Start Ordering on WhatsApp
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[1px] group-hover:scale-105">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
