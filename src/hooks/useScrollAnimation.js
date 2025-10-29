import { useEffect, useRef, useState } from 'react';

/**
 * Hook customizado para detectar quando um elemento entra na tela (viewport).
 * @param {Object} options - Opções do IntersectionObserver (ex: { threshold: 0.1, triggerOnce: true })
 * @returns [ref, isVisible] - A ref para anexar ao elemento e um booleano de visibilidade.
 */
export const useScrollAnimation = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Se o elemento estiver interceptando (visível)
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Para de observar após a primeira vez (animação só acontece uma vez)
        observer.unobserve(entry.target);
      }
    }, options);

    const currentElement = ref.current; // Guarda a referência atual

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Função de limpeza
    return () => {
      // Verifica se a referência ainda existe antes de desconectar
      if (currentElement) { 
        observer.unobserve(currentElement);
      }
    };
  // Adiciona 'options' ao array de dependências para recriar o observer se as opções mudarem
  }, [ref, options]); 

  return [ref, isVisible];
};