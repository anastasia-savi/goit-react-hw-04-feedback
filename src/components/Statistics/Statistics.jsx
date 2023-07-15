import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default class Statistics extends React.Component {
  render() {
    return (
      <div>
        <>
          <p className={css.color}>Good: {this.props.good}</p>
          <p className={css.color}>Neutral: {this.props.neutral}</p>
          <p className={css.color}>Bad: {this.props.bad}</p>
          <p className={css.color}>Total: {this.props.total}</p>
          <p className={css.color}>
            Positive feedback:
            {this.props.positivePercentage}%
          </p>
        </>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
