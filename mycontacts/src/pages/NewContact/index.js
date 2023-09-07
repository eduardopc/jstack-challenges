import React, { useRef } from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsServices from '../../services/ContactsServices';
import toast from '../../utils/toast';

export default function NewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(formData) {
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category,
      };
      await ContactsServices.createContact(payload);

      contactFormRef.current.resetFieldsValues();

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 4000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return (
    <div>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" ref={contactFormRef} onSubmit={handleSubmit} />
    </div>
  );
}
