
import React, { useState } from 'react';
import { getCarRecommendation } from '../services/geminiService';

const SmartAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{carName: string, reasoning: string, styleMatch: string} | null>(null);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const result = await getCarRecommendation(query);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#111] p-12 md:p-16 rounded-[4rem] border border-[#ffffff08] shadow-3xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 p-8 opacity-[0.03]">
            <i className="fa-solid fa-microchip text-[250px] rotate-12"></i>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="p-3 bg-gradient-to-br from-[#d4af37] to-[#f1d06e] rounded-2xl shadow-lg">
                <i className="fa-solid fa-sparkles text-black text-lg"></i>
              </span>
              <div>
                <h3 className="text-xs font-black text-[#d4af37] uppercase tracking-[0.4em] mb-1">Intelligent Search</h3>
                <h2 className="text-3xl font-black uppercase tracking-tight italic">AI Concierge Assistant</h2>
              </div>
            </div>
            
            <p className="text-gray-400 mb-12 max-w-xl text-sm leading-relaxed">Describe your journey, lifestyle, or preference, and our neural engine will curate the absolute perfect vehicle from our prestigious collection.</p>
            
            <div className="flex flex-col md:flex-row gap-5 mb-10">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="Describe your perfect trip... (e.g. 'A sunset drive through Malibu')"
                className="flex-1 bg-[#0a0a0a] border border-[#ffffff10] rounded-2xl px-8 py-5 focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-700 text-sm font-medium"
              />
              <button 
                onClick={handleAsk}
                disabled={loading}
                className="bg-[#d4af37] text-black font-black px-12 py-5 rounded-2xl hover:bg-white transition-all disabled:opacity-50 uppercase text-[11px] tracking-widest shadow-xl active:scale-95"
              >
                {loading ? 'Analyzing...' : 'Curate Match'}
              </button>
            </div>

            {recommendation && (
              <div className="bg-[#0a0a0a] border border-[#d4af37]/20 p-10 rounded-[2.5rem] animate-in fade-in slide-in-from-bottom-6 duration-700 shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h4 className="text-[#d4af37] font-black text-2xl uppercase tracking-wider italic">{recommendation.carName}</h4>
                  <span className="text-[9px] font-black bg-[#d4af37]/10 text-[#d4af37] px-4 py-1.5 rounded-full border border-[#d4af37]/20 uppercase tracking-widest">
                    Match Strength: {recommendation.styleMatch}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-3xl border-l-2 border-[#d4af37]/30 pl-8 italic">
                  "{recommendation.reasoning}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartAssistant;
