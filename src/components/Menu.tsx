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

  return (
    <section id="menu" className="section-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange font-medium text-sm tracking-widest uppercase">
            What We Serve
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-offwhite mt-2 mb-6">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              id={`menu-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-orange text-dark border-orange shadow-lg shadow-orange/20 scale-105"
                  : "bg-offwhite/5 text-offwhite/70 border-offwhite/10 hover:border-orange/40 hover:text-offwhite"
              }`}
            >
              <span className="text-base">{cat.emoji}</span>
              <span className="hidden sm:inline">{cat.name}</span>
              <span className="sm:hidden">{cat.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category title */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{activeCat.emoji}</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-offwhite">
                {activeCat.name}
              </h3>
              <span className="text-muted text-sm">
                ({activeCat.items.length} items)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
