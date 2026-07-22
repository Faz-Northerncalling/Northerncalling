import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Reveal-on-scroll hook */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Data ---------- */
const NAV = [
  { label: 'Home', href: '/#home' },
  { label: 'Fleet', href: '/#fleet' },
  { label: 'Tours', href: '/#tours' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Reviews', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
];

const PHONES = [
  '+92 303 5618634',
  '+92 331 5398737',
];

const FLEET = [
  {
    name: 'Executive Sedan',
    pax: '3–4 Guests',
    desc: 'Sleek, discreet comfort for couples and small parties. Leather interiors, climate control, quiet ride.',
    image: 'https://images.pexels.com/photos/30830617/pexels-photo-30830617.jpeg',
    tags: ['Toyota Corolla', 'Honda Civic', ' chauffeur-driven'],
  },
  {
    name: 'Premium SUV',
    pax: '5–7 Guests',
    desc: 'Commanding presence for mountain roads. Ample legroom, panoramic windows, roof rack for gear.',
    image: 'https://images.pexels.com/photos/18240248/pexels-photo-18240248.jpeg',
    tags: ['Land Cruiser', 'Fortuner', '4x4 ready'],
  },
  {
    name: 'Luxury MPV',
    pax: '5–7 Guests',
    desc: 'Spacious, reclining seats for families and groups. Generous luggage, ambient lighting, smooth highway ride.',
    image: 'https://changansouth.com/wp-content/uploads/2015/12/topbanner-slide1-1110x577.png',
    tags: ['Karvan', 'Grand Cabin', 'BR-V'],
  },
  {
    name: '4x4 Off-Road',
    pax: '4 Guests',
    desc: 'Built for the high passes. Rugged suspension and trail-ready clearance for Hunza, Skardu and Deosai.',
    image: 'https://images.pexels.com/photos/18240251/pexels-photo-18240251.jpeg',
    tags: ['Revo', 'Hilux', 'Jeep'],
  },
];

const TOURS = [
  {
    title: 'Honeymoon Escape',
    days: '7 Days / 6 Nights',
    price: 'PKR 185,000',
    tag: 'Couples',
    desc: 'Private balconies over Hunza valley, candle-lit dinners, and hand-picked boutique stays. Every detail, quietly arranged.',
    image: 'https://images.pexels.com/photos/31381641/pexels-photo-31381641.jpeg',
    highlights: ['Hunza Valley', 'Attabad Lake', 'Eagle’s Nest sunset'],
  },
  {
    title: 'Family Mountain Discovery',
    days: '6 Days / 5 Nights',
    price: 'PKR 145,000',
    tag: 'Families',
    desc: 'A gentle, wonder-filled route through Mansehra and Naran. Kid-friendly stops, spacious vehicles, and family suites throughout.',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/15/6e/0d/e2.jpg',
    highlights: ['Naran', 'Lake Saif-ul-Malook', 'Babusar Pass'],
  },
  {
    title: 'School & University Trip',
    days: '4 Days / 3 Nights',
    price: 'PKR 18,000 / person',
    tag: 'Groups',
    desc: 'Safe, supervised expeditions that turn the mountains into a classroom. Group rates, trained guides, and full logistics.',
    image: 'https://images.pexels.com/photos/35105982/pexels-photo-35105982.jpeg',
    highlights: ['Educational tours', 'Group lodging', 'Adventure activities'],
  },
  {
    title: 'Corporate Retreat',
    days: '3 Days / 2 Nights',
    price: 'On Request',
    tag: 'Teams',
    desc: 'Reset in the mountains. Meeting-ready venues, team activities, and seamless transport for teams of 10 to 80.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260',
    highlights: ['Conference setup', 'Team building', 'Private dining'],
  },
  {
    title: 'Customized Private Tour',
    days: 'Your Schedule',
    price: 'Tailored',
    tag: 'Bespoke',
    desc: 'Tell us where you dream of going. We design the route, stays, and pace around you — nothing off the shelf.',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260',
    highlights: ['Flexible itinerary', 'Personal guide', 'Any destination'],
  },
  {
    title: 'Rent a Car with Driver',
    days: 'Hourly / Daily',
    price: 'From PKR 5,000/day',
    tag: 'Transport',
    desc: 'Professional, vetted drivers and a vehicle to match. Airport transfers, day trips, or multi-day charters.',
    image: 'https://drivepoint.pk/wp-content/uploads/2017/11/drive-point-alto-car.png',
    highlights: ['Vetted chauffeurs', 'Door-to-door', 'Any duration'],
  },
];

const GALLERY = [
  { src: 'https://images.pexels.com/photos/29543395/pexels-photo-29543395.png', label: 'Hunza Gallery', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/28688793/pexels-photo-28688793.jpeg', label: 'Skardu Gallery', span: '' },
  { src: 'https://images.pexels.com/photos/17740389/pexels-photo-17740389.jpeg', label: 'Swat Gallery', span: '' },
  { src: 'https://images.pexels.com/photos/27895672/pexels-photo-27895672.jpeg', label: 'Kashmir Gallery', span: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260', label: 'Fairy Meadows Gallery', span: '' },
  { src: 'https://images.pexels.com/photos/26221691/pexels-photo-26221691.jpeg', label: 'Naran & Kaghan Gallery', span: '' },
  { src: 'https://images.pexels.com/photos/34242360/pexels-photo-34242360.jpeg', label: 'Khunjerab Gallery', span: 'lg:col-span-2' },
];

const TESTIMONIALS = [
  {
    name: 'Ayesha & Hamza',
    trip: 'Honeymoon Escape · Hunza',
    quote: 'They thought of things we never would have asked for. The sunset balcony, the quiet dinner — it felt designed just for us.',
    avatar: 'https://images.pexels.com/photos/25841504/pexels-photo-25841504.jpeg',
  },
  {
    name: 'Dr. Sana Khan',
    trip: 'Family Mountain Discovery',
    quote: 'Traveling with two kids and elderly parents felt effortless. The driver was patient, the stops were well-paced, and the stays were immaculate.',
    avatar: 'https://images.pexels.com/photos/5738735/pexels-photo-5738735.jpeg',
  },
  {
    name: 'FAST University',
    trip: 'School Trip · 42 Students',
    quote: 'From the quote to the last drop-off, everything was on time and safe. Our students came back with stories they still talk about.',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vUTF0eGG_y-aEYiCiSSZNUYx6leBd8Gan0kapzWrCD3BxyrgGlF3VLo&s=10',
  },
  {
    name: 'TechNova Pvt Ltd',
    trip: 'Corporate Retreat · 28 pax',
    quote: 'We held our leadership offsite in the mountains. Northern Calling handled transport, venue, and activities so we could focus on the work.',
    avatar: 'https://media.licdn.com/dms/image/v2/C560BAQEmTkkJWSAGoA/company-logo_200_200/company-logo_200_200/0/1630605493523/technova_imaging_systems_p_ltd_logo?e=2147483647&v=beta&t=xmt1Pi7AbSAYgMwKqAThUZC1jRO0eeBRUnFrm0wqVoQ',
  },
  {
    name: 'Bilal Ahmed',
    trip: 'Rent a Car · 5-day charter',
    quote: 'Punctual, professional, and the SUV was spotless. Our driver knew the roads like the back of his hand. Will book again.',
    avatar: 'https://images.pexels.com/photos/10075266/pexels-photo-10075266.jpeg',
  },
];

/* ---------- Icons (inline SVG to keep deps lean) ---------- */
const Icon = {
  Mountain: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="m3 20 5-9 4 6 3-4 6 7z" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="17" cy="5" r="2" />
    </svg>
  ),
  Phone: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  Users: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  Clock: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  MapPin: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Mail: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  Star: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1z" />
    </svg>
  ),
  Quote: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0-2-2zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0-2-2z" />
    </svg>
  ),
  Arrow: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  Check: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M20 6 9 17l-5-5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  Menu: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  Close: (p: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M18 6 6 18M6 6l12 12" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  WhatsApp: (p: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  ),
};

/* ---------- Components ---------- */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/10 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/#home" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-10 h-10 rounded-full border border-gold-400/40 text-gold-300 group-hover:border-gold-300 transition-colors">
            <Icon.Mountain className="w-5 h-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl text-white tracking-wide">Northern Calling</span>
            <span className="text-[10px] tracking-[0.3em] text-gold-300/80 uppercase">Your Journey. Your Way.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ink-200 hover:text-gold-300 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-gold-400 hover:after:w-full after:transition-all"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-gold-400 text-ink-950 text-sm font-semibold hover:bg-gold-300 transition-colors"
          >
            Book Now
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <Icon.Close className="w-6 h-6" /> : <Icon.Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass border-t border-white/10 mt-3">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-ink-100 hover:text-gold-300 transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 rounded-full bg-gold-400 text-ink-950 text-center font-semibold"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Northern mountains"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-xs tracking-[0.3em] text-gold-300 uppercase">Premium Mountain Travel</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] text-balance animate-fade-up" style={{ animationDelay: '0.1s' }}>
            The North is <span className="gold-text italic">calling.</span>
            <br />
            Answer it your way.
          </h1>
          <p className="mt-7 text-lg text-ink-200 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Chauffeured journeys, bespoke tours, and unforgettable escapes across Pakistan's most breathtaking landscapes — crafted with quiet luxury.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="/#tours"
              className="group px-7 py-3.5 rounded-full bg-gold-400 text-ink-950 font-semibold hover:bg-gold-300 transition-all flex items-center gap-2"
            >
              Explore Tours
              <Icon.Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#fleet"
              className="px-7 py-3.5 rounded-full border border-white/25 text-white hover:bg-white/10 transition-colors"
            >
              View Our Fleet
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { n: '12+', l: 'Years on the road' },
              { n: '4,500+', l: 'Happy travellers' },
              { n: '30+', l: 'Destinations' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gold-300">{s.n}</div>
                <div className="text-xs text-ink-300 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-ink-300">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent animate-float" />
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="reveal max-w-2xl mb-14">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-10 bg-gold-400" />
        <span className="text-xs tracking-[0.3em] text-gold-300 uppercase">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-ink-300 leading-relaxed">{sub}</p>}
    </div>
  );
}

function Fleet() {
  return (
    <section id="fleet" className="py-28 bg-ink-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="The Fleet"
          title={<>Travel in <span className="gold-text italic">commanding</span> comfort</>}
          sub="Every vehicle is maintained to executive standard, driven by vetted professionals who know these roads by heart."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET.map((v, i) => (
            <div
              key={v.name}
              className="reveal group relative rounded-2xl overflow-hidden border border-white/10 bg-ink-900"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl text-white">{v.name}</h3>
                  <span className="text-xs text-gold-300 flex items-center gap-1">
                    <Icon.Users className="w-3.5 h-3.5" />
                    {v.pax}
                  </span>
                </div>
                <p className="text-sm text-ink-300 leading-relaxed mb-3">{v.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {v.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-ink-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tours() {
  return (
    <section id="tours" className="py-28 bg-gradient-to-b from-ink-950 to-ink-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Curated Journeys"
          title={<>Packages designed <span className="gold-text italic">around you</span></>}
          sub="From honeymoons to corporate retreats, each journey is shaped to your pace, your party, and your sense of wonder."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {TOURS.map((t, i) => (
            <article
              key={t.title}
              className="reveal group relative rounded-2xl overflow-hidden border border-white/10 bg-ink-900 hover:border-gold-400/30 transition-colors"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full bg-gold-400/90 text-ink-950 font-semibold">
                  {t.tag}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs text-ink-200 flex items-center gap-1.5">
                    <Icon.Clock className="w-3.5 h-3.5 text-gold-300" />
                    {t.days}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl text-white mb-2">{t.title}</h3>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">{t.desc}</p>
                <ul className="space-y-2 mb-5">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-ink-200">
                      <Icon.Check className="w-4 h-4 text-gold-400" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-ink-400 uppercase tracking-widest">From</span>
                    <div className="font-display text-lg text-gold-300">{t.price}</div>
                  </div>
                  <a
                    href="/#contact"
                    className="group/btn flex items-center gap-2 text-sm text-white hover:text-gold-300 transition-colors"
                  >
                    Enquire
                    <Icon.Arrow className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function slugForGalleryLabel(label: string): string {
  if (label.includes('Hunza')) return 'hunza.html';
  if (label.includes('Skardu')) return 'skardu.html';
  if (label.includes('Swat')) return 'swat.html';
  if (label.includes('Kashmir')) return 'kashmir.html';
  if (label.includes('Fairy')) return 'fairymeadows.html';
  if (label.includes('Naran')) return 'narankaghan.html';
  if (label.includes('Khunjerab')) return 'khunjerab.html';
  return 'gallery.html';
}

function Gallery() {
  const navigate = useNavigate();

  return (
    <section id="gallery" className="py-28 bg-ink-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="The Gallery"
          title={<>Moments from the <span className="gold-text italic">high places</span></>}
          sub="A glimpse of what waits beyond the asphalt — valleys, lakes, passes, and the quiet between them."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {GALLERY.map((g, i) => (
            <button
              key={i}
              onClick={() => navigate(`/${slugForGalleryLabel(g.label)}`)}
              className={`reveal group relative overflow-hidden rounded-xl ${g.span}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={g.src}
                alt={g.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Icon.MapPin className="w-4 h-4 text-gold-300" />
                <span className="text-sm font-medium">{g.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-28 bg-gradient-to-b from-ink-900 to-ink-950 relative overflow-hidden">
      {/* decorative */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-forest-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          eyebrow="Travellers' Words"
          title={<>What our guests <span className="gold-text italic">remember</span></>}
        />

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="reveal snap-center shrink-0 w-[340px] sm:w-[400px] rounded-2xl border border-white/10 bg-ink-900/60 p-8 hover:border-gold-400/30 transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Icon.Quote className="w-9 h-9 text-gold-400/30 mb-4" />
                <p className="text-ink-100 leading-relaxed text-[15px] mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-gold-400/30" />
                  <div>
                    <div className="font-display text-lg text-white">{t.name}</div>
                    <div className="text-xs text-gold-300">{t.trip}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon.Star key={s} className="w-3.5 h-3.5 text-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIdx(i);
                    trackRef.current?.scrollTo({ left: i * 420, behavior: 'smooth' });
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? 'w-8 bg-gold-400' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scroll(-1)}
                className="w-11 h-11 rounded-full border border-white/15 text-white hover:bg-gold-400 hover:text-ink-950 hover:border-gold-400 transition-colors grid place-items-center"
              >
                <Icon.Arrow className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-11 h-11 rounded-full border border-white/15 text-white hover:bg-gold-400 hover:text-ink-950 hover:border-gold-400 transition-colors grid place-items-center"
              >
                <Icon.Arrow className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', interest: 'Customized Tour', message: '' });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!WEB3FORMS_ACCESS_KEY) {
      setError('Form is not configured. Please try again later.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry — ${form.interest}`,
          from_name: 'Northern Calling — Website',
          ...form,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.message || 'Submission failed');
      }
      setSent(true);
      setTimeout(() => setSent(false), 5000);
      setForm({ name: '', phone: '', interest: 'Customized Tour', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          eyebrow="Begin Your Journey"
          title={<>Let's plan your <span className="gold-text italic">escape</span></>}
          sub="Tell us where you'd like to go, and we'll handle the rest — route, stays, transport, and every quiet detail."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={submit} className="reveal glass rounded-2xl border border-white/10 p-8">
            <div className="space-y-5">
              <div>
                <label className="text-xs tracking-widest uppercase text-ink-300 mb-2 block">Your Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-ink-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-ink-400 focus:border-gold-400/50 focus:outline-none transition-colors"
                  placeholder="e.g. Ayesha Khan"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-ink-300 mb-2 block">Phone / WhatsApp</label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-ink-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-ink-400 focus:border-gold-400/50 focus:outline-none transition-colors"
                  placeholder="+92 3xx xxxxxxx"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-ink-300 mb-2 block">I'm interested in</label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full bg-ink-900/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-400/50 focus:outline-none transition-colors"
                >
                  <option>Customized Tour</option>
                  <option>Honeymoon Package</option>
                  <option>Family Tour</option>
                  <option>School / University Trip</option>
                  <option>Corporate Retreat</option>
                  <option>Rent a Car with Driver</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-ink-300 mb-2 block">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-ink-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-ink-400 focus:border-gold-400/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your trip — dates, destinations, number of guests…"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-lg bg-gold-400 text-ink-950 font-semibold hover:bg-gold-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>
                    <Icon.Check className="w-5 h-5" /> Message Sent — We'll be in touch
                  </>
                ) : submitting ? (
                  'Sending…'
                ) : (
                  'Send Enquiry'
                )}
              </button>
              {error && (
                <p className="text-sm text-red-400 mt-2" role="alert">
                  {error}
                </p>
              )}
            </div>
          </form>

          {/* Contact info */}
          <div className="reveal space-y-8" style={{ transitionDelay: '100ms' }}>
            <div className="glass rounded-2xl border border-white/10 p-8">
              <h3 className="font-display text-2xl text-white mb-6">Call us directly</h3>
              <p className="text-sm text-ink-300 mb-5">Our team is available 9am–11pm, every day. Pick whichever line is easiest for you.</p>
              <div className="space-y-3">
                {PHONES.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 group text-ink-100 hover:text-gold-300 transition-colors"
                  >
                    <span className="grid place-items-center w-10 h-10 rounded-full border border-white/10 group-hover:border-gold-400/40 transition-colors">
                      <Icon.Phone className="w-4 h-4" />
                    </span>
                    <span className="font-medium">{p}</span>
                  </a>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {PHONES.map((p) => (
                  <a
                    key={p}
                    href={`https://wa.me/${p.replace(/[^\d]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-lg bg-forest-600 text-white hover:bg-forest-500 transition-colors"
                  >
                    <Icon.WhatsApp className="w-5 h-5" />
                    WhatsApp {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass rounded-2xl border border-white/10 p-6">
                <Icon.Mail className="w-6 h-6 text-gold-300 mb-3" />
                <h4 className="text-white font-medium mb-1">Email</h4>
                <p className="text-sm text-ink-300">support.northerncalling@gmail.com</p>
              </div>
              <div className="glass rounded-2xl border border-white/10 p-6">
                <Icon.MapPin className="w-6 h-6 text-gold-300 mb-3" />
                <h4 className="text-white font-medium mb-1">Base</h4>
                <p className="text-sm text-ink-300">Islamabad · Serving all Northern Areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-full border border-gold-400/40 text-gold-300">
                <Icon.Mountain className="w-5 h-5" />
              </span>
              <span className="font-display text-xl text-white">Northern Calling</span>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              Premium tourism and transport across the northern mountains of Pakistan. Your journey, your way.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold-300 mb-4">Explore</h4>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-ink-300 hover:text-white transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold-300 mb-4">Reach us</h4>
            <ul className="space-y-2">
              {PHONES.slice(0, 3).map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, '')}`} className="text-sm text-ink-300 hover:text-white transition-colors flex items-center gap-2">
                    <Icon.Phone className="w-3.5 h-3.5" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-400">© {new Date().getFullYear()} Northern Calling. All rights reserved.</p>
          <p className="text-xs text-ink-400 font-display italic">Your Journey. Your Way.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <Tours />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
