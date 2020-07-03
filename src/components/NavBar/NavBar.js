import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosList } from 'react-icons/io';
import SearchBox from '../SearchBox/SearchBox';
import classes from './NavBar.module.scss';

const mainMenuItems = [
  { displayName: 'home', href: '/' },
  { displayName: 'explore', href: '/explore', subMenu: [{}] },
  { displayName: 'about', href: '/about' },
  { displayName: 'contact', href: '/contact' },
];

export default (props) => {
  const setMenuContent = (item) => {
    return item.href ? (
      <NavLink exact to={item.href}>
        {item.displayName}
      </NavLink>
    ) : (
      item.displayName
    );
  };

  const getTemplate = (item, index) => (
    <li key={index} className="menu-item">
      {setMenuContent(item)}
    </li>
  );

  const makeNavMenu = (menuItems = []) => {
    return (
      <ul className={`${classes.MainMenu}`}>
        {menuItems.map((item, index) => getTemplate(item, index))}
      </ul>
    );
  };

  return (
    <div className="navbar-container">
      <nav className={classes.NavBar}>
        <div className="brand logo">
          <NavLink to="/">
            <h4>Gbola Sokoya</h4>
          </NavLink>
        </div>

        <SearchBox className="hide-until-tablet" />

        <IoIosList className="icon show-until-desktop" />

        {makeNavMenu(mainMenuItems)}
      </nav>
    </div>
  );
};
