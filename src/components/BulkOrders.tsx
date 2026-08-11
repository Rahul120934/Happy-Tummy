import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function BulkOrders() {
  const whatsappMessage = `Hi Happy Tummy! I'd like to enquire about bulk orders / catering.\n\nEvent type: \nNumber of people: \nPreferred date: \n`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const customTransition = { duration: 1.2, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <section className="section-dark py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-orange/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-green/5 rounded-full blur-[100px]" />
      </div>

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
            Events & Catering
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-offwhite mt-2 mb-6 tracking-tight">
            {siteConfig.bulkOrders.heading}
          </h2>
          <p className="text-muted-light text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {siteConfig.bulkOrders.description}
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {siteConfig.bulkOrders.categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...customTransition, delay: index * 0.1 }}
              className="group h-full"
            >
              {/* Outer Shell */}
              <div className="h-full p-1.5 sm:p-2 bg-white/5 rounded-[2rem] ring-1 ring-white/5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
                {/* Inner Core */}
                <div className="h-full bg-dark-card rounded-[calc(2rem-0.375rem)] sm:rounded-[calc(2rem-0.5rem)] p-8 text-center border border-offwhite/5 shadow-[inset_0_2px_12px_rgba(255,255,255,0.02)] relative overflow-hidden flex flex-col items-center justify-center">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="mb-4 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 relative z-10 text-orange">
                    <cat.icon className="w-12 h-12" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-offwhite relative z-10 group-hover:text-orange transition-colors duration-500">
                    {cat.title}
                  </h3>
                </div>
              </div>
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
            id="bulk-whatsapp-cta"
            className="group inline-flex items-center justify-between gap-4 bg-orange hover:bg-orange-hover text-dark pl-8 pr-2.5 py-2.5 rounded-full text-lg font-bold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-[0_8px_32px_rgba(249,115,22,0.25)] no-underline"
          >
            Enquire for Bulk Orders
            <div className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[1px] group-hover:scale-105">
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
