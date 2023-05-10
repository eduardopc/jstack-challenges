import React from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsServices from '../../services/ContactsServices';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category,
      };
      await ContactsServices.createContact(payload);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </div>
  );
}
