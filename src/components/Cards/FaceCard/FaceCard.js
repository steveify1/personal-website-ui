import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from 'react-icons/io';

const socialIcons = {
  facebook: <IoLogoFacebook />,
  twitter: <IoLogoTwitter />,
  linkedin: <IoLogoLinkedin />,
  instagram: <IoLogoInstagram />,
};

function FaceCard({ image, name, description, social = {} }) {
  const renderSocialMedia = () => {
    return (
      <Fragment>
        {Object.keys(social).map((account) => {
          if (social[account]) {
            return (
              <a
                className={`social card__icon icon ${account}`}
                href={`${social[account]}`}
                title={account}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcons[account]}
              </a>
            );
          }
          return null;
        })}
      </Fragment>
    );
  };

  return (
    <div
      data-test="face-card"
      aria-label="user__card"
      className="card rounded user face-card"
    >
      <section data-test="card__image" className="card__image user__image">
        <div className="image-wrapper">
          <img src={image || ''} alt="user__avatar" />
        </div>
      </section>

      <section className="card__details">
        <h3
          data-test="user__name"
          className="mega card__title ta-center user__name"
        >
          {name}
        </h3>
        <div aria-label="icons" className="card__icons icons flex jc-even">
          {renderSocialMedia()}
        </div>
        <p className="user__description milli">{description}</p>
        {/* <section className="flex jc-center ai-center">
          <button className="btn btn-primary btn-sm shadow btn-full-width">
            Follow
          </button>
        </section> */}
      </section>
    </div>
  );
}

FaceCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  social: {
    facebook: PropTypes.string,
    twiiter: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
  },
};
export default FaceCard;
