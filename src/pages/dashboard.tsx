import React, { useCallback, useEffect, useState } from 'react';
import { ListHeader } from '../components/list-header/list-header';
import { ListItem } from '../components/list-item/list-item';
import { List } from '../components/list/list';
import { FilterByComponent } from '../components/filter-component';
import { PlatformCard } from '../components/platform-card';
import { getCoinListFromSessionOrStorage } from '../utils/sessionStorage';
import { ApiData } from '../services/api';

export const Dashboard = () => {
  const [filter, setFilter] = useState(false);
  const [apiData, setApiData] = useState() as ApiData[];
  const data: ApiData[] = getCoinListFromSessionOrStorage();
  const filteredData = data?.filter((item) =>
    item.platforms['ethereum']?.includes('0x')
  );

  const ethereumPercentage: number = Math.round(
    (filteredData?.length / data?.length) * 100
  );
  const dataToShow = filter ? filteredData : data;

  const onFilterChange = useCallback(
    (value: boolean) => {
      setFilter(value);
    },
    [setFilter]
  );

  return (
    <section className="dashboard">
      <main className="flex justify-center">
        <FilterByComponent value={filter} onChange={onFilterChange} />
        <List>
          <ListHeader />
          {dataToShow?.map(({ symbol, name }, index) => {
            return (
              <li key={index}>
                <ListItem name={name} symbol={symbol} />
              </li>
            );
          })}
        </List>
        {!filter ? (
          <PlatformCard ethereumPercentage={ethereumPercentage} />
        ) : null}
      </main>
    </section>
  );
};
