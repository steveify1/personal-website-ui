import React, { useState, Fragment } from 'react';
import CategoryPageWrapper from '../CategoryPageWrapper/CategoryPageWrapper';
import SearchCard from '../Cards/SearchCard/SearchCard';
import Loader from '../Loader/Loader';

function CategoryPageWrapperWithArticles({ title, category }) {
  const [result, setResult] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const renderData = (result = []) => {
    if (!result.length) return <p>No publication on {selectedDate}</p>;
    return result.map((row) => {
      return (
        <div className="result">
          <SearchCard
            image={row.img_url}
            title={row.title}
            slug={row.slug}
            body={row.body}
            date={row.date}
            author={row.author}
            category={row.category}
          />
        </div>
      );
    });
  };

  return (
    <Fragment>
      <CategoryPageWrapper
        title={title}
        category={category}
        consumeData={(data) => setResult(data)}
        consumeSelectedDate={(date) => setSelectedDate(date)}
      >
        {result === null ? <Loader /> : renderData(result)}
      </CategoryPageWrapper>
      `
    </Fragment>
  );
}

export default CategoryPageWrapperWithArticles;
