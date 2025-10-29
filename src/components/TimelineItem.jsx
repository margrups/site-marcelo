import React, { useState, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TimelineItem({ date, title, company, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [scrollRef, isVisible] = useScrollAnimation({ threshold: 0.15, triggerOnce: true }); // Ajustado threshold

  return (
    <div ref={scrollRef} className={`timeline-item ${isVisible ? 'is-visible' : ''}`}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-header" onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0} aria-expanded={isOpen}>
          <div>
            <span className="timeline-date">{date}</span>
            <h3 className="timeline-title">{title}</h3>
            <p className="timeline-company">{company}</p>
          </div>
          <div className={`timeline-arrow ${isOpen ? 'open' : ''}`}></div>
        </div>
        <div 
          ref={contentRef}
          className="timeline-details"
          style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
          aria-hidden={!isOpen}
        >
          {/* Adiciona um wrapper interno para padding, que não interfere no max-height */}
          <div className="timeline-details-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}