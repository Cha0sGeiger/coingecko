import React from 'react';

export interface CoinListItemProps {
  name: string;
  symbol: string;
  platform: string;
}

export const ListItem = ({ name, symbol, platform }: CoinListItemProps) => {
  return (
    <div className="list_item">
      <h4>{name}</h4>
      <div>
        <span>{symbol}</span>
        <span>{platform}</span>
      </div>
    </div>
  );
};
