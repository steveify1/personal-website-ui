import React, { Fragment } from 'react';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoIosMail,
  IoIosPhonePortrait,
} from 'react-icons/io';

const socialIcons = {
  facebook: <IoLogoFacebook className="icon social__icon facebook" />,
  twitter: <IoLogoTwitter className="icon social__icon twitter" />,
  linkedin: <IoLogoLinkedin className="icon social__icon linkedin" />,
  instagram: <IoLogoInstagram className="icon social__icon instagram" />,
};

const renderSocialAccounts = (socials) => {
  return (
    <Fragment>
      {Object.keys(socials).map((account) => {
        if (socials[account]) {
          return (
            <li className="social flex">
              <a
                className="flex"
                href={`${socials[account]}`}
                title={account}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcons[account]}
                <p style={{ textTransform: 'capitalize' }}>{account}</p>
              </a>
            </li>
          );
        }
        return null;
      })}
    </Fragment>
  );
};

function ContactSocial({ author }) {
  const contactInfo = {
    email: 'gbolasokoya@gmail.com',
    phoneNumber: '08012345678',
    socials: {
      facebook: 'http://www.facebook.com/gbola-sokoya',
      twitter: 'http://www.twitter.com/gbola-sokoya',
      instagram: 'http://www.instagram.com/gbola-sokoya',
      linkedin: 'http://www.linkedin.com/gbola-sokoya',
    },
  };

  return (
    <div className="contact__socials flex ai-center jc-center">
      <div className="contact__socials__wrapper">
        <h3 className="headline">Gbola Sokoya</h3>
        <p>Stay updated! Follow me on:</p>
        <br />
        <ul className="socials">{renderSocialAccounts(contactInfo.socials)}</ul>

        <hr />

        <br />
        <p>You can reach out directly via:</p>
        <br />
        <ul className="socials">
          <li className="social flex ai-center">
            <IoIosMail className="icon social__icon mail" />
            <a href={`mailto: ${contactInfo.email}`} className="link">
              gbolasokoya@mail.com
            </a>
          </li>
        </ul>
        <ul className="socials">
          <li className="social flex">
            <IoIosPhonePortrait className="icon social__ico twitter" />
            <p>{contactInfo.phoneNumber}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactSocial;
