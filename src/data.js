// --- Dados dos Projetos ---
// VERSÃO FINAL COM TEXTOS COMPLETOS, SKILLS, LINKS E CAMINHOS DE IMAGEM

export const projects = [
  // 1. Charneira Nexus
  { 
    name: "Charneira Nexus", 
    slug: "charneira-nexus", 
    c1: 0xff007f, c2: 0xffd700, c3: 0x00ffff, cH: 0xffffff,
    shortDescription: "Presidência e Gestão da Semana Acadêmica de Design.", 
    longDescription: "Como presidente da Charneira 2025, fui responsável por liderar o planejamento, organização e execução da Semana Acadêmica de Design da PUCPR, um dos maiores eventos estudantis de design do Paraná.\nCoordenei equipes multidisciplinares que somavam cerca de 100 pessoas, distribuídas em frentes como curadoria, comunicação, identidade visual, patrocínios e logística. Minha atuação foi desde o desenvolvimento da estratégia geral até o acompanhamento próximo das entregas de cada equipe, garantindo coerência e uma vivência marcante para o público.\nSob minha gestão, a edição “Nexus” alcançou marcos expressivos:\n+1.200.000 visualizações e 50.000 contas alcançadas nas redes sociais.\n520 inscrições confirmadas (um aumento de 30% em relação ao ano anterior).\n45 atividades realizadas, ampliando a diversidade de formatos do evento.\nAtuei como elo central entre alunos, professores, convidados e marcas parceiras, fortalecendo a imagem da Charneira como um espaço vital de conexão entre academia, mercado e comunidade.", 
    skills: ["Liderança", "Gestão de Projetos", "Comunicação Estratégica"], 
    images: [
      "/images/charneira-01.jpg",
      "/images/charneira-02.jpg",
      "/images/charneira-03.jpg",
      "/images/charneira-04.jpg",
      "/images/charneira-05.jpg",
      "/images/charneira-06.jpg",
      "/images/charneira-07.jpg",
      "/images/charneira-08.jpg",
      "/images/charneira-09.jpg"
    ] 
  },
  // 2. Mesa Drink
  { 
    name: "Mesa Drink", 
    slug: "mesa-drink", 
    c1: 0x8A2BE2, c2: 0xFF007F, c3: 0xFFD700, cH: 0x00FF00,
    shortDescription: "Design de produto minimalista e funcional.", 
    longDescription: "A Mesa Drink nasceu de uma necessidade prática: criar um apoio elegante e discreto para momentos de pausa. O projeto foi um exercício completo de design de produto, começando com esboços à mão para definir uma forma minimalista e funcional.\nApós a definição do conceito, o projeto foi levado para a modelagem 3D, onde as proporções e os encaixes foram validados. Com o modelo 3D aprovado, desenvolvi os desenhos técnicos detalhados para a produção. A fabricação foi realizada em parceria com fornecedores locais, utilizando tubos de metal para a estrutura e madeira maciça de Jequitibá para o tampo.\nO resultado é uma peça versátil que combina a estética industrial do metal com o calor da madeira, ideal para apoiar drinks, taças ou cinzeiros em qualquer ambiente.", 
    skills: ["Prototipagem Rápida", "Gestão de Fornecedores", "Atenção aos Detalhes"], 
    images: [
      "/images/drink-01.jpg",
      "/images/drink-02.jpg",
      "/images/drink-03.jpg",
      "/images/drink-04.jpg",
      "/images/drink-05.jpg"
    ], 
    link: "https://www.woodskull.com.br/produto/mesa-drink-1395?srsltid=AfmBOopa40s3ppcQZOUwF7jgmxdDrdNxwpDTYArN4YI3iEpBa6ZCh19B" 
  },
  // 3. Cabeceira CAB
  { 
    name: "Cabeceira CAB", 
    slug: "cabeceira-cab", 
    c1: 0xFF8C00, c2: 0xff007f, c3: 0x8A2BE2, cH: 0x00ffff,
    shortDescription: "Design otimizado para manufatura em larga escala.", 
    longDescription: "Este projeto nasceu da curiosidade em explorar a técnica de moldagem de laminado de madeira. O desafio era criar uma cabeceira que fosse ao mesmo tempo compacta, funcional, elegante e com custo de produção acessível.\nA partir de uma simples curva, o design da CAB foi desenvolvido para otimizar o espaço. Seu formato de dois níveis oferece capacidade de armazenamento prática para livros e dispositivos, incluindo uma passagem de cabos discreta. Feita em lâminas naturais de Jequitibá, a peça foi um sucesso comercial imediato, vendendo mais de 100 unidades no primeiro mês de lançamento. Este projeto provou o poder de um design inteligente que une estética, funcionalidade e viabilidade de produção em escala.", 
    skills: ["Design para Manufatura (DFM)", "Visão de Mercado", "Experimentação de Materiais"], 
    images: [ // Baseado na screenshot (4 imagens)
      "/images/cab-01.jpg",
      "/images/cab-02.jpg",
      "/images/cab-03.jpg",
      "/images/cab-04.jpg"
    ], 
    link: "https://www.woodskull.com.br/produto/mesa-de-cabeceira-cab-1435" 
  },
  // 4. Dino
  { 
    name: "Dino", 
    slug: "dino-organizador", 
    c1: 0x00CED1, c2: 0x32CD32, c3: 0xFFFF00, cH: 0xFF007F,
    shortDescription: "Organizador de mesa funcional feito em chapa metálica.", 
    longDescription: "O Dino é uma solução de design nascida da observação de uma necessidade pessoal: organizar ferramentas de sketch e evitar a desordem na mesa de trabalho. O projeto foi um exercício de simplicidade e eficiência de produção.\nUtilizando chapa metálica e corte a laser, criei um módulo de armazenamento funcional que resolve o problema de forma direta. O nome 'DINO' vem da forma do apoio de canetas, que lembra as costas de um dinossauro, adicionando um toque de personalidade a um objeto prático. Este projeto demonstra como um problema cotidiano pode ser resolvido de forma elegante através do design industrial.", 
    skills: ["Resolução de Problemas", "Conhecimento de Produção", "Criatividade"], 
    images: [ // Baseado na screenshot (5 imagens)
      "/images/dino-01.jpg",
      "/images/dino-02.jpg",
      "/images/dino-03.jpg",
      "/images/dino-04.jpg",
      "/images/dino-05.jpg"
    ] 
  },
  // 5. Restaurante Levi
   { 
    name: "Restaurante Levi", 
    slug: "id-visual-levi", 
    c1: 0x007FFF, c2: 0x00CED1, c3: 0x8A2BE2, cH: 0xFFD700,
    shortDescription: "Branding e identidade para restaurante temático.", 
    longDescription: "Desenvolvi a identidade visual completa para o Levi, um restaurante temático do oriente médio. O desafio era criar uma marca autêntica que se distanciasse dos restaurantes árabes comuns no Brasil e que trouxesse a ideia de coexistência entre os povos, atraindo um público jovem e culturalmente engajado.\nO processo incluiu uma análise profunda do público-alvo e concorrentes, além de uma imersão na estética do design israelense, tendo o trabalho do icônico designer Dan Reisinger como principal referência nominal. O resultado é um DNA de marca definido como casual, contemporâneo e cultural.\nEste conceito foi traduzido em um logotipo, uma paleta de cores terrosas e uma série de aplicações de marca, desde papelaria até mockups de uniformes, embalagens e redes sociais.", 
    skills: ["Pesquisa e Análise", "Branding Conceitual", "Design Thinking"], 
    images: [
      "/images/levi-01.jpg",
      "/images/levi-02.jpg",
      "/images/levi-03.jpg",
      "/images/levi-04.jpg",
      "/images/levi-05.jpg",
    ] 
  },
  // 6. Fotografias Analógicas
  { 
    name: "Fotografia Analógica", 
    slug: "fotografias-analogicas", 
    c1: 0x800080, c2: 0xFF007F, c3: 0xFF8C00, cH: 0x32CD32,
    shortDescription: "Exploração da filosofia criativa através da fotografia.", 
    longDescription: "Mais do que um hobby, a fotografia analógica é um pilar da minha filosofia criativa. Em um mundo digital de gratificação instantânea, o processo analógico é um 'escape' deliberado — uma porta para o passado e uma verdadeira aula de paciência.\nCada clique é intencional e cada rolo de filme é uma aposta no momento presente. Esta prática me ensina a abraçar a espontaneidade, a encontrar beleza na imperfeição e a capturar imagens 'com alma'. É um retorno ao essencial que influencia diretamente minha abordagem ao design: focada no processo, na autenticidade e na criação de algo que perdure.", 
    skills: ["Paciência e Disciplina", "Observação e Composição", "Apreciação do Processo"], 
    images: [
      "/images/analogica-01.jpg",
      "/images/analogica-02.jpg",
      "/images/analogica-03.jpg",
      "/images/analogica-04.jpg",
      "/images/analogica-05.jpg",
      "/images/analogica-06.jpg",
      "/images/analogica-07.jpg",
      "/images/analogica-08.jpg"
    ] 
  },
  // 7. Cadeira Fresta
  { 
    name: "Cadeira Fresta", 
    slug: "cadeira-fresta", 
    c1: 0xFFD700, c2: 0xFF8C00, c3: 0xFF007F, cH: 0x8A2BE2,
    shortDescription: "Colaboração de mobiliário-conceito com Hype Empreendimentos.", 
    longDescription: "Este projeto foi uma colaboração com a Hype Empreendimentos para criar uma peça de mobiliário-conceito para seu prédio homônimo, o 'Fresta'. O desafio era materializar a identidade arquitetônica do empreendimento em um produto tangível.\nA cadeira Fresta traduz os detalhes modernos e industriais do prédio, capturando a 'fresta' — o vão, o rasgo, o detalhe — que define o projeto arquitetônico. O design da cadeira reflete essa linguagem, criando uma peça que não é apenas um móvel, mas uma extensão da própria arquitetura. Ela serve como um ícone físico que conta a história da marca do empreendimento.", 
    skills: ["Interpretação de Briefing", "Design Conceitual", "Gestão de Clientes"], 
    images: [
      "/images/fresta-01.jpg",
      "/images/fresta-02.jpg",
      "/images/fresta-03.jpg",
      "/images/fresta-04.jpg",
      "/images/fresta-05.jpg",
      "/images/fresta-06.jpg"
    ]
    // link: "em breve" 
  },
  // 8. Projeto Casco
   { 
    name: "Projeto CASCO", 
    slug: "projeto-casco", 
    c1: 0x228B22, c2: 0xFFFF00, c3: 0x00CED1, cH: 0xFF1493,
    shortDescription: "Design social e de serviço para população de rua.", 
    longDescription: "O CASCO foi um projeto acadêmico de design social desenvolvido em grupo, focado em um problema urgente: a vulnerabilidade de pessoas em situação de rua frente às mudanças climáticas em Curitiba.\nO processo foi baseado em uma extensa pesquisa, incluindo questionários com a comunidade, entrevistas com especialistas e análise de dados sobre os riscos climáticos locais. A solução é o 'CASCO', um sistema de produto-serviço que consiste em um carrinho multifuncional. Ele atua como abrigo móvel, armazenamento seguro e ferramenta de trabalho, sendo leve, resistente e modular.\nO modelo de negócio permite que o carrinho gere receita para o participante através de espaços de publicidade integrados, gerando recursos para manutenção e ampliação do projeto. O projeto incluiu o desenvolvimento completo da solução, desde a criação da persona, modelo de negócio e identidade visual até a prototipagem e desenhos técnicos.", 
    skills: ["Design Thinking", "Design Social", "Visão Sistêmica"], 
    images: [
      "/images/casco-01.jpg",
      "/images/casco-02.jpg",
      "/images/casco-03.jpg",
      "/images/casco-04.jpg",
      "/images/casco-05.jpg",
      "/images/casco-06.jpg",
      "/images/casco-07.jpg",
      "/images/casco-08.jpg",
      "/images/casco-09.jpg",
      "/images/casco-10.jpg"
    ] 
  },
  // 9. Cadeira Tod
  { 
    name: "Cadeira Tod", 
    slug: "cadeira-tod", 
    c1: 0x4B0082, c2: 0x007FFF, c3: 0xff007f, cH: 0xFFFF00,
    shortDescription: "Tradução da estética arquitetônica em produto.", 
    longDescription: "A Cadeira Tod nasceu com o propósito de traduzir a estética da fachada da loja Woodskull de Curitiba, incorporando elementos visuais específicos, como os furos no encosto e a delicadeza dos pés finos.\nCom estrutura metálica leve e encosto em madeira curvada, a cadeira Tod une a estética do estilo industrial moderno com conforto e funcionalidade. Os detalhes remetem à fachada original, enquanto o encosto anatômico oferece apoio ergonômico. A peça é finalizada com pintura eletrostática, garantindo durabilidade e leveza visual. É um produto versátil, fácil de combinar em projetos de interiores e arquitetônicos que buscam um equilíbrio entre presença marcante e elegância descomplicada.", 
    skills: ["Tradução Estética", "Ergonomia", "Viabilidade de Produção"], 
    images: [
      "/images/tod-01.jpg",
      "/images/tod-02.jpg",
      "/images/tod-03.jpg",
      "/images/tod-04.jpg",
      "/images/tod-05.jpg"
    ], 
    link: "https://www.woodskull.com.br/produto/cadeira-tod-estrutura-preta-1401" 
  },
  // 10. Stickers Procorrer
  { 
    name: "Stickers Procorrer", 
    slug: "stickers-procorrer", 
    c1: 0xA52A2A, c2: 0xFF8C00, c3: 0xFFFF00, cH: 0x00CED1,
    shortDescription: "Ilustração e design gráfico para marca de corrida.", 
    longDescription: "O Pack de Stickers para a Procorrer foi desenvolvido para reforçar os valores da marca de corrida de rua, como perseverança, força e a busca por objetivos. O projeto gráfico trouxe o conceito da corrida de forma vibrante e motivacional.\nUtilizando técnicas de ilustração digital no Illustrator, criei um conjunto de adesivos que os corredores podem espalhar, agindo como embaixadores da marca. O processo envolveu a ilustração dos conceitos-chave e o conhecimento técnico de produção gráfica para o corte do adesivo, garantindo a qualidade do produto final. É um projeto de baixo custo e alto engajamento que conecta diretamente a marca à sua comunidade.", 
    skills: ["Ilustração Conceitual", "Conhecimento de Produção Gráfica", "Storytelling Visual"], 
    images: [
      "/images/procorrer-01.jpg",
      "/images/procorrer-02.jpg",
      "/images/procorrer-03.jpg"
    ] 
  },
];