import React from 'react';
import elysiaClient from '../../utils/elysiaClient';
import CategorizedHScrollFeed from '../CategorizedHScrollFeed/CategorizedHScrollFeed';

function RecentFeed() {
  return (
    <CategorizedHScrollFeed
      title="Prayers"
      clientCallback={async () =>
        await elysiaClient.articles.getAll({
          queryParams: {
            category: 'prayer',
            limit: 5,
          },
        })
      }
      linkToSeeAll="/search?q=prayer"
    />
  );
}

export default RecentFeed;
