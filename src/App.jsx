import React, { useState } from 'react';
import BridgePage from './components/BridgePage';
import MainPage from './components/MainPage';

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleShowMain = () => {
    setShowMain(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      {!showMain ? (
        <BridgePage onNavigate={handleShowMain} />
      ) : (
        <MainPage />
      )}
    </div>
  );
}

export default App;
