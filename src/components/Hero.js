import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Carrie Liu</span>
            </h1>
            <h2 className="hero-subtitle">
              Biomedical Engineering Student @ University of Waterloo
            </h2>
            <p className="hero-description">
            I’m passionate about combining software and mechanical expertise to drive innovative technological solutions. 
            With extensive experience in prototyping and design, I focus on creating practical, impactful solutions across a 
            range of applications. 
            </p>
            <div className="hero-buttons">
            <a 
                href="/personal-portfolio/resume.pdf" 
                className="btn btn-resume" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <button 
                className="btn"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image">
              <div className="profile-placeholder">
                <div className="profile-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 