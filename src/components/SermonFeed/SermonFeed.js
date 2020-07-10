import React from 'react';
import elysiaClient from '../../utils/elysiaClient';
import CategorizedHScrollFeed from '../CategorizedHScrollFeed/CategorizedHScrollFeed';

function SermonFeed() {
  return (
    <CategorizedHScrollFeed
      title="Sermons"
      clientCallback={async () =>
        await elysiaClient.articles.getAll({
          queryParams: {
            category: 'sermon',
            limit: 5,
          },
        })
      }
      linkToSeeAll="/search?q=sermon"
    />
  );
}

export default SermonFeed;
