import PropTypes from 'prop-types';

import { Button } from '../Button';

import * as S from './styles';
import ReactPortal from '../ReactPortal';

export default function Modal({
  children,
  visible,
  isLoading,
  title,
  danger,
  cancelLabel,
  confirmLabel,
  onCancelButton,
  onConfirmButton,
}) {
  function handleCancelButton() {
    onCancelButton();
  }

  function handleConfirmButton() {
    onConfirmButton();
  }

  if (!visible) return false;

  return (
    <ReactPortal containerId="modal-root">
      <S.Overlay>
        <S.Container danger={danger}>
          <h1>{title}</h1>
          <div className="modal-body">{children}</div>
          <S.Footer>
            <button
              type="button"
              className="cancel-button"
              disabled={isLoading}
              onClick={handleCancelButton}
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger={danger}
              isLoading={isLoading}
              buttonLabel={confirmLabel}
              onClick={handleConfirmButton}
            />
          </S.Footer>
        </S.Container>
      </S.Overlay>,
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool,
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancelButton: PropTypes.func.isRequired,
  onConfirmButton: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  visible: false,
  isLoading: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
