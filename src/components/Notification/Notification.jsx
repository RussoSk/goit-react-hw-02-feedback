import React from 'react';
import PropTypes from 'prop-types';

// Компонент Notification для відображення повідомлення про відсутність статистики
export const Notification = ({ message }) => {
    return <p>{message}</p>;
  };

  Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };
//   export default Notification;