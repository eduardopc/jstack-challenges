import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ message, onRemoveMessage }) {
  useEffect(() => {
    const idSetTimeout = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 3000);

    return () => {
      clearTimeout(idSetTimeout);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      /* para acessibilidade - ao clicar no tab, o primeiro elemento a ser mostrado
       por uma ferramenta de acessibilidade será com o menor índice
      */
      tabIndex={0}
      role="button"
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="XCircleIcon" />}
      {message.type === 'success' && <img src={checkCircleIcon} alt="CheckCircleIcon" />}

      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
