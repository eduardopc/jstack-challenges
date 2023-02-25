import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';

import * as S from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/contacts', {
      method: 'GET',
    }).then(async (response) => {
      const json = await response.json();

      setContacts(json);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const contactsHeader = contacts.length === 1 ? 'contato' : 'contatos';

  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </S.InputSearchContainer>

      <S.Header>
        <strong>{`${contacts.length} ${contactsHeader}`}</strong>
        <Link to="/new">Novo contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </S.ListContainer>

      {contacts.map((contact) => (
        <S.Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>

            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      ))}
    </S.Container>
  );
}
