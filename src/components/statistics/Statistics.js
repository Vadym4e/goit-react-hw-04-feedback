import React from 'react';
import { ListStatistics, PositiveFeedback } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ListStatistics>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <PositiveFeedback>
      Positive feedback: {positivePercentage}%
    </PositiveFeedback>
  </ListStatistics>
);

export default Statistics;
