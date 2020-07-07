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

  //   <section class="categories section">
  //   <section className="section__inner">
  //     <div className="flex jc-space-between ai-center headline-bar">
  //       <h4 className="headline mega">Prayers</h4>
  //       <Link to="/explore/musings" className="link">
  //         See all
  //       </Link>
  //     </div>
  //     <HScrollSlide>
  //       {posts.map((post) => (
  //         <PrimaryCard
  //           minWidth="250px"
  //           maxWidth="250px"
  //           title={post.title}
  //           image={post.image}
  //         />
  //       ))}
  //     </HScrollSlide>
  //   </section>
  // </section>

  return data.length ? (
    <section class="categories section">
      <section className="section__inner">
        <div className="flex jc-space-between ai-center headline-bar">
          <h4 className="headline mega">{title}</h4>
          {linkToSeeAll ? (
            <Link to="/explore/musings" className="link">
              See all
            </Link>
          ) : null}
        </div>
        <HScrollSlide>
          {data.map((row) => (
            <PrimaryCard
              minWidth="250px"
              maxWidth="250px"
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
