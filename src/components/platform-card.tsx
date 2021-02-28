import React from 'react';

interface PlatformCardProps {
  ethereumPercentage: number;
}

export const PlatformCard = ({ ethereumPercentage }: PlatformCardProps) => {
  return (
    <div className="card txt-center">
      <h4>Coins on Ethereum</h4>
      <div>
        <span className="number_circle">{ethereumPercentage || 0} %</span>
      </div>
    </div>
  );
};
