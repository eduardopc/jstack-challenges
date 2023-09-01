import React, { useEffect, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsServices from '../../services/ContactsServices';
import toast from '../../utils/toast';
import Loader from '../../components/Loader';

export default function EditContact() {
  const { id } = useParams();
  const history = useHistory();

  const [contact, setContact] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContact() {
      try {
        const userContact = await ContactsServices.getContactById(id);

        setContact(userContact);
        setIsLoading(false);
      } catch (error) {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [history, id]);

  return (
    <div>
      <Loader isLoading={isLoading} />

      <PageHeader title="Editar Contato" />

      <ContactForm key={contact.id} buttonLabel="Salvar Alterações" contact={contact} />
    </div>
  );
}
