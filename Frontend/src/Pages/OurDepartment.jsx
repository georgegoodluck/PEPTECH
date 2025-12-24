import React from "react";
import "./OurDepartment.css";
import avatar from "/avatar.jpg";
import { leaders } from "../Components/leadersData";
import TimelineItem from "../Components/TimelineItem";

const OurDepartment = () => {
  return (
    <div className="department-container bg-[#121212] text-white py-20">
      {/* Containerized History Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32">
        <h1 className="text-7xl mb-10 font-bold tracking-tighter">
          Our History
        </h1>

        <div className="history-grid">
          <div className="main-image-wrapper">
            <img
              src={avatar}
              alt="Portrait of Department Leadership"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex-1">
            <p className="history-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni eos rerum vero recusandae repudiandae ea fuga quod itaque quia! Quibusdam non totam blanditiis minus nisi molestiae. Illo laborum asperiores hic ab animi molestias voluptate modi dicta facilis minus, quia esse nostrum similique corrupti. Maxime error numquam nulla, blanditiis eos ducimus voluptas vero minima id architecto odit, voluptatem similique doloribus expedita reiciendis. Magni quisquam, corporis pariatur neque, ipsam provident quae debitis eius incidunt voluptates aspernatur quia? Aut, illum neque incidunt perferendis architecto dolor perspiciatis vero tenetur vitae corrupti in iusto!
            </p>
          </div>
        </div>
      </section>

      {/* Past Leadership - Vertical Alternating Timeline */}
      <section className="relative">
        <h2 className="section-title text-5xl font-medium mb-16 text-center">
          Past Leadership
        </h2>

        <div className="vertical-timeline-container">
          {/* Central Line Axis */}
          <div className="timeline-center-line"></div>

          <div className="timeline-items-vertical">
            {leaders.map((leader, index) => (
              <TimelineItem
                key={leader.id}
                leader={leader}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurDepartment;
