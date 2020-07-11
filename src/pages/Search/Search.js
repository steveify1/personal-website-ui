import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import SearchResult from '../../components/SearchResult/SearchResult';
import SearchBox from '../../components/SearchBox/SearchBox';
import { setClearSearchForm } from '../../store/search';
import Loader from '../../components/Loader/Loader';
import elysiaClient from '../../utils/elysiaClient';

function Search(props) {
  let {
    location: { search },
  } = props;
  const query = search.split('?q=')[1];
  const dispatch = useDispatch();
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);
    const fetchData = async () => {
      const res = await elysiaClient.search.getAll(query);
      setResult(res.data.data);
    };
    fetchData();
    // return () => dispatch(setClearSearchForm(true));
  }, [dispatch, query]);

  console.log(result);
  return (
    <div aria-label="search page" className="pag search-page">
      <section className="section">
        <section className="section__inner">
          {result ? (
            <Fragment>
              <SearchBox className="show-until-" />
              {result.count ? (
                <SearchHeader count={result.count} query={query} />
              ) : null}
              <SearchResult result={result.rows} />{' '}
            </Fragment>
          ) : (
            <Loader />
          )}
        </section>
      </section>
    </div>
  );
}

export default withRouter(Search);
