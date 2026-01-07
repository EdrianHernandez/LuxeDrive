
import React, { useRef, useState, useEffect } from 'react';
import { FLEET } from '../constants';

const SkeletonCard: React.FC = () => (
  <div className="flex-shrink-0 w-[420px] bg-[#151515] rounded-[2.5rem] overflow-hidden border border-[#ffffff0a] animate-pulse">
    <div className="h-64 bg-[#1a1a1a]"></div>
    <div className="p-10">
      <div className="h-8 bg-[#1a1a1a] rounded-lg w-3/4 mb-6"></div>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="h-14 bg-[#1a1a1a] rounded-xl"></div>
        <div className="h-14 bg-[#1a1a1a] rounded-xl"></div>
        <div className="h-14 bg-[#1a1a1a] rounded-xl"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-3 bg-[#1a1a1a] rounded w-10"></div>
          <div className="h-6 bg-[#1a1a1a] rounded w-20"></div>
        </div>
        <div className="h-12 bg-[#1a1a1a] rounded-xl w-32"></div>
      </div>
    </div>
  </div>
);

const FleetCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <h4 className="text-[#d4af37] font-bold tracking-[0.4em] uppercase mb-4 text-xs">Curated Collection</h4>
          <h2 className="text-5xl font-black uppercase tracking-tighter italic">The Elite Fleet</h2>
          <div className="h-1 w-20 bg-[#d4af37] mt-6"></div>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full border border-[#ffffff10] flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-all bg-[#ffffff05]"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full border border-[#ffffff10] flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-all bg-[#ffffff05]"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-16 px-[calc((100vw-min(1280px,95vw))/2)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {isLoading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <SkeletonCard key={`skeleton-${idx}`} />
          ))
        ) : (
          FLEET.map((car) => (
            <div 
              key={car.id} 
              className="car-card flex-shrink-0 w-[420px] snap-center bg-[#111] rounded-[2.5rem] overflow-hidden border border-[#ffffff0a] group hover:border-[#d4af37]/30 transition-all duration-700 shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-[#d4af37] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-[#d4af37]/20">
                  {car.category}
                </div>
              </div>
              
              <div className="p-10">
                <h3 className="text-3xl font-black mb-6 italic tracking-tight">{car.name}</h3>
                
                <div className="grid grid-cols-3 gap-3 mb-10">
                  <div className="text-center p-4 rounded-2xl bg-[#0a0a0a] border border-[#ffffff05]">
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1.5">Engine</p>
                    <p className="text-[11px] font-bold text-gray-200">{car.specs.engine}</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-[#0a0a0a] border border-[#ffffff05]">
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1.5">0-100</p>
                    <p className="text-[11px] font-bold text-gray-200">{car.specs.acceleration}</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-[#0a0a0a] border border-[#ffffff05]">
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1.5">Seats</p>
                    <p className="text-[11px] font-bold text-gray-200">{car.specs.seats}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-[#ffffff05]">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Pricing From</p>
                    <p className="text-3xl font-black text-[#d4af37]">${car.pricePerDay}<span className="text-sm font-normal text-gray-500 ml-1 italic">/day</span></p>
                  </div>
                  <button className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-[#d4af37] transition-all uppercase text-[11px] tracking-widest shadow-xl hover:-translate-y-1">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default FleetCarousel;
