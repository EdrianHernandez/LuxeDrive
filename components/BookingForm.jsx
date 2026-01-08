import React, { useState } from 'react';
import { LOCATIONS } from '../constants';

const BookingForm = () => {
  const [details, setDetails] = useState({
    pickupLocation: LOCATIONS[0],
    returnLocation: LOCATIONS[0],
    pickupDate: '',
    returnDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for cars in ${details.pickupLocation} from ${details.pickupDate} to ${details.returnDate}`);
  };

  const inputClass = "booking-input w-full bg-[#151515] border border-[#222] text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#d4af37] transition-all appearance-none text-sm font-medium hover:bg-[#1a1a1a]";
  const labelClass = "block text-[10px] font-black text-gray-500 uppercase tracking-[0.25em] mb-3 ml-1";

  return (
    <section className="relative -mt-20 z-30 px-6">
      <div className="max-w-7xl mx-auto">
        <form 
          onSubmit={handleSubmit}
          className="bg-[#0f0f0f] p-10 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] border border-[#ffffff0a] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-end"
        >
          <div className="flex flex-col">
            <label className={labelClass}>Pickup Location</label>
            <div className="relative group">
              <select 
                value={details.pickupLocation}
                onChange={(e) => setDetails({...details, pickupLocation: e.target.value})}
                className={inputClass}
              >
                {LOCATIONS.map(loc => <option key={loc} value={loc} className="bg-[#0f0f0f]">{loc}</option>)}
              </select>
              <i className="fa-solid fa-location-dot absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#d4af37] pointer-events-none text-xs transition-colors"></i>
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelClass}>Return Location</label>
            <div className="relative group">
              <select 
                value={details.returnLocation}
                onChange={(e) => setDetails({...details, returnLocation: e.target.value})}
                className={inputClass}
              >
                {LOCATIONS.map(loc => <option key={loc} value={loc} className="bg-[#0f0f0f]">{loc}</option>)}
              </select>
              <i className="fa-solid fa-location-dot absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#d4af37] pointer-events-none text-xs transition-colors"></i>
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelClass}>Pickup Date</label>
            <div className="relative">
              <input 
                type="date" 
                className={`${inputClass} custom-date-input`}
                value={details.pickupDate}
                onChange={(e) => setDetails({...details, pickupDate: e.target.value})}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className={labelClass}>Return Date</label>
            <div className="relative">
              <input 
                type="date" 
                className={`${inputClass} custom-date-input`}
                value={details.returnDate}
                onChange={(e) => setDetails({...details, returnDate: e.target.value})}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <button 
              type="submit"
              className="group relative w-full bg-[#d4af37] hover:bg-[#e6c14d] text-black font-black py-4 px-6 rounded-full transition-all duration-500 shadow-[0_15px_30px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(212,175,55,0.6)] uppercase text-[10px] tracking-[0.3em] active:scale-[0.97] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Search Cars
                <i className="fa-solid fa-chevron-right text-[8px] group-hover:translate-x-1 transition-transform"></i>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </form>
      </div>
      <style>{`
        .custom-date-input::-webkit-calendar-picker-indicator {
          filter: invert(1) brightness(0.7) sepia(1) saturate(5) hue-rotate(10deg);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default BookingForm;
