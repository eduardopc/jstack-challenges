import styled from 'styled-components';

export default styled.select`
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
  appearance: none; // para pegar a estilização definida aqui ao invés da padrão quando acessamos a app via mobile

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray.light};
    border-color: ${({ theme }) => theme.colors.gray.dark};
    opacity: 1;
  }
`;
