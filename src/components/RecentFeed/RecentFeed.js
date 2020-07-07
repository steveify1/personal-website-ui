import React from 'react';
import elysiaClient from '../../utils/elysiaClient';
import CategorizedHScrollFeed from '../CategorizedHScrollFeed/CategorizedHScrollFeed';

function RecentFeed() {
  return (
    <CategorizedHScrollFeed
      title="Recent Articles"
      clientCallback={async () => await elysiaClient.articles.getAll()}
    />
  );
}

export default RecentFeed;
