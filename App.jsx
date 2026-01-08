import React from 'react';
import FleetCarousel from './components/FleetCarousel';
import BookingForm from './components/BookingForm';
import FeaturesList from './components/FeaturesList';
import TrustBar from './components/TrustBar';
import SmartAssistant from './components/SmartAssistant';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d4af37] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#ffffff0a]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#d4af37] flex items-center justify-center rounded-lg rotate-12 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <i className="fa-solid fa-car-side text-black text-xl -rotate-12"></i>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">Luxe<span className="text-[#d4af37]">Drive</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#d4af37] transition-colors">Fleet</a>
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#d4af37] transition-colors">Services</a>
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#d4af37] transition-colors">Concierge</a>
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#d4af37] transition-colors">Contact</a>
          </div>

          <button className="bg-white text-black px-7 py-2.5 rounded-full text-xs font-bold uppercase hover:bg-[#d4af37] transition-all transform hover:scale-105 active:scale-95">
            Client Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 grayscale scale-105"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12">
          <h4 className="text-[#d4af37] font-bold tracking-[0.6em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 text-sm">Premier Experience</h4>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Beyond <br />
            <span className="text-[#d4af37]">Transport.</span>
          </h1>
          <p className="max-w-lg text-lg text-gray-400 mb-12 leading-relaxed animate-in fade-in duration-1000 delay-500">
            Elevate every journey with our curated collection of the world's most prestigious automobiles. Precision-engineered luxury at your command.
          </p>
          <div className="flex flex-wrap gap-5 animate-in fade-in duration-1000 delay-700">
            <button className="bg-[#d4af37] text-black font-black px-12 py-5 rounded-full hover:bg-white transition-all uppercase text-xs tracking-[0.2em] shadow-[0_15px_40px_rgba(212,175,55,0.25)] hover:-translate-y-1">
              Explore Fleet
            </button>
            <button className="border border-white/20 hover:border-white px-12 py-5 rounded-full transition-all uppercase text-xs font-bold tracking-[0.2em] backdrop-blur-sm hover:bg-white/5">
              Our Vision
            </button>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <span className="text-[9px] uppercase tracking-[0.5em] font-black">Scroll Down</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="relative">
        <BookingForm />
        <TrustBar />
        <FleetCarousel />
        <SmartAssistant />
        <FeaturesList />
        
        {/* Call to Action Section */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#d4af37] via-[#f1d06e] to-[#d4af37] rounded-[3.5rem] p-12 md:p-20 text-black relative overflow-hidden group shadow-2xl">
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <i className="fa-solid fa-car-rear text-[350px] absolute -right-24 -top-24 rotate-12"></i>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight">Ready to take the wheel?</h2>
              <p className="text-lg md:text-xl font-medium mb-10 opacity-90 max-w-lg">
                Join our exclusive club of members and get priority access to new fleet additions and dedicated concierge service 24/7.
              </p>
              <button className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-2xl hover:bg-[#1a1a1a]">
                Become a Member
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-[#ffffff05] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-[#d4af37] flex items-center justify-center rounded rotate-12">
                  <i className="fa-solid fa-car-side text-black text-sm -rotate-12"></i>
                </div>
                <span className="text-xl font-black uppercase italic tracking-tighter">LuxeDrive</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-10 leading-relaxed text-sm">
                The global benchmark for luxury automobile rentals. We combine an elite fleet with unparalleled concierge service to redefine mobility for the discerning traveler.
              </p>
              <div className="flex gap-5">
                {[ 'facebook', 'instagram', 'x-twitter', 'linkedin' ].map(social => (
                  <a key={social} href="#" className="w-11 h-11 rounded-full border border-[#ffffff10] flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-all bg-[#ffffff05]">
                    <i className={`fa-brands fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-[0.2em] mb-10 text-[11px] text-[#d4af37]">Services</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Chauffeur Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wedding Packages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Long Term Lease</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-[0.2em] mb-10 text-[11px] text-[#d4af37]">Legal</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rental Requirements</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance Details</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-[0.2em] mb-10 text-[11px] text-[#d4af37]">Contact</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><span className="text-white font-medium italic">General:</span> hello@luxedrive.co</li>
                <li><span className="text-white font-medium italic">VIP Line:</span> +1 (800) LUXE-DRV</li>
                <li><span className="text-white font-medium italic">HQ:</span> Beverly Hills, CA</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-[#ffffff05] flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] font-black text-gray-600">
            <p>&copy; 2024 LuxeDrive International. All Rights Reserved.</p>
            <p className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></span>
              Designed for the Extraordinary
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
