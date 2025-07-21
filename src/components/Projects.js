import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+Management+App",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Weather+Dashboard",
      technologies: ["JavaScript", "HTML/CSS", "Chart.js", "OpenWeatherMap API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies, featuring smooth animations and clean design.",
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Portfolio+Website",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Blog+Platform",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "A dashboard for managing social media accounts with analytics, scheduling, and content management features.",
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Social+Media+Dashboard",
      technologies: ["React", "Node.js", "Express", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card featured">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="btn btn-small" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className="btn btn-small btn-outline" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 