import React, { useEffect } from 'react';
import BackButton from './components/BackButton.jsx';
import TimelineItem from './components/TimelineItem.jsx';
import SkillBar from './components/SkillBar.jsx';
import { useScrollAnimation } from './hooks/useScrollAnimation.js'; // Garante terminação .js

// Componente Wrapper para animação de scroll suave
const FadeInUp = ({ children, delay = 0.1 }) => { 
  // threshold: 0.1 -> anima quando 10% do elemento está visível
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true }); 
  return (
    <div 
      ref={ref} 
      className={`fade-in-up ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }} // Adiciona um pequeno delay opcional
    >
      {children}
    </div>
  ); 
};

export default function CurriculoPage() {
  // Rola para o topo ao carregar a página
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- Dados das Skills ---
  // (Valores e cores baseados na sua imagem e CV)
  const competencies = [ 
    { label:"Fusion 360", percentage:70, color:"#E63946" }, 
    { label:"Illustrator", percentage:60, color:"#E63946" }, 
    { label:"Photoshop", percentage:55, color:"#E63946" }, 
    { label:"Pacote Office", percentage:50, color:"#E63946" } 
  ];
  const languages = [ 
    { label:"Português", percentage:100, color:"#4B7F52" }, 
    { label:"Inglês (Proficiente)", percentage:100, color:"#4B7F52" }, 
    { label:"Hebraico (Básico)", percentage:25, color:"#4B7F52" }, 
    { label:"Espanhol (B2)", percentage:75, color:"#4B7F52" } // Ajustado para B2 = 75%
  ];
  // Combina soft skills da imagem e CV, removendo duplicatas
  const softSkillsList = [
      "Escuta ativa", "Colaboração multidisciplinar", "Organização e autonomia", 
      "Responsabilidade socioambiental", "Criatividade orientada à solução",
      "Pensamento estratégico", "Visão sistêmica", "Liderança", "Comunicação", "Capacidade de síntese"
  ];
  const uniqueSoftSkills = [...new Set(softSkillsList)]; 

  return (
    // Container principal da página com animação de entrada
    <div className="page-container curriculum-page"> 
      <BackButton /> {/* Botão Voltar (topo esquerdo) */}
      
      {/* Wrapper para o conteúdo principal */}
      <div className="content-wrapper">
        
        {/* Header com Título Grande */}
        <header className="curriculum-header">
          <FadeInUp><h1 className="main-page-title">Currículo</h1></FadeInUp>
          <FadeInUp delay={0.15}><p className="curriculum-objective">Acredito no poder do design como ferramenta estratégica e simbólica, e busco crescer com consistência, aprendendo desde a base para, futuramente, ocupar posições de liderança.</p></FadeInUp>
        </header>

        {/* --- Seção Experiência Profissional --- */}
        <section className="timeline-section">
          <FadeInUp><h2>Experiência Profissional</h2></FadeInUp>
          <div className="timeline">
             {/* Item da Timeline: Woodskull */}
             <TimelineItem 
               date="Fev 2025 – Nov 2025" 
               title="Estagiário de design multidisciplinar" 
               company="WoodSkull - Curitiba, BR"
             >
               <p>Atuo no desenvolvimento completo de produtos, da concepção à prototipagem e lançamento, unindo forma, função e narrativa. Realizo modelagem 3D, desenhos técnicos e testes de viabilidade, sempre com atenção à experiência do usuário e à coerência estética. Também contribuo na criação de materiais gráficos e no desenvolvimento de interfaces digitais, garantindo que cada ponto de contato reforce a identidade da marca.</p>
             </TimelineItem>
             
             {/* Item da Timeline: Semana Acadêmica */}
             <TimelineItem 
               date="Nov 2024 – Dez 2025" 
               title="Presidente da Semana Acadêmica de Design" 
               company="PUCPR - Curitiba"
             >
               <p>Lidero o planejamento e a execução de um evento acadêmico de grande porte, coordenando uma equipe multidisciplinar na definição de temáticas, gestão logística e curadoria de experiências significativas. Além de garantir a fluidez operacional, atuo na construção de uma identidade coerente e inspiradora para o evento, fortalecendo sua relevância entre estudantes e profissionais do design.</p>
             </TimelineItem>
             
             {/* Item da Timeline: Marcenaria */}
             <TimelineItem 
               date="Ago 2024 – Dez 2024" 
               title="Assistente de Marcenaria" 
               company="Oficina Domum - Curitiba"
             >
               <p>Auxiliei na criação e montagem de móveis personalizados, adquirindo experiência prática em técnicas de marcenaria. Participei do processo de design, aprimorando meu entendimento sobre funcionalidade e estética.</p>
             </TimelineItem>
             
             {/* Item da Timeline: Centro Israelita */}
             <TimelineItem 
               date="Jul 2024 – Dez 2024" 
               title="Estagiário de Design" 
               company="Centro Israelita do Paraná - Curitiba"
             >
               <p>Desenvolvi peças gráficas para eventos, como banners, cartazes e conteúdos digitais, sempre alinhadas à identidade visual proposta. Colaborei ativamente com a equipe para garantir consistência na comunicação da marca e criar soluções visuais que gerassem impacto e reforçassem a narrativa do evento.</p>
             </TimelineItem>
          </div>
        </section>

        {/* --- Seção Formação Acadêmica --- */}
        <section className="timeline-section">
           <FadeInUp><h2>Formação Acadêmica</h2></FadeInUp>
           <div className="timeline">
             {/* Item da Timeline: PUCPR */}
             <TimelineItem 
               date="2022 – 2026 (Previsto)" 
               title="Bacharel de Design" 
               company="Pontifícia Universidade Católica do Paraná (PUCPR)"
             >
               <p>Cursando bacharelado com foco em design de produto, gráfico e digital, explorando metodologias projetuais, ferramentas de criação e pensamento crítico aplicado ao design.</p>
             </TimelineItem>
             
             {/* Item da Timeline: Phil Young's */}
             <TimelineItem 
               date="Concluído em 2020" 
               title="Graduado com Honra" 
               company="Phil Young's English School"
             >
               <p>Formação completa em língua inglesa, desenvolvendo fluência na comunicação oral e escrita, concluída com reconhecimento de mérito.</p>
             </TimelineItem>
           </div>
        </section>

        {/* --- Seção Habilidades & Idiomas --- */}
        <section className="skills-section">
          <FadeInUp><h2>Habilidades & Idiomas</h2></FadeInUp>
          <div className="skills-grid">
            {/* Coluna Competências */}
            <FadeInUp delay={0.1}> 
              <div className="skills-column">
                <h3>Competências</h3>
                <div className="skill-bars-list">
                  {/* Mapeia o array competencies para criar as barras */}
                  {competencies.map(skill => <SkillBar key={skill.label} {...skill} />)}
                </div>
              </div>
            </FadeInUp>

            {/* Coluna Idiomas */}
            <FadeInUp delay={0.15}> 
              <div className="skills-column">
                <h3>Idiomas</h3>
                <div className="skill-bars-list">
                   {/* Mapeia o array languages para criar as barras */}
                  {languages.map(lang => <SkillBar key={lang.label} {...lang} />)}
                </div>
              </div>
            </FadeInUp>

            {/* Coluna Soft Skills */}
            <FadeInUp delay={0.2}> 
              <div className="skills-column">
                <h3>Soft Skills</h3>
                <ul className="skills-list">
                  {/* Mapeia o array uniqueSoftSkills para criar a lista */}
                  {uniqueSoftSkills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </section>

      </div> {/* Fim do content-wrapper */}
    </div> // Fim do page-container
  );
}