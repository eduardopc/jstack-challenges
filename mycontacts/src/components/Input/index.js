import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  outline: none;
  border: 2px solid #fff;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray.light};
    border-color: ${({ theme }) => theme.colors.gray.dark};
  }
`;
