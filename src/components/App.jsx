import React, { Component } from 'react';

import { Section } from '../components/Section/Section';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';
import css from './App.module.css'



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Збільшення лічильника відповідного відгуку
  handleLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  // Підрахунок загальної кількості відгуків
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // Підрахунок  позитивних відгуків (%)
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.appWraper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onButtonFeedback={this.handleLeaveFeedback}
          />
        </Section>

        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}

// export default App;