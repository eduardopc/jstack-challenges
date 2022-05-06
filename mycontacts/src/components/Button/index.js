import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary_light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary_dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

  &[dangerr] {
    background: red;
    cursor: default;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
`;
