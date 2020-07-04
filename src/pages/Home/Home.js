import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import TopPost from '../TopPost/TopPost';
import HScrollSlide from '../../components/HScrollSlide/HScrollSlide';
import Subscription from '../../components/Subscription/Subscription';
import TwoCoumnBanner from '../../components/TwoColumnBanner/TwoColumnBanner';
import PrimaryCard from '../../components/Cards/PrimaryCard/PrimaryCard';
import PlainBanner from '../../components/Banner/PlainBanner';
import classes from './Home.module.scss';
import postImg_1 from '../../assets/images/5e220a63b9122.png';

const posts = [
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
  {
    title: 'Man Untold',
    image: postImg_1,
  },
];

export default (props) => {
  return (
    <Fragment>
      <div className={classes.Home}>
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
      <div>
        <TopPost />
      </div>

      <section class="categories section"></section>

      <section class="categories section">
        <section className="section__inner">
          <h4 className="headline mega">Recent articles</h4>
          <HScrollSlide>
            {posts.map((post) => (
              <PrimaryCard
                minWidth="250px"
                title={post.title}
                image={post.image}
              />
            ))}
          </HScrollSlide>
        </section>
      </section>

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

      <section class="categories section">
        <section className="section__inner">
          <div className="flex jc-space-between ai-center headline-bar">
            <h4 className="headline mega">Sermons</h4>
            <Link to="/explore/musings" className="link">
              See all
            </Link>
          </div>
          <HScrollSlide>
            {posts.map((post) => (
              <PrimaryCard
                minWidth="250px"
                title={post.title}
                image={post.image}
              />
            ))}
          </HScrollSlide>
        </section>
      </section>

      <section class="categories section">
        <section className="section__inner">
          <div className="flex jc-space-between ai-center headline-bar">
            <h4 className="headline mega">Prayers</h4>
            <Link to="/explore/musings" className="link">
              See all
            </Link>
          </div>
          <HScrollSlide>
            {posts.map((post) => (
              <PrimaryCard
                minWidth="250px"
                title={post.title}
                image={post.image}
              />
            ))}
          </HScrollSlide>
        </section>
      </section>

      <PlainBanner>
        <section className="section subscription-section">
          <section className="section__inner">
            <p className="headline giga">
              Get access to powerful messages and prayers sent directly to your
              inbox every week.
            </p>
            <Subscription />
            {/* <form>
              <div className="form-group">
                <div className="input-group input-group--alt">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Please enter a valid email"
                  />
                  <button className="btn btn-secondary  btn-shadow btn-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </form> */}
          </section>
        </section>
      </PlainBanner>
    </Fragment>
  );
};
