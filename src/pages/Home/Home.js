import React, { Fragment, useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Subscription from '../../components/Subscription/Subscription';
import SearchBox from '../../components/SearchBox/SearchBox';
import RecentFeed from '../../components/RecentFeed/RecentFeed';
import TwoCoumnBanner from '../../components/TwoColumnBanner/TwoColumnBanner';
import PlainBanner from '../../components/Banner/PlainBanner';
import CategorizedFeeds from '../../components/CategorizedFeeds/CategorizedFeeds';
import './Home.scss';
import postImg_1 from '../../assets/images/5e220a63b9122.png';

export default (props) => {
  return (
    <Fragment>
      <div className="home-page">
        <Banner height="900px" maxHeight="50vh">
          <div>
            <h1 className="headline headline-2">
              Life is the movie that we see on mobile screen, or some other
              quote.
            </h1>
            <em className="ta-right">Gbola Sokoya</em>
          </div>
        </Banner>
      </div>

      <div className="home-page__search flex jc-flex-end">
        <SearchBox />
      </div>

      <RecentFeed />

      <section class="categories section">
        <section className="section__inner">
          <TwoCoumnBanner>
            <div>
              <div className="image-wrapper">
                <img src={postImg_1} alt="" />
              </div>
            </div>

            <div>
              <h2 className="headline">Marriage is the end goal. Or Not?</h2>
              <p>
                The tales of old cities, the love of two, the fruit of hearts
                lost into themselves.
                <button className="btn btn-full-width btn-primary btn-md ">
                  Read
                </button>
              </p>
            </div>
          </TwoCoumnBanner>
        </section>
      </section>

      <CategorizedFeeds />

      <PlainBanner>
        <section className="section subscription-section">
          <section className="section__inner">
            <p className="headline giga">
              Get access to powerful messages and prayers sent directly to your
              inbox every week.
            </p>
            <Subscription />
          </section>
        </section>
      </PlainBanner>
    </Fragment>
  );
};
