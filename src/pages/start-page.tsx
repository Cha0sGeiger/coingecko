import React from 'react';
import Block from '../assets/cube.svg';
import EthIcon from '../assets/ethereum.svg';

export const StartPage = () => {
  return (
    <div className="start-page">
      <main className="start-page-container">
        <div className="flex around">
          <div>
            <h1>Track your favorite coins</h1>
            <div className="flex align-item-center">
              <h3>Platform specific search</h3>
              <img src={EthIcon} alt="ethereum-icon" height="50px" />
            </div>
          </div>
          <div>
            <img src={Block} alt="blocks" height="200px" />
          </div>
        </div>
        <div className="flex center button-container">
          <button className="button-animated ripple">Start here</button>
        </div>
      </main>
    </div>
  );
};
