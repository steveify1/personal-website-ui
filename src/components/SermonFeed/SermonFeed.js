import React from 'react';
import elysiaClient from '../../utils/elysiaClient';
import CategorizedHScrollFeed from '../CategorizedHScrollFeed/CategorizedHScrollFeed';

function SermonFeed() {
  return (
    <CategorizedHScrollFeed
      title="Sermons"
      clientCallback={async () => await elysiaClient.articles.getAll()}
      linkToSeeAll="/search?category=sermon"
    />
  );
}

export default SermonFeed;
