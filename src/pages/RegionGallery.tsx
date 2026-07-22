import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar, Footer } from '../App';
import { REGION_PAGES, REGION_LINKS } from './regionData';

export default function RegionGallery() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? REGION_PAGES[slug] : undefined;
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (page) document.title = `${page.title} — Northern Calling`;
    return () => {
      document.title = 'Northern Calling — Your Journey. Your Way.';
    };
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  if (!page) return <Navigate to="/" replace />;

  const others = REGION_LINKS.filter((l) => l.slug !== slug);

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={page.cover} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/80 to-ink-950" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-300 mb-4">{page.eyebrow}</p>
          <h1 className="font-display text-4xl md:text-6xl text-white leading-tight">
            {page.title.replace(' Gallery', '')}{' '}
            <span className="gold-text italic">Gallery</span>
          </h1>
          <p className="mt-6 text-ink-200 max-w-2xl mx-auto leading-relaxed">{page.intro}</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              to="/#gallery"
              className="px-5 py-2.5 rounded-full bg-gold-400 text-ink-950 text-sm font-semibold hover:bg-gold-300 transition-colors"
            >
              ← All Galleries
            </Link>
            <Link
              to="/#contact"
              className="px-5 py-2.5 rounded-full border border-gold-400/40 text-gold-300 text-sm font-semibold hover:border-gold-300 hover:text-white transition-colors"
            >
              Plan This Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {page.items.map((item, i) => (
              <div
                key={i}
                className="group aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 relative"
              >
                {item.type === 'image' ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setLightbox(item.src)}
                      className="w-full h-full block"
                      aria-label={`Open ${page.title} image ${i + 1}`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt ?? `${page.title} ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </button>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </>
                ) : (
                  <video controls className="w-full h-full object-cover bg-ink-950">
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other regions */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold-300">Explore more regions</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {others.map((r) => (
              <Link
                key={r.slug}
                to={`/${r.slug}`}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-ink-900/60 text-ink-100 text-sm hover:border-gold-400/40 hover:text-gold-300 transition-colors"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-ink-950/95 backdrop-blur-sm grid place-items-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-full rounded-xl object-contain"
          />
          <button
            type="button"
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 text-white grid place-items-center hover:bg-white/10 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
