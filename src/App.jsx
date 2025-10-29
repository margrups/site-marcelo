import React, { useState, useRef, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'; // Garantir import correto
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { projects } from './data.js';
import { handlePageTransition } from './components/BackButton.jsx'; 
import HamburgerMenuHome from './components/HamburgerMenuHome.jsx'; 

extend({ ShaderMaterial: THREE.ShaderMaterial });

// --- Shaders GLSL (Versão estável, sem uIsHidden/uIsClicked) ---
const sphereVertexShader=`varying vec3 vN;varying vec3 vVD;varying vec2 vUv;void main(){vN=normalize(normalMatrix*normal);vec4 mvPos=modelViewMatrix*vec4(position,1.);vVD=normalize(-mvPos.xyz);vUv=uv;gl_Position=projectionMatrix*mvPos;}`;
const sphereFragmentShader=`uniform vec3 uC1;uniform vec3 uC2;uniform vec3 uC3;uniform vec3 uCH;uniform float uHA;uniform float uT;uniform float uNA;uniform float uAP;varying vec3 vN;varying vec3 vVD;varying vec2 vUv;float rand(vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){float t=uT*.3;vec3 n=vN*.5+.5;float m1=sin(n.x*6.28+n.y*3.14+t)*.5+.5;float m2=cos(n.y*4.71-n.z*7.85+t*.7)*.5+.5;vec3 cA=mix(uC1,uC2,m1);vec3 base=mix(cA,uC3,m2);float noise=(rand(vUv*40.+t*5.)-.5)*uNA;base+=noise;vec3 finalC=mix(base,uCH*1.5,uHA);float dNV=max(dot(vN,vVD),0.);float alpha=pow(dNV,uAP);alpha=mix(alpha,1.,uHA*.5);gl_FragColor=vec4(finalC,alpha);}`;

// --- Componente da Esfera ---
// (Versão não minificada, mais legível)
function ProjectSphere({ project, index, setHoveredProject, isFadingOut, setIsFadingOut }) {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const { clock } = useThree();
  const [isInteractive, setIsInteractive] = useState(false);
  const navigate = useNavigate();
  const initialPosition = useMemo(() => {
    const angle = Math.random() * Math.PI * 2; const startRadius = 30;
    const x = Math.cos(angle) * startRadius; const z = Math.sin(angle) * startRadius;
    const y = (Math.random() - 0.5) * 15;
    return new THREE.Vector3(x, y, z);
  }, []);
  const [targetAngle] = useState(() => Math.random() * Math.PI * 2);
  const [targetRadius] = useState(() => 9 + (Math.random() - 0.5) * 4);
  const [targetY] = useState(() => (Math.random() - 0.5) * 10);
  const [orbitSpeed] = useState(() => (Math.random() - 0.5) * 0.1 + 0.05);
  const [rotationSpeed] = useState(() => (Math.random() - 0.5) * 0.01);
  const entranceDelay = index * 0.1 + 0.5;

  useEffect(() => {
    const timer = setTimeout(() => setIsInteractive(true), entranceDelay * 1000 + 1000);
    return () => clearTimeout(timer);
  }, [entranceDelay]);

  // Uniforms correspondem ao shader corrigido
  const uniforms = useMemo(() => ({
    uC1:{value:new THREE.Color(project.c1)}, 
    uC2:{value:new THREE.Color(project.c2)}, 
    uC3:{value:new THREE.Color(project.c3)}, 
    uCH:{value:new THREE.Color(project.cH)}, 
    uHA:{value:0.0}, uT:{value:0.0}, uNA:{value:0.05}, uAP:{value:1.5} 
  }), [project.c1, project.c2, project.c3, project.cH]);

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();
    const lerpFactorPosition = 0.03; 
    const lerpFactorScale = 0.05;
    if (!meshRef.current) return;

    const currentOrbitTime = Math.max(0, elapsedTime - entranceDelay);
    const targetX = Math.cos(targetAngle + currentOrbitTime * orbitSpeed) * targetRadius;
    const targetZ = Math.sin(targetAngle + currentOrbitTime * orbitSpeed) * targetRadius;
    const targetPosition = new THREE.Vector3(targetX, targetY, targetZ);

    if (elapsedTime > entranceDelay) {
      if (meshRef.current.position.distanceTo(targetPosition) > 0.01) {
        meshRef.current.position.lerp(targetPosition, lerpFactorPosition);
      } else {
        meshRef.current.position.copy(targetPosition);
      }
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.x += rotationSpeed * 0.5;
    }

    let finalTargetScale = (elapsedTime > entranceDelay) ? (isHovered ? 1.2 : 1.0) : 0.0;
    meshRef.current.scale.lerp(new THREE.Vector3(finalTargetScale, finalTargetScale, finalTargetScale), lerpFactorScale);

    const targetHoverAmount = isHovered ? 1.0 : 0.0;
    uniforms.uHA.value = THREE.MathUtils.lerp(uniforms.uHA.value, targetHoverAmount, lerpFactorScale);
    uniforms.uT.value = elapsedTime;
  });

  useEffect(() => {
    meshRef.current.scale.set(0, 0, 0);
    meshRef.current.position.copy(initialPosition);
  }, [initialPosition]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isInteractive && !isFadingOut) {
      setIsFadingOut(true);
      setHoveredProject(null); // Limpa tooltip antes de navegar
      handlePageTransition(`/project/${project.slug}`, navigate);
    }
  }

  return (
    <mesh
      ref={meshRef}
      className="project-sphere-mesh" // Classe para hover do cursor
      onPointerOver={(e) => { e.stopPropagation(); if (isInteractive && !isFadingOut) { setIsHovered(true); setHoveredProject(project); } }}
      onPointerOut={(e) => { e.stopPropagation(); if (isInteractive && !isFadingOut) { setIsHovered(false); setHoveredProject(null); } }}
      onClick={handleClick}
    >
      <sphereGeometry args={[1.2, 64, 64]} />
      <shaderMaterial args={[{ vertexShader: sphereVertexShader, fragmentShader: sphereFragmentShader, uniforms, transparent: true, depthWrite: false }]} />
    </mesh>
  );
}


// --- Componente de Partículas ---
function SubtleParticles({count=200}){ /* ...código inalterado... */ }
// --- Shader de Fundo ---
function BackgroundGradientShader(){ /* ...código inalterado... */ }

// --- Componentes da UI ---
// *** CORREÇÃO DO TOOLTIP AQUI ***
function ProjectTooltip({project}){
  const ref=useRef();
  useEffect(()=>{
    const move=(e)=>{if(ref.current){ref.current.style.left=`${e.clientX+15}px`;ref.current.style.top=`${e.clientY+15}px`;}};
    window.addEventListener('mousemove',move);
    return()=>window.removeEventListener('mousemove',move);
  },[]);
  // Mostra project.name em vez de shortDescription
  return <div id="project-tooltip" ref={ref} className={project?'visible':''}>{project?.name}</div>; 
}

function CornerLinks(){
  const nav=useNavigate();
  const click=(e,to)=>{e.preventDefault();handlePageTransition(to,nav);};
  return(<div className="corner-links"><a href="/curriculo" onClick={(e)=>click(e,'/curriculo')} className="link-item">Currículo</a><a href="/contato" onClick={(e)=>click(e,'/contato')} className="link-item">Contato</a></div>);
}

function InstructionsHint(){
  const[vis,setVis]=useState(true);
  useEffect(()=>{const t=setTimeout(()=>setVis(false),6000);return()=>clearTimeout(t);},[]);
  return <div className={`instructions-hint ${vis?'visible':''}`}>Arraste para girar • Scroll para zoom</div>;
}

// --- Aplicativo Principal ---
export default function App() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isFadingOut, setIsFadingOut] = useState(false); 
  const controlsRef = useRef();
  const navigate = useNavigate();

  useEffect(() => { 
    document.body.style.overflow = 'hidden'; 
    setIsFadingOut(false); // Garante reset do fade ao voltar pra home
    return () => { document.body.style.overflow = 'auto'; } 
  }, []); 

  const handleTitleClick = (e) => { e.preventDefault(); handlePageTransition('/sobre', navigate); };

  return (
    <div className={isFadingOut ? 'fade-out-home' : ''} style={{width:'100%', height:'100vh', position:'relative'}}>
      {/* UI Fixa */}
      <ProjectTooltip project={hoveredProject} /> {/* Corrigido */}
      <CornerLinks /> {/* Restaurado */}
      {!isFadingOut && <InstructionsHint />}
      <HamburgerMenuHome /> {/* Menu da Home */}
      
      <div className="main-title">
        <a href="/sobre" onClick={handleTitleClick}>
          <h1>Marcelo Grupenmacher</h1>
          <h2>Designer Industrial</h2>
        </a>
      </div>

      {/* Cena 3D */}
      <Canvas 
        camera={{ position:[0,0,15], fov:45 }} 
        style={{ background:'transparent', position:'absolute', top:0, left:0, zIndex:1 }}
        // Adiciona onPointerMissed para limpar o hover se clicar no fundo
        onPointerMissed={() => setHoveredProject(null)} 
      >
        <Suspense fallback={null}>
            <BackgroundGradientShader />
            <SubtleParticles />
            <group>
            {projects.map((p, i) => 
              <ProjectSphere 
                key={p.slug || i} // Usa slug como key se disponível
                index={i} 
                project={p} 
                setHoveredProject={setHoveredProject} 
                isFadingOut={isFadingOut} 
                setIsFadingOut={setIsFadingOut} 
              />
            )}
            </group>
            <OrbitControls ref={controlsRef} enableDamping dampingFactor={0.04} enableZoom={true} enablePan={true} autoRotate={false}/>
        </Suspense>
      </Canvas>
    </div>
  );
}
