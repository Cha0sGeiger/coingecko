import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  onPageClick: (selectedItem: { selected: number }) => void;
  forcePage: number;
}

export const Pagination = ({
  pageCount,
  onPageClick,
  forcePage,
}: PaginationProps) => {
  return (
    <ReactPaginate
      forcePage={forcePage}
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={10}
      onPageChange={onPageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};
