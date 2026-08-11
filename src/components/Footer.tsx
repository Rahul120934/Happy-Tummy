import { siteConfig } from "../data/siteConfig";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <footer className="section-dark border-t border-offwhite/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(249,115,22,0.03))] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32 sm:py-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 sm:gap-8 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-green tracking-wide">
                Happy
              </span>
              <span className="font-heading text-2xl sm:text-3xl font-bold text-orange tracking-wide">
                Tummy
              </span>
            </div>
            <p className="text-offwhite/80 text-sm sm:text-base leading-relaxed tracking-wide max-w-sm">
              {siteConfig.brand.tagline}
              <br className="mb-2" />
              Freshly cooked with love in {siteConfig.contact.address}.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-cta"
                className="group inline-flex items-center gap-2 bg-green/10 hover:bg-green/20 border border-green/20 text-green px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] no-underline"
              >
                WhatsApp
                <div className="w-5 h-5 rounded-full bg-green/20 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </div>
              </a>
              <a
                href={`tel:+91${siteConfig.contact.phonePrimary}`}
                id="footer-call-cta"
                className="group inline-flex items-center gap-2 bg-orange/10 hover:bg-orange/20 border border-orange/20 text-orange px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] no-underline"
              >
                Call
                <div className="w-5 h-5 rounded-full bg-orange/20 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-bold text-offwhite">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-offwhite/80 hover:text-orange transition-colors text-base font-medium tracking-wide w-fit no-underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-bold text-offwhite">
              Contact Info
            </h3>
            <div className="space-y-4 text-offwhite/80 text-base tracking-wide">
              <p className="flex items-start gap-3">
                <span className="mt-1 text-orange"><MapPin className="w-5 h-5" strokeWidth={1.5} /></span>
                <span className="leading-relaxed">{siteConfig.contact.address}</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-1 text-green"><Phone className="w-5 h-5" strokeWidth={1.5} /></span>
                <span className="leading-relaxed">
                  +91 {siteConfig.contact.phonePrimary}
                  <br />
                  +91 {siteConfig.contact.phoneSecondary}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-1 text-orange"><Clock className="w-5 h-5" strokeWidth={1.5} /></span>
                <span className="leading-relaxed">
                  {siteConfig.contact.hours}
                  <br />
                  <span className="text-sm opacity-80">{siteConfig.contact.daysOpen}</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-offwhite/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm font-medium">
            © {new Date().getFullYear()} Happy Tummy. All rights reserved.
          </p>
          <p className="text-muted/50 text-sm font-medium">
            {siteConfig.brand.taglineAlt}
          </p>
        </div>
      </div>
    </footer>
  );
}
