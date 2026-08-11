import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] bg-cream overflow-hidden pt-32 lg:pt-40 pb-12"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-green/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange/40 rounded-full animate-float" />
        <div
          className="absolute top-1/2 left-1/6 w-3 h-3 bg-green/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-red/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center min-h-[calc(100vh-12rem)]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 text-orange px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="inline-block w-2 h-2 bg-orange rounded-full animate-pulse" />
              Fresh · Tasty · Hygienic
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-charcoal">
              <span className="text-green">Happy</span>{" "}
              <span className="text-orange">Tummy</span>
              <span className="text-red text-4xl"> ♥</span>
            </h1>

            <p className="font-heading text-xl sm:text-2xl text-charcoal/70 mb-3">
              {siteConfig.brand.tagline}
            </p>

            <p className="text-charcoal/60 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Authentic Goan delicacies, biryani, pizza, ramen & wholesome
              tiffin meals — freshly prepared with love in Alto Porvorim, Goa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="group inline-flex items-center gap-3 bg-orange hover:bg-orange-hover text-dark px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange/30 hover:shadow-xl hover:shadow-orange/40 animate-pulse-glow no-underline"
              >
                <svg
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>

              <a
                href={`tel:+91${siteConfig.contact.phonePrimary}`}
                id="hero-call-cta"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-charcoal/20 hover:border-orange text-charcoal hover:text-orange px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 no-underline"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call to Order
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-charcoal/50 text-sm">
              <span className="flex items-center gap-1">✓ No preservatives</span>
              <span className="flex items-center gap-1">✓ Fresh daily</span>
              <span className="flex items-center gap-1">✓ Fast delivery</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow ring behind image */}
              <div className="absolute inset-4 bg-gradient-to-br from-orange/30 via-transparent to-green/20 rounded-full blur-2xl" />

              <img
                src="/images/hero.png"
                alt="A spread of Happy Tummy's signature dishes — Goan curry, biryani, pizza, and ramen"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl shadow-black/20"
                loading="eager"
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg"
              >
                <div className="text-sm font-bold text-charcoal">⭐ Made with Love</div>
                <div className="text-xs text-charcoal/60">Since Day One</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -top-2 -right-2 bg-orange text-dark rounded-2xl px-4 py-3 shadow-lg"
              >
                <div className="text-sm font-bold">🏠 Home Kitchen</div>
                <div className="text-xs text-dark/70">Alto Porvorim, Goa</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal/30"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
