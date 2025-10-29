import React, { useEffect } from 'react';
import BackButton from './components/BackButton.jsx';

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="page-container about-page-container"> 
      <BackButton /> 
      <div className="content-wrapper about-page">
        <h1>Marcelo Grupenmacher</h1>
        <p>Designer industrial apaixonado pela interseção entre forma, função e tecnologia. Meu trabalho foca em criar objetos e experiências que não apenas resolvem problemas, mas também evocam emoção e se integram de forma significativa ao cotidiano das pessoas.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/margrupss/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          <a href="https://www.linkedin.com/in/marcelo-grupenmacher/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="https://www.behance.net/marcelogrupenmacher" target="_blank" rel="noopener noreferrer" className="social-link">Behance</a>
        </div>
      </div>
    </div>
  );
}