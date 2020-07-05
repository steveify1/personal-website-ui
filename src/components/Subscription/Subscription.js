import React, { Fragment } from 'react';
import useShow from '../../hooks/useShow';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import ContactSuccess from '../ContactSuccess/ContactSuccess';

function Subscription() {
  const { show, setShow } = useShow(false);

  return (
    <Fragment>
      <SubscriptionForm onSuccess={() => setShow(true)} />
      <ContactSuccess show={show} onLightBoxClick={() => setShow(false)}>
        <h4 className="header">Thank you for subscribing!</h4>
        <p className="header">We've just sent an email you.</p>
      </ContactSuccess>
    </Fragment>
  );
}

export default Subscription;
