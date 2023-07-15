import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

export default class Notification extends React.Component {
  render() {
    return (
      <div>
        <p className={css.message}>{this.props.message}</p>
      </div>
    );
  }
}

Notification.propsTypes = {
  message: PropTypes.string.isRequired,
};
