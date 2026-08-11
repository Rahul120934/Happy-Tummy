import { motion } from "framer-motion";
import type { MenuItem } from "../data/menuData";
import BadgeComponent from "./Badge";

interface MenuCardProps {
  item: MenuItem;
  index: number;
  categoryImage: string;
}

export default function MenuCard({ item, index, categoryImage }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-dark-card rounded-2xl overflow-hidden border border-offwhite/5 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={categoryImage}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 via-transparent to-transparent" />

        {/* Badge */}
        {item.badge && (
          <div className="absolute top-3 right-3">
            <BadgeComponent type={item.badge} />
          </div>
        )}

        {/* Price tag */}
        <div className="absolute bottom-3 right-3 bg-orange text-dark px-3 py-1.5 rounded-full font-bold text-sm shadow-lg">
          ₹{item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading text-lg font-bold text-offwhite mb-1.5 group-hover:text-orange transition-colors">
          {item.name}
        </h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
