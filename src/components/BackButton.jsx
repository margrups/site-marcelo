import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Aciona a animação de fade-out e navega após o delay.
 * @param {string | number} to - Destino da navegação (-1 para voltar).
 * @param {Function} navigate - Função navigate do react-router-dom.
 */
function handlePageTransition(to, navigate) {
  // Garante que não haja transições múltiplas ocorrendo
  const rootEl = document.getElementById('root');
  if (rootEl.classList.contains('is-fading-out')) return; 

  rootEl.classList.add('is-fading-out');
  setTimeout(() => {
    if (to === -1) {
      navigate(-1); 
    } else {
      navigate(to); 
    }
    // A remoção da classe agora é feita pelo AppRoutes
  }, 400); // Duração da animação fadeOutPage no CSS
}

export default function BackButton({ to = -1, text = 'Voltar' }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    handlePageTransition(to, navigate);
  };

  return (
    <a href="#" className="back-link" onClick={handleClick}>
      {text}
    </a>
  );
}

// Exporta a função para ser usada em outros links
export { handlePageTransition };