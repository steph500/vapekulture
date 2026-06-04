import {
  BatteryCharging,
  BadgeCheck,
  Droplets,
  Flame,
  ShieldAlert
} from "lucide-react";
import type { Product } from "../data";
import { phoneLink, whatsappLink } from "../data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="glass-panel group relative overflow-hidden rounded-[2.25rem] p-6 shadow-luxe md:p-8">
      <div
        className={`pointer-events-none absolute inset-x-8 top-8 h-44 rounded-[2rem] bg-gradient-to-br ${product.accent} opacity-70 blur-3xl transition duration-500 group-hover:scale-110`}
      />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-lime">
            {product.badge}
          </div>

          <h3 className="mt-5 font-display text-3xl font-bold text-white md:text-4xl">
            {product.name}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            {product.summary}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="spec-pill">
              <Flame className="h-4 w-4 text-magenta" />
              {product.puffSize}
            </div>
            <div className="spec-pill">
              <Droplets className="h-4 w-4 text-ice" />
              Nicotine {product.nicotine}
            </div>
            <div className="spec-pill">
              <BatteryCharging className="h-4 w-4 text-lime" />
              Rechargeable {product.rechargeable}
            </div>
            <div className="spec-pill">
              <ShieldAlert className="h-4 w-4 text-teal" />
              Battery visible
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink} className="btn-primary sm:flex-1">
              Order on WhatsApp
            </a>
            <a href={phoneLink} className="btn-secondary sm:flex-1">
              Call to Order
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="product-visual-frame">
            <div className="product-visual-glow" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80">
              <div className="relative aspect-[9/10] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              </div>

              <div className="absolute inset-x-4 bottom-4 grid gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="device-price-card">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                      Full kit
                    </span>
                    <strong className="mt-2 block text-2xl text-white">
                      {product.fullKitPrice}
                    </strong>
                  </div>
                  <div className="device-price-card">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                      Pod only
                    </span>
                    <strong className="mt-2 block text-2xl text-white">
                      {product.podPrice}
                    </strong>
                  </div>
                </div>

                <div className="spec-pill !justify-center !px-4 !py-3 text-center">
                  <BadgeCheck className="h-4 w-4 text-lime" />
                  Direct order support via WhatsApp or phone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
