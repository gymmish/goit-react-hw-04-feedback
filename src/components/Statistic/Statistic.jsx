import PropTypes from 'prop-types';
import { StatisticList } from './Statistic.styles';

const Statisctics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <StatisticList>
      <li>
        <p>Good {good}</p>
      </li>
      <li>
        <p>Netural {neutral}</p>
      </li>
      <li>
        <p>Bad {bad}</p>
      </li>
      <li>
        <p>Total {total}</p>
      </li>
      <li>
        <p>Positive feedback {percentage} %</p>
      </li>
    </StatisticList>
  );
};

Statisctics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statisctics;
