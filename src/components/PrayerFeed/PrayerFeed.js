import React from 'react';
import elysiaClient from '../../utils/elysiaClient';
import CategorizedHScrollFeed from '../CategorizedHScrollFeed/CategorizedHScrollFeed';

function RecentFeed() {
  return (
    <CategorizedHScrollFeed
      title="Prayers"
      clientCallback={async () => await elysiaClient.articles.getAll()}
      linkToSeeAll="/search?category=prayer"
    />
  );
}

export default RecentFeed;
