import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { setClearSearchForm } from '../../store/search';

function SearchBox({ className, history, location }) {
  const { search } = location;
  let queryInURL = search.split('?q=')[1];
  queryInURL = queryInURL ? queryInURL.split('&')[0] : '';
  const { clear } = useSelector((state) => state.search);
  const [query, setQuery] = useState(queryInURL);
  const dispatch = useDispatch();

  const sendQuery = (event) => {
    event.preventDefault();
    if (!query) return;
    history.push(`/search?q=${query}`);
  };

  if (clear && query) {
    setQuery('');
    dispatch(setClearSearchForm(false));
  }

  return (
    <div className={`search-box ${className}`}>
      <form className="search-form" onSubmit={sendQuery}>
        <div className="form-group" style={{ margin: '0' }}>
          <div className="input-group input-group">
            <input
              className="form-control"
              type="search"
              placeholder="Find teachings and prayers..."
              value={query}
              onChange={({ currentTarget: { value } }) => setQuery(value)}
            />
            <button className="btn search__btn btn-primary flex ai-center  btn-shadow btn-md show-until-tablet">
              <IoIosSearch className="icon" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(SearchBox);
