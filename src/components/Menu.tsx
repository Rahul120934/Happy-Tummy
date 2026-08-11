import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "../data/menuData";
import MenuCard from "./MenuCard";

// Map category IDs to their food images
const categoryImages: Record<string, string> = {
  goan: "/images/goan.png",
  veg: "/images/veg.png",
  biryani: "/images/biryani.png",
  pulao: "/images/pulao.png",
  pizza: "/images/pizza.png",
  ramen: "/images/ramen.png",
  tiffin: "/images/tiffin.png",
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const activeCat = menuCategories.find((c) => c.id === activeCategory)!;
  const customTransition = { duration: 1.2, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <section id="menu" className="section-dark py-24 sm:py-32 relative">
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
            What We Serve
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-offwhite mt-2 mb-8 tracking-tight">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...customTransition, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16"
          role="tablist"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              id={`menu-tab-${cat.id}`}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`menu-panel-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-sm font-medium transition-colors duration-500 cursor-pointer overflow-hidden ${
                activeCategory === cat.id
                  ? "text-dark"
                  : "bg-offwhite/5 text-offwhite/70 hover:bg-offwhite/10 hover:text-offwhite"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-orange shadow-[0_8px_16px_rgba(249,115,22,0.3)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 text-base">
                <cat.icon className="w-4 h-4" />
              </span>
              <span className="relative z-10 hidden sm:inline">{cat.name}</span>
              <span className="relative z-10 sm:hidden">{cat.name.split(" ")[0]}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            role="tabpanel"
            id={`menu-panel-${activeCategory}`}
            aria-labelledby={`menu-tab-${activeCategory}`}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Category title */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-10">
              <span className="text-orange p-2 bg-orange/10 rounded-xl ring-1 ring-orange/20">
                <activeCat.icon className="w-7 h-7" />
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-offwhite tracking-tight">
                {activeCat.name}
              </h3>
              <span className="text-muted text-sm font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {activeCat.items.length} items
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {activeCat.items.map((item, index) => (
                <MenuCard
                  key={item.name}
                  item={item}
                  index={index}
                  categoryImage={categoryImages[activeCategory]}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
