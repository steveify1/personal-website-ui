import React, { useState, useEffect } from 'react';
import elysiaClient from '../../utils/elysiaClient';
import CategorizedArticleCards from '../CatigorizedArticleCards/CatigorizedArticleCards';

function CategorizedFeeds() {
  const [categories, setCategories] = useState(null);

  const renderCategorized = () => {
    return categories.map(({ category, id }) => (
      <CategorizedArticleCards key={id} category={category} />
    ));
  };

  useEffect(() => {
    console.log('Fetching categories');

    const fetchData = async () => {
      const res = await elysiaClient.category.getAll({
        pinned: true,
        limit: 3,
      });

      console.log(res.data.data.rows);

      if (res) setCategories(res.data.data.rows);
    };

    fetchData();
  }, []);

  return categories ? renderCategorized() : null;
}

export default CategorizedFeeds;
