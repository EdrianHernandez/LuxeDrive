
import React from 'react';

const TrustBar: React.FC = () => {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Porsche_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png'
  ];

  return (
    <section className="py-20 bg-[#0f0f0f] border-y border-[#ffffff05]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20">
        <div className="flex items-center gap-8 bg-[#0a0a0a] px-10 py-6 rounded-3xl border border-[#ffffff05] shadow-xl">
          <div className="flex -space-x-4">
            {[1,2,3,4].map(i => (
              <img 
                key={i} 
                src={`https://picsum.photos/seed/${i+20}/100/100`} 
                className="w-14 h-14 rounded-full border-4 border-[#0f0f0f] grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer shadow-lg" 
                alt="VIP Client"
              />
            ))}
          </div>
          <div>
            <div className="flex text-[#d4af37] text-[10px] gap-1 mb-2">
              {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
            </div>
            <p className="text-[11px] font-black uppercase tracking-widest text-gray-300">4.9/5 Elite Rating</p>
            <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mt-1">From 2,000+ Verified VIPs</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-20 grayscale invert transition-all duration-700 hover:opacity-40">
          {logos.map((logo, idx) => (
            <img 
              key={idx} 
              src={logo} 
              alt="Partner Brand" 
              className="h-8 md:h-11 w-auto object-contain transform transition-transform hover:scale-110 duration-500" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
