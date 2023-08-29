import React from 'react';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Statistics from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';
import Section from 'components/section/Section';
import { GlobalStyle } from 'components/GlobalStyles.style';
import { Container } from 'components/container/container';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  totalFeedbacks = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.floor(
      (this.state.good /
        (this.state.good + this.state.bad + this.state.neutral)) *
        100 || 0
    );

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <section title={'Statistics'}>
          {this.totalFeedbacks() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedbacks()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </section>
      </Container>
    );
  }
}

export default Feedback;
