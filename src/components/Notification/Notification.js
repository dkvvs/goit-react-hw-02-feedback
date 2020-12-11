import React from 'react';
import PropTipes from 'prop-types';
import s from '../../components/Notification/Notification.module.css';

const Notification = ({ message }) => <p className={s.message}>{message}</p>;

Notification.propTipes = {
  message: PropTipes.string.isRequired,
};

Notification.propTipes = {
  message: PropTipes.string.isRequired,
};

export default Notification;
