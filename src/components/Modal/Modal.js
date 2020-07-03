import React, { Fragment } from 'react';
import useShow from '../../hooks/useShow';
import LightBox from '../LightBox/LightBox';

function Modal({ showModal, onLightBoxClick, children }) {
  // const { show, setShow } = useShow(true);

  return showModal ? (
    <Fragment>
      <LightBox onClick={onLightBoxClick} />
      <div className="modal">
        {children}
        Hello world
      </div>
    </Fragment>
  ) : null;
}

export default Modal;
