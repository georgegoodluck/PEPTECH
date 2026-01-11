import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/OurDepartment.css";
import { leaders } from "../Components/leadersData";
import TimelineItem from "../Components/TimelineItem";

const OurDepartment = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="department-container">
      {/* HISTORY SECTION */}
      <section id="history" className="max-w-5xl mx-auto px-6 mb-40 pt-10 scroll-mt-24">
        <h1 className="text-6xl md:text-7xl mb-12 font-bold tracking-tighter text-white">
          The Journey <span className="text-gold">So Far</span>
        </h1>

        <div className="history-grid">
          <div className="main-image-wrapper">
            <img src="/avatar.jpg" className="w-full h-full object-cover" alt="History" />
          </div>

          <div className="history-text-container">
            <h3 className="text-gold font-bold text-2xl mb-4 uppercase tracking-wider">How it all started</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              In the spirit of excellence that our great institution is known for,
              this department was established to be a cornerstone of innovation.
              From the humble beginnings of our first lecture hall to the world-class
              research we do today, we have always stood tall. We don't just teach;
              we build the future leaders of this nation.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP LEGACY SECTION */}
      <section id="leadership" className="relative pt-10 pb-40 scroll-mt-24">
        <div className="text-center mb-40">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-[0.2em]">
            Past <span className="text-gold">HOD's</span>
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="timeline-center-line"></div>

          <div className="flex flex-col">
            {leaders.map((leader, index) => (
              <TimelineItem
                key={leader.id}
                leader={leader}
                isEven={index % 2 === 0}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurDepartment;