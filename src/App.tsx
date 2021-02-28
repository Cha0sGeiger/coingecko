import React, { useEffect, useState } from 'react';
import { getCoinsList } from './services/api';

const App = () => {
  // useEffect(() => {
  //   getCoinsList.then((response) => console.log(response, 'response data'));
  // }, []);

  return (
    <>
      Hello typescript option here
      <div className="hello">
        <h1>Hey</h1>
      </div>
      <div>
        Icons made by{' '}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
};

export default App;
