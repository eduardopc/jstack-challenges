import React, { useEffect, useRef, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsServices from '../../services/ContactsServices';
import toast from '../../utils/toast';
import Loader from '../../components/Loader';

export default function EditContact() {
  const { id } = useParams();
  const history = useHistory();

  const contactFormRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContact() {
      try {
        const userContact = await ContactsServices.getContactById(id);

        contactFormRef.current.setFieldsValues(userContact);
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

      <ContactForm buttonLabel="Salvar Alterações" ref={contactFormRef} />
    </div>
  );
}
