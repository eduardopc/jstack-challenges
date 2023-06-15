import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';
import { Button } from '../Button';
import FormGroup from '../FormGroup';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';

import * as S from './styles';
import CategoriesServices from '../../services/CategoriesServices';

export default function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState(''); // controlled components
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      try {
        const listCategories = await CategoriesServices.listCategories();

        setCategoriesList(listCategories);
      } catch (error) {
        toast.warning('Lista de categorias não foi carregada com sucesso', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        });
      } finally {
        setIsLoading(false);
      }
    }

    loadCategories();
  }, []);

  const {
    errors, setError, removeError, getErrorByFieldValue,
  } = useErrors();
  // const phoneInput = useRef(null); // uncontrolled component

  // function handlePhoneInput() {
  //   console.log(phoneInput.current.value);
  // }

  const isValid = name && errors.length === 0;
  const disabledButton = loading || !isValid || isSubmitting;

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

  const handleSubmit = async (event) => {
    event.preventDefault(); // evita o refresh da pagina ao realizar o submit

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone,
      category,
    });

    setIsSubmitting(false);
  };

  return (
    // TIP: noValidade remove as validações realizadas pelo próprio HMTL - e.g.: email inválido
    <S.Form onSubmit={handleSubmit} noValidate>
      {/* <button type="button" onClick={handlePhoneInput}>Show phoneInput Value</button> */}
      <FormGroup error={getErrorByFieldValue('name')}>
        <Input
          error={getErrorByFieldValue('name')}
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleName}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorByFieldValue('mail')}>
        <Input
          type="email"
          error={getErrorByFieldValue('mail')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmail}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhone}
          maxLength={15}
          disabled={isSubmitting}
          // ref={phoneInput}
          // onChange={(event) => event.target.value}
        />
      </FormGroup>

      <FormGroup isLoading={loading}>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          disabled={loading || isSubmitting}
        >
          <option value="">Sem categoria</option>
          {categoriesList.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button
          disabled={disabledButton}
          isLoading={isSubmitting}
          buttonLabel={buttonLabel}
        />
      </S.ButtonContainer>
    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
