import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled || isOpen
            ? "bg-dark/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/10"
            : "bg-dark/40 backdrop-blur-md border border-transparent"
        } rounded-full px-4 py-2 sm:py-2.5 flex items-center justify-between gap-6 w-[calc(100%-2rem)] max-w-5xl`}
      >
        {/* Brand */}
        <a href="#home" className="flex items-center gap-1.5 no-underline z-10 shrink-0">
          <span className="font-heading text-xl sm:text-2xl font-bold text-green tracking-wide">
            Happy
          </span>
          <span className="font-heading text-xl sm:text-2xl font-bold text-orange tracking-wide">
            Tummy
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-offwhite/80 hover:text-orange transition-colors duration-500 text-sm font-medium tracking-wide no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-cta"
            className="group inline-flex items-center gap-2 bg-green hover:bg-green-light text-white pl-4 pr-1.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] no-underline"
          >
            WhatsApp
            <div className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </a>
          <a
            href={`tel:+91${siteConfig.contact.phonePrimary}`}
            id="nav-call-cta"
            className="group inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-dark pl-4 pr-1.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] no-underline"
          >
            Call Now
            <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Morph */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center z-10 transition-colors duration-500"
          aria-label="Toggle menu"
        >
          <div className="relative w-4 h-4">
            <span
              className={`absolute top-1/2 left-0 w-full h-[1.5px] bg-offwhite transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 w-full h-[1.5px] bg-offwhite transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Expanded Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-dark/90 backdrop-blur-3xl pt-28 px-6 pb-6 flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="block py-4 text-center font-heading text-4xl font-bold text-offwhite hover:text-orange transition-colors no-underline"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.7,
                delay: navLinks.length * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="mt-auto space-y-3"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-green hover:bg-green-light text-white py-4 rounded-full text-base font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] no-underline"
              >
                Order on WhatsApp
              </a>
              <a
                href={`tel:+91${siteConfig.contact.phonePrimary}`}
                className="w-full flex items-center justify-center gap-3 bg-orange hover:bg-orange-hover text-dark py-4 rounded-full text-base font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] no-underline"
              >
                Call to Order
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
