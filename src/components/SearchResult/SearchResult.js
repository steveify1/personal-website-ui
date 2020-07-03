import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import SearchCard from '../Cards/SearchCard/SearchCard';

function SearchResult({ result }) {
  const renderResult = () => {
    return result.map((r) => {
      return (
        <div className="result">
          <SearchCard
            image={r.img_url}
            title={r.title}
            slug={r.slug}
            body={r.body}
            date={r.date}
            author={r.author}
            category={r.category}
          />
        </div>
      );
    });
  };

  if (result.length) {
    return (
      <div aria-label="search page" className="search-result">
        {renderResult()}
      </div>
    );
  }

  return (
    <div className="ta-center empty-search">
      <h3>
        We could not find what you are looking for. Please try using a different
        keyword
      </h3>
      <div className="illustration empty-search__icon flex jc-center ai-center">
        <span>4</span>
        <IoMdSearch className="icon" />
        <span>4</span>
      </div>
    </div>
  );
}

export default SearchResult;
