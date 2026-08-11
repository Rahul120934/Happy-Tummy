import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <footer className="section-dark border-t border-offwhite/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-heading text-2xl font-bold text-green">
                Happy
              </span>
              <span className="font-heading text-2xl font-bold text-orange">
                Tummy
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {siteConfig.brand.tagline}
              <br />
              Freshly cooked with love in {siteConfig.contact.address}.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-cta"
                className="inline-flex items-center gap-2 bg-green/20 hover:bg-green text-green hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 no-underline"
              >
                💬 WhatsApp
              </a>
              <a
                href={`tel:+91${siteConfig.contact.phonePrimary}`}
                id="footer-call-cta"
                className="inline-flex items-center gap-2 bg-orange/20 hover:bg-orange text-orange hover:text-dark px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 no-underline"
              >
                📞 Call
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-offwhite mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted hover:text-orange transition-colors text-sm no-underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-offwhite mb-4">
              Contact Info
            </h3>
            <div className="space-y-3 text-muted text-sm">
              <p className="flex items-start gap-2">
                <span>📍</span>
                {siteConfig.contact.address}
              </p>
              <p className="flex items-start gap-2">
                <span>📞</span>
                <span>
                  +91 {siteConfig.contact.phonePrimary}
                  <br />
                  +91 {siteConfig.contact.phoneSecondary}
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span>🕐</span>
                <span>
                  {siteConfig.contact.hours}
                  <br />
                  {siteConfig.contact.daysOpen}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-offwhite/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Happy Tummy. All rights reserved.
          </p>
          <p className="text-muted/50 text-xs">
            {siteConfig.brand.taglineAlt}
          </p>
        </div>
      </div>
    </footer>
  );
}
