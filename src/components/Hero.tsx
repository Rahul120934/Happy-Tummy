import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import { Heart } from "lucide-react";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  // Premium cubic-bezier transition
  const customTransition = { duration: 1.2, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] bg-cream overflow-hidden pt-36 lg:pt-48 pb-24"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-20 w-[30rem] h-[30rem] bg-green/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center min-h-[calc(100vh-14rem)] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 64, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={customTransition}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, ...customTransition }}
              className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 text-orange px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-8"
            >
              <span className="inline-block w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
              Fresh · Tasty · Hygienic
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] text-charcoal tracking-tight">
              <span className="text-green">Happy</span>{" "}
              <span className="text-orange">Tummy</span>
              <Heart className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ml-2 text-red fill-current relative -top-1 sm:-top-2" />
            </h1>

            <p className="font-heading text-2xl sm:text-3xl text-charcoal/80 mb-4">
              {siteConfig.brand.tagline}
            </p>

            <p className="text-charcoal/60 text-base sm:text-lg lg:text-xl max-w-lg mb-12 leading-relaxed">
              Authentic Goan delicacies, biryani, pizza, ramen & wholesome
              tiffin meals — freshly prepared with love in Alto Porvorim, Goa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="group w-full sm:w-auto inline-flex items-center justify-between gap-4 bg-orange hover:bg-orange-hover text-dark pl-8 pr-2.5 py-2.5 rounded-full text-lg font-bold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-[0_8px_32px_rgba(249,115,22,0.25)] no-underline"
              >
                Order on WhatsApp
                <div className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[1px] group-hover:scale-105">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </a>

              <a
                href={`tel:+91${siteConfig.contact.phonePrimary}`}
                id="hero-call-cta"
                className="group w-full sm:w-auto inline-flex items-center justify-between gap-4 bg-transparent border border-charcoal/10 hover:border-charcoal/20 hover:bg-black/5 text-charcoal pl-8 pr-2.5 py-2.5 rounded-full text-lg font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] no-underline"
              >
                Call to Order
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[1px] group-hover:scale-105 group-hover:bg-orange/20 group-hover:text-orange">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Hero Image (Double-Bezel Architecture) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.2, ...customTransition }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Outer Shell */}
            <div className="p-2 sm:p-3 bg-black/5 rounded-[3rem] ring-1 ring-black/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
              {/* Inner Core */}
              <div className="relative w-full aspect-[4/5] sm:aspect-square bg-cream rounded-[calc(3rem-0.75rem)] overflow-hidden shadow-[inset_0_2px_12px_rgba(0,0,0,0.05)]">
                <img
                  src="/images/hero.png"
                  alt="A spread of Happy Tummy's signature dishes"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 p-1.5 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl ring-1 ring-black/5"
                >
                  <div className="bg-white rounded-[calc(1.5rem-0.375rem)] px-4 py-3 border border-charcoal/5">
                    <div className="text-[13px] font-bold text-charcoal">⭐ Made with Love</div>
                    <div className="text-[11px] text-charcoal/50 mt-0.5">Since Day One</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute top-6 right-6 p-1.5 bg-orange/90 backdrop-blur-md rounded-3xl shadow-xl shadow-orange/20 ring-1 ring-black/5"
                >
                  <div className="bg-orange rounded-[calc(1.5rem-0.375rem)] px-4 py-3 border border-dark/10">
                    <div className="text-[13px] font-bold text-dark">🏠 Home Kitchen</div>
                    <div className="text-[11px] text-dark/70 mt-0.5">Alto Porvorim</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
