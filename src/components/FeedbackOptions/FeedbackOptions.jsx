import React from 'react';
import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveGFeedback, onLeaveNFeedback, onLeaveBFeedback }) => {

  return (
    <div className="buttons">
      <ul className={css.list}>
      <li className={css.listItem} key={nanoid()}>
        <button
          className={css.buttons}
          type="button"
          onClick={onLeaveGFeedback}
        >
          Good
        </button>
      </li>
      <li className={css.listItem} key={nanoid()}>
        <button
          className={css.buttons}
          type="button"
          onClick={onLeaveNFeedback}
        >
          Neutral
        </button>
      </li>
      <li className={css.listItem} key={nanoid()}>
        <button
          className={css.buttons}
          type="button"
          onClick={onLeaveBFeedback}
        >
          Bad
        </button>
      </li>
        </ul>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveGFeedback: PropTypes.func.isRequired,
  onLeaveNFeedback: PropTypes.func.isRequired,
  onLeaveBFeedback: PropTypes.func.isRequired,
};
