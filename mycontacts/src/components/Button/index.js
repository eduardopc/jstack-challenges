import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from '../Spinner';
import * as S from './styles';

export function Button({
  type, buttonLabel, disabled, isLoading, onClick, danger,
}) {
  return (
    <S.ButtonContainer
      danger={danger}
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
    >
      {!isLoading && buttonLabel}
      {isLoading && <Spinner size={16} />}
    </S.ButtonContainer>
  );
}

Button.propTypes = {
  danger: PropTypes.bool,
  type: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  danger: false,
  type: 'submit',
  disabled: false,
  isLoading: false,
  onClick: undefined,
};
