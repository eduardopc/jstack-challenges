import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

export default function ReactPortal({ children, containerId }) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return createPortal(children, container);
}

ReactPortal.propTypes = {
  children: PropTypes.node.isRequired,
  containerId: PropTypes.string,
};

ReactPortal.defaultProps = {
  containerId: 'portal-root',
};
