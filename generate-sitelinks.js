import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mainPagePath = path.resolve(__dirname, 'src/components/MainPage.jsx');
const pagesDir = path.resolve(__dirname, 'src/pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const mainContent = fs.readFileSync(mainPagePath, 'utf8');

const pages = [
  {
    name: 'SaudeMental',
    badge: 'Apoio Psiquiátrico',
    title: 'Recupere a estabilidade com Apoio Especializado',
    desc: 'Tratamento compassivo e integrado para depressão, ansiedade e outros transtornos de saúde mental. Acompanhamento 24h.'
  },
  {
    name: 'TratamentoIntensivo',
    badge: 'Clínica 24 horas',
    title: 'Tratamento Intensivo e Cuidados Médicos',
    desc: 'Estrutura hospitalar e humanizada preparada para emergências e suporte integral ao longo de toda a recuperação.'
  },
  {
    name: 'ApoioFamiliar',
    badge: 'Acolhimento à Família',
    title: 'Trazendo a Paz de Volta ao seu Lar',
    desc: 'Metodologia exclusiva que inclui a família no processo terapêutico, garantindo reintegração e reconstrução de laços.'
  },
  {
    name: 'EstruturaPremium',
    badge: 'Conforto e Segurança',
    title: 'Nossa Estrutura: Onde a Recuperação Acontece',
    desc: 'Mais que uma clínica, um ambiente de alto padrão, arborizado e moderno para proporcionar o verdadeiro resgate da vida.'
  }
];

pages.forEach(page => {
  let content = mainContent.replace(/const MainPage = \(\) => \{/, `const ${page.name} = () => {`);
  content = content.replace(/export default MainPage;/, `export default ${page.name};`);
  
  content = content.replace(/<span className="badge">.*?<\/span>/, `<span className="badge">${page.badge}</span>`);
  content = content.replace(/<h1 className="hero-title">.*?<\/h1>/, `<h1 className="hero-title">${page.title}</h1>`);
  content = content.replace(/<p className="hero-desc">.*?<\/p>/, `<p className="hero-desc">${page.desc}</p>`);
  
  fs.writeFileSync(path.join(pagesDir, `${page.name}.jsx`), content);
});

console.log('Pages generated successfully!');
