import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Button from '../Button';

import * as S from './styles';

export default function Modal({ danger }) {
  return createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>Titulo</h1>
        <p>Corpo</p>
        <S.Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
