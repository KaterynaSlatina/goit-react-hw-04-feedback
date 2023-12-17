import { useState } from 'react';
import { FeedbackOptions } from './Feedback/Feedback.options';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const toCount = state => {
    setState(prevState => ({
      ...prevState,
      [state]: prevState[state] + 1,
    }));
    console.log(state);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    return (
      countTotalFeedback() === 0 ? 0 : (state.good / countTotalFeedback()) * 100
    ).toFixed(0);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={toCount}
        />
      </Section>

      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.good}
            bad={state.good}
            total={countTotalFeedback()}
            positivePercentage={countPositivePercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
