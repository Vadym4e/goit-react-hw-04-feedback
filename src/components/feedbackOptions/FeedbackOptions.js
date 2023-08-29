import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul>
    {options.map(option => (
      <li key={option}>
        <button option={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
