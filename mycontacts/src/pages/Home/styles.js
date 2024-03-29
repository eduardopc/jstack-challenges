import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  margin-top: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};

  strong {
    color: ${({ theme }) => theme.colors.gray.dark};
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;
    margin-bottom: 16px;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        margin-right: 8px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary};
      }
  }
`;

export const Arrow = styled.img`
    transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'rotate(360deg)')};
    transition: transform 0.2s ease-in;
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // se elemento for da mesma família do seu antecessor, aplica o estilo
  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary_lighter};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray.light};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const TryAgain = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-top: 16px;
  }
`;

export const EmptyContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 16px;

  p {
    color: ${({ theme }) => theme.colors.gray.light};
    text-align: center;
    margin-top: 8px;

    strong {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const NotFoundFilteredContacts = styled.div`
  display: flex;
  justify-items: center;
  align-items: flex-start;
  margin-top: 16px;
  padding: 16px;

  span {
    color: ${({ theme }) => theme.colors.gray.light};
    text-align: center;
    margin-left: 16px;
    word-break: break-word;

    strong {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
