import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { IoIosClose, IoIosSearch } from 'react-icons/io';
import SearchBox from '../SearchBox/SearchBox';

function SearchWrapper() {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`search__controller flex ai-center ${
        expand ? 'search__controller--expand' : ''
      }`}
    >
      <SearchBox expand={expand} />
      <div className="search__controls flex ai-center">
        {expand ? (
          <IoIosClose
            className="icon search__control search__control--close show-until-tablet"
            onClick={() => setExpand(false)}
          />
        ) : (
          <IoIosSearch
            className="icon search__control show-until-tablet"
            onClick={() => setExpand(true)}
          />
        )}
      </div>
    </div>
  );
}

function SearchController({ history }) {
  console.log(history);
  const [expand, setExpand] = useState(false);

  return history.location.pathname.startsWith('/search') ? null : (
    <SearchWrapper />
  );
}

export default withRouter(SearchController);
