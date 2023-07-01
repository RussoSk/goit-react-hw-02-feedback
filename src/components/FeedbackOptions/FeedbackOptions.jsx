import React from 'react';
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

// Компонент FeedbackOptions для відображення кнопок відгуків
export const FeedbackOptions = ({ options, onButtonFeedback }) => {
    return (
      <div className={css.buttonMod}>
        {options.map((option) => (
          <button className={css.button} key={option} onClick={() => onButtonFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onButtonFeedback: PropTypes.func.isRequired,
  };

//   export default FeedbackOptions;