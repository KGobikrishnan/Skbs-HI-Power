import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { 
  Phone, Droplets, MapPin, Drill, ArrowRight, ShieldCheck, 
  Award, CheckCircle2, Waves, Zap, Construction, Menu, X, ExternalLink, User, Wrench 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

const HERO_SLIDES = [
  {
    image: 'https://aruviborewells.com/images/flash1.jpg',
    subtitle: "Cumbum's No.1 Specialist",
    title: 'WE DRILL <br /> <span class="text-[#D4AF37]">DEEPER.</span>',
    description: 'Advanced 5" & 6.5" High-Pressure drilling for Agriculture & Industries.',
    cta: 'Book Site Survey'
  },
  {
    image: 'https://livpure.com/cdn/shop/articles/The-Hidden-Dangers-in-Your-Tap-Water-How-a-Water-Purifier-Can-Help-406023.png?v=1726726421',
    subtitle: 'Sustainable Water',
    title: 'TAP INTO <br /> <span class="text-[#D4AF37]">PURE WATER.</span>',
    description: 'Precision engineering to tap into the deepest water veins safely.',
    cta: 'Explore Services'
  },
  {
    image: 'https://i.ytimg.com/vi/FjnXmWqU95M/sddefault.jpg?v=6234d522',
    subtitle: 'Side-Bore Tech',
    title: 'WELL <br /> <span class="text-[#D4AF37]">REBIRTH.</span>',
    description: 'Rejuvenate your dry wells with our horizontal side-bore technology.',
    cta: 'View Gallery'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0ezl1Eg5rYtWOblL6eq729v33omQ0dpSJQ&s',
    subtitle: 'Smart Survey',
    title: 'SMART <br /> <span class="text-[#D4AF37]">SURVEYING.</span>',
    description: 'Scientific water point identification ensuring 100% success rate.',
    cta: 'Book Survey'
  },
  {
    image: 'https://radhakrishnaborewells.com/wp-content/uploads/2024/10/1-14.webp',
    subtitle: '24/7 Support',
    title: 'ALWAYS <br /> <span class="text-[#D4AF37]">AVAILABLE.</span>',
    description: 'Quick response for borewell cleaning and motor maintenance.',
    cta: 'Call Expert'
  }
];

const WORKS_GALLERY = [
  { img: 'https://vikalpsangam.org/wp-content/uploads/migrate/Food%20and%20water/manu_moudgil_irappa_saugli_recharged_borewell.jpg', title: 'Farm Project' },
  { img: 'https://i.ytimg.com/vi/spN1mvOzZrE/maxresdefault.jpg', title: 'Side-Bore' },
  { img: 'https://5.imimg.com/data5/QT/NC/MY-6509950/pile-boring-machine-500x500.jpg', title: 'Ind. Rig' },
  { img: 'https://4.imimg.com/data4/GQ/PP/MY-6263606/bore-well-drilling-500x500.jpg', title: 'Deep Bore' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIkp1lP6RSlGKCWEnIrvJAZ2e2jiyf0Fu1w&s', title: 'Site Check' },
  { img: 'https://images.unsplash.com/photo-1521207418485-99c705420785?q=80', title: 'Flushing' },
];

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 px-5 py-4 ${
        isScrolled || isMenuOpen ? 'bg-[#0F172A] shadow-2xl py-3' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#D4AF37] p-2 rounded-lg">
              <Drill className="text-[#0F172A]" size={20} />
            </div>
            <div className="flex flex-col text-white text-left">
              <span className="text-xl font-black tracking-tighter uppercase leading-none font-sans">SKBS</span>
              <span className="text-[8px] text-[#D4AF37] font-bold tracking-[0.2em] uppercase font-mono leading-none">Hi-Power</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9698988383" className="bg-[#D4AF37] text-[#0F172A] p-2.5 rounded-full font-black shadow-lg">
              <Phone size={14} />
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white md:hidden focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-[#0F172A] border-t border-white/10 mt-4 pb-10 flex flex-col gap-6 font-black text-white uppercase text-center"
            >
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="pt-8">Services</a>
              <a href="#works" onClick={() => setIsMenuOpen(false)}>Our Works</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION: RE-ENGINEERED TO REMOVE OVERLAP --- */}
      <section className="relative h-[100dvh] bg-[#0F172A] overflow-hidden">
        <Swiper 
          modules={[Pagination, Autoplay]} 
          speed={0} // Instantly switch slide to let Framer handle animation
          autoplay={{ delay: 5000, disableOnInteraction: false }} 
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} 
          className="h-full w-full"
        >
          {HERO_SLIDES.map((slide, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              {/* This container ensures only active slide content renders */}
              <AnimatePresence mode="wait">
                {activeSlide === index && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-full w-full flex items-center px-6"
                  >
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                      <img src={slide.image} className="w-full h-full object-cover opacity-30" alt="Borewell" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto mt-20 md:mt-0">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="max-w-3xl space-y-4 text-left"
                      >
                        <h2 className="text-[#D4AF37] font-bold tracking-[0.4em] text-[10px] uppercase">{slide.subtitle}</h2>
                        <h1 className="text-4xl md:text-8xl font-black text-white leading-tight uppercase" dangerouslySetInnerHTML={{ __html: slide.title }} />
                        <p className="text-slate-300 text-sm md:text-lg max-w-xl leading-relaxed border-l-2 border-[#D4AF37] pl-4 italic">
                          {slide.description}
                        </p>
                        <div className="pt-4">
                          <button className="w-full md:w-auto bg-[#D4AF37] text-[#0F172A] px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all">
                            {slide.cta}
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-white py-10 border-b border-slate-100 relative z-20 -mt-10 mx-6 rounded-3xl shadow-2xl md:mx-0 md:rounded-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Experience', val: '15+', icon: <Award className="text-[#D4AF37]" size={18} /> },
            { label: 'Bores Done', val: '2500+', icon: <CheckCircle2 className="text-[#D4AF37]" size={18} /> },
            { label: 'Max Depth', val: '1500ft', icon: <Waves className="text-[#D4AF37]" size={18} /> },
            { label: 'Power Tech', val: 'Hi-PSI', icon: <Zap className="text-[#D4AF37]" size={18} /> },
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-center mb-1 font-sans">{stat.icon}</div>
              <p className="text-2xl font-black text-[#0F172A] font-sans">{stat.val}</p>
              <p className="text-slate-500 font-bold text-[8px] uppercase tracking-widest font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES (IMAGE CARDS) --- */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-[#D4AF37] font-black tracking-widest text-[10px] uppercase">Technical Solutions</h2>
            <h3 className="text-4xl font-black text-[#0F172A] uppercase tracking-tighter">Our Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-[40px] h-[400px] shadow-2xl">
              <img src="https://5.imimg.com/data5/ANDROID/Default/2022/6/IP/VS/OL/94950679/product-jpeg-500x500.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Rig" />
              <div className="absolute inset-0 bg-[#0F172A]/80 p-10 flex flex-col justify-end space-y-4">
                <Construction size={40} className="text-[#D4AF37]" />
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter">6.5" Drilling</h4>
                <p className="text-slate-400 text-sm italic leading-relaxed">Heavy-duty industrial rigs capable of reaching maximum depths with high-pressure output.</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-[40px] h-[400px] shadow-2xl">
              <img src="https://i.ytimg.com/vi/spN1mvOzZrE/maxresdefault.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Well" />
              <div className="absolute inset-0 bg-white/95 p-10 flex flex-col justify-end space-y-4 text-[#0F172A]">
                <Droplets size={40} className="text-[#D4AF37]" />
                <h4 className="text-3xl font-black uppercase tracking-tighter">Side-Bore Tech</h4>
                <p className="text-slate-500 text-sm italic leading-relaxed">Rejuvenate old open wells. We drill horizontally inside to find hidden water veins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR WORKS (1X2 MOBILE GRID) --- */}
      <section id="works" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-[#D4AF37] font-black tracking-widest text-[10px] uppercase">Field Portfolio</h2>
            <h3 className="text-4xl font-black text-[#0F172A] uppercase tracking-tighter font-sans">Our Works</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {WORKS_GALLERY.map((work, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-[20px] h-48 md:h-64 shadow-xl border border-slate-100">
                <img src={work.img} className="w-full h-full object-cover" alt={work.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-[11px] text-[#D4AF37] font-black uppercase tracking-widest">{work.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GOOGLE MAPS --- */}
      <section id="location" className="py-20 px-6 bg-slate-50">
        <a href="https://maps.app.goo.gl/p5WBtg7MyCHzQNk96" target="_blank" rel="noreferrer" className="block relative group overflow-hidden rounded-[40px] shadow-2xl border-4 border-white max-w-5xl mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.12345678901!2d77.28!3d9.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07!2zQ3VtYnVtLCBUYW1pbCBOYWR1!5e0!3m2!1sen!2sin!4v1" className="w-full h-[400px] border-0 pointer-events-none filter grayscale group-hover:grayscale-0 transition-all duration-1000" loading="lazy" />
          <div className="absolute inset-0 bg-[#0F172A]/40 flex flex-col items-center justify-center group-hover:bg-transparent transition-all">
            <MapPin className="text-white mb-2" size={40} />
            <div className="bg-white text-[#0F172A] px-6 py-3 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl">Get Directions</div>
          </div>
        </a>
      </section>

      {/* --- DIGITAL VISITING CARD FOOTER --- */}
      <footer id="contact" className="bg-[#0F172A] pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[45px] p-10 md:p-16 shadow-[0_35px_60px_-15px_rgba(212,175,55,0.3)] relative overflow-hidden group">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-[#D4AF37] rounded-full rotate-45 group-hover:rotate-0 transition-all duration-700" />
                <div className="w-32 h-32 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                  <img src="https://lh3.googleusercontent.com/p/AF1QipO7h-NrBnDlQE8h93GZ7yh3NRCjtl7yMg7-UR1a=s1360-w1360-h1020-rw" className="w-full h-full object-cover filter grayscale" alt="Owner" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-4xl font-black text-[#0F172A] tracking-tighter uppercase leading-none font-sans">SKBS HI-POWER</h4>
                <p className="text-[12px] text-[#D4AF37] font-black tracking-[0.4em] uppercase leading-none font-sans">Cumbum • Theni District</p>
              </div>
              <div className="w-24 h-1 bg-slate-100 rounded-full" />
              <div className="space-y-6 w-full text-[#0F172A]">
                <div className="flex flex-col items-center">
                  <User size={18} className="text-[#D4AF37] mb-1" />
                  <span className="font-black text-sm uppercase tracking-widest">Shanker</span>
                </div>
                <div className="flex flex-col items-center">
                  <Phone size={18} className="text-[#D4AF37] mb-1" />
                  <span className="font-black text-lg">96989 88383</span>
                </div>
                <div className="flex flex-col items-center px-6">
                  <MapPin size={18} className="text-[#D4AF37] mb-1" />
                  <span className="font-bold text-[10px] text-slate-400 uppercase leading-relaxed tracking-wider">Above SBI ATM, L.F. Road, Cumbum - 625 516.</span>
                </div>
              </div>
              <a href="https://wa.me/919698988383" className="w-full bg-[#0F172A] text-white py-5 rounded-3xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all">WhatsApp Business</a>
            </div>
          </div>
          <p className="text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] mt-24 italic opacity-50">Handcrafted by Gobi Krishnan • Theni Offers</p>
        </div>
      </footer>
    </div>
  );
};

export default App;