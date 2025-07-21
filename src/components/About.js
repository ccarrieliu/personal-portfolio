import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Hello! I'm a passionate developer who loves creating amazing digital experiences.</h3>
              <p>
                I'm a full-stack developer with a passion for building beautiful, functional, 
                and user-centered digital experiences. With a strong foundation in both front-end 
                and back-end development, I enjoy creating software that solves real-world problems 
                and delights users.
              </p>
            </div>
            
            <div className="about-details">
              <div className="detail-item">
                <h4>Experience</h4>
                <p>3+ years of professional development experience</p>
              </div>
              
              <div className="detail-item">
                <h4>Education</h4>
                <p>Bachelor's in Computer Science</p>
              </div>
              
              <div className="detail-item">
                <h4>Location</h4>
                <p>Based in [Your City], [Your Country]</p>
              </div>
              
              <div className="detail-item">
                <h4>Interests</h4>
                <p>Web Development, UI/UX Design, Open Source</p>
              </div>
            </div>
            
            <div className="about-values">
              <h4>What I Value</h4>
              <ul>
                <li>Clean, maintainable code</li>
                <li>User-centered design</li>
                <li>Continuous learning</li>
                <li>Collaboration and teamwork</li>
                <li>Performance and accessibility</li>
              </ul>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 