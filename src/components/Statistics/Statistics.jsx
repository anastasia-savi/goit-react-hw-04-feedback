import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <>
        <p className={css.color}>Good: {good}</p>
        <p className={css.color}>Neutral: {neutral}</p>
        <p className={css.color}>Bad: {bad}</p>
        <p className={css.color}>Total: {total}</p>
        <p className={css.color}>
          Positive feedback:
          {positivePercentage}%
        </p>
      </>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
