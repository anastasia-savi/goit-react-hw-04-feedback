import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
};

Notification.propsTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
