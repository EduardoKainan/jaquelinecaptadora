import React, { useState, Suspense, lazy } from 'react';
import BridgePage from './components/BridgePage';

const MainPage = lazy(() => import('./components/MainPage'));

function HomeFlow() {
  const [showMain, setShowMain] = useState(false);

  const handleShowMain = () => {
    setShowMain(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="HomeFlow">
      {!showMain ? (
        <BridgePage onNavigate={handleShowMain} />
      ) : (
        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Carregando...</div>}>
          <MainPage />
        </Suspense>
      )}
    </div>
  );
}

export default HomeFlow;
