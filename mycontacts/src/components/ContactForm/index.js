import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import FormGroup from '../FormGroup';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';

import * as S from './styles';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState(''); // controlled components
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorByFieldValue,
  } = useErrors();
  // const phoneInput = useRef(null); // uncontrolled component

  // function handlePhoneInput() {
  //   console.log(phoneInput.current.value);
  // }

  const isValid = name && errors.length === 0;

  const handleName = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Campo nome é obrigatório' });
    } else {
      removeError('name');
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'mail', message: 'E-mail inválido!' });
    } else {
      removeError('mail');
    }
  };

  const handlePhone = (event) => {
    setPhone(formatPhone(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // evita o refresh da pagina ao realizar o submit

    // console.log({
    //   name,
    //   email,
    //   phone,
    //   category,
    // });
  };

  return (
    // TIP: no validade remove as validações realizadas pelo próprio HMTL - e.g.: email inválido
    <S.Form onSubmit={handleSubmit} noValidate>
      {/* <button type="button" onClick={handlePhoneInput}>Show phoneInput Value</button> */}
      <FormGroup error={getErrorByFieldValue('name')}>
        <Input
          error={getErrorByFieldValue('name')}
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleName}
        />
      </FormGroup>

      <FormGroup error={getErrorByFieldValue('mail')}>
        <Input
          type="email"
          error={getErrorByFieldValue('mail')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmail}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhone}
          maxLength={15}
          // ref={phoneInput}
          // onChange={(event) => event.target.value}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Selecione</option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">LinkedIn</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit" disabled={!isValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
