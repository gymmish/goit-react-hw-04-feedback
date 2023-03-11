import PropTypes from 'prop-types';
import { Container, ButtonF } from './Feedback.styled';
import { FaGrinBeam, FaFrown, FaGrimace } from 'react-icons/fa';

const MyFeedback = ({ options, onLeavefeedback }) => {
  return (
    <Container>
      {options.map(option => {
        return (
          <ButtonF
            type="button"
            key={option}
            onClick={() => onLeavefeedback(option)}
          >
            {option === 'good' ? (
              <FaGrinBeam style={{ color: 'green', fontSize: '35px' }} />
            ) : option === 'bad' ? (
              <FaGrimace style={{ color: 'red', fontSize: '35px' }} />
            ) : option === 'neutral' ? (
              <FaFrown style={{ color: 'grey', fontSize: '35px' }} />
            ) : null}
          </ButtonF>
        );
      })}
    </Container>
  );
};

MyFeedback.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default MyFeedback;
