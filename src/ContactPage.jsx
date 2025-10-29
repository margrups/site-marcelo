import React, { useEffect } from 'react';
import BackButton from './components/BackButton.jsx';

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="page-container contact-page-container"> 
      <BackButton /> 
      <div className="content-wrapper contact-page">
        <h1>Contato</h1>
        <p>Vamos criar algo juntos.</p>
        <div className="contact-details">
          <p>Email: <a href="mailto:Margrupenmacher@gmail.com">Margrupenmacher@gmail.com</a></p>
          <p>Telefone: <a href="tel:+5541997281540">(41) 99728-1540</a></p>
        </div>
      </div>
    </div>
  );
}