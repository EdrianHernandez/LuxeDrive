
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesList: React.FC = () => {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h3 className="text-[#d4af37] font-black tracking-[0.4em] uppercase mb-6 text-xs">Uncompromising Standards</h3>
            <h2 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter italic uppercase">Extraordinary <br />Service Included</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed pb-2">
            We don't just rent cars. We provide the key to extraordinary experiences, supported by industry-leading concierge services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="feature-card p-12 bg-[#111] rounded-[3rem] border border-[#ffffff05] hover:bg-[#151515] hover:border-[#ffffff0a] transition-all group relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                <i className={`fa-solid ${feature.icon} text-[180px]`}></i>
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-10 border border-[#ffffff0a] group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-500 shadow-xl group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] group-hover:-translate-y-2">
                <i className={`fa-solid ${feature.icon} text-2xl text-[#d4af37] group-hover:text-black transition-colors`}></i>
              </div>
              <h4 className="text-xl font-black mb-6 tracking-tight uppercase italic">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
