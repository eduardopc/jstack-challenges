import styled, { css } from 'styled-components';

const wrapperModifiers = {
  danger: (theme) => css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `,
};

export const ButtonContainer = styled.button`
  ${({ theme, danger }) => css`
    height: 52px;
    border: none;
    padding: 0 16px;
    border-radius: 4px;
    background: ${theme.colors.primary};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${theme.colors.primary_light};
    }

    &:active {
      background: ${theme.colors.primary_dark};
    }

    &[disabled] {
      background: #ccc !important;
      cursor: default !important;
    }

    &[danger] {
      background: red;
      cursor: default;
    }

    ${!!danger && wrapperModifiers.danger(theme)};
  `}
`;
