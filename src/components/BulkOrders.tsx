import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function BulkOrders() {
  const whatsappMessage = `Hi Happy Tummy! 🍽️ I'd like to enquire about bulk orders / catering.\n\nEvent type: \nNumber of people: \nPreferred date: \n`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="section-dark py-20 sm:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange font-medium text-sm tracking-widest uppercase">
            Events & Catering
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-offwhite mt-2 mb-4">
            {siteConfig.bulkOrders.heading}
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            {siteConfig.bulkOrders.description}
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {siteConfig.bulkOrders.categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dark-card border border-offwhite/5 rounded-2xl p-6 text-center hover:border-orange/30 hover:shadow-lg hover:shadow-orange/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-offwhite">
                {cat.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="bulk-whatsapp-cta"
            className="inline-flex items-center gap-3 bg-orange hover:bg-orange-hover text-dark px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange/30 no-underline"
          >
            📩 Enquire for Bulk Orders
          </a>
        </motion.div>
      </div>
    </section>
  );
}
