import React from "react";
import Button from '../Button/Button'
import './Pagination.css';

export default function Pagination({onPrevClick, onNextClick, page, pagesTotal}) {
  return (
    <div className="pagination">
      <Button
        className="pagination__prev pagination-btn"
        onClick={onPrevClick}
        disabled={page === 1}
      >
        Предыдущая страница
      </Button>

      <div className="pagination__page">{page} / {Math.max(pagesTotal, 1)}</div>

      <Button
        className="pagination__next pagination-btn"
        onClick={onNextClick}
        disabled={page === pagesTotal || page === 1}
      >
        Следующая страница
      </Button>
    </div>
  );
}
