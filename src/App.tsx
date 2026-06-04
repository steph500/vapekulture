import { useEffect, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Menu,
  MessageCircle,
  Phone,
  QrCode,
  ShieldCheck,
  Snowflake,
  X
} from "lucide-react";
import { AgeGateModal } from "./components/AgeGateModal";
import { ProductCard } from "./components/ProductCard";
import { SectionHeading } from "./components/SectionHeading";
import {
  comparisonRows,
  heroImages,
  navLinks,
  orderSteps,
  phoneLink,
  products,
  showcaseImages,
  trustBadges,
  whatsappLink,
  whyUsItems
} from "./data";

const ageGateStorageKey = "vapekulture-age-confirmed";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(ageGateStorageKey);
    if (storedValue === "true") {
      setAgeConfirmed(true);
    }
    setReady(true);
  }, []);

  function confirmAge() {
    window.localStorage.setItem(ageGateStorageKey, "true");
    setAgeConfirmed(true);
    setBlocked(false);
  }

  function rejectAge() {
    setBlocked(true);
  }

  return (
    <div className="min-h-screen bg-ink text-white">
      <AgeGateModal
        open={ready && !ageConfirmed}
        blocked={blocked}
        onConfirm={confirmAge}
        onReject={rejectAge}
      />

      <div className="site-background" />
      <div className="site-smoke site-smoke-left" />
      <div className="site-smoke site-smoke-right" />

      <div className="relative z-10">
        <div className="border-b border-white/10 bg-black/60 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-200 sm:text-sm">
          18+ ONLY | WARNING: This product contains nicotine. Nicotine is an
          addictive chemical.
        </div>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a
              href="#home"
              className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-white"
            >
              Vapekulture
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a href={whatsappLink} className="btn-primary">
                Order on WhatsApp
              </a>
              <a href={phoneLink} className="btn-secondary">
                Call to Order
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
              onClick={() => setMobileMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileMenuOpen ? (
            <div className="border-t border-white/10 px-4 py-4 lg:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a href={whatsappLink} className="btn-primary">
                  Order on WhatsApp
                </a>
                <a href={phoneLink} className="btn-secondary">
                  Call to Order
                </a>
              </div>
            </div>
          ) : null}
        </header>

        <main>
          <section
            id="home"
            className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20"
          >
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-lime">
                  <ShieldCheck className="h-4 w-4" />
                  Adult-only premium vape store
                </div>

                <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Premium Vapes.
                  <span className="block bg-gradient-to-r from-lime via-teal to-ice bg-clip-text text-transparent">
                    Bold Flavour.
                  </span>
                  Fast Delivery.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  High-performance disposables and pod systems with refined
                  flavour profiles, premium quality, and reliable delivery
                  across Kenya.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={whatsappLink} className="btn-primary sm:min-w-[220px]">
                    <MessageCircle className="h-5 w-5" />
                    Order on WhatsApp
                  </a>
                  <a href={phoneLink} className="btn-secondary sm:min-w-[220px]">
                    <Phone className="h-5 w-5" />
                    Call to Order
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="hero-note-card">
                    <span className="hero-note-label">Adults only</span>
                    <strong className="hero-note-value">18+</strong>
                  </div>
                  <div className="hero-note-card">
                    <span className="hero-note-label">Contact</span>
                    <strong className="hero-note-value">WhatsApp & phone</strong>
                  </div>
                  <div className="hero-note-card">
                    <span className="hero-note-label">Ordering</span>
                    <strong className="hero-note-value">Direct & fast</strong>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-magenta">
                    Nicotine Warning
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    This product contains nicotine. Nicotine is an addictive
                    chemical and this website is intended for adults aged 18 and
                    above only.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="hero-stage">
                  <div className="hero-stage-glow hero-stage-glow-lime" />
                  <div className="hero-stage-glow hero-stage-glow-magenta" />

                  <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="hero-photo-card hero-photo-main">
                      <img
                        src={heroImages[0].src}
                        alt={heroImages[0].alt}
                        className="h-full w-full object-cover"
                      />
                      <div className="hero-photo-overlay" />
                      <div className="hero-photo-caption">
                        <span className="hero-photo-kicker">Vapekulture</span>
                        <strong className="hero-photo-title">
                          Curated premium selection
                        </strong>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="hero-photo-card hero-photo-side aspect-square">
                        <img
                          src={heroImages[0].src}
                          alt={heroImages[0].alt}
                          className="h-full w-full object-cover"
                        />
                        <div className="hero-photo-overlay" />
                      </div>

                      <div className="hero-stat-panel">
                        <div className="hero-stat-row">
                          <BatteryCharging className="h-5 w-5 text-lime" />
                          Rechargeable device formats
                        </div>
                        <div className="hero-stat-row">
                          <Snowflake className="h-5 w-5 text-ice" />
                          Icy, mint, and fruit-led profiles
                        </div>
                        <div className="hero-stat-row">
                          <ArrowRight className="h-5 w-5 text-magenta" />
                          Direct ordering through WhatsApp or phone
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[0.78fr_1.22fr]">
                    <div className="hero-photo-card hero-photo-secondary aspect-[5/6]">
                      <img
                        src={heroImages[0].src}
                        alt={heroImages[0].alt}
                        className="h-full w-full object-cover"
                      />
                      <div className="hero-photo-overlay" />
                    </div>

                    <div className="hero-highlight-panel">
                      <span className="hero-note-label">Premium ordering flow</span>
                      <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                        Browse the collection, pick a flavour, and order directly.
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                        The entire experience is designed to feel elevated,
                        minimal, and fast without adding cart friction or noisy
                        sales copy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 xl:grid-cols-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="trust-chip text-center text-sm font-medium text-slate-100"
                >
                  {badge}
                </div>
              ))}
            </div>
          </section>

          <section id="products" className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Products"
                title="Premium devices presented with cleaner retail-ready detail"
                description="Choose between two featured product lines with clear specs, accurate imagery, and direct ordering through WhatsApp or phone."
              />

              <div className="mt-10 grid gap-8">
                {products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-luxe backdrop-blur-xl">
              <div className="border-b border-white/10 px-6 py-5">
                <h3 className="font-display text-2xl font-bold text-white">
                  Compare Jupiter 2 vs Jupiter Plus
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-lime">
                        Jupiter 2
                      </th>
                      <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal">
                        Jupiter Plus
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.label} className="border-t border-white/10">
                        <td className="px-6 py-4 text-sm font-medium text-white">
                          {row.label}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300">
                          {row.first}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300">
                          {row.second}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="flavours" className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Flavours"
                title="Flavour collections styled with a more mature premium tone"
                description="The flavour presentation stays energetic and neon-led while avoiding playful treatment that would make the brand feel less premium."
              />

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                {products.map((product, index) => (
                  <div
                    key={product.name}
                    className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-luxe"
                  >
                    <div
                      className={`absolute -top-12 ${index === 0 ? "-right-10" : "-left-10"} h-40 w-40 rounded-full bg-gradient-to-br ${product.accent} opacity-40 blur-3xl`}
                    />
                    <div className="relative z-10 flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="h-20 w-20 rounded-[1.25rem] object-cover"
                      />
                      <div>
                        <h3 className="font-display text-2xl font-bold text-white">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">
                          Available flavours
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10 mt-6 flex flex-wrap gap-3">
                      {product.flavors.map((flavor) => (
                        <span key={flavor} className="flavor-chip">
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="why-us" className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Why Us"
                title="Built to feel more like a polished premium landing page than a generic shop template"
                description="The structure focuses on strong visual hierarchy, concise ordering paths, and a cleaner retail presentation that feels ready to ship."
              />

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {whyUsItems.map((item) => (
                  <div
                    key={item.title}
                    className="glass-panel rounded-[2rem] p-6 shadow-luxe"
                  >
                    <CheckCircle2 className="h-10 w-10 text-lime" />
                    <h3 className="mt-5 font-display text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {showcaseImages.map((image, index) => (
                  <div
                    key={image.src}
                    className={`glass-panel overflow-hidden rounded-[2rem] p-3 shadow-luxe ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                    </div>
                    <p className="mt-4 text-sm uppercase tracking-[0.28em] text-slate-400">
                      Visual direction
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">
                      {image.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div className="glass-panel rounded-[2rem] p-6 shadow-luxe md:p-8">
                <SectionHeading
                  eyebrow="How To Order"
                  title="Simple from first click to delivery"
                  description="No cart and no checkout friction. Customers browse, choose, and order directly through WhatsApp or phone."
                />
                <div className="mt-8 grid gap-4">
                  {orderSteps.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                    >
                      <span className="text-sm font-semibold uppercase tracking-[0.26em] text-magenta">
                        Step {item.step}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-6 shadow-luxe md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-teal">
                  Store QR
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold text-white">
                  Scan to visit Vapekulture
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  A QR placement is ready here for printed inserts, packaging,
                  or social promos once your final code is available.
                </p>

                <div className="mt-8 flex min-h-[320px] items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-gradient-to-br from-white/10 to-white/5">
                  <div className="text-center">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5">
                      <QrCode className="h-14 w-14 text-lime" />
                    </div>
                    <p className="mt-5 text-sm uppercase tracking-[0.28em] text-slate-300">
                      QR placement ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Contact"
                title="Order directly through WhatsApp or by phone"
                description="Customers can browse the range, choose a flavour, and order directly through WhatsApp or by phone."
              />

              <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                <div className="glass-panel rounded-[2rem] p-6 shadow-luxe md:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <a href={whatsappLink} className="contact-card">
                      <MessageCircle className="h-8 w-8 text-lime" />
                      <span className="mt-4 block font-display text-2xl font-bold text-white">
                        Order on WhatsApp
                      </span>
                      <span className="mt-2 block text-base text-slate-300">
                        0140395028
                      </span>
                    </a>
                    <a href={phoneLink} className="contact-card">
                      <Phone className="h-8 w-8 text-teal" />
                      <span className="mt-4 block font-display text-2xl font-bold text-white">
                        Call to Order
                      </span>
                      <span className="mt-2 block text-base text-slate-300">
                        0140395028
                      </span>
                    </a>
                  </div>
                </div>

                <div className="glass-panel rounded-[2rem] p-6 shadow-luxe md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.34em] text-lime">
                    Contact
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold text-white">
                    Direct Ordering
                  </h3>
                  <div className="mt-6 space-y-3 text-base text-slate-300">
                    <p>WhatsApp / Phone: 0140395028</p>
                    <p>Ordering: Direct via WhatsApp or phone call</p>
                    <p>Delivery: Available across Kenya</p>
                  </div>
                  <div className="mt-8 rounded-[1.5rem] border border-magenta/20 bg-magenta/10 p-4 text-sm leading-7 text-slate-200">
                    Adult-only nicotine products. Orders are intended for
                    customers aged 18 and above.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer
          id="legal"
          className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <a
                href="#home"
                className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-white"
              >
                Vapekulture
              </a>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Premium adult-only vape website focused on bold flavour,
                polished product presentation, and direct ordering.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
                Quick Links
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
                Order Support
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                <a href={whatsappLink} className="hover:text-white">
                  WhatsApp Orders
                </a>
                <a href={phoneLink} className="hover:text-white">
                  Call to Order
                </a>
                <a href="#contact" className="hover:text-white">
                  Delivery Info
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
                Legal
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                <a href="#legal" className="hover:text-white">
                  Adult-Only Policy
                </a>
                <a href="#legal" className="hover:text-white">
                  Nicotine Warning
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact & Ordering
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-400">
            This product contains nicotine. Nicotine is an addictive chemical.
            Vapekulture is intended for adults aged 18 and above only.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
