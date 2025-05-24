'use client';

import { SITE_CONSTANT, SKILLS } from "@/lib/constants";

export const AboutSection = () => {
  return (
    <>
      <style>{`
        .about-section {
          padding: 80px 20px;
          background: #ffffff;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .profile-pic {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 20px;
          border: 4px solid #3b82f6;
        }

        .about-section h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 10px;
          color: #1f2937;
        }

        .about-section p {
          max-width: 700px;
          margin: 0 auto 30px;
          font-size: 1.1rem;
          color: #4b5563;
          line-height: 1.7;
        }

        .cta-button {
          display: inline-block;
          margin: 20px 10px 40px;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(90deg, #3b82f6, #6366f1);
          border: none;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 20px;
        }

        .skill-item {
          width: 50px;
          height: 50px;
          background: #f3f4f6;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 8px;
        }

        .skill-item:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);
        }

        .skill-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>

      <section className="about-section">

        <h2>About Me</h2>
        <p>
          Hi! I'm <strong>{SITE_CONSTANT.name}</strong>, a passionate web & mobile developer.
          I love building beautiful, modern, and functional applications using the best tools in the industry.
        </p>

        <a href="/cv.pdf" className="cta-button" target="_blank">Download CV</a>
        <a href="#contact" className="cta-button">Contact Me</a>

        <div className="skills-container">
          {SKILLS.map((icon, index) => (
            <div className="skill-item" key={index}>
              <img src={icon} alt={`Skill ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
