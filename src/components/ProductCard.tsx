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
    <article className="glass-panel group relative overflow-hidden rounded-[2rem] p-6 shadow-luxe md:p-8">
      <div
        className={`pointer-events-none absolute inset-x-6 top-6 h-40 rounded-[1.75rem] bg-gradient-to-br ${product.accent} opacity-80 blur-3xl transition duration-500 group-hover:scale-110`}
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-lime">
            {product.badge}
          </div>

          <h3 className="mt-5 font-display text-3xl font-bold text-white md:text-4xl">
            {product.name}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
            Premium disposable-style performance with bold flavour delivery,
            rechargeable convenience, and a polished retail finish.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
              Battery level visible
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink} className="btn-primary sm:flex-1">
              Order on WhatsApp
            </a>
            <a href={phoneLink} className="btn-secondary sm:flex-1">
              Call to Order
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto flex h-full min-h-[360px] max-w-md items-center justify-center">
            <div
              className={`absolute inset-8 rounded-[2rem] bg-gradient-to-br ${product.accent} opacity-80 blur-2xl`}
            />
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-luxe">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>

              <div className="absolute inset-x-4 bottom-4 grid gap-3">
                <div className="device-price-card">
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Full kit
                  </span>
                  <strong className="mt-2 block text-2xl text-white">
                    {product.fullKitPrice}
                  </strong>
                </div>
                <div className="device-price-card">
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Pod only
                  </span>
                  <strong className="mt-2 block text-2xl text-white">
                    {product.podPrice}
                  </strong>
                </div>
                <div className="spec-pill !px-3 !py-2">
                  <BadgeCheck className="h-4 w-4 text-lime" />
                  KEBS + KRA stickers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
