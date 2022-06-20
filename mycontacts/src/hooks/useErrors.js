import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const alreadyExists = errors.find((error) => error.field === field);

    if (alreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError(field) {
    return setErrors((prevState) =>
      prevState.filter((error) => error.field !== field));
  }

  function getErrorByFieldValue(fieldValue) {
    return errors.find((error) => error.field === fieldValue)?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorByFieldValue,
  };
}
