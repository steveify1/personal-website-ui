import React from 'react';
import { IoIosMail } from 'react-icons/io';
import Modal from '../Modal/Modal';

function ContactSuccess({ onLightBoxClick, show, children }) {
  return (
    <Modal showModal={show} onLightBoxClick={onLightBoxClick}>
      <div aria-label="contact success modal" className="contact-success">
        <section className="contact-success__header"></section>
        <section className="contact-success__body flex flex-column ai-center jc-center">
          <IoIosMail className="icon" />
          {children}
          <button className="btn btn-sm btn-primary" onClick={onLightBoxClick}>
            Okay
          </button>
        </section>
        <section className="contact-success__footer"></section>
      </div>
    </Modal>
  );
}

export default ContactSuccess;
