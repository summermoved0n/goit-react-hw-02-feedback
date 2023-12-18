import { Component, Fragment } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 1,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalStatesValue =
      this.state.good + this.state.neutral + this.state.bad;
    const feedbackPercentage = (this.state.good / totalStatesValue) * 100;
    return feedbackPercentage + '%';
  };

  render() {
    return (
      <Fragment>
        <FeedbackOptions options={1} onLeaveFeedback={1}></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Fragment>
    );
  }
}
