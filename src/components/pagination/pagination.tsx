import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  pageCount: number;
  onPageClick: (selectedItem: { selected: number }) => void;
}

export const Pagination = ({ pageCount, onPageClick }: PaginationProps) => {
  return (
    <ReactPaginate
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
