import React, { Fragment } from 'react';
import useShow from '../../hooks/useShow';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import Modal from '../Modal/Modal';

function Subscription() {
  const { show, setShow } = useShow(false);

  return (
    <Fragment>
      <SubscriptionForm onSuccess={() => setShow(true)} />
      {/* <Modal showModal={show} onLightBoxClick={() => setShow(false)}>
        Thanks for subscribing!
      </Modal> */}
    </Fragment>
  );
}

export default Subscription;
