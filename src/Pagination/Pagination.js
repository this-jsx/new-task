import React from "react";
import Button from '../Button/Button'
import './Pagination.css';

export default function Pagination(props) {
  return (
    <div className="pagination">
      <Button
        className="pagination__prev"
        onClick={props.onPrevClick}
        disabled={props.page === 1}
      >
        Предыдущая страница
      </Button>

      <div className="pagination__page">{props.page} / {props.pagesTotal}</div>

      <Button
        className="pagination__next"
        onClick={props.onNextClick}
        disabled={props.page === props.pagesTotal}
      >
        Следующая страница
      </Button>
    </div>
  );
}
