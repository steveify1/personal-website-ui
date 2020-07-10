import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ContactSuccess from '../../components/ContactSuccess/ContactSuccess';
import ContactForm from '../../components/ContactForm/ContactForm';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoIosMail,
  IoIosPhonePortrait,
} from 'react-icons/io';

const socialIcons = {
  facebook: <IoLogoFacebook />,
  twitter: <IoLogoTwitter />,
  linkedin: <IoLogoLinkedin />,
  instagram: <IoLogoInstagram />,
};

const renderSocialAccounts = (socials) => {
  return (
    <Fragment>
      {Object.keys(socials).map((account) => {
        if (socials[account]) {
          return (
            <Link
              className={`social icon ${account}`}
              to={`${socials[account]}`}
              title={account}
              target="_blank"
            >
              {socialIcons[account]}
            </Link>
          );
        }
        return null;
      })}
    </Fragment>
  );
};

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
          <div className="contact__container grid">
            <div className="contact__socials flex ai-center jc-center">
              <div className="contact__socials__wrapper">
                <h3 className="headline">Gbola Sokoya</h3>
                <p>Stay updated! Follow me on:</p>
                <br />
                <ul className="socials">
                  <li className="social flex ai-center">
                    <IoLogoFacebook className="icon social__icon facebook" />
                    <p>Facebook</p>
                  </li>
                </ul>
                <ul className="socials">
                  <li className="social flex">
                    <IoLogoTwitter className="icon social__icon twitter" />
                    <p>Twitter</p>
                  </li>
                </ul>
                <ul className="socials">
                  <li className="social flex">
                    <IoLogoInstagram className="icon social__icon instagram" />
                    <p>Instagram</p>
                  </li>
                </ul>
                <ul className="socials">
                  <li className="social flex">
                    <IoLogoLinkedin className="icon social__icon linkedin" />
                    <p>Facebook</p>
                  </li>
                </ul>

                <hr />

                <br />
                <p>You can reach out directly via:</p>
                <br />
                <ul className="socials">
                  <li className="social flex ai-center">
                    <IoIosMail className="icon social__icon mail" />
                    <Link className="link">gbolasokoya@mail.com</Link>
                  </li>
                </ul>
                <ul className="socials">
                  <li className="social flex">
                    <IoIosPhonePortrait className="icon social__ico twitter" />
                    <p>07012345678</p>
                  </li>
                </ul>
              </div>
            </div>
            <ContactForm onSuccess={() => setShowModal(true)} />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Contact;
