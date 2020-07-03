import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Search from '../pages/Search/Search';
import ArticleReader from '../components/ArticleReader/ArticleReader';

export default () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/articles/:slug" component={ArticleReader} exact />
        <Route path="/search" component={Search} exact />
      </Switch>
    </Fragment>
  );
};
