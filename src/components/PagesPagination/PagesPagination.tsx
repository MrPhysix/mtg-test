import React, { useMemo } from 'react';
import style from './page-pagination.module.css';

type TPagesPagination = {
  totalCount: number,
  itemPerPage: number,
  handler: (pageNumber: number) => void,
  handleNextPage: (totalPages: number) => void,
  handlePrevPage: () => void
  currPage: number,
}

function PagesPagination({
  totalCount, itemPerPage, handler,
  handleNextPage, handlePrevPage, currPage,
}: TPagesPagination) {
  const maxPages = Math.ceil(totalCount / itemPerPage);
  const pageNumbers: Array<number> = useMemo(() => Array(maxPages)
    .fill(null).map((item, i) => i + 1), [totalCount, maxPages]);

  return (
    <div className={style.pagination}>
      <button
        type="button"
        className={style.button}
        onClick={() => handlePrevPage()}
        disabled={currPage <= 1}
      >
        Prev
      </button>
      <ul className={style.ul}>
        {
          pageNumbers.map((item) => (
            <button
              type="button"
              key={item}
              className={style.item}
              disabled={item === currPage}
              onClick={() => handler(item)}
            >
              {item}
            </button>
          ))
        }
      </ul>
      <button
        type="button"
        className={style.button}
        onClick={() => handleNextPage(maxPages)}
        disabled={currPage === maxPages}
      >
        Next
      </button>
    </div>
  );
}

export default PagesPagination;
