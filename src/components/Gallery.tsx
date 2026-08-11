import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/biryani.png",
    alt: "Aromatic Dum Biryani",
    className: "col-span-2 row-span-2 aspect-square",
  },
  {
    src: "/images/pizza.png",
    alt: "Wood-fired style Pizza",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/goan.png",
    alt: "Goan Fish Curry",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/tiffin.png",
    alt: "Homely Tiffin Meal",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/images/ramen.png",
    alt: "Spicy Ramen Bowl",
    className: "col-span-1 row-span-1 aspect-square",
  },
];

export default function Gallery() {
  const customTransition = { duration: 1.2, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <section id="gallery" className="section-dark py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={customTransition}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 text-orange px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            Food Gallery
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl font-bold text-offwhite mt-2 mb-8 tracking-tight">
            Feast Your Eyes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...customTransition, delay: index * 0.15 }}
              className={`group ${image.className}`}
            >
              {/* Outer Shell */}
              <div className="h-full p-1.5 sm:p-2 bg-white/5 rounded-[2rem] ring-1 ring-white/5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
                {/* Inner Core */}
                <div className="relative w-full h-full bg-dark-card rounded-[calc(2rem-0.375rem)] sm:rounded-[calc(2rem-0.5rem)] overflow-hidden shadow-[inset_0_2px_12px_rgba(255,255,255,0.02)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] z-10" />
                  
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] z-20">
                    <p className="text-white font-heading text-lg sm:text-xl font-bold drop-shadow-md">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
