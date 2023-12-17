import { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback.options';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  Feedback = () => {
    const [state, setState] = useState( {
    good: 0,
    neutral: 0,
    bad: 0, 
  })
}
  toCount = state => {
    setState(prevState => ({
      ...prevState,
      [state]: prevState[state] + 1}));
    console.log(state);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    return (
      countTotalFeedback() === 0
        ? 0
        : (good / countTotalFeedback()) * 100
    ).toFixed(0);
  };

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.toCount}
          />
        </Section>

        {countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositivePercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }

