import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResult from '../../components/SearchResult/SearchResult';
import { setClearSearchForm } from '../../store/search';
import Spinner from '../../components/Spinner/Spinner';
import articles from '../../mockData/articles';
import elysiaClient from '../../utils/elysiaClient';

function Search(props) {
  let {
    location: { search },
  } = props;
  const query = search.split('?q=')[1];
  const dispatch = useDispatch();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await elysiaClient.search.getAll(query);
      setResult(res.data.data.rows);
    };
    fetchData();
    // return () => dispatch(setClearSearchForm(true));
  }, [dispatch, query]);

  console.log(result);
  return result ? (
    <div aria-label="search page" className="page search-page">
      <section className="section">
        <section className="section__inner">
          <SearchResult result={result} />
        </section>
      </section>
    </div>
  ) : (
    <Spinner />
  );
}

export default withRouter(Search);
