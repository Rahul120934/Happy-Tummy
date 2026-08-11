import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Loader displays for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center gap-2"
          >
            <span className="font-heading text-4xl sm:text-5xl font-bold text-green tracking-wide">
              Happy
            </span>
            <span className="font-heading text-4xl sm:text-5xl font-bold text-orange tracking-wide">
              Tummy
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
