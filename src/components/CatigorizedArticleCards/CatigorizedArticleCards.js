import React, { useState, useEffect } from 'react';
import elysiaClient from '../../utils/elysiaClient';
import BasicCard from '../Cards/BasicCard/BasicCard';

function CatigorizedArticleCards({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(category);
    const fetchRecentArticles = async () => {
      const res = await elysiaClient.articles.getAll({
        queryParams: {
          category,
          limit: 4,
        },
      });
      setData(res.data.data.rows);
    };
    fetchRecentArticles();
  }, [category]);

  return data.length ? (
    <section class="section">
      <section className="section__inner">
        <div className="flex jc-space-between ai-center headline-bar categorized-feed">
          <h4
            style={{
              alignSelf: 'center',
              marginleft: '20px',
              display: 'block',
            }}
            className="category__title headline mega"
          >
            {category}
          </h4>
        </div>

        <div className="grid grid--flud grid-col-4 gap-1">
          {data.map((row) => (
            <BasicCard
              // minWidth="250px"
              // maxWidth="250px"
              url={row.slug}
              title={row.title}
              image={row.image}
              body={`${row.body.slice(0, 60)}...`}
              date={row.createdAt}
            />
          ))}
        </div>
      </section>
    </section>
  ) : null;
}

export default CatigorizedArticleCards;
