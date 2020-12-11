import React from 'react';
import PropTipes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => (
    <button
      key={index}
      type="button"
      className={s.button}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTipes = {
  options: PropTipes.arrayOf(PropTipes.string.isRequired),
  onLeaveFeedback: PropTipes.func.isRequired,
};

export default FeedbackOptions;
