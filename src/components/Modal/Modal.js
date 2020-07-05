import React, { Fragment } from 'react';
import LightBox from '../LightBox/LightBox';

function Modal({ showModal, onLightBoxClick, children }) {
  return showModal ? (
    <Fragment>
      <LightBox onClick={onLightBoxClick} color="hite" />
      <div className="modal shadow">{children}</div>
    </Fragment>
  ) : null;
}

export default Modal;
