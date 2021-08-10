import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>
          Good <span>{good}</span>
        </li>
        <li>
          Neutral <span>{neutral}</span>
        </li>
        <li>
          Bad <span>{bad}</span>
        </li>
        <li>
          total <span>{total}</span>
        </li>
        <li>
          Positive feedback:
          {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
