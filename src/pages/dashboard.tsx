import React from 'react';
import { ListHeader } from '../components/list-header/list-header';
import { ListItem } from '../components/list-item/list-item';
import { List } from '../components/list/list';

export const Dashboard = () => {
  const options = [
    { id: '1', name: 'Mabelle Etherum', platform: 'desert' },
    { id: '2', name: 'Alberta Etherum', platform: 'daily' },
    { id: '3', name: 'Jason Etherum', platform: 'minerals' },
    { id: '5', name: 'Duane Etherum', platform: 'face' },
    { id: '55', name: 'Lulu Etherum', platform: 'also' },
    { id: '66', name: 'Eugene Etherum', platform: 'park' },
  ];

  return (
    <section className="dashboard">
      <main>
        <List>
          <ListHeader />
          {options.map(({ platform, id, name }, index) => {
            return (
              <li key={index}>
                <ListItem platform={platform} name={name} symbol={id} />
              </li>
            );
          })}
        </List>
      </main>
    </section>
  );
};
