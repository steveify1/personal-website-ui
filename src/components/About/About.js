import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrimaryBanner from '../Banner/Banner';
import TwoCoumnBanner from '../TwoColumnBanner/TwoColumnBanner';
import FaceCard from '../Cards/FaceCard/FaceCard';
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
                <p aria-label="about user">
                  Hi my name is Gbola Sokoya. “The traditional classical
                  approach (or ideas)” is being proposed in this book as the
                  name for the somewhat disparate ideas on the macrostructure of
                  the economy from the middle of the eighteenth century to the
                  publication of Keynes’s The General Theory in 1936. To quite a
                  considerable extent, these ideas were diffuse, varied among
                  authors and changed over time. In any case, there was no
                  single compact version of the overall exposition, though the
                  profession, following Keynes, now treats them as if there was
                  a compact model. We will call this compact statement of the
                  traditional classical ideas the traditional classical model.
                  It was never stated as a compact model even during its heyday
                  during the nineteenth and early twentieth centuries, but its
                  ideas permeate the classical paradigm. The two components of
                  the traditional classical model directly relevant to monetary
                  economics were the quantity theory for the determination of
                  prices (see Chapter 2) and the loanable funds theory for the
                  determination of interest rates (see Chapter 19). Its theory
                  of employment was the analysis of the labor market and
                  incorporated the assumption of equilibrium, which state
                  represents full employment, so that the traditional classical
                  set of ideas did not possess a theory of unemployment or of
                  variations in aggregate employment other than those of
                  variations in their long-run levels. Hence, it did not possess
                  a theory of the deviations in unemployment and output from
                  their full-employment levels. However, another component of
                  the traditional classical ideas was its business cycle
                  explanations, which allowed for fluctuations in economic
                  activity in the economy’s response to real or monetary shocks,
                  so that such explanations implicitly did envisage deviations
                  from full employment. The traditional classical approach
                  lacked the integration of its microeconomic-based theory of
                  employment and output with its business cycle explanations, as
                  well as of their mix with the quantity theory and the loanable
                  funds theory. To sum up, while this approach had many of the
                  components of macroeconomics, it lacked an integrated
                  macroeconomic framework. It also lacked an explicit treatment
                  of the aggregate demand for commodities, now encompassed in
                  the IS relationship, which is an essential building block of
                  current macroeconomics.
                </p>
              </section>
            </div>
          </section>
        </section>
      </div>
    </Fragment>
  );
};
