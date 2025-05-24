"use client"

import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200);
  }, []);

  return (
    <>
     

      <section className="hero">
        <div className="hero-text">
          <h1>
            Hi, I’m <span>Salman</span>
          </h1>
          <p>
            A frontend-focused developer with a passion for clean UI and smooth user experiences. I build modern websites using React, Next.js, and Tailwind CSS.
          </p>
          <button className="cta-button" onClick={() => window.location.href = "#projects"}>
            🚀 View My Work
          </button>
        </div>
        <div className="hero-image">
           <img src="/JPG/animasi.png" alt="Profile" />
        </div>
      </section>
    </>
  );
};
