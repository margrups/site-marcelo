import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './data.js';
import BackButton from './components/BackButton.jsx';

// Componente do Carrossel (Adaptação para Imagens)
function ImageCarousel({ images, projectName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Agora 'images' é sempre um array de strings (caminhos de imagem)
  const imageSources = images || []; // Garante que é um array

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={goToPrevious}>&lt;</button>
      <button className="carousel-arrow right" onClick={goToNext}>&gt;</button>
      
      {imageSources.map((src, index) => (
        <div
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          {/* Renderiza a tag <img> para cada caminho de imagem */}
          <img 
            src={src} // Caminho da imagem de data.js (ex: "/images/charneira-01.jpg")
            alt={`Imagem ${index + 1} do projeto ${projectName}`} 
            className="carousel-image" 
            loading="lazy" // Otimização
          />
        </div>
      ))}
    </div>
  );
}


export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.find((p) => p.slug === slug);
    setProject(currentProject);
    window.scrollTo(0, 0); // Rola para o topo ao carregar
  }, [slug]);

  if (!project) { 
    // Mostra um container vazio enquanto carrega para a animação de página funcionar
    return <div className="page-container"></div>; 
  }

  // Divide a descrição longa em parágrafos
  const descriptionParagraphs = project.longDescription
    .split('\n') // Divide por quebras de linha
    .filter(p => p.trim() !== ''); // Remove parágrafos vazios

  return (
    <div className="page-container project-page"> 
      <BackButton to="/" /> 
      {/* <HamburgerMenu /> foi removido desta página */}
      
      <div className="content-wrapper">
        <header className="project-header">
          <h1>{project.name}</h1>
        </header>
        
        <section className="project-description">
          {/* Mapeia os parágrafos da descrição */}
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
        
        {/* Botão de Link (se existir) */}
        {project.link && (
          <div className="project-link-container">
             <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
               Ver Produto
             </a>
          </div>
        )}

        <section className="project-skills">
          <h3>Soft Skills</h3> {/* Título "Soft Skills" conforme seu texto */ }
          <ul>
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        
        <section className="project-carousel">
          <ImageCarousel images={project.images} projectName={project.name} />
        </section>
      </div>
    </div>
  );
}