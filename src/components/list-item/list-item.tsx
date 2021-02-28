import React from 'react';

export interface CoinListItemProps {
  name: string;
  symbol: string;
}

export const ListItem = ({ name, symbol }: CoinListItemProps) => {
  return (
    <div className="list_item m-0-auto">
      <div className="list-item-property">{name}</div>
      <div className=" list-item-property">{symbol}</div>
    </div>
  );
};
