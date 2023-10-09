import React, { useState } from 'react';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Statistics from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';
import Section from 'components/section/Section';
import { GlobalStyle } from 'components/GlobalStyles.style';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedbacks = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.floor((good / totalFeedbacks()) * 100 || 0);

  return (
    <div>
      <GlobalStyle />
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <section title={'Statistics'}>
        {totalFeedbacks() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </section>
    </div>
  );
};

export default Feedback;
