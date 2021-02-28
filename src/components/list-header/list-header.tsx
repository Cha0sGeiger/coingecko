import React from 'react';
import { LIST_HEADERS } from '../../utils/list-header';

export const ListHeader = () => {
  return (
    <div className="list_header flex around m-0-auto">
      {LIST_HEADERS.map((item, index) => {
        return (
          <div className="list_header_property" key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
