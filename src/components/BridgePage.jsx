import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Heart, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CLINIC_IMAGES = [
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-1-10.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-5-10.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-4-10.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-3-10.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-2-10.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-2-7.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-1-7.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-3-7.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-3-3.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-2-3.jpeg',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-1-3.jpeg'
];

const INSURANCE_LOGOS = [
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/porto-seguros.png',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/amil.png',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/bradesco-saude.png',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/unimed.png',
  'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/allianz.png'
];

const BridgePage = ({ onNavigate }) => {
  const WHATSAPP_LINK = "https://wa.me/556296687484";
  const PHONE_NUMBER = "tel:+556296687484";

  return (
    <div className="bridge-page">
      <header className="bridge-header glass">
        <div className="container header-content">
          <img src="https://i.postimg.cc/sg7gqzPM/LOGO-SEM-FUNDO.png" alt="Clínicas Brasil - Logo Oficial" className="logo" loading="lazy" />
          <div className="header-actions">
            <a href={PHONE_NUMBER} className="btn-call-header">
              <Phone size={20} />
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Simple Hero */}
        <section className="bridge-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-card glass"
            >
              <div className="hero-flex-container">
                <div className="hero-content-left">
                  <h1>Apoio Especializado e Bem-Estar</h1>
                  <p>Oferecemos suporte humanizado e infraestrutura completa para quem busca transformar sua qualidade de vida com segurança e acolhimento.</p>

                  <div className="cta-group">
                    <a href={PHONE_NUMBER} className="btn btn-danger btn-lg">
                      <Phone size={20} />
                      URGÊNCIA: (62) 9 9668-7484
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                      <MessageCircle size={20} />
                      Falar com Terapeuta
                    </a>
                  </div>

                  <button onClick={onNavigate} className="btn-secondary-link">
                    Conhecer site oficial <ArrowRight size={18} />
                  </button>
                </div>
                <div className="hero-content-right">
                  <div className="hero-image-box">
                    <img
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                      alt="Profissional de Saúde Acolhedor"
                      className="bridge-hero-img"
                      loading="lazy"
                    />
                    <div className="hero-floating-badge">
                      <ShieldCheck size={18} />
                      <span>Atendimento 24h</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Clinic Carousel */}
        <section className="bridge-clinics">
          <div className="container">
            <h2 className="section-title">Nossas Unidades</h2>
          </div>
          <div className="marquee-container">
            <div className="marquee-content">
              {[...CLINIC_IMAGES, ...CLINIC_IMAGES].map((img, idx) => (
                <div key={idx} className="marquee-item clinic-photo">
                  <img src={img} alt={`Unidade de Tratamento ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Factors */}
        <section className="trust-factors">
          <div className="container grid-3">
            <div className="trust-card">
              <ShieldCheck size={40} color="var(--primary)" />
              <h3>Ambiente Seguro</h3>
              <p>Estrutura monitorada e profissionais qualificados 24h.</p>
            </div>
            <div className="trust-card">
              <Heart size={40} color="var(--primary)" />
              <h3>Apoio Familiar</h3>
              <p>Suporte completo para a família durante todo o processo.</p>
            </div>
            <div className="trust-card">
              <UserCheck size={40} color="var(--primary)" />
              <h3>Atendimento Elite</h3>
              <p>Planos customizados para as necessidades de cada indivíduo.</p>
            </div>
          </div>
        </section>

        {/* Insurance Marquee */}
        <section className="insurances">
          <div className="container">
            <p className="text-center text-muted mb-2">Aceitamos diversos Planos de Saúde</p>
          </div>
          <div className="marquee-container logo-marquee">
            <div className="marquee-content">
              {[...INSURANCE_LOGOS, ...INSURANCE_LOGOS, ...INSURANCE_LOGOS].map((logo, idx) => (
                <div key={idx} className="marquee-item insurance-logo">
                  <img src={logo} alt="Convênio Médico Aceito" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bridge-testimonials">
          <div className="container">
            <h2 className="section-title">O que dizem as famílias</h2>
            <div className="grid-3">
              {[
                { name: "Maria S.", text: "O acolhimento foi fundamental para nossa família recuperar a paz." },
                { name: "Ricardo M.", text: "Profissionais extremamente humanos e uma estrutura de primeiro mundo." },
                { name: "Ana P.", text: "Sentimos segurança desde o primeiro contato. Gratidão a toda equipe." }
              ].map((t, idx) => (
                <div key={idx} className="testimonial-card glass">
                  <p>"{t.text}"</p>
                  <span>- {t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bridge-footer">
        <div className="container">
          <p>© 2024 Especialistas em Bem-Estar. Todos os direitos reservados.</p>
        </div>
      </footer>

      <style>{`
        .bridge-page {
          background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
          min-height: 100vh;
        }
        
        .bridge-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 0;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          height: 50px;
        }
        
        .btn-call-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--danger);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-weight: 600;
        }
        
        .bridge-hero {
          padding: 180px 0 100px;
          text-align: center;
          background: url('https://images.unsplash.com/photo-1576091160550-217359f51f8c?auto=format&fit=crop&q=80') center/cover no-repeat;
          position: relative;
        }
        
        .bridge-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.7);
        }
        
        .hero-card {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
          padding: 3rem;
          border-radius: 2rem;
        }

        .hero-flex-container {
          display: flex;
          align-items: center;
          gap: 3rem;
          text-align: left;
        }

        .hero-content-left {
          flex: 1.2;
        }

        .hero-content-right {
          flex: 0.8;
          display: flex;
          justify-content: center;
        }

        .hero-image-box {
          position: relative;
          width: 100%;
          max-width: 350px;
        }

        .bridge-hero-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: var(--shadow-lg);
        }

        .hero-floating-badge {
          position: absolute;
          bottom: 20px;
          right: -20px;
          background: var(--white);
          padding: 0.75rem 1.25rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: var(--shadow-lg);
          font-weight: 600;
          color: var(--primary);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .hero-card h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }
        
        .hero-card p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          color: var(--secondary);
        }
        
        .cta-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        
        .btn-lg {
          padding: 1.25rem 2.5rem;
          font-size: 1.25rem;
          width: 100%;
          max-width: 450px;
        }
        
        .btn-secondary-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto;
          color: var(--primary);
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: var(--primary);
        }
        
        .bridge-clinics {
          padding: 100px 0;
          background: var(--white);
        }
        
        .clinic-photo img {
          height: 350px;
          border-radius: 1rem;
          box-shadow: var(--shadow);
        }
        
        .trust-factors {
          padding: 80px 0;
          background: var(--bg-light);
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .trust-card {
          text-align: center;
          padding: 2rem;
        }
        
        .trust-card h3 {
          margin: 1.5rem 0 1rem;
        }
        
        .insurances {
          padding: 60px 0;
          background: var(--white);
          border-top: 1px solid #eee;
        }
        
        .insurance-logo img {
          height: 40px;
          filter: grayscale(1);
          opacity: 0.7;
          transition: var(--transition);
        }
        
        .insurance-logo:hover img {
          filter: grayscale(0);
          opacity: 1;
        }
        
        .bridge-testimonials {
          padding: 100px 0;
        }
        
        .testimonial-card {
          padding: 2rem;
          border-radius: 1rem;
          font-style: italic;
        }
        
        .testimonial-card span {
          display: block;
          margin-top: 1rem;
          font-weight: 700;
          font-style: normal;
          color: var(--primary);
        }
        
        .bridge-footer {
          padding: 3rem 0;
          text-align: center;
          background: var(--secondary);
          color: var(--white);
          opacity: 0.9;
        }

        .mb-2 { margin-bottom: 2rem; }
        .text-center { text-align: center; }

        @media (max-width: 768px) {
          .hero-flex-container { flex-direction: column; text-align: center; gap: 2rem; }
          .cta-group { align-items: center; }
          .hero-card { padding: 2rem 1rem; }
          .hero-card h1 { font-size: 2rem; }
          .hero-card p { font-size: 1.1rem; }
          .hero-image-box { max-width: 280px; }
          .bridge-hero-img { height: 300px; }
          .hero-floating-badge { right: 0; bottom: 10px; }
        }
      `}</style>
    </div>
  );
};

export default BridgePage;
