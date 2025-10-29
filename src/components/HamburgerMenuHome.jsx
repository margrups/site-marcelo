import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data.js'; 
import { handlePageTransition } from './BackButton.jsx'; 

export default function HamburgerMenuHome() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    e.stopPropagation(); 
    setIsOpen(false); 
    setTimeout(() => {
      handlePageTransition(to, navigate);
    }, 150); 
  };

  // Calcula delay máximo para animação de fechar
  const maxCloseDelay = (projects.length - 1) * 0.05;

  return (
    <>
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Abrir menu de projetos"
        aria-expanded={isOpen}
      >
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <nav 
        className={`home-project-nav ${isOpen ? 'open' : ''}`}
        // Delay na transição de visibilidade/opacidade ao fechar
        style={{ transitionDelay: isOpen ? '0.1s' : `${maxCloseDelay + 0.1}s` }} 
      >
        <ul className="home-project-list">
          {projects.map((project, index) => (
            <li 
              key={project.slug || index} // Adiciona index como fallback
              // Delay cascata para abrir e reverso para fechar
              style={{ transitionDelay: `${isOpen ? index * 0.05 + 0.1 : (projects.length - 1 - index) * 0.05}s` }} 
            >
              <a 
                href={`/project/${project.slug}`} 
                className="home-project-link"
                onClick={(e) => handleLinkClick(e, `/project/${project.slug}`)}
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}