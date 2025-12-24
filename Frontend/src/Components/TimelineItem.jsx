import React from "react";

const TimelineItem = ({ leader, isEven }) => {
  return (
    <div
      className={`timeline-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* 1. Card Side */}
      <div className="timeline-card-col">
        <div
          className={`timeline-card ${
            isEven ? "md:text-right" : "md:text-left"
          } ml-8 md:ml-0`}
        >
          <div className="bracket-accent"></div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {leader.content}
          </p>
        </div>
      </div>

      {/* 2. Central Icon - Locked in Absolute position */}
      <div className="timeline-icon-container">
        <div className="timeline-icon-circle">
          <span>🕒</span>
        </div>
      </div>

      {/* 3. Year/Name Side */}
      <div className="timeline-year-col hidden md:block">
        <h3
          className={`year-label-text text-gold ${
            isEven ? "text-left" : "text-right"
          } text-3xl font-bold`}
        >
          {leader.year}
        </h3>
        <p
          className={`text-2xl font-extrabold text-white mt-2 ${
            isEven ? "text-left" : "text-right"
          }`}
        >
          {leader.name}
        </p>
      </div>

      {/* Mobile Year (Shown only on small screens) */}
      <div className="md:hidden absolute -top-7.5 left-16">
        <span className="text-gold font-bold text-xl">{leader.year}</span>
      </div>
    </div>
  );
};

export default TimelineItem;
