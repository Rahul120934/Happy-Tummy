import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/goan.png", alt: "Traditional Goan chicken xacuti curry" },
  { src: "/images/biryani.png", alt: "Aromatic chicken dum biryani" },
  { src: "/images/pizza.png", alt: "Freshly baked artisan pizza" },
  { src: "/images/ramen.png", alt: "Steaming bowl of ramen noodles" },
  { src: "/images/veg.png", alt: "Vegetarian delicacies — paneer and dal" },
  { src: "/images/tiffin.png", alt: "Complete Indian thali tiffin meal" },
  { src: "/images/pulao.png", alt: "Fragrant prawn pulao" },
  { src: "/images/hero.png", alt: "Happy Tummy's signature dish spread" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-dark py-20 sm:py-28">
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
            Food Gallery
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-offwhite mt-2 mb-6">
            Feast Your Eyes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green via-orange to-red mx-auto rounded-full" />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 || index === 5
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-offwhite text-sm font-medium">{img.alt}</p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
