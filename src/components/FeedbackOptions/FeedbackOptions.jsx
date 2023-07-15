import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button
          className={css.buttons}
          type="button"
          onClick={() => this.props.onLeaveFeedback('good')}
        >
          Good
        </button>
        <button
          className={css.buttons}
          type="button"
          onClick={() => this.props.onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={css.buttons}
          type="button"
          onClick={() => this.props.onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
