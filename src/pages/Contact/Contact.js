import React, { useState } from 'react';
import ContactSuccess from '../../components/ContactSuccess/ContactSuccess';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page contact contact-page">
      <ContactSuccess
        show={showModal}
        onLightBoxClick={() => setShowModal(!showModal)}
      >
        <p>Thanks for reaching out.You'll recieve a response shortly</p>
      </ContactSuccess>
      <section className="section">
        <section className="section__inner">
          <div className="contact__container grid grid-col-2">
            <ContactForm onSuccess={() => setShowModal(true)} />
            <div className="contact__socials"></div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Contact;
