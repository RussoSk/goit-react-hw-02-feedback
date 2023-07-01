import React from 'react';
import css from './Statistics.module.css'
import PropTypes from 'prop-types';


// Компонент Statistics для відображення статистики
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <div className={css.statwraper}>
        <p>Good: ......... {good}</p>
        <p>Neutral: ...... {neutral}</p>
        <p>Bad: ............. {bad}</p>
        <p>Total: ........... {total}</p>
        <p>Positive Feedback: - {positivePercentage}%</p>
      </div>
    );
  };

  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
//   export default Statistics;