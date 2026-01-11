import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/OurDepartment.css";
import { leaders } from "../Components/leadersData";
import TimelineItem from "../Components/TimelineItem";

const OurDepartment = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Simple intersection observer for scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="department-container">
      <section id="history" className="max-w-7xl mx-auto px-6 mb-40 pt-10 scroll-mt-24">
        <h1 className="text-5xl md:text-7xl mb-12 font-bold tracking-tight text-white">
          The Journey <span className="text-gold">So Far</span>
        </h1>

        <div className="history-grid">
          <div className="main-image-wrapper">
            <img src="/avatar.jpg" className="w-full h-full object-cover" alt="Department History" />
          </div>

          <div className="history-text-container reveal-on-scroll">
            <h3 className="text-gold font-bold text-2xl mb-4 uppercase tracking-wider">How it all started</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              In the spirit of excellence that our institution is known for,
              this department was established to be a cornerstone of innovation.
              From the humble beginnings of our first lecture hall to the world-class
              research we do today, we have always stood tall. We don't just teach;
              we build the future leaders of this nation.
            </p>
          </div>
        </div>
      </section>

      <section id="leadership" className="relative pt-10 pb-40">
        <div className="text-center mb-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest">
            Past <span className="text-gold">HOD's</span>
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
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