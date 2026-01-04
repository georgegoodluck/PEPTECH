import React from "react";
import { useEffect, useState } from "react";
import publications from "./publicationsData";
import AllPublications from "./AllPublication";
import AllPublicationsData from "./AllPublicationsData";

import "./style.css";

const Publications = () => {
  // PUBLICATION COUND DOWN FUNCTIONS
  useEffect(() => {
    const counters = document.querySelectorAll(".status-item span");

    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const speed = 500;
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      updateCount();
    };
    counters.forEach((counter) => animateCounter(counter));
  }, []);
  
  // JOURNAL CAROUSEL
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setItemsPerView(1);
      } else if (width <= 950) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleItems = publications.slice(currentIndex, currentIndex + itemsPerView);

  const next = () => {
    if (currentIndex + itemsPerView < publications.length) {
      setDirection('next');
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setDirection('');
      }, 50);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setDirection('prev');
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setDirection('');
      }, 50);
    }
  };

  return (
    <>
    <main className="publications">
      <section
        className="pub-hero"
        style={{ backgroundImage: `url(/images/pbhero.jpg)` }}
      >
        <div className="pub-overlay"></div>
        <div className="flex pub-hero-box">
          <div className="pub-hero-content">
            <h1>
              Advancing Physics Through
              <br />
              Publications
            </h1>
            <div className="pub-description">
              <p>
                Explore our department's journals, papers, publications and research driving
                scientific progress and innovation. 
              </p>
            </div>
          </div>
          <button className="watch-tour-btn flex" aria-label="Watch Tour">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
            </svg>
            <span>More</span>
          </button>
        </div>
      </section>
      <div className="pub-intro">
        <div className="pub-images">
          <img src="/images/pb-2.jpg" alt="Building" className="img-one" />
          <img src="/images/pb-1.jpg" alt="Students" className="img-two" />
        </div>

        <div className="pub-text">
          <h2>Our Publications</h2>
          <p>
            The Physics Department publishes high-quality research in reputable
            journals, contributing to scientific knowledge and real-world
            applications. high-quality research in reputable journals,
            contributing to scientific knowledge and real-world
            applications.high-quality research in reputable journals,
            contributing to scientific knowledge and real-world applications.
          </p>
        </div>
      </div>
      <div className="pub-status" id="pub-status">
        <div className="status-item">
          <h3>
            <span data-target="10000">0</span>+
          </h3>
          <p>Documents</p>
        </div>

        <div className="status-item">
          <h3>
            <span data-target="300">0</span>+
          </h3>
          <p>Publications</p>
        </div>
        <div className="status-item">
          <h3>
            <span data-target="25">0</span>+
          </h3>
          <p>Research Areas</p>
        </div>
      </div>

      {/* JOURNAL CAROUSEL */}
      <section className="pub-carousel">
        <div className={`pub-track ${direction}`}>
          {visibleItems.map((item) => (
            <div className="pub-card" key={item.id}>
              <div className="pub-header">
                <span>{item.type}</span>
                <span>{item.year}</span>
              </div>
              <h3 className="pub-title">{item.title}</h3>
              {item.source && <p className="pub-source">{item.source}</p>}
              <p className="pub-authors">{item.authors}</p>
            </div>
          ))}
        </div>
        <div className="pub-arrows flex">
          <button className="pubarrow-btn" onClick={prev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#2e2e2e"
            >
              <path d="M400-80 0-480l400-400 61 61.67L122.67-480 461-141.67 400-80Z" />
            </svg>
          </button>
          <button className="pubarrow-btn" onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#2e2e2e"
            >
              <path d="m309.67-81.33-61-61.67L587-481.33 248.67-819.67l61-61.66 400 400-400 400Z" />
            </svg>
          </button>
        </div>
      </section>

      <AllPublications publications={AllPublicationsData} />
    </main>
    </>

  );
};

export default Publications;