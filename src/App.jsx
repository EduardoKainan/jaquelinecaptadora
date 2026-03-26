import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeFlow from './HomeFlow';

const SaudeMental = lazy(() => import('./pages/SaudeMental'));
const TratamentoIntensivo = lazy(() => import('./pages/TratamentoIntensivo'));
const ApoioFamiliar = lazy(() => import('./pages/ApoioFamiliar'));
const EstruturaPremium = lazy(() => import('./pages/EstruturaPremium'));

function App() {
  return (
    <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<HomeFlow />} />
        <Route path="/saude-mental" element={<SaudeMental />} />
        <Route path="/tratamento-intensivo" element={<TratamentoIntensivo />} />
        <Route path="/apoio-familiar" element={<ApoioFamiliar />} />
        <Route path="/estrutura-premium" element={<EstruturaPremium />} />
      </Routes>
    </Suspense>
  );
}

export default App;
