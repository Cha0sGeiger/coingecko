import React, { useEffect, useState } from 'react';
import { Footer } from './components/footer';
import { Dashboard } from './pages/dashboard';
import { StartPage } from './pages/start-page';
import { getCoinsList } from './services/api';

const App = () => {
  // useEffect(() => {
  //   getCoinsList.then((response) => console.log(response, 'response data'));
  // }, []);

  return (
    <>
      <Dashboard />
    </>
  );
};

export default App;
