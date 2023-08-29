import React from 'react';
import { BtnList, Button } from './FeedbackOptions.style';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <BtnList>
    {options.map(option => (
      <li key={option}>
        <Button option={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      </li>
    ))}
  </BtnList>
);

export default FeedbackOptions;
