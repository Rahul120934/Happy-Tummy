import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function About() {
  return (
    <section id="about" className="section-cream py-20 sm:py-28">
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
            Our Story
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mt-2 mb-6">
            Good Food • Good Mood
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        {/* Story text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-charcoal/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-16"
        >
          {siteConfig.about.story}
        </motion.p>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.about.highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-orange/10 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
