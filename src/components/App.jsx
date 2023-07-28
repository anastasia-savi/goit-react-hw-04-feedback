import {useState} from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default function App() {

  const [good,setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveGFeedback = () => {
    setGood(state => state + 1)
  }

  const onLeaveNFeedback = () => {
    setNeutral(state => state + 1)
  }

  const onLeaveBFeedback = () => {
    setBad(state => state + 1)
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (good * 100) /
        (good + neutral + bad)
    );
  }
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveGFeedback={onLeaveGFeedback}
            onLeaveNFeedback={onLeaveNFeedback}
            onLeaveBFeedback={onLeaveBFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
