import PropTypes from 'prop-types';

import * as S from './styles';

export function Spinner({ size }) {
  return (
    <S.Spinner size={size} />
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 32,
};
