import React from "react";

const TimelineItem = ({ leader, isEven, isFirst }) => {
  return (
    <div className={`timeline-item-container relative flex flex-col w-full mb-24 items-start pl-16 
      ${isEven ? "md:flex-row" : "md:flex-row-reverse"} md:items-center md:justify-center md:pl-0 reveal-on-scroll`}>

      {/* Accomplishments */}
      <div className="w-full md:w-[42%] px-6 md:px-12 order-2 md:order-1 flex justify-center">
        <div className="achievement-glass w-full">
          <h5 className="text-gold font-bold text-xs uppercase mb-2">Key Accomplishments</h5>
          <p className="text-gray-300 text-base leading-relaxed italic">
            "{leader.content}"
          </p>
        </div>
      </div>

      {/* Center Image Node */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20">
        <div className="relative">
          <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded shadow-lg border text-[10px] font-bold whitespace-nowrap
            ${isFirst ? "bg-emerald-700 text-white border-emerald-500" : "bg-gold text-midnight border-white/20"}`}>
            {isFirst ? "CURRENT INCUMBENT" : leader.year}
          </div>

          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gold bg-midnight overflow-hidden shadow-lg">
            <img src={leader.image || "/avatar.jpg"} className="w-full h-full object-cover" alt={leader.name} />
          </div>
        </div>
      </div>

      {/* Name/Title */}
      <div className={`w-full md:w-[42%] px-6 md:px-12 order-1 md:order-2 flex flex-col ${isEven ? "md:items-start" : "md:items-end text-right"}`}>
        <h4 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wide">{leader.name}</h4>
        <p className="text-white text-xs opacity-70 font-medium tracking-widest uppercase mt-1">
          {isFirst ? "Substantive HOD" : "Former Head of Department"}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;