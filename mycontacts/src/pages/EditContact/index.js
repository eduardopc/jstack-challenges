import React, { useEffect, useRef, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsServices from '../../services/ContactsServices';
import toast from '../../utils/toast';
import Loader from '../../components/Loader';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

export default function EditContact() {
  const { id } = useParams();
  const history = useHistory();

  const contactFormRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    async function loadContact() {
      try {
        const userContact = await ContactsServices.getContactById(id);

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(userContact);

          setContactName(userContact.name);
          setIsLoading(false);
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        safeAsyncAction(() => {
          history.push('/');
          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        });
      }
    }

    loadContact();
  }, [history, id, safeAsyncAction]);

  async function handleSubmit(formData) {
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category,
      };
      await ContactsServices.updateContact(id, payload);

      setContactName(formData.name);

      toast({
        type: 'success',
        text: 'Contato atualizado com sucesso!',
        duration: 4000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao atualizar o contato!',
      });
    }
  }

  return (
    <div>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Carregando..' : `Editar ${contactName}`} />

      <ContactForm buttonLabel="Salvar Alterações" ref={contactFormRef} onSubmit={handleSubmit} />
    </div>
  );
}
