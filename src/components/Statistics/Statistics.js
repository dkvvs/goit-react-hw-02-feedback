import React from 'react';
import PropTipes from 'prop-types';
import Notification from '../../components/Notification/Notification';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total > 0 ? (
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>PositivePercentage: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </div>
  );
};

Statistics.propTipes = {
  good: PropTipes.number.isRequired,
  neutral: PropTipes.number.isRequired,
  bad: PropTipes.number.isRequired,
  total: PropTipes.number.isRequired,
  positivePercentage: PropTipes.number.isRequired,
};

export default Statistics;
