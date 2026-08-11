import { motion } from "framer-motion";
import type { MenuItem } from "../data/menuData";
import BadgeComponent from "./Badge";

interface MenuCardProps {
  item: MenuItem;
  index: number;
  categoryImage: string;
}

export default function MenuCard({ item, index, categoryImage }: MenuCardProps) {
  const customTransition = { duration: 1.2, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...customTransition, delay: (index % 4) * 0.1 }}
      className="group h-full"
    >
      {/* Outer Shell */}
      <div className="h-full p-1.5 sm:p-2 bg-white/5 rounded-[2rem] ring-1 ring-white/5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
        {/* Inner Core */}
        <div className="h-full bg-dark-card rounded-[calc(2rem-0.375rem)] sm:rounded-[calc(2rem-0.5rem)] overflow-hidden border border-offwhite/5 relative flex flex-col shadow-[inset_0_2px_12px_rgba(255,255,255,0.02)]">
          
          {/* Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
            <img
              src={categoryImage}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-80" />

            {/* Badge */}
            {item.badge && (
              <div className="absolute top-4 right-4">
                <BadgeComponent type={item.badge} />
              </div>
            )}

            {/* Price tag */}
            <div className="absolute bottom-4 right-4 bg-orange text-dark px-4 py-1.5 rounded-full font-bold text-sm shadow-[0_8px_16px_rgba(249,115,22,0.2)]">
              ₹{item.price}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 flex flex-col flex-1">
            <h3 className="font-heading text-xl font-bold text-offwhite mb-2 group-hover:text-orange transition-colors duration-500">
              {item.name}
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
