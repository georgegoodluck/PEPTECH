import React from "react";

const TimelineItem = ({ leader, isEven, isFirst }) => {
  return (
    <div className={`relative flex flex-col w-full mb-32 items-start pl-16 
      ${isEven ? "md:flex-row" : "md:flex-row-reverse"} md:items-center md:justify-center md:pl-0`}>

      {/* 1. ACCOMPLISHMENTS SIDE */}
      <div className="w-full md:w-[42%] px-6 md:px-12 order-2 md:order-1 flex justify-center">
        <div className="achievement-glass w-full">
          <div className="gold-bracket-accent"></div>
          <h5 className="text-gold font-bold text-xs uppercase mb-2 tracking-wider">Key Accomplishments</h5>
          <p className="text-gray-300 text-base font-light leading-relaxed">
            "{leader.content}"
          </p>
        </div>
      </div>

      {/* 2. CENTRAL IMAGE NODE (On the thread) */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20">
        <div className="relative group">
          {/* DYNAMIC TAG: Current vs Past */}
          <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap shadow-lg border
            ${isFirst
              ? "bg-emerald-600 text-white border-emerald-400 animate-pulse"
              : "bg-gold text-[#001529] border-white/20"}`}>
            {isFirst ? "CURRENT INCUMBENT" : `TENURE: ${leader.year}`}
          </div>

          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gold bg-midnight overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.5)]">
            <img
              src={leader.image || "/avatar.jpg"}
              className="w-full h-full object-cover"
              alt={leader.name}
            />
          </div>
        </div>
      </div>

      {/* 3. NAME & STATUS SIDE */}
      <div className={`w-full md:w-[42%] px-6 md:px-12 order-1 md:order-2 flex flex-col 
        ${isEven ? "md:items-start" : "md:items-end text-right"}`}>
        <h4 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wide leading-tight">
          {leader.name}
        </h4>
        <p className="text-white text-xs opacity-70 font-medium tracking-widest uppercase">
          {isFirst ? "Substantive HOD" : "Former Head of Department"}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;