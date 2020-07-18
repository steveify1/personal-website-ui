import React, { useState, Fragment } from 'react';
import CategoryPageWrapper from '../CategoryPageWrapper/CategoryPageWrapper';
import Loader from '../Loader/Loader';

function CategoryPageWrapperWithArticles({ title, category }) {
    const [result, setResult] =  useState(null);
    const [selectedDate, setSelectedDate] =  useState(null);
    
    const renderData = (result = []) => {
        if (!result.length) return <p>No publication on {selectedDate}</p>
        return result.map(row => {
            return <p>{row}</p>
        });
    }

  return (
    <Fragment>
        <CategoryPageWrapper title={title} category={category} consumeData={(data) => setResult(data)} consumeSelectedDate={(date) => setSelectedDate(date)}>
            {result === null ? <Loader /> : renderData(result)}
        </CategoryPageWrapper>` 
    </Fragment>
  );
}

export default CategoryPageWrapperWithArticles;
