import React, { useCallback, useEffect, useState } from 'react';
import { ListHeader } from '../components/list-header/list-header';
import { ListItem } from '../components/list-item/list-item';
import { List } from '../components/list/list';
import { FilterByComponent } from '../components/filter-component';
import { PlatformCard } from '../components/platform-card';
import { getCoinListFromSessionOrStorage } from '../utils/sessionStorage';
import { ApiData } from '../services/api';
import { Pagination } from '../components/pagination/pagination';

interface InitialStateValue {
  loadFrom: number;
  loadTo: number;
}

const initialStateItemsToRender: InitialStateValue = {
  loadFrom: 0,
  loadTo: 10,
};

export const Dashboard = () => {
  const [filter, setFilter] = useState(false);
  const data: ApiData[] = getCoinListFromSessionOrStorage();
  const [page, setPage] = useState(0);
  const [pageReset, setPageReset] = useState<number>(0);
  const [itemsToRender, setItemsToRender] = useState(initialStateItemsToRender);
  const filteredData = data?.filter((item) =>
    item.platforms['ethereum']?.includes('0x')
  );

  const ethereumPercentage: number = Math.round(
    (filteredData?.length / data?.length) * 100
  );
  const dataToShow = filter ? filteredData : data;

  const onPageChange = (data: { selected: number }) => {
    setPageReset(data.selected);
    setItemsToRender({
      loadFrom: data.selected * 10,
      loadTo: data.selected * 10 + 10,
    });
  };

  const onFilterChange = useCallback(
    (value: boolean) => {
      setPageReset(0);
      setItemsToRender(initialStateItemsToRender);
      setFilter(value);
    },
    [setFilter]
  );

  useEffect(() => {
    filter && setPage(Math.ceil(filteredData.length / 10));
    !filter && setPage(Math.ceil(data.length / 10));
  }, [filteredData, data, filter]);

  return (
    <section className="dashboard">
      <main>
        <div className="flex justify-center">
          <div>
            <FilterByComponent value={filter} onChange={onFilterChange} />
            {!filter ? (
              <PlatformCard ethereumPercentage={ethereumPercentage} />
            ) : null}
          </div>
          <div>
            <List>
              <ListHeader />
              {dataToShow
                ?.slice(itemsToRender.loadFrom, itemsToRender.loadTo)
                .map(({ symbol, name }, index) => {
                  return (
                    <li key={index}>
                      <ListItem name={name} symbol={symbol} />
                    </li>
                  );
                })}
            </List>
            <Pagination
              forcePage={pageReset}
              pageCount={page}
              onPageClick={onPageChange}
            />
          </div>
        </div>
      </main>
    </section>
  );
};
