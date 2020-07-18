import React from 'react';
import elysiaClient from '../../utils/elysiaClient';
import CategorizedHScrollFeed from '../CategorizedHScrollFeed/CategorizedHScrollFeed';

function RecentFeed() {
  const getArticle = async () =>
    await elysiaClient.articles.getAll({
      queryParams: {
        category: 'prayer',
        limit: 5,
      },
    });

  return (
    <CategorizedHScrollFeed
      title="Prayers"
      clientCallback={getArticle}
      // linkToSeeAll="/search?q=prayer"
    />
  );
}

export default RecentFeed;
