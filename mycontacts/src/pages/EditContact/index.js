import React from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  return (
    <div>
      <PageHeader title="Editar Contato" />

      <ContactForm buttonLabel="Salvar Alterações" />
    </div>
  );
}
