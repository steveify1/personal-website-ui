import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ActiveRead from '../ActiveRead/ActiveRead';
import Routes from '../../hoc/Routes';
import classes from './OutermostContainer.module.scss';

export default () => {
  return (
    <div className={classes.OutermostContainer}>
      <NavBar />
      {/* 
      <br /> */}
      <main>
        <Routes />
      </main>

      <Footer />

      <ActiveRead />
    </div>
  );
};
