import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./assets/Logo.png";
import {
  Phone, Droplets, MapPin, Drill, Award, CheckCircle2, Waves, Zap,
  Construction, Menu, X, Star, MessageCircle, Clock, Users, ShieldCheck,
  Wrench, Target, ArrowRight, ChevronRight, Play, CheckCheck
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const SLIDES = [
  {
    img: "https://radhakrishnaborewells.com/wp-content/uploads/2024/10/1-14.webp",
    tag: "Cumbum's No.1 Specialist",
    h1: "Sree Kaaliamman", h2: "Borewells",
    desc: 'Commercial, Industrial, Residential and Agricultural',
    cta: "Book Free Survey",
  },
  {
    img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/IP/VS/OL/94950679/product-jpeg-500x500.jpg",
    tag: "Side-Bore Technology",
    h1: "WE DRILL DEEPER", h2: "AND FASTER",
    desc: "Breathing new life into aging and depleted wells — our side-bore revival technology restores peak water flow with precision horizontal drilling.",
    cta: "Explore Services",
  },
  {
    img: "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80",
    tag: "24/7 Emergency Support",
    h1: "ALWAYS", h2: "THERE.",
    desc: "Round-the-clock pump maintenance, emergency response, and support.",
    cta: "Call Expert Now",
  },
];

const SERVICES = [
  { icon: Construction, title: '5" & 6½" Residential', tag: "Residential", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80", desc: "Tailored residential borewell solutions — clean, reliable water for your home with minimal disruption and maximum depth precision." },
  { icon: Construction, title: '6½" Industrial Drilling', tag: "Most Popular", img: "https://5.imimg.com/data5/ANDROID/Default/2022/6/IP/VS/OL/94950679/product-jpeg-500x500.jpg", desc: "Heavy-duty industrial rigs reaching depths up to 1200 ft with precision hydraulic systems for maximum water yield." },
  { icon: Droplets, title: '6½" Agricultural', tag: "Agri Specialist", img: "https://4.imimg.com/data4/GQ/PP/MY-6263606/bore-well-drilling-500x500.jpg", desc: "Perfectly calibrated for farmland irrigation — cost-effective, deep-reach drilling with fast turnaround for farmers." },
  { icon: Waves, title: '5" Side Bore', tag: "Unique Tech", img: "https://i.ytimg.com/vi/spN1mvOzZrE/maxresdefault.jpg", desc: "Breathe new life into dry open wells. Horizontal side-bore drilling reaches hidden water veins no one else can find." },
  { icon: Wrench, title: "Borewell Flushing", tag: "Maintenance", img: "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80", desc: "High-pressure water jetting to clean clogged borewells, restore flow rates, and extend operational life." },
  { icon: Zap, title: "Pump & Motor Service", tag: "24/7 Support", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIkp1lP6RSlGKCWEnIrvJAZ2e2jiyf0Fu1w&s", desc: "Complete submersible pump installation, repair, and replacement with genuine parts and emergency support." },
];

const WHY_US = [
  { icon: Award, title: "24+ Years Experience", desc: "Trusted by 8500+ families and businesses across Theni district since 2002." },
  { icon: ShieldCheck, title: "100% Success Rate", desc: "Scientific surveying ensures we never drill dry. Water, guaranteed." },
  { icon: Clock, title: "24/7 Emergency", desc: "Round-the-clock support for pump failures and water emergencies." },
  { icon: MapPin, title: "Local Experts", desc: "Deep knowledge of Cumbum valley geology and underground water tables." },
  { icon: Users, title: "Skilled Team", desc: "Experienced drilling operators with years of intense field training." },
  { icon: Zap, title: "Latest Equipment", desc: "Hi-pressure hydraulic rigs and precision drilling technology." },
];

const PROCESS = [
  { n: "01", title: "Site Survey", desc: "Our experts visit your site, study the geology, and map underground water veins using scientific methods." },
  { n: "02", title: "Point Identification", desc: "We pinpoint the optimal drilling location for maximum yield before any equipment arrives." },
  { n: "03", title: "Precision Drilling", desc: "Our hi-power rigs drill with precision to the identified depth, ensuring clean, uncontaminated water." },
  { n: "04", title: "Water Testing", desc: "Post-drill water quality testing and flow measurement before handing over to you." },
];

const TESTIMONIALS = [
  { name: "Raju", loc: "Uthamapalayam", stars: 5, text: "Sree Kaaliamman Borewells found water at 400ft where two other companies failed. My farm is now thriving because of them!" },
  { name: "Meenakshi Industries", loc: "Cumbum", stars: 5, text: "Professional, fast, excellent water yield. Best industrial boring service in Theni district." },
  { name: "Selvam", loc: "Kumuli", stars: 5, text: "Three borewells before this. Sree Kaaliamman Borewells used their survey method and hit water on the very first try at 600ft." },
  { name: "Annamalai", loc: "Theni", stars: 5, text: "Side-bore technology revived my 20-year-old dry open well. Water flowing again after 5 years!" },
];

const GALLERY = [
  { src: "/assets/work1.mp4", label: "Field Operations", type: "video" },
  { src: "/assets/work2.jpg", label: "Farm Project", type: "image" },
  { src: "/assets/work3.mp4", label: "Industrial Site", type: "video" },
  { src: "/assets/work4.jpg", label: "Deep Bore", type: "image" },
  { src: "/assets/work5.mp4", label: "Drilling Process", type: "video" },
  { src: "/assets/work6.jpg", label: "Our Vehicle", type: "image" },
];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const gold = "linear-gradient(135deg,#D4AF37,#F7E06A,#C49A1A)";
const dark = "#060A14";
const mid = "#0B1121";
const glass = { background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.09)" };
const glassStrong = { background: "rgba(255,255,255,0.10)", backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)", border: "1px solid rgba(212,175,55,0.18)" };

function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const n = parseInt(to);
        let cur = 0;
        const inc = Math.max(1, Math.ceil(n / 90));
        const t = setInterval(() => {
          cur = Math.min(cur + inc, n);
          setVal(cur);
          if (cur >= n) clearInterval(t);
        }, 18);
      }
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function StarRow({ n }) {
  return (
    <span style={{ display: "flex", gap: 3 }}>
      {Array(n).fill(0).map((_, i) => <Star key={i} size={12} fill="#D4AF37" color="#D4AF37" />)}
    </span>
  );
}

const FadeUp = ({ children, delay = 0, style = {} }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay }}
    style={style}
  >{children}</motion.div>
);

// ─────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────
export default function App() {
  const [slide, setSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [works, setWorks] = useState(() =>
    GALLERY.map((g, i) => ({ ...g, id: `work-${i}`, span: "square" }))
  );

  useEffect(() => {
    // Shuffle algorithm
    const shuffle = () => {
      setWorks(prev => {
        const shuffled = [...prev].sort(() => Math.random() - 0.5);
        return shuffled.map(item => {
          const r = Math.random();
          let span = "square";
          if (!isMobile) {
            if (r > 0.85) span = "wide";
            else if (r > 0.7) span = "tall";
          }
          return { ...item, span };
        });
      });
    };

    const interval = setInterval(shuffle, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    // Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800;900&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  const S = {
    page: { fontFamily: "'Outfit',sans-serif", background: dark, color: "#fff", overflowX: "hidden", minHeight: "100vh" },
    section: (bg = dark) => ({ padding: isMobile ? "70px 20px" : "100px 40px", background: bg }),
    inner: { maxWidth: 1280, margin: "0 auto" },
    tag: { fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 700, color: "#D4AF37", marginBottom: 12 },
    heading: (size) => ({ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? size * 0.65 : size, lineHeight: 0.95, color: "#fff" }),
    goldText: {
      background: gold, backgroundClip: "text", WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent", color: "transparent",
    },
    btn: (variant = "gold") => variant === "gold" ? {
      background: gold, color: "#060A14", padding: "14px 30px", borderRadius: 50, fontWeight: 800,
      fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
      display: "inline-flex", alignItems: "center", gap: 8,
      boxShadow: "0 8px 30px rgba(212,175,55,0.35)",
    } : {
      ...glass, color: "#fff", padding: "14px 28px", borderRadius: 50,
      fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase",
      textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
    },
  };

  return (
    <div style={S.page}>

      {/* ── CSS ─────────────────────────────── */}
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-track{background:#060A14;}
        ::-webkit-scrollbar-thumb{background:#D4AF37;border-radius:3px;}
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes pulseGold{0%,100%{box-shadow:0 0 0 0 rgba(212,175,55,0.5)}70%{box-shadow:0 0 0 14px rgba(212,175,55,0)}}
        @keyframes shimmer{0%{background-position:-400% 0}100%{background-position:400% 0}}
        @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        .gold-shimmer{
          background:linear-gradient(90deg,#D4AF37 0%,#F7E06A 30%,#C49A1A 60%,#D4AF37 100%);
          background-size:400% 100%;
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;animation:shimmer 4s linear infinite;
        }
        .nav-a{color:rgba(255,255,255,0.65);text-decoration:none;font-weight:600;font-size:12px;
          letter-spacing:0.15em;text-transform:uppercase;transition:color 0.2s;position:relative;padding-bottom:2px;}
        .nav-a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:#D4AF37;transition:width 0.3s;}
        .nav-a:hover{color:#D4AF37;}.nav-a:hover::after{width:100%;}
        .svc-card img{transition:transform 0.7s ease;}
        .svc-card:hover img{transform:scale(1.07);}
        .gal-item img{transition:transform 0.6s ease;}
        .gal-item:hover img{transform:scale(1.06);}
        .proc-step:not(:last-child)::after{content:'';position:absolute;left:27px;top:60px;width:2px;height:calc(100% - 20px);background:linear-gradient(to bottom,rgba(212,175,55,0.5),rgba(212,175,55,0.0));pointer-events:none;}
        .testi-card{transition:border-color 0.3s;}
        .testi-card:hover{border-color:rgba(212,175,55,0.35)!important;}
        .why-card{transition:background 0.3s,border-color 0.3s,transform 0.3s;}
        .why-card:hover{background:rgba(212,175,55,0.07)!important;border-color:rgba(212,175,55,0.25)!important;transform:translateY(-4px);}
      `}</style>

      {/* ── NAVBAR ──────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "12px 24px" : (isMobile ? "16px 20px" : "22px 40px"),
        transition: "all 0.4s ease",
        ...(scrolled || menu ? { background: "rgba(6,10,20,0.95)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.07)" } : {})
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo & Tagline */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src={Logo}
                alt="SKBS Logo"
                style={{
                  width: isMobile ? 100 : 140,
                  height: isMobile ? 100 : 140,
                  objectFit: 'contain',
                  flexShrink: 0
                }}
              />
            </div>
            {!scrolled && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  fontSize: isMobile ? 9 : 10,
                  letterSpacing: "0.25em",
                  color: "#D4AF37",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginTop: -5,
                  opacity: 0.9,
                  overflow: "hidden"
                }}
              >
                Borewell Specialists • Est 2002
              </motion.div>
            )}
          </div>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
              {["Services", "Works", "Process", "Contact"].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="nav-a">{l}</a>
              ))}
              <a href="tel:9698988383" style={{ background: gold, color: "#060A14", padding: "10px 24px", borderRadius: 50, fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(212,175,55,0.4)" }}>
                <Phone size={13} /> Call Now
              </a>
            </div>
          )}

          {/* Mobile icons */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <a href="tel:9698988383" style={{ width: 40, height: 40, background: gold, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 15px rgba(212,175,55,0.4)" }}>
                <Phone size={16} color="#060A14" />
              </a>
              <button onClick={() => setMenu(!menu)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}>
                {menu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menu && isMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              style={{ overflow: "hidden", marginTop: 16 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingBottom: 20 }}>
                {["Services", "Works", "Process", "Contact"].map(l => (
                  <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenu(false)}
                    style={{ display: "block", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 20, letterSpacing: "0.04em" }}
                  >{l}</a>
                ))}
                <a href="https://wa.me/919698988383"
                  style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: gold, color: "#060A14", padding: "15px 24px", borderRadius: 14, fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ─────────────────────────────── */}
      <section style={{ position: "relative", height: "100dvh", overflow: "hidden", background: dark }}>
        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div key={slide} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1 }}
            style={{ position: "absolute", inset: 0 }}>
            <img src={SLIDES[slide].img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
          </motion.div>
        </AnimatePresence>

        {/* Overlay layers */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg,rgba(6,10,20,0.98) 0%,rgba(6,10,20,0.65) 55%,rgba(6,10,20,0.2) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#060A14 0%,transparent 45%)" }} />

        {/* Decorative glow (desktop only) */}
        {!isMobile && (
          <div style={{ position: "absolute", top: "15%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,0.07) 0%,transparent 65%)", animation: "floatY 7s ease-in-out infinite", pointerEvents: "none" }} />
        )}

        {/* Slide content */}
        <div style={{ position: "relative", zIndex: 10, height: "100%", maxWidth: 1280, margin: "0 auto", padding: isMobile ? "0 20px" : "0 40px", display: "flex", alignItems: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div key={slide} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ maxWidth: 680, paddingTop: isMobile ? 80 : 0 }}>
              {/* Tag pill */}
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, ...glass, borderRadius: 50, padding: "7px 18px", marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37", flexShrink: 0 }} />
                <span style={{ fontSize: 11, letterSpacing: "0.2em", fontWeight: 700, color: "#D4AF37", textTransform: "uppercase" }}>{SLIDES[slide].tag}</span>
              </motion.div>

              {/* Title */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? "clamp(62px,18vw,90px)" : "clamp(80px,11vw,130px)", lineHeight: 0.93, color: "#fff" }}>
                  {SLIDES[slide].h1}
                </div>
                <div className="gold-shimmer" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? "clamp(62px,18vw,90px)" : "clamp(80px,11vw,130px)", lineHeight: 0.93, display: "block" }}>
                  {SLIDES[slide].h2}
                </div>
              </motion.div>

              {/* Description */}
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
                style={{ color: "rgba(255,255,255,0.58)", fontSize: isMobile ? 14 : 17, lineHeight: 1.75, margin: "24px 0 36px", borderLeft: "3px solid #D4AF37", paddingLeft: 16, maxWidth: 480 }}>
                {SLIDES[slide].desc}
              </motion.p>

              {/* CTAs */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
                style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="tel:9698988383" style={S.btn("gold")}>{SLIDES[slide].cta} <ArrowRight size={15} /></a>
                <a href="https://wa.me/919698988383" style={S.btn("glass")}><MessageCircle size={15} /> WhatsApp</a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide dots */}
        <div style={{ position: "absolute", bottom: isMobile ? 90 : 36, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 20 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? 32 : 8, height: 8, borderRadius: 4, background: i === slide ? "#D4AF37" : "rgba(255,255,255,0.28)", border: "none", cursor: "pointer", transition: "all 0.35s", padding: 0 }} />
          ))}
        </div>
      </section>

      {/* ── GOLD TICKER ──────────────────────── */}
      <div style={{ background: gold, overflow: "hidden", padding: "13px 0" }}>
        <div style={{ display: "flex", animation: "ticker 22s linear infinite", width: "max-content" }}>
          {[0, 1, 2, 3].map(i => (
            <span key={i} style={{ whiteSpace: "nowrap", padding: "0 48px", fontWeight: 800, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "#060A14" }}>
              ⚡ 24+ Years Experience &nbsp;•&nbsp; 8500+ Borewells Done &nbsp;•&nbsp; Cumbum • Theni &nbsp;•&nbsp; 1200 ft Max Depth &nbsp;•&nbsp; 24/7 Support &nbsp;•&nbsp; 100% Success Rate &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────── */}
      <section style={{ ...S.section(dark), paddingTop: 80, paddingBottom: 80 }}>
        <div style={S.inner}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 20 }}>
            {[
              { n: "24", s: "+", label: "Years of Trust", sub: "Since 2002", icon: Award },
              { n: "8500", s: "+", label: "Borewells Done", sub: "Across Theni", icon: CheckCircle2 },
              { n: "1200", s: "ft", label: "Max Depth", sub: "Proven Reach", icon: Waves },
              { n: "100", s: "%", label: "Success Rate", sub: "Guaranteed Water", icon: Target },
            ].map((st, i) => (
              <FadeUp key={i} delay={i * 0.09}>
                <div style={{ ...glassStrong, borderRadius: 24, padding: isMobile ? "26px 18px" : "34px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -14, right: -14, opacity: 0.04 }}><st.icon size={90} /></div>
                  <div style={{ marginBottom: 12 }}><st.icon size={22} color="#D4AF37" /></div>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 48 : 60, lineHeight: 1, color: "#fff", marginBottom: 4 }}>
                    <Counter to={st.n} suffix={st.s} />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 4 }}>{st.label}</div>
                  <div style={{ fontSize: 10, color: "#D4AF37", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>{st.sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────── */}
      <section id="services" style={S.section(mid)}>
        <div style={S.inner}>
          <FadeUp>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", marginBottom: 56, gap: 20 }}>
              <div>
                <div style={S.tag}>Technical Solutions</div>
                <h2 style={S.heading(76)}>
                  OUR <span className="gold-shimmer">SERVICES</span>
                </h2>
              </div>
              {!isMobile && (
                <a href="tel:9698988383" style={{ ...S.btn("gold"), flexShrink: 0 }}>
                  <Phone size={14} /> Get Free Quote
                </a>
              )}
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 20 }}>
            {SERVICES.map((svc, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="svc-card" style={{ borderRadius: 26, overflow: "hidden", position: "relative", height: isMobile ? 280 : 340, border: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}>
                  <img src={svc.img} alt={svc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(6,10,20,0.98) 38%,rgba(6,10,20,0.25) 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 26 }}>
                    <span style={{ display: "inline-block", background: "rgba(212,175,55,0.18)", border: "1px solid rgba(212,175,55,0.35)", borderRadius: 50, padding: "4px 13px", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 700, marginBottom: 11, alignSelf: "flex-start" }}>{svc.tag}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 8 }}>
                      <svc.icon size={18} color="#D4AF37" />
                      <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 26, letterSpacing: "0.04em", color: "#fff" }}>{svc.title}</h3>
                    </div>
                    <p style={{ fontSize: 12.5, lineHeight: 1.65, color: "rgba(255,255,255,0.58)" }}>{svc.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────── */}
      <section id="about" style={{ ...S.section(dark), position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,0.04) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div style={{ ...S.inner, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 50 : 80, alignItems: "start" }}>
          <FadeUp>
            <div>
              <div style={S.tag}>Why Trust Us</div>
              <h2 style={{ ...S.heading(70), marginBottom: 22 }}>THE Sree Kaaliamman Borewells<br /><span className="gold-shimmer">DIFFERENCE</span></h2>
              {/* Tagline */}
              <div style={{ borderLeft: "3px solid #D4AF37", paddingLeft: 16, marginBottom: 24 }}>
                <p style={{ color: "#D4AF37", fontSize: 15, fontStyle: "italic", fontWeight: 600, lineHeight: 1.5 }}>
                  "Precision in every layer. Excellence in every drop."
                </p>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.85, marginBottom: 32, maxWidth: 420 }}>
                With over 24 years drilling into the heart of Theni district, we've earned the trust of farmers, industries, and homes alike. Reliability, precision, and lasting solutions — that's the Sree kaaliamman borewells promise.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40, padding: "20px 24px", background: "rgba(255,255,255,0.04)", borderRadius: 28, border: "1px solid rgba(255,255,255,0.08)", width: "fit-content" }}>
                <div style={{ width: 100, height: 128, borderRadius: 12, overflow: "hidden", border: "2px solid #D4AF37", boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}>
                  <img src="/assets/profile.jpeg" alt="Shankar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, letterSpacing: "0.02em", marginBottom: 4 }}>SHANKAR</div>
                  <div style={{ color: "#D4AF37", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Founder & MD</div>
                </div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {["Free site survey before drilling", "Experienced drilling engineers", "Post-drill water quality report"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
                    <span style={{ width: 22, height: 22, background: "rgba(212,175,55,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckCheck size={12} color="#D4AF37" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="tel:9698988383" style={S.btn("gold")}><Phone size={14} /> Call Now</a>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {WHY_US.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="why-card" style={{ ...glass, borderRadius: 20, padding: "22px 18px" }}>
                  <div style={{ width: 44, height: 44, background: "rgba(212,175,55,0.12)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <item.icon size={20} color="#D4AF37" />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 7 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────── */}
      <section id="process" style={S.section(mid)}>
        <div style={S.inner}>
          <FadeUp style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={S.tag}>How We Work</div>
            <h2 style={{ ...S.heading(72), display: "inline-block" }}>THE PROCESS</h2>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4,1fr)", gap: isMobile ? 0 : 32, position: "relative" }}>
            {/* Desktop connector line */}
            {!isMobile && (
              <div style={{ position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 1, background: "linear-gradient(to right,rgba(212,175,55,0.15),rgba(212,175,55,0.5),rgba(212,175,55,0.15))", zIndex: 0 }} />
            )}

            {PROCESS.map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="proc-step" style={{ position: "relative", display: "flex", flexDirection: isMobile ? "row" : "column", gap: isMobile ? 20 : 22, alignItems: isMobile ? "flex-start" : "center", textAlign: isMobile ? "left" : "center", padding: isMobile ? "0 0 36px 0" : "0", zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, ...glassStrong, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
                    <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, color: "#D4AF37" }}>{step.n}</span>
                    {!isMobile && i < PROCESS.length - 1 && (
                      <div style={{ position: "absolute", right: -100, width: 100, height: 1, background: "rgba(212,175,55,0.25)", top: "50%", pointerEvents: "none" }} />
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 24, letterSpacing: "0.04em", color: "#fff", marginBottom: 8 }}>{step.title}</h4>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.52)", lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────── */}
      <section id="works" style={S.section(dark)}>
        <div style={S.inner}>
          <FadeUp style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={S.tag}>Field Portfolio</div>
            <h2 style={{ ...S.heading(72), display: "inline-block" }}>
              OUR <span className="gold-shimmer">WORKS</span>
            </h2>
          </FadeUp>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gridAutoFlow: "dense",
            gap: 14
          }}>
            <AnimatePresence mode="popLayout">
              {works.map((g) => (
                <motion.div
                  key={g.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    layout: { type: "spring", stiffness: 100, damping: 20 },
                    opacity: { duration: 0.4 }
                  }}
                  className="gal-item"
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    position: "relative",
                    gridColumn: g.span === "wide" && !isMobile ? "span 2" : "span 1",
                    gridRow: g.span === "tall" && !isMobile ? "span 2" : "span 1",
                    height: g.span === "tall" && !isMobile ? 580 : (g.span === "wide" && !isMobile ? 280 : (isMobile ? 180 : 280)),
                    border: "1px solid rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    background: mid
                  }}
                >
                  {g.type === "video" ? (
                    <video
                      src={g.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <img src={g.src} alt={g.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  )}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(6,10,20,0.88) 0%,transparent 55%)", display: "flex", alignItems: "flex-end", padding: "16px 18px" }}>
                    <div>
                      <div style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 700, marginBottom: 3 }}>Completed</div>
                      <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, color: "#fff" }}>{g.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────── */}
      <section style={S.section(mid)}>
        <div style={S.inner}>
          <FadeUp style={{ marginBottom: 52 }}>
            <div style={S.tag}>Real Stories</div>
            <h2 style={S.heading(72)}>CLIENT <span className="gold-shimmer">TRUST</span></h2>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)", gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="testi-card" style={{ ...glass, borderRadius: 24, padding: "28px 26px", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ position: "absolute", top: 12, right: 18, fontFamily: "Georgia,serif", fontSize: 90, color: "rgba(212,175,55,0.07)", lineHeight: 1, pointerEvents: "none" }}>"</div>
                  <StarRow n={t.stars} />
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", margin: "16px 0 22px", fontStyle: "italic" }}>"{t.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                    <div style={{ width: 40, height: 40, background: "rgba(212,175,55,0.18)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'Bebas Neue',sans-serif", fontSize: 20, color: "#D4AF37" }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "#D4AF37", letterSpacing: "0.12em" }}>{t.loc}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────── */}
      <section style={{ padding: isMobile ? "70px 24px" : "90px 40px", background: gold, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, right: -40, width: 320, height: 320, borderRadius: "50%", background: "rgba(0,0,0,0.1)", pointerEvents: "none" }} />
        <div style={{ ...S.inner, textAlign: "center", position: "relative", zIndex: 1 }}>
          <FadeUp>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? "clamp(44px,12vw,60px)" : "clamp(52px,7vw,88px)", color: "#060A14", lineHeight: 0.95, marginBottom: 18 }}>
              READY TO TAP INTO<br />YOUR WATER SOURCE?
            </h2>
            <p style={{ fontSize: isMobile ? 14 : 17, color: "rgba(6,10,20,0.65)", marginBottom: 36, lineHeight: 1.7 }}>
              Free site survey • Expert consultation • Guaranteed water
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:9698988383" style={{ background: "#060A14", color: "#D4AF37", padding: "16px 40px", borderRadius: 50, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: "0 8px 30px rgba(6,10,20,0.25)" }}>
                <Phone size={16} /> Call 96989 88383
              </a>
              <a href="https://wa.me/919698988383" style={{ background: "rgba(6,10,20,0.12)", color: "#060A14", padding: "16px 36px", borderRadius: 50, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", border: "2px solid rgba(6,10,20,0.25)", display: "inline-flex", alignItems: "center", gap: 10 }}>
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────── */}
      <section id="contact" style={S.section(dark)}>
        <div style={S.inner}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", gap: 44, alignItems: "center" }}>
            <FadeUp>
              <div>
                <div style={S.tag}>Find Us</div>
                <h2 style={{ ...S.heading(60), marginBottom: 28 }}>OUR<br /><span className="gold-shimmer">LOCATION</span></h2>
                <div style={{ display: "flex", gap: 13, marginBottom: 18 }}>
                  <MapPin size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: 2 }} />
                  <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 14, lineHeight: 1.75 }}>SBI ATM Above, Kulalar Mandapam , L.F. Road,<br />Cumbum – 625 516,<br />Theni District, Tamil Nadu</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                    <Phone size={20} color="#D4AF37" />
                    <a href="tel:9698988383" style={{ color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: 20 }}>96989 88383</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                    <Phone size={20} color="#D4AF37" />
                    <a href="tel:9709512345" style={{ color: "#fff", fontWeight: 700, textDecoration: "none", fontSize: 20 }}>97095 12345</a>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/p5WBtg7MyCHzQNk96" target="_blank" rel="noreferrer" style={S.btn("gold")}>
                  <MapPin size={15} /> Get Directions
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div style={{ borderRadius: 28, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", height: isMobile ? 260 : 380 }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.12345678901!2d77.28!3d9.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07!2zQ3VtYnVtLCBUYW1pbCBOYWR1!5e0!3m2!1sen!2sin!4v1"
                  style={{ width: "100%", height: "100%", border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }} loading="lazy" title="SKBS Location" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer style={{ background: "#030610", borderTop: "1px solid rgba(255,255,255,0.06)", padding: isMobile ? "60px 20px 120px" : "80px 40px 50px" }}>
        <div style={S.inner}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 60, marginBottom: 56 }}>
            {/* Brand */}
            <FadeUp>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <img src={Logo} alt="SKBS Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 32, letterSpacing: "0.08em", color: "#fff" }}>Sree Kaaliamman Borewells HI-POWER</div>
                    <div style={{ fontSize: 9, letterSpacing: "0.3em", color: "#D4AF37", fontWeight: 700, textTransform: "uppercase" }}>Borewell Specialists • Est. 2002</div>
                  </div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 13.5, lineHeight: 1.85, maxWidth: 360, marginBottom: 28 }}>
                  Cumbum's most trusted borewell drilling specialists. Serving Theni district with precision engineering and 24+ years of proven expertise.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="tel:9698988383" style={S.btn("gold")}><Phone size={14} /> Call Now</a>
                  <a href="https://wa.me/919698988383" style={{ background: "#25D366", color: "#fff", padding: "12px 22px", borderRadius: 50, fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Contact card */}
            <FadeUp delay={0.15}>
              <div style={{
                ...glassStrong,
                borderRadius: 32,
                padding: isMobile ? "32px 24px" : "44px 40px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4), inset 0 0 20px rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.25)"
              }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", background: "radial-gradient(circle at top right,rgba(212,175,55,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />

                <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row-reverse", justifyContent: "space-between", alignItems: isMobile ? "center" : "flex-start", gap: 32, marginBottom: 40, position: "relative", zIndex: 2 }}>
                  {/* Profile Image - Enlarged Passport Size */}
                  <div style={{
                    width: isMobile ? 140 : 160,
                    height: isMobile ? 180 : 205,
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "3px solid #D4AF37",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                    flexShrink: 0,
                    transform: "rotate(2deg)"
                  }}>
                    <img src="/assets/profile.jpeg" alt="Shankar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>

                  <div style={{ textAlign: isMobile ? "center" : "left" }}>
                    <div style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", padding: "4px 12px", borderRadius: 6, marginBottom: 12 }}>
                      <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 800 }}>Digital Business Card</span>
                    </div>
                    <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: isMobile ? 48 : 56, letterSpacing: "0.06em", color: "#fff", lineHeight: 1, marginBottom: 8 }}>SHANKAR</h3>
                    <div style={{ fontSize: 14, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 700, marginBottom: 16 }}>Managing Director</div>
                    <div style={{ width: 40, height: 3, background: gold, borderRadius: 2, margin: isMobile ? "0 auto" : "0" }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 24 }}>
                  {[
                    { icon: Phone, label: "Primary Contact", value: "96989 88383", href: "tel:9698988383" },
                    { icon: Phone, label: "Secondary Contact", value: "97095 12345", href: "tel:9709512345" },
                    { icon: MapPin, label: "Experience Center", value: "Above SBI ATM, L.F. Road, Cumbum", href: "https://maps.app.goo.gl/p5WBtg7MyCHzQNk96" },
                    { icon: MessageCircle, label: "WhatsApp", value: "Chat with Us", href: "https://wa.me/919698988383" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "center",
                      textDecoration: "none",
                      padding: "16px",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: 16,
                      border: "1px solid rgba(255,255,255,0.05)",
                      transition: "all 0.3s ease"
                    }} className="contact-link">
                      <div style={{ width: 44, height: 44, background: "rgba(212,175,55,0.12)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} color="#D4AF37" />
                      </div>
                      <div>
                        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
                        <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>{value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>© 2025 Sree Kaaliamman Borewells Hi-Power Borewells. All rights reserved.</div>
            <div style={{
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(212,175,55,0.08)",
              padding: "6px 14px",
              borderRadius: 50,
              border: "1px solid rgba(212,175,55,0.15)"
            }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, textTransform: "uppercase" }}>Crafted by</span>
              <span style={{ color: "#D4AF37", fontWeight: 800 }}>Navi Promotions</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(212,175,55,0.4)" }} />
              <span style={{ color: "rgba(255,255,255,0.5)" }}>Theni</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ────────────────── */}
      {!isMobile && (
        <a href="https://wa.me/919698988383"
          style={{ position: "fixed", bottom: 28, right: 28, width: 60, height: 60, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 28px rgba(37,211,102,0.45)", zIndex: 9999, textDecoration: "none", animation: "pulseGold 2.5s infinite" }}>
          <MessageCircle size={26} color="#fff" fill="#fff" />
        </a>
      )}

      {/* ── MOBILE BOTTOM NAV ────────────────── */}
      {isMobile && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999, ...{ background: "rgba(6,10,20,0.96)", backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)" }, borderTop: "1px solid rgba(255,255,255,0.09)", display: "flex", justifyContent: "space-around", padding: "10px 0 20px" }}>
          {[
            { href: "#services", icon: Construction, label: "Services" },
            { href: "#works", icon: Waves, label: "Works" },
            { href: "tel:9698988383", icon: Phone, label: "Call", accent: true },
            { href: "#about", icon: Users, label: "About" },
            { href: "#contact", icon: MapPin, label: "Location" },
          ].map(({ href, icon: Icon, label, accent }) => (
            <a key={label} href={href}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, textDecoration: "none", color: accent ? "#D4AF37" : "rgba(255,255,255,0.55)", minWidth: 56 }}>
              <div style={accent ? { width: 46, height: 46, background: gold, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: -20, border: "3px solid #060A14", boxShadow: "0 4px 18px rgba(212,175,55,0.5)" } : {}}>
                <Icon size={20} color={accent ? "#060A14" : "currentColor"} />
              </div>
              <span style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: "0.05em" }}>{label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}