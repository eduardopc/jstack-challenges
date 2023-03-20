import { Link } from 'react-router-dom';

import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
import { debounce } from '../../utils/debounce';

import * as S from './styles';

const ORDER_CONTACTS = ['asc', 'desc'];
const ORDER_VIA_API = false;

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderContacts, setOrderContacts] = useState(ORDER_CONTACTS[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const contactsHeader = contacts.length === 1 ? 'contato' : 'contatos';

  const buildURLPath = ORDER_VIA_API
    ? `orderBy=${orderContacts}&searchTerm=${searchTerm}`
    : `orderBy=${orderContacts}`;

  const filteredContacts = useMemo(
    () => contacts.filter(
      (contact) => (contact.name.toLowerCase().includes(searchTerm.toLowerCase())),
    ),
    [contacts, searchTerm],
  );

  const listContacts = ORDER_VIA_API ? contacts : filteredContacts;

  const useEffectDependencies = ORDER_VIA_API ? [orderContacts, searchTerm] : [orderContacts];

  useEffect(() => {
    fetch(`http://localhost:1337/contacts?${buildURLPath}`, {
      method: 'GET',
    }).then(async (response) => {
      const json = await response.json();

      setContacts(json);
    }).catch((error) => {
      console.log(error);
    });
  }, useEffectDependencies);

  const handleOrderContacts = () => {
    setOrderContacts((prevState) =>
      (prevState === ORDER_CONTACTS[0]
        ? ORDER_CONTACTS[1]
        : ORDER_CONTACTS[0]
      ));
  };

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const debouncedChangeHandler = useCallback(
    debounce(handleSearchTerm, 500),
    [],
  );

  return (
    <S.Container>
      <S.InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          onChange={ORDER_VIA_API ? debouncedChangeHandler : handleSearchTerm}
        />
      </S.InputSearchContainer>

      <S.Header>
        <strong>{`${listContacts.length} ${contactsHeader}`}</strong>
        <Link to="/new">Novo contato</Link>
      </S.Header>

      {listContacts.length > 0 && (
        <S.ListHeader>
          <button type="button" onClick={handleOrderContacts}>
            <span>Nome</span>
            <S.Arrow src={arrow} alt="Arrow" rotate={orderContacts === ORDER_CONTACTS[0]} />
          </button>
        </S.ListHeader>
      )}

      {listContacts.map((contact) => (
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
