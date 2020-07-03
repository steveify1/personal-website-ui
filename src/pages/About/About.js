import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrimaryBanner from '../../components/Banner/Banner';
import TwoCoumnBanner from '../../components/TwoColumnBanner/TwoColumnBanner';
import FaceCard from '../../components/Cards/FaceCard/FaceCard';
import postImg_1 from '../../assets/images/36315119_1713324662085135_4126363613151625216_n.jpg';
import './about.scss';

export default (props) => {
  // const posts = useSelector((state) => state.posts);
  const social = {
    facebook: 'https://www/facebook.com/gbola-sokoya',
    twitter: 'https://www/twitter.com/gbola-sokoya',
    instagram: 'https://www/instagram.com/gbola-sokoya',
    linkedin: 'https://www/linkedin.com/gbola-sokoya',
  };

  const description =
    'Professor of Economics and Finance, and resident zonal pastor at RCCG, Bariga zone';

  return (
    <Fragment>
      <div aria-label="about-page" className="page about-page">
        <section className="section">
          <section className="section__inner">
            <div className="two-columns">
              <section className="column">
                <FaceCard
                  name="Gbola Sokoya"
                  image={postImg_1}
                  social={social}
                  description={description}
                />
              </section>

              <section className="full-description column">
                <h3 className="headline headline-3">About</h3>
                <article aria-label="about user">
                  <h5 className="header">FAMILY</h5>
                  <p>
                    My given names are Bamgbola Oriyomi Mosopejojo Enitan. I was
                    born on July 25, 1958 as the last child of Papa Jonathan
                    Abiodun Funnso and Mama Omoyeni Adewemimo Sokoya of Sagamu,
                    Ogun State. My siblings are Abayomi Sokoya, Sesan Sokoya and
                    Yewande Dina.
                  </p>
                  <p>
                    On November 11, 1989 I obtained favour from the Lord and got
                    married to a smiling bride, Adetoro Aderinsola, Nee Ogunwo.
                    We have a son, Obademilade Mosopejojo.
                  </p>
                  <h5 className="header">EDUCATION</h5>
                  <p>
                    I attended a few nursery and primary schools and eventually
                    concluded primary education at MaryHill Convent School,
                    Agodi Ibadan. I attended the prestigious Government College
                    Ibadan and the University of Ife, Ile-Ife, graduating in
                    1981 with a Bachelor of Arts degree. My NYSC experience was
                    at the Nigerian Defence Academy in Kaduna after which I
                    joined the international firm of Coopers and Lybrand to
                    train and study to become a Chartered Accountant. I
                    qualified in November 1985 and became a Fellow of the
                    Institute of Chartered Accountants of Nigeria (ICAN) in
                    1998.
                  </p>
                  <h5 className="header">CAREER</h5>
                  <p>
                    After qualifying as an accountant, I worked in the Petroleum
                    Industry with Elf Marketing Nigeria Limited in
                    Port-Harcourt. In 1988 I came to Lagos and worked as
                    Practice Manager with DFK Sotinwa & Co, a firm of Chartered
                    Accountants. My banking career started with the defunct
                    Centre-Point Merchant Bank Limited in 1991. I retired from
                    banking in June 2015 as the Chief Compliance Officer of the
                    Union Bank of Nigeria Plc.
                  </p>
                  <h5 className="header">SALVATION EXPERIENCE</h5>
                  <p>
                    When I moved from Port-Harcourt to Lagos in January 1988, I
                    knew that I needed divine help to survive in Lagos. On
                    February 12, 1988 at the Western Regional Conference of the
                    Full Gospel Business Men’s Fellowship at the Premier Hotel,
                    Mokola, Ibadan with Reverend George Adegboye ministering on
                    the theme: “What Manner of Man is Jesus”: I gave my life to
                    Jesus Christ by accepting Him as my Lord and Saviour.
                  </p>
                  <p>
                    Significantly, from that day, I was almost 30 years old and
                    knew exactly what I was doing, I purposed in my heart that I
                    will one day preach the gospel of Jesus Christ!
                  </p>
                  <h5 className="header">MINISTRY</h5>
                  <p>
                    My wife, Adetoro and I joined the Redeemed Christian Church
                    of God in 1993 because we were looking for a church to join
                    but whose founder was dead.
                  </p>
                  <p>
                    I did my workers training at the phenomenal Freedom Hall of
                    the Apapa Parish, while my wife did hers under the Ikeja
                    Family at Ladipo Oluwole Street.
                  </p>
                  <p>
                    In July 1996 we were sent forth from the then Faith Chapel
                    Ojodu to start House of David, Ogudu. In September 2006 we
                    were transferred to Grace Tabernacle Palm Grove. In
                    September 2010 we were promoted to Pastor in Charge of Lagos
                    Province 5 with headquarters at Faith City, Ojodu.
                  </p>
                </article>
              </section>
            </div>
          </section>
        </section>
      </div>
    </Fragment>
  );
};
