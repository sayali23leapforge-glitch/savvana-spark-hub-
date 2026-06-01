import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Leaf, Sprout, BarChart3, Globe2, Satellite, ShieldCheck,
  ArrowRight, Menu, X, Instagram, Linkedin, Facebook, MapPin,
  TreePine, Droplets, Wheat, Users, TrendingUp, CheckCircle2,
  ChevronLeft, ChevronRight, Quote, Layers, Network, Cpu, Recycle, Heart, Scale,
} from "lucide-react";
import heroImg from "../assets/hero.jpg";
import aboutImg from "../assets/about.jpg";
import communityImg from "../assets/community.jpg";
import seedImg from "../assets/seed.jpg";
import techImg from "../assets/tech.jpg";
import galleryPlant from "../assets/gallery-plant.jpg";
import galleryMother from "../assets/gallery-mother.jpg";
import galleryFarm from "../assets/gallery-farm.jpg";
import galleryTech from "../assets/gallery-tech.jpg";
import galleryScientist from "../assets/gallery-scientist.jpg";
import logoFull from "../assets/cssa-logo-full.png";
import { Reveal, Counter } from "../components/Reveal";

const LOGO = logoFull;

// WhatsApp icon (lucide doesn't ship one)
const WhatsAppIcon = ({ className = "h-4.5 w-4.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.742.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.005c6.578 0 11.937-5.336 11.94-11.894 0-3.18-1.26-6.165-3.47-8.452z" />
  </svg>
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CarbonSmart Solutions Africa — Climate Tech, Carbon Markets & Regenerative Innovation" },
      { name: "description", content: "CSSA delivers verified carbon credits, biochar restoration, regenerative agriculture and digital MRV across Africa — engineered for African landscapes, owned by African communities." },
      { property: "og:title", content: "CarbonSmart Solutions Africa" },
      { property: "og:description", content: "Verified climate solutions empowering African communities, restoring ecosystems, and creating sustainable economic growth." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: LOGO },
    ],
    links: [
      { rel: "icon", href: LOGO },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" },
    ],
  }),
  component: Landing,
});

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <img src={LOGO} alt="CarbonSmart Solutions Africa logo" className="h-11 w-auto sm:h-12" />
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"], ["Services", "#services"], ["Approach", "#approach"],
    ["Impact", "#impact"], ["Campaign", "#campaign"], ["Investors", "#investors"],
  ] as const;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${scrolled ? "glass shadow-[0_8px_32px_rgba(42,90,140,0.10)] border border-black/5" : "bg-white/70 backdrop-blur border border-white/40"}`}>
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(([l, h]) => (
              <a key={l} href={h} className="rounded-full px-3.5 py-1.5 text-sm text-[var(--forest)]/80 transition-all duration-300 hover:bg-white hover:text-[var(--forest)] hover:shadow-[0_4px_18px_rgba(42,90,140,0.12)]">{l}</a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a href="#campaign" className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--forest)] to-[var(--emerald)] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:shadow-lg hover:-translate-y-0.5">
              Drop a Seed <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </a>
          </div>
          <button className="lg:hidden text-[var(--forest)]" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl glass border border-black/5 p-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {links.map(([l, h]) => (
                <a key={l} href={h} onClick={() => setOpen(false)} className="text-sm text-[var(--forest)]">{l}</a>
              ))}
              <a href="#campaign" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--forest)] px-4 py-2 text-sm font-medium text-white">Drop a Seed</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function FloatingMetric({ className, icon: Icon, label, value, delay = 0 }: any) {
  return (
    <div
      className={`pointer-events-auto absolute glass-dark text-white rounded-2xl border border-white/15 px-4 py-3 shadow-2xl animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--emerald)]/30 text-[var(--emerald)] ring-1 ring-white/10">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">{label}</div>
          <div className="text-base font-semibold">{value}</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden text-white">
      <img src={heroImg} alt="African farmland at golden hour" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E2A4A]/85 via-[#2A5A8C]/55 to-[#0E2A4A]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(63,184,194,0.22),transparent_60%)]" />

      <Nav />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-32 pb-28 sm:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald)] shadow-[0_0_12px_var(--emerald)]" />
              Africa's Climate Future
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Building Africa's climate future through technology,{" "}
              <span className="bg-gradient-to-r from-[#9FE7EE] via-white to-[#C5EFA0] bg-clip-text text-transparent">carbon markets</span>{" "}
              & regenerative innovation.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-balance text-lg text-white/85 sm:text-xl">
              Verified climate solutions empowering communities, restoring ecosystems, and creating sustainable economic growth across Africa.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[var(--forest)] shadow-xl transition hover:shadow-2xl hover:-translate-y-0.5">
                Explore Solutions <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#campaign" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
                Drop a Seed
              </a>
            </div>
          </Reveal>
        </div>

        {/* Floating UI metrics */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <FloatingMetric className="right-12 top-36" icon={Leaf} label="Carbon Offset" value="124,580 tCO₂e" />
          <FloatingMetric className="right-28 top-[58%]" icon={Sprout} label="Farmers Enrolled" value="450+" delay={1.2} />
          <FloatingMetric className="right-4 bottom-44" icon={ShieldCheck} label="dMRV Verified" value="ESG-Grade A" delay={2.4} />
        </div>

        {/* bottom stats strip */}
        <div className="relative mt-16 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 glass-dark sm:grid-cols-4">
          {[
            ["450+", "Farmers Enrolled"],
            ["30%", "Fertiliser Reduction"],
            ["20%", "Water Saved"],
            ["A+", "ESG Verified"],
          ].map(([v, l]) => (
            <div key={l} className="bg-white/0 px-5 py-5">
              <div className="text-2xl font-semibold sm:text-3xl">{v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/65">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[var(--background)]" />
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--forest)]/15 bg-[var(--beige)] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--forest)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" /> {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 text-balance text-3xl font-semibold text-[var(--forest)] sm:text-5xl">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={200}>
          <p className="mt-4 text-balance text-base text-[var(--forest)]/70 sm:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-[var(--background)] py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={aboutImg} alt="African woman farmer holding rich soil" width={1080} height={1500} loading="lazy" className="h-[640px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-dark border border-white/15 px-5 py-4 text-white">
              <p className="text-sm italic leading-snug">"Khathalela umhlaba, nawo umhlaba uza kukukhathalela — Take care of the soil, so the soil will take care of you."</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/75">— Wendile Mpofu, Founder</p>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-[var(--emerald)]/25 blur-2xl sm:block" />
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--forest)]/15 bg-[var(--beige)] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--forest)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" /> The Founder's Story
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-[var(--forest)] sm:text-5xl">
              Ancestral wisdom. Modern climate innovation.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-[var(--forest)]/80">
              <span className="font-medium text-[var(--forest)]">Wendile Mpofu</span>, born in King William's Town and bred in Mulbarton, spent
              countless afternoons in the garden with her grandmother. It was there she first heard the Xhosa phrase
              <em> "Khathalela umhlaba, nawo umhlaba uza kukukhathalela"</em> — take care of the soil, so the soil will take care of you.
              That wisdom stayed with her.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-4 text-[var(--forest)]/80">
              Years later, Wendile discovered the world of carbon credits and realised the same principle her grandmother lived by could
              transform communities: farmers could care for the soil and, in return, the soil could care for them — not just with food, but
              with income and resilience.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-4 text-[var(--forest)]/80">
              Instead of settling for fragmented climate solutions, Wendile founded <span className="font-medium text-[var(--forest)]">CarbonSmart
              Solutions Africa</span> in 2023, officially registering it in 2024. Her vision: merge ancestral wisdom with modern innovation to build a
              trusted, transparent climate platform that restores ecosystems and empowers communities.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              { y: "2023", t: "Founded", d: "CSSA established in Johannesburg." },
              { y: "2024", t: "Registered", d: "Officially registered & operational." },
              { y: "2024", t: "dMRV Live", d: "Digital monitoring scales nationally." },
              { y: "2025", t: "450+ Farmers", d: "Multi-country expansion underway." },
            ].map((m, i) => (
              <Reveal key={m.t} delay={400 + i * 80}>
                <div className="rounded-2xl border border-[var(--forest)]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-xs font-medium tracking-[0.2em] text-[var(--emerald)]">{m.y}</div>
                  <div className="mt-1 font-semibold text-[var(--forest)]">{m.t}</div>
                  <div className="mt-1 text-sm text-[var(--forest)]/65">{m.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Leaf,
    title: "Carbon Credit Development & Verification",
    desc: "Multi-sector carbon projects using internationally recognised methodologies, powered by digital MRV.",
    bullets: ["Satellite + field dMRV", "Verra & Gold Standard", "Traceable, auditable credits"],
    sdg: "SDG 13 · 9 · 12",
  },
  {
    icon: Sprout,
    title: "Biochar, Soil Carbon & Land Rehabilitation",
    desc: "Stable carbon from organic biomass — restoring fertility, water retention and degraded mining landscapes.",
    bullets: ["Inoculated activated biochar", "Mine rehabilitation", "No-till regenerative practice"],
    sdg: "SDG 2 · 13 · 15 · 12",
  },
  {
    icon: Wheat,
    title: "Regenerative Agriculture Systems",
    desc: "Restoring soil function, biodiversity and long-term climate resilience for rural communities.",
    bullets: ["Soil health restoration", "Biodiversity uplift", "Climate-resilient yields"],
    sdg: "SDG 2 · 8 · 15",
  },
  {
    icon: BarChart3,
    title: "Climate & Sustainability Consulting",
    desc: "Advisory for governments, corporates and institutions entering carbon markets and ESG strategy.",
    bullets: ["ESG strategy design", "Carbon market frameworks", "Carbon accounting & reporting"],
    sdg: "SDG 13 · 9 · 17",
  },
  {
    icon: Globe2,
    title: "Multi-Pathway Climate Projects",
    desc: "Afforestation, renewables, methane capture, blue carbon and industrial emissions reduction.",
    bullets: ["Afforestation & reforestation", "Mine & industrial methane capture", "Blue carbon ecosystems"],
    sdg: "SDG 7 · 13 · 14 · 15",
  },
  {
    icon: Network,
    title: "Africa's Climate Economy Access",
    desc: "Integrated ecosystem connecting project development, dMRV and market access for inclusive participation.",
    bullets: ["Rural & smallholder inclusion", "Project transparency", "ESG accountability"],
    sdg: "SDG 8 · 9 · 10 · 13 · 17",
  },
];

function ServiceFlipCard({ s, i }: { s: typeof SERVICES[number]; i: number }) {
  return (
    <Reveal delay={i * 80}>
      <div className="group perspective h-80">
        <div className="flip-card relative h-full w-full">
          <div className="backface-hidden absolute inset-0 overflow-hidden rounded-3xl border border-[var(--forest)]/10 bg-white p-7 shadow-sm">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--emerald)]/15 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--forest)] to-[var(--emerald)] text-white shadow-md">
                <s.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-[var(--forest)] leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--forest)]/65">{s.desc}</p>
              <div className="mt-auto flex items-center justify-between pt-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--forest)]/40">0{i + 1}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--emerald)]">Hover →</span>
              </div>
            </div>
          </div>
          <div className="backface-hidden rotate-y-180 absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--forest)] to-[#0E2A4A] p-7 text-white shadow-2xl">
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-[var(--emerald)]/30 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--emerald)]">{s.title}</div>
              <ul className="mt-5 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-white/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[var(--emerald)]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 text-[10px] uppercase tracking-[0.22em] text-white/60">Aligned: {s.sdg}</div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-[var(--beige)]/40 to-[var(--background)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Integrated Climate Solutions"
          title="Measurable, verifiable, scalable — across Africa."
          sub="Six integrated pathways from origination to verification. Hover each card to flip."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceFlipCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PRINCIPLES = [
  { icon: Cpu, t: "Technology-Driven", d: "Our CarbonSmart App and automated MRV systems close Africa's environmental data gaps — from afforestation growth to methane capture and industrial emissions." },
  { icon: ShieldCheck, t: "Verification First", d: "Internationally recognised verification protocols across every pathway — energy saved, waste diverted, blue carbon generated — fully transparent and compliant." },
  { icon: Layers, t: "Multi-Sector Model", d: "Cross-industry circular economy: organic waste becomes renewable energy, captured methane fuels cleaner processes, resources reinvest in the land." },
  { icon: Heart, t: "Community-Centered", d: "From local energy upgrades to coastal blue carbon, every project creates measurable economic security and local employment on the ground." },
  { icon: Globe2, t: "Scalable Across Africa", d: "A decentralised framework engineered for rapid replication — from arid landscapes to industrial hubs, agriculture to large-scale emissions reduction." },
];

function Approach() {
  return (
    <section id="approach" className="relative bg-[var(--beige)]/30 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Our Approach"
          title="Multi-pathway climate solutions built for Africa's future."
          sub="Five foundational principles let us deploy, verify and scale climate pathways — from regenerative agriculture to heavy industry — tailored to the continent's realities."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="group h-full rounded-3xl border border-[var(--forest)]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span className="inline-grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-[var(--forest)] to-[var(--emerald)] text-white shadow-md">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--emerald)]">0{i + 1}</div>
                    <h3 className="mt-1 text-lg font-semibold text-[var(--forest)]">{p.t}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[var(--forest)]/70">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FarmerBenefits() {
  const stats = [
    { v: "20–30%", l: "Fertiliser cost reduction", icon: Sprout },
    { v: "15–20%", l: "Water irrigation savings", icon: Droplets },
    { v: "20–40%", l: "Yield increase (root & leafy)", icon: TrendingUp },
    { v: "15–25%", l: "Boost in fruiting vegetables", icon: Wheat },
    { v: "Up to 18%", l: "Broadacre grain harvest uplift", icon: BarChart3 },
    { v: "450+", l: "Farmers enrolled & restoring land", icon: Users },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--forest)]/15 bg-[var(--beige)] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--forest)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" /> Farmer Savings & Productivity
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-[var(--forest)] sm:text-5xl">
                A nutrient battery for African soil.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 text-[var(--forest)]/75">
                Our inoculated and activated biochar acts as a permanent nutrient battery for the soil. By creating a stable habitat for beneficial
                microorganisms, we deliver three transformative outcomes: improved soil performance, stronger productivity, and maximum
                Total Organic Carbon (TOC) — the healthier the soil, the tougher the plants and the more nutritious the harvest.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 rounded-2xl border border-[var(--forest)]/10 bg-[var(--beige)]/60 p-5 text-sm text-[var(--forest)]/80">
                <span className="font-medium text-[var(--forest)]">Our growing footprint:</span> what started as a targeted trial is now a regional
                movement of <span className="font-semibold text-[var(--emerald)]">450+ farmers</span> restoring land, securing financial futures
                and growing high-quality food for their communities.
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <div className="h-full rounded-2xl border border-[var(--forest)]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <s.icon className="h-5 w-5 text-[var(--emerald)]" />
                  <div className="mt-4 text-2xl font-semibold text-[var(--forest)]">{s.v}</div>
                  <div className="mt-1 text-xs text-[var(--forest)]/65">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Ring({ pct, label }: { pct: number; label: string }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} className="fill-none stroke-white/15" strokeWidth="6" />
          <circle
            cx="50" cy="50" r={r}
            className="fill-none stroke-[var(--emerald)] transition-[stroke-dashoffset] duration-[1600ms] ease-out"
            strokeWidth="6" strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c - (c * pct) / 100}
            style={{ filter: "drop-shadow(0 0 8px rgba(63,184,194,0.7))" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-2xl font-semibold text-white">{pct}%</div>
      </div>
      <div className="mt-3 text-sm font-medium text-white/90">{label}</div>
    </div>
  );
}

function Impact() {
  return (
    <section id="impact" className="relative bg-[var(--forest)] py-28 text-white sm:py-36">
      <div className="absolute inset-0 opacity-[0.07] grain" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(63,184,194,0.45),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" /> Verified Impact
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-5xl">Measurable change. Real lives.</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-white/80">Numbers audited through digital MRV — soil to satellite to ledger.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, n: 450, suf: "+", l: "Farmers Enrolled" },
            { icon: TrendingUp, n: 40, suf: "%", l: "Max Yield Increase" },
            { icon: Leaf, n: 124580, suf: " tCO₂e", l: "Carbon Offset" },
            { icon: TreePine, n: 18, suf: "k", l: "Trees Planted" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur transition hover:bg-white/[0.08]">
                <s.icon className="h-5 w-5 text-[var(--emerald)]" />
                <div className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  <Counter to={s.n} suffix={s.suf} />
                </div>
                <div className="mt-2 text-sm text-white/70">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-12 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur sm:grid-cols-3 sm:gap-12 sm:p-12">
            <Ring pct={40} label="Yield Increase" />
            <Ring pct={30} label="Fertiliser Reduction" />
            <Ring pct={20} label="Water Savings" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-[var(--background)] py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--forest)]/15 bg-[var(--beige)] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--forest)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" /> Digital MRV
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 text-balance text-3xl font-semibold text-[var(--forest)] sm:text-5xl">
              Soil to satellite. Field to ledger.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 text-[var(--forest)]/75">
              Our digital Monitoring, Reporting and Verification (dMRV) stack fuses satellite imagery, on-the-ground sensors and AI models
              to deliver continuous, investor-grade climate data — ensuring every credit is backed by real, measurable environmental data.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {[
              ["Satellite Monitoring", "Sub-hectare vegetation and soil carbon tracking."],
              ["Digital MRV Stack", "Audit-ready reporting aligned with global standards."],
              ["AI Climate Analytics", "Predictive yield, risk and carbon modelling."],
              ["ESG Dashboards", "Live KPIs for investors, regulators and partners."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={300 + i * 80}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[var(--emerald)]" />
                  <div>
                    <div className="font-medium text-[var(--forest)]">{t}</div>
                    <div className="text-sm text-[var(--forest)]/65">{d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--forest)]/10 shadow-2xl">
              <img src={techImg} alt="Satellite view with data overlay" width={1600} height={1000} loading="lazy" className="h-[420px] w-full object-cover sm:h-[520px]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--forest)]/70 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 right-5 sm:left-6 sm:top-6 sm:right-auto sm:w-[320px] rounded-2xl glass border border-white/40 p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--forest)]/70">Live dMRV</div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--emerald)]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--emerald)]" /> Streaming
                  </span>
                </div>
                <div className="mt-3 text-2xl font-semibold text-[var(--forest)]">+12,408 tCO₂e</div>
                <div className="mt-1 text-xs text-[var(--forest)]/60">This quarter · verified</div>
                <div className="mt-4 flex items-end gap-1.5">
                  {[24, 40, 32, 56, 48, 72, 64, 88, 76, 96].map((h, i) => (
                    <div key={i} className="w-2.5 rounded-sm bg-gradient-to-t from-[var(--emerald)]/40 to-[var(--emerald)]" style={{ height: `${h * 0.5 + 18}px` }} />
                  ))}
                </div>
              </div>
              <div className="absolute bottom-5 right-5 rounded-2xl glass border border-white/40 p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Droplets className="h-5 w-5 text-[var(--emerald)]" />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--forest)]/70">Soil Moisture</div>
                    <div className="text-base font-semibold text-[var(--forest)]">Optimal · 68%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { q: "My maize doubled after one season of biochar. My family eats better, and we sold the surplus.", a: "Thandi Mokoena", r: "Smallholder Farmer · Limpopo" },
  { q: "CSSA didn't bring outside answers — they listened, then helped us measure what we already knew.", a: "Joseph Nkosi", r: "Cooperative Lead · KZN" },
  { q: "The dMRV dashboard turned our work into data investors could trust. Funding followed.", a: "Amara Diallo", r: "Project Manager · Senegal" },
  { q: "For the first time, my soil is alive again. The earthworms came back.", a: "Grace Mensah", r: "Regenerative Farmer · Ghana" },
  { q: "We restored 60 hectares and trained 40 women in one season. The ripple effect is real.", a: "Faith Wanjiru", r: "Community Lead · Kenya" },
];

function CommunityCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-[var(--forest)]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <Quote className="h-8 w-8 text-[var(--emerald)]/40" />
                <p className="mt-4 text-[var(--forest)]/85 leading-relaxed">"{t.q}"</p>
                <div className="mt-8 flex items-center gap-3 border-t border-[var(--forest)]/10 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--emerald)] to-[var(--forest)] text-sm font-semibold text-white">
                    {t.a.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[var(--forest)]">{t.a}</div>
                    <div className="text-xs text-[var(--forest)]/55">{t.r}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${selected === i ? "w-8 bg-[var(--forest)]" : "w-1.5 bg-[var(--forest)]/25"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={scrollPrev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--forest)]/15 bg-white text-[var(--forest)] transition hover:bg-[var(--forest)] hover:text-white">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={scrollNext} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--forest)]/15 bg-white text-[var(--forest)] transition hover:bg-[var(--forest)] hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

const PARTNERS = [
  "Verra", "Gold Standard", "TCFD", "ISSB", "GRI", "UNFCCC",
  "African Union", "GCF", "AfDB", "IFC", "WBCSD", "Climate Bonds",
];

function PartnerMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-[var(--forest)]/10 bg-[var(--background)] py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-14">
        {[...PARTNERS, ...PARTNERS].map((p, i) => (
          <span key={i} className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-[var(--forest)]/35 transition hover:text-[var(--forest)]">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

function Community() {
  return (
    <section className="relative bg-[var(--beige)]/50 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Communities & Farmers"
          title="Owned by the people who farm the land."
          sub="Every credit, every harvest, every restored hectare flows back to the communities at the heart of our work."
        />

        <Reveal>
          <div className="relative mt-16 overflow-hidden rounded-3xl shadow-2xl">
            <img src={communityImg} alt="African farmers using climate technology" width={1600} height={1200} loading="lazy" className="h-[420px] w-full object-cover sm:h-[480px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/90 via-[var(--forest)]/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/75">Featured Story</div>
              <h3 className="mt-2 max-w-2xl text-balance text-2xl font-semibold sm:text-4xl">From depleted to thriving — in two seasons.</h3>
              <p className="mt-3 max-w-xl text-white/85">A cooperative of 60 farmers in Limpopo restored 240 hectares with biochar and regenerative practice.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-12">
          <CommunityCarousel />
        </Reveal>
      </div>
    </section>
  );
}

function Campaign() {
  return (
    <section id="campaign" className="relative overflow-hidden py-28 text-white sm:py-36">
      <img src={seedImg} alt="Seedling sprouting from rich soil" width={1600} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A4A]/95 via-[#2A5A8C]/85 to-[#2A5A8C]/70" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/90 backdrop-blur">
              <Sprout className="h-3.5 w-3.5 text-[var(--emerald)]" /> Drop a Seed Campaign
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Planting the seeds of change across Africa.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-xl text-white/85 sm:text-lg">
              One seedling. One farmer. One community at a time. We are inspiring local communities to reclaim their futures through
              sustainable agriculture and verified climate action — cultivating a greener, more resilient continent from the ground up.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[var(--forest)] shadow-xl transition hover:-translate-y-0.5">
                Drop a Seed <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
                Sponsor a Farmer
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="rounded-3xl border border-white/15 glass-dark p-7 sm:p-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">Your Impact</div>
            <div className="mt-3 grid grid-cols-3 gap-5">
              {[["$10", "12 seedlings"], ["$50", "1 farmer · 1 season"], ["$500", "1 hectare restored"]].map(([p, l]) => (
                <div key={p} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold">{p}</div>
                  <div className="mt-1 text-xs text-white/75">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-[var(--emerald)] to-[#9FE7EE]" />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-white/75">
              <span>32,180 of 50,000 seeds dropped</span>
              <span className="text-[var(--emerald)]">64%</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Investors() {
  return (
    <section id="investors" className="relative bg-[var(--background)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--forest)]/15 bg-[var(--beige)] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--forest)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald)]" /> Investors & ESG
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 text-balance text-3xl font-semibold text-[var(--forest)] sm:text-5xl">
                Investor-grade climate, engineered for Africa.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-[var(--forest)]/75 lg:text-lg">
              We partner with funds, corporates and climate-finance institutions to deploy capital where it compounds —
              measured in tonnes, hectares, livelihoods.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "ESG Compliance", d: "Aligned with TCFD, GRI and ISSB disclosures." },
            { icon: Leaf, t: "Carbon Verification", d: "Verra & Gold Standard ready pipelines." },
            { icon: BarChart3, t: "Live KPIs", d: "Quarterly investor dashboards." },
            { icon: Globe2, t: "Pan-African Scale", d: "Multi-country project portfolio." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-[var(--forest)]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <b.icon className="h-5 w-5 text-[var(--emerald)]" />
                <div className="mt-5 font-semibold text-[var(--forest)]">{b.t}</div>
                <div className="mt-2 text-sm text-[var(--forest)]/65">{b.d}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-[var(--forest)]/10 bg-gradient-to-br from-[var(--forest)] to-[#0E2A4A] p-10 text-white sm:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h3 className="text-balance text-2xl font-semibold sm:text-4xl">Partner with us on Africa's next climate-positive decade.</h3>
                <p className="mt-3 max-w-xl text-white/80">Co-design portfolios, sponsor projects, or integrate verified credits into your net-zero pathway.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[var(--forest)] shadow-xl transition hover:-translate-y-0.5">
                  Request Pitch Deck <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { I: Instagram, label: "Instagram", handle: "@carbonsmartsolutionsafrica", href: "https://instagram.com/carbonsmartsolutionsafrica" },
    { I: Linkedin, label: "LinkedIn", handle: "Carbonsmart Solutions Africa", href: "https://www.linkedin.com/company/carbonsmart-solutions-africa" },
    { I: Facebook, label: "Facebook", handle: "Carbonsmart Solutions Africa", href: "https://facebook.com/carbonsmartsolutionsafrica" },
    { I: WhatsAppIcon, label: "WhatsApp", handle: "Message us", href: "https://wa.me/27000000000" },
  ];
  return (
    <footer className="relative overflow-hidden bg-[#0E2A4A] text-white/85">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(63,184,194,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <img src={LOGO} alt="CSSA logo" className="h-14 w-auto rounded-lg bg-white/95 p-1.5" />
              <span className="font-semibold tracking-tight text-white">CarbonSmart Solutions Africa</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Climate technology, carbon markets and regenerative innovation — engineered for African landscapes, owned by African communities.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["ESG-Aligned", "Verra Ready", "Gold Standard", "TCFD"].map((b) => (
                <span key={b} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/75">{b}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-white/45">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              {[["About", "#about"], ["Services", "#services"], ["Approach", "#approach"], ["Impact", "#impact"], ["Investors", "#investors"]].map(([l, h]) => (
                <li key={l}><a href={h} className="transition hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-white/45">Programs</div>
            <ul className="mt-5 space-y-3 text-sm">
              {["Drop a Seed", "Sponsor a Farmer", "Carbon Credits", "Partnerships"].map((l) => (
                <li key={l}><a href="#campaign" className="transition hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-white/45">Contact</div>
            <div className="mt-5 flex items-start gap-2.5 text-sm text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--emerald)]" />
              <div>
                Design Quarters<br />
                Leslie Road, Fourways<br />
                Johannesburg, 2191<br />
                South Africa
              </div>
            </div>
            <div className="mt-6 space-y-2.5">
              {socials.map(({ I, label, handle, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-sm text-white/75 transition hover:text-white">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 transition group-hover:bg-[var(--emerald)] group-hover:border-transparent">
                    <I className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">{label}</span>
                    <span>{handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} CarbonSmart Solutions Africa. All rights reserved.</p>
          <p className="text-xs text-white/60">Committed to a net-positive Africa.</p>
        </div>
      </div>
    </footer>
  );
}

const GALLERY = [
  { src: galleryPlant, t: "Carbon Plant", d: "Saplings sequester atmospheric carbon as they grow.", span: "lg:col-span-2 lg:row-span-2 h-[260px] lg:h-[540px]" },
  { src: galleryMother, t: "Mothers of the Movement", d: "Women plant the future, child wrapped close.", span: "h-[260px]" },
  { src: galleryFarm, t: "Field Restoration", d: "Rows of carbon-positive saplings take root.", span: "h-[260px]" },
  { src: galleryTech, t: "Climate Tech in the Field", d: "Live dMRV dashboards beside growing plants.", span: "h-[260px]" },
  { src: galleryScientist, t: "Soil Science", d: "Researchers verify regenerative impact on-site.", span: "h-[260px]" },
];

function Gallery() {
  return (
    <section id="gallery" className="relative bg-[var(--background)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="In the Field"
          title="Where climate-tech meets African soil."
          sub="From the hands of farmers to the eyes of scientists — every frame tells a story of restoration."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {GALLERY.map((g, i) => (
            <Reveal key={g.t} delay={i * 80} className={g.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl shadow-md tilt">
                <img src={g.src} alt={g.t} width={1280} height={896} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/85 via-[var(--forest)]/15 to-transparent opacity-90 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--emerald)]">0{i + 1}</div>
                  <div className="mt-1 text-lg font-semibold">{g.t}</div>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">{g.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Landing() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Hero />
      <About />
      <Services />
      <FarmerBenefits />
      <PartnerMarquee />
      <Approach />
      <Impact />
      <Technology />
      <Gallery />
      <Community />
      <Campaign />
      <Investors />
      <Footer />
    </main>
  );
}
