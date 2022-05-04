import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function NewContact() {
  return (
    <div>
      <PageHeader title="Novo Contato" />
      <Input type="text" placeholder="Nome" />

      <Select>
        <option value="123">Teste</option>
      </Select>
      <Button>Salvar alterações</Button>
      <Button disabled>Salvar alterações</Button>
    </div>
  );
}
