import React from 'react';
import { IoMdHeart } from 'react-icons/io';

function Footer() {
  return (
    <div className="footer page-footer">
      <section className="section">
        <section className="section__inner">
          <p className="ta-center">
            Gbola Sokoya &copy; {new Date().getUTCFullYear()}
          </p>

          <br />

          {/* <p className="ta-center">
            Created with {<IoMdHeart className="icon--heart" />} by Steve
          </p> */}
        </section>
      </section>
    </div>
  );
}

export default Footer;
