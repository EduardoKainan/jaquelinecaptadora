import React from 'react';
import {
  CheckCircle2,
  Users,
  Stethoscope,
  TreePine,
  Home,
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

const INSURANCE_LOGOS = [
  '/assets/optimized/porto-seguros.webp',
  '/assets/optimized/amil.webp',
  '/assets/optimized/bradesco-saude.webp',
  '/assets/optimized/unimed.webp',
  '/assets/optimized/allianz.webp'
];

const EstruturaPremium = () => {
  const WHATSAPP_LINK = "https://wa.me/556296687484";
  const PHONE_NUMBER = "tel:+556296687484";

  return (
    <div className="main-page">
      {/* Header */}
      <header className="main-header glass">
        <div className="container header-content">
          <img src="https://i.postimg.cc/sg7gqzPM/LOGO-SEM-FUNDO.png" alt="Recuperando Vida - Logo Oficial" className="logo" loading="lazy" width="157" height="88" />
          <nav className="desktop-nav">
            <a href="#tratamentos">Tratamentos</a>
            <a href="#metodologia">Metodologia</a>
            <a href="#estrutura">Estrutura</a>
          </nav>
          <a href={WHATSAPP_LINK} className="btn btn-whatsapp">
            <MessageCircle size={18} />
            Plantão 24h
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="main-hero">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-text"
          >
            <span className="badge">Conforto e Segurança</span>
            <h1 className="hero-title">Nossa Estrutura: Onde a Recuperação Acontece</h1>
            <p className="hero-desc">Mais que uma clínica, um ambiente de alto padrão, arborizado e moderno para proporcionar o verdadeiro resgate da vida.</p>

            <div className="hero-ctas">
              <a href={WHATSAPP_LINK} className="btn btn-whatsapp btn-hero">
                Falar com Especialista Agora
              </a>
              <a href={PHONE_NUMBER} className="btn-phone-hero">
                <Phone size={20} /> (62) 99668-7484
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong>+1000</strong>
                <span>Vidas Resgatadas</span>
              </div>
              <div className="stat">
                <strong>24h</strong>
                <span>Monitoramento</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>Satisfação</span>
              </div>
            </div>

            {/* Insurance Logos in Hero */}
            <div className="hero-insurances">
              <p>Aceitamos os principais convênios:</p>
              <div className="insurances-grid-mini">
                {INSURANCE_LOGOS.map((logo, idx) => (
                  <img key={idx} src={logo} alt="Convênio Médico Aceito" title="Aceitamos este plano" loading="lazy" width="100" height="35" />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-image-container"
          >
            <div className="hero-image-wrapper">
              <img src="/assets/optimized/medico-especialista.webp" alt="Médico Especialista em Acolhimento" fetchpriority="high" width="800" height="600" />
              <div className="image-overlay-card glass">
                <ShieldCheck color="var(--success)" />
                <div>
                  <strong>Internação Segura</strong>
                  <p>Equipe médica no local</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="tratamentos" className="treatments">
        <div className="container">
          <div className="section-header">
            <h2>Nossas Especialidades</h2>
            <p>Tratamentos personalizados para cada perfil e necessidade.</p>
          </div>

          <div className="grid-3">
            {[
              {
                title: "Saúde Emocional",
                desc: "Abordagem clínica e terapêutica personalizada com foco na reintegração e qualidade de vida.",
                icon: <Stethoscope size={32} />
              },
              {
                title: "Saúde Mental",
                desc: "Acompanhamento para depressão, ansiedade, bipolaridade e outros transtornos emocionais.",
                icon: <Users size={32} />
              },
              {
                title: "Acolhimento Especializado",
                desc: "Suporte humanizado e seguro para situações críticas, com acompanhamento médico contínuo.",
                icon: <ShieldCheck size={32} />
              }
            ].map((item, idx) => (
              <div key={idx} className="treatment-card">
                <div className="icon-wrapper">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={WHATSAPP_LINK} className="learn-more">Saiba mais <ArrowRight size={16} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="metodologia" className="steps-section">
        <div className="container">
          <div className="steps-container glass">
            <h2>Nossa Metodologia de Cuidado</h2>
            <div className="steps-grid">
              {[
                { step: "01", title: "Avaliação", text: "Avaliação inicial completa com equipe médica e psiquiátrica." },
                { step: "02", title: "Estabilização", text: "Processo assistido para estabilização física e emocional." },
                { step: "03", title: "Terapia", text: "Dinâmicas em grupo e individuais com psicólogos especializados." },
                { step: "04", title: "Reintegração", text: "Preparação gradual para o retorno pleno ao convívio social." }
              ].map((s, idx) => (
                <div key={idx} className="step-item">
                  <span className="step-number">{s.step}</span>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="professionals">
        <div className="container professional-grid">
          <div className="prof-content">
            <h2>Equipe Multidisciplinar</h2>
            <p>Contamos com os melhores especialistas do mercado para garantir um tratamento de elite.</p>
            <ul className="prof-list">
              <li><CheckCircle2 size={20} color="var(--primary)" /> Médicos Clínicos e Psiquiatras</li>
              <li><CheckCircle2 size={20} color="var(--primary)" /> Psicólogos Especialistas</li>
              <li><CheckCircle2 size={20} color="var(--primary)" /> Terapeutas Ocupacionais</li>
              <li><CheckCircle2 size={20} color="var(--primary)" /> Nutricionistas e Educadores Físicos</li>
              <li><CheckCircle2 size={20} color="var(--primary)" /> Enfermeiros 24h</li>
            </ul>
            <a href={WHATSAPP_LINK} className="btn btn-primary">Falar com um Terapeuta</a>
          </div>
          <div className="prof-images-container">
            <div className="prof-image-box">
              <img src="/assets/optimized/medica.webp" alt="Médica" className="prof-img prof-img-1" loading="lazy" width="600" height="400" />
              <img src="/assets/optimized/equipe-medica.webp" alt="Equipe" className="prof-img prof-img-2" loading="lazy" width="600" height="400" />
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section id="estrutura" className="structure">
        <div className="container text-center">
          <h2>Estrutura Completa e Moderna</h2>
          <p className="subtitle">Ambiente arborizado planejado para o máximo conforto e paz.</p>

          <div className="structure-gallery">
            <div className="gallery-main">
              <img src="/assets/optimized/Unidade-1-10.webp" alt="Clínica" loading="lazy" width="800" height="600" />
            </div>
            <div className="gallery-side">
              <img src="/assets/optimized/Unidade-5-10.webp" alt="Área Externa" loading="lazy" width="600" height="400" />
              <img src="/assets/optimized/Unidade-4-10.webp" alt="Quartos" loading="lazy" width="600" height="400" />
            </div>
          </div>

          <div className="structure-features grid-4">
            <div className="feature">
              <TreePine size={32} />
              <span>Área Verde</span>
            </div>
            <div className="feature">
              <Home size={32} />
              <span>Suítes de Luxo</span>
            </div>
            <div className="feature">
              <Clock size={32} />
              <span>Cozinha 24h</span>
            </div>
            <div className="feature">
              <Award size={32} />
              <span>Lazer Completo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container text-center">
          <h2>Dê o primeiro passo hoje</h2>
          <p>O cuidado especializado que você e sua família precisam está a um clique de distância.</p>
          <a href={WHATSAPP_LINK} className="btn btn-whatsapp btn-huge">
            <MessageCircle size={24} />
            Solicite uma Vaga Agora
          </a>
        </div>
      </section>

      <footer className="main-footer">
        <div className="container footer-bottom">
          <img src="https://i.postimg.cc/sg7gqzPM/LOGO-SEM-FUNDO.png" alt="Logo" className="logo-footer" loading="lazy" width="157" height="88" />
          <p>© 2024 Recuperando Vida - Bem-Estar e Cuidado de Elite. Todos os direitos reservados.</p>
        </div>
      </footer>

      <style>{`
        .main-page {
          background-color: var(--white);
        }

        .logo { 
          height: 60px; /* Force size */
          width: auto;
        }

        .main-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 0.75rem 0;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
        }

        .desktop-nav a {
          font-weight: 500;
          color: var(--secondary);
          transition: var(--transition);
        }

        .desktop-nav a:hover {
          color: var(--primary);
        }

        .main-hero {
          padding: 120px 0 80px; /* Reduced padding */
          background: linear-gradient(to bottom right, #f8fafc, #eef2ff);
          min-height: auto;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr; /* Adjusted proportions */
          gap: 3rem;
          align-items: center;
        }

        .badge {
          background: rgba(15, 76, 129, 0.1);
          color: var(--primary);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: 3rem; /* Slightly smaller for better balance */
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .hero-desc {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .hero-ctas {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .btn-hero {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .btn-phone-hero {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary);
        }

        .hero-stats {
          display: flex;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .stat strong {
          display: block;
          font-size: 1.75rem;
          color: var(--primary);
        }

        .stat span {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .hero-insurances {
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 1.5rem;
        }

        .hero-insurances p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .insurances-grid-mini {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .insurances-grid-mini img {
          height: 25px;
          filter: grayscale(1);
          opacity: 0.6;
          transition: var(--transition);
        }

        .insurances-grid-mini img:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        .hero-image-container {
          display: flex;
          justify-content: flex-end;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .hero-image-wrapper img {
          width: 100%;
          border-radius: 2rem;
          box-shadow: var(--shadow-lg);
          display: block;
        }

        .image-overlay-card {
          position: absolute;
          bottom: 20px;
          left: -40px;
          padding: 1.25rem;
          display: flex;
          gap: 1rem;
          align-items: center;
          border-radius: 1rem;
          box-shadow: var(--shadow-lg);
          z-index: 5;
        }

        .treatments {
          padding: 100px 0;
          background: var(--white);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .treatment-card {
           padding: 3rem 2rem;
           background: #f8fafc;
           border-radius: 1.5rem;
           transition: var(--transition);
        }

        .treatment-card:hover {
          transform: translateY(-10px);
          background: var(--white);
          box-shadow: var(--shadow-lg);
        }

        .icon-wrapper {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .learn-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          color: var(--primary);
          font-weight: 600;
        }

        .steps-section {
          padding: 100px 0;
          background: var(--primary);
        }

        .steps-container {
          padding: 4rem;
          border-radius: 2rem;
          color: var(--white);
        }

        .steps-container h2 {
          color: var(--white);
          text-align: center;
          margin-bottom: 4rem;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
        }

        .step-item {
          position: relative;
        }

        .step-number {
          font-size: 3rem;
          font-weight: 800;
          opacity: 0.2;
          display: block;
          margin-bottom: -1.5rem;
        }

        .step-item h4 {
          color: var(--white);
          margin-bottom: 1rem;
        }

        .professionals {
          padding: 100px 0;
        }

        .professional-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .prof-list {
          list-style: none;
          margin: 2rem 0;
        }

        .prof-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .prof-images-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .prof-image-box {
          position: relative;
          width: 100%;
          max-width: 500px;
          height: 450px;
        }

        .prof-img {
          position: absolute;
          border-radius: 1.5rem;
          box-shadow: var(--shadow-lg);
          object-fit: cover;
        }

        .prof-img-1 {
          width: 75%;
          height: 350px;
          top: 0;
          left: 0;
          z-index: 2;
          border: 4px solid var(--white);
        }

        .prof-img-2 {
          width: 75%;
          height: 350px;
          bottom: 0;
          right: 0;
          z-index: 1;
        }

        .structure {
          padding: 100px 0;
          background: #f8fafc;
        }

        .subtitle {
          margin-bottom: 4rem;
          color: var(--text-muted);
        }

        .structure-gallery {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .structure-gallery img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
        }

        .gallery-side {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .feature {
          background: var(--white);
          padding: 2rem;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          box-shadow: var(--shadow-sm);
        }

        .final-cta {
          padding: 120px 0;
          background: linear-gradient(135deg, #0f4c81 0%, #1e293b 100%);
          color: var(--white);
        }

        .final-cta h2 { color: var(--white); font-size: 3rem; margin-bottom: 1rem; }
        .btn-huge { padding: 1.5rem 3.5rem; font-size: 1.5rem; margin-top: 2rem; }

        .main-footer {
          padding: 4rem 0;
          background: var(--bg-light);
          border-top: 1px solid #eee;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-footer { height: 40px; }

        @media (max-width: 992px) {
          .hero-grid, .professional-grid { grid-template-columns: 1fr; gap: 3rem; }
          .hero-text h1 { font-size: 2.5rem; }
          .prof-image-box { height: 400px; }
          .grid-4 { grid-template-columns: repeat(2, 1fr); }
          .desktop-nav { display: none; }
          .image-overlay-card { left: 10px; bottom: 10px; }
          .hero-insurances { text-align: center; }
          .insurances-grid-mini { justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default EstruturaPremium;
