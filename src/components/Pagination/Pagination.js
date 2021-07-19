import React from 'react';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import * as styles from './Pagination.module.scss';

const Pagination = ({
  prevPagePath,
  nextPagePath,
}) => (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev']}>
        {prevPagePath ? <Link rel="prev" to={prevPagePath}>{PAGINATION.PREV_PAGE}</Link> : null }
      </div>
      <div className={styles['pagination__next']}>
        {nextPagePath ? <Link rel="prev" to={nextPagePath}>{PAGINATION.NEXT_PAGE}</Link> : null }
      </div>
    </div>
);

export default Pagination;
