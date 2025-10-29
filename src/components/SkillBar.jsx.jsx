import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SkillBar({ label, percentage, color = 'var(--text-color)' }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.5, triggerOnce: true });

  const progressStyle = {
    width: isVisible ? `${percentage}%` : '0%',
    backgroundColor: color,
  };

  return (
    <div ref={ref} className={`skill-bar-container ${isVisible ? 'is-visible' : ''}`}>
      <div className="skill-label-container">
        <span className="skill-label">{label}</span>
        {/* Opcional: Mostrar porcentagem */}
        {/* <span className="skill-percentage">{percentage}%</span> */}
      </div>
      <div className="skill-bar-background">
        <div 
          className="skill-bar-progress" 
          style={progressStyle}
        ></div>
      </div>
    </div>
  );
}