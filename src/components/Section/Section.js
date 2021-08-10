import { useState } from "react";
import Statistics from "../statististics";
import { FeedbackOptions } from "../FeedbackOptions";
import Notification from "../../options/Notification";

const Section = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const eventСatcher = (name) => () => {
    switch (name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        console.log("error");
    }
  };

  const countPositiveFeedbackPercentage = () =>
    Math.trunc((100 * good) / countTotalFeedback());

  const countTotalFeedback = () => good + neutral + bad;

  return (
    <section>
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={eventСatcher}
      ></FeedbackOptions>
      <h2>Statistics</h2>
      {countTotalFeedback() !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </section>
  );
};

export default Section;
