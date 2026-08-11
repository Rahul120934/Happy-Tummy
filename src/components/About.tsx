import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function About() {
  const customTransition = { duration: 1.2, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <section id="about" className="section-cream py-24 sm:py-32 relative">
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
            Our Story
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-charcoal mt-2 mb-8 tracking-tight">
            Good Food • Good Mood
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        {/* Story text */}
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...customTransition, delay: 0.1 }}
          className="text-center text-charcoal/70 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-24"
        >
          {siteConfig.about.story}
        </motion.p>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.about.highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...customTransition, delay: index * 0.1 }}
              className="group"
            >
              {/* Outer Shell */}
              <div className="h-full p-1.5 sm:p-2 bg-black/5 rounded-[2rem] ring-1 ring-black/5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                {/* Inner Core */}
                <div className="h-full bg-cream rounded-[calc(2rem-0.375rem)] sm:rounded-[calc(2rem-0.5rem)] p-8 text-center border border-orange/5 shadow-[inset_0_2px_12px_rgba(255,255,255,0.8)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
                  <div className="mb-6 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:-translate-y-1 relative z-10 text-orange flex justify-center">
                    <item.icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 text-base leading-relaxed relative z-10">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
