import React, { useEffect, useState } from 'react';
import { Footer } from './components/footer';
import { Dashboard } from './pages/dashboard';
import { StartPage } from './pages/start-page';
import { getCoinsList } from './services/api';
import { saveCoinListToSessionOrLocalStorage } from './utils/sessionStorage';

const App = () => {
  useEffect(() => {
    getCoinsList.then((response) =>
      saveCoinListToSessionOrLocalStorage(response)
    );
  }, []);

  return (
    <>
      <Dashboard />
    </>
  );
};

export default App;
