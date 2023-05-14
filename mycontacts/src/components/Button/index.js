import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from '../Spinner';
import * as S from './styles';

export function Button({
  type, buttonLabel, disabled, isLoading, onClick,
}) {
  return (
    <S.ButtonContainer onClick={onClick} type={type} disabled={disabled || isLoading}>
      {!isLoading && buttonLabel}
      {isLoading && <Spinner size={16} />}
    </S.ButtonContainer>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'submit',
  disabled: false,
  isLoading: false,
  onClick: () => {},
};
