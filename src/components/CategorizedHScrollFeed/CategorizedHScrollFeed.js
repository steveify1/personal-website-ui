import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HScrollSlide from '../HScrollSlide/HScrollSlide';
import PrimaryCard from '../Cards/PrimaryCard/PrimaryCard';

function CategorizedHScrollFeed({ title, clientCallback, linkToSeeAll }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRecentArticles = async () => {
      const res = await clientCallback();
      setData(res.data.data.rows);
    };
    fetchRecentArticles();
  }, [clientCallback]);

  return data.length ? (
    <section class="categories section">
      <section className="section__inner">
        <div className="flex jc-space-between ai-center headline-bar">
          <h4
            style={{
              alignSelf: 'center',
              marginleft: '20px',
              display: 'block',
            }}
            className="headline mega"
          >
            {title}
          </h4>
          {linkToSeeAll ? (
            <div>
              <Link
                style={{
                  alignSelf: 'center',
                  marginleft: '20px',
                  display: 'block',
                }}
                to={linkToSeeAll}
                className="link"
              >
                See all
              </Link>
            </div>
          ) : null}
        </div>
        <HScrollSlide>
          {data.map((row) => (
            <PrimaryCard
              minWidth="250px"
              maxWidth="250px"
              url={row.slug}
              title={row.title}
              image={row.image}
            />
          ))}
        </HScrollSlide>
      </section>
    </section>
  ) : null;
}

export default CategorizedHScrollFeed;
