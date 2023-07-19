import React from 'react';
import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const opt = options.map(option => {
    return (
      <li className={css.listItem} key={nanoid()}>
        <button
          className={css.buttons}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    );
  });
  return (
    <div className="buttons">
      <ul className={css.list}>{opt}</ul>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
