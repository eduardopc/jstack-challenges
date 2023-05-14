import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import Loader from '../../components/Loader';
import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import notFound from '../../assets/images/not-found.svg';
import { debounce } from '../../utils/debounce';

import * as S from './styles';
import ContactsServices from '../../services/ContactsServices';
import { Button } from '../../components/Button';

const ORDER_CONTACTS = ['asc', 'desc'];
const ORDER_VIA_API = false; // PARA FAZER O FILTRO DE USUÁRIOS VIA API OU OFFLINE

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderContacts, setOrderContacts] = useState(ORDER_CONTACTS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const contactsHeader = contacts.length === 1 ? 'contato' : 'contatos';

  const buildURLPath = ORDER_VIA_API
    ? `orderBy=${orderContacts}&searchTerm=${searchTerm}`
    : `orderBy=${orderContacts}`;

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [contacts, searchTerm],
  );

  const listContacts = ORDER_VIA_API ? contacts : filteredContacts;

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsServices.listContacts(buildURLPath);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
      toast.error('Erro ao carregar a lista de contatos', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
      // metodo criado dentro da classe de custom Error - APIError
      console.log(error.getContentType());
    } finally {
      setIsLoading(false);
    }
  }, [buildURLPath]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleOrderContacts = () => {
    setOrderContacts((prevState) =>
      (prevState === ORDER_CONTACTS[0] ? ORDER_CONTACTS[1] : ORDER_CONTACTS[0]));
  };

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const debouncedChangeHandler = useCallback(
    debounce(handleSearchTerm, 500),
    [],
  );

  const handleTryAgain = () => {
    loadContacts();
  };

  return (
    <S.Container>
      <Loader isLoading={isLoading} />

      <S.InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          onChange={ORDER_VIA_API ? debouncedChangeHandler : handleSearchTerm}
        />
      </S.InputSearchContainer>

      <S.Header
        justifyContent={
          hasError
            ? 'flex-end'
            : contacts.length > 0
              ? 'space-between'
              : 'center'
        }
      >
        {!!(!hasError && contacts.length) && (
          <strong>
            {`${listContacts.length}
            ${contactsHeader}`}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </S.Header>

      {hasError && (
        <S.TryAgain>
          <Button type="button" onClick={handleTryAgain} buttonLabel="Tentar Novamente" />
        </S.TryAgain>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <S.EmptyContacts>
              <img src={emptyBox} alt="Empty Box" />

              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão{' '}
                <strong>”Novo contato”</strong> à cima para cadastrar o seu
                primeiro!
              </p>
            </S.EmptyContacts>
          )}

          {(!ORDER_VIA_API && contacts.length > 0 && filteredContacts.length < 1) && (
            <S.NotFoundFilteredContacts>
              <img src={notFound} alt="Not found" />

              <span>
                Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>
              </span>
            </S.NotFoundFilteredContacts>
          )}

          {listContacts.length > 0 && (
            <S.ListHeader>
              <button type="button" onClick={handleOrderContacts}>
                <span>Nome</span>
                <S.Arrow
                  src={arrow}
                  alt="Arrow"
                  rotate={orderContacts === ORDER_CONTACTS[0]}
                />
              </button>
            </S.ListHeader>
          )}

          {listContacts.map((contact) => (
            <S.Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category_name && (
                    <small>{contact.category_name}</small>
                  )}
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
        </>
      )}
    </S.Container>
  );
}
