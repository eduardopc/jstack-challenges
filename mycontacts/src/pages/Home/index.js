import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </S.InputSearchContainer>

      <S.Header>
        <strong>0 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Eduardo</strong>
              <small>instagram</small>
            </div>

            <span>eduardo@curso.com</span>
            <span>(11) 97877-8989</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      </S.ListContainer>
    </S.Container>
  );
}
