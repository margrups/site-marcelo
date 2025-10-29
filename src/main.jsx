import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import App from './App.jsx'
import ProjectPage from './ProjectPage.jsx'
import AboutPage from './AboutPage.jsx'
import ContactPage from './ContactPage.jsx'
import CurriculoPage from './CurriculoPage.jsx'
import './index.css'

// --- Componente do Cursor Global ---
function CustomCursor() { 
  const cursorRef = useRef(); 

  useEffect(() => { 
    const onMouseMove = (event) => { 
      if (cursorRef.current) { 
        cursorRef.current.style.left = `${event.clientX}px`; 
        cursorRef.current.style.top = `${event.clientY}px`; 
      } 
    }; 

    // Define os seletores para elementos que ativam o hover do cursor
    const hoverSelectors = 'a, button, .timeline-header, .project-sphere-mesh, .hamburger-button, .home-project-link';

    const handleMouseOver = (e) => { 
      // Adiciona a classe se o elemento ou um pai corresponder aos seletores
      if (e.target.closest(hoverSelectors)) {
         document.body.classList.add('is-hovering'); 
      } else {
         document.body.classList.remove('is-hovering'); 
      }
    };
    
    // Remove a classe se o mouse sair completamente da janela/body
    const handleMouseOutBody = (e) => {
        if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
            document.body.classList.remove('is-hovering');
        }
    };
    
    window.addEventListener('mousemove', onMouseMove); 
    // Usamos 'mouseover' no documento para capturar o evento em qualquer elemento
    document.addEventListener('mouseover', handleMouseOver);
    // Usamos 'mouseout' no body para o caso de sair da janela
    document.body.addEventListener('mouseout', handleMouseOutBody); 
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove); 
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOutBody);
      document.body.classList.remove('is-hovering'); // Limpeza final
    };
  }, []); 

  return <div id="custom-cursor" ref={cursorRef}></div>; 
}


// --- Componente Global Cursor Style ---
function GlobalCursorStyle() {
  useEffect(() => {
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';
    return () => {
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    };
  }, []);
  return null;
}

// --- Wrapper de Rotas para Animação ---
function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    // Delay ligeiramente maior para garantir que a animação termine
    const timer = setTimeout(() => {
        document.getElementById('root').classList.remove('is-fading-out');
    }, 50); // 50ms é geralmente suficiente
    return () => clearTimeout(timer);
  }, [location]); 
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/curriculo" element={<CurriculoPage />} />
    </Routes>
  );
}

// --- Renderização ---
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCursorStyle />
      <CustomCursor />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)