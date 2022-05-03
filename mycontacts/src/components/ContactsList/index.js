import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';

import * as S from './styles';

export default function ContactsList() {
  return (
    <S.Container>
      <S.Header>
        <strong>0 contatos</strong>
        <a href="/">Novo contato</a>
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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>

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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>

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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      </S.ListContainer>
    </S.Container>
  );
}
