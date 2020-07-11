import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosList, IoIosClose, IoIosSearch } from 'react-icons/io';
import SearchController from '../SearchController/SearchController';
import classes from './NavBar.module.scss';

const mainMenuItems = [
  { displayName: 'home', href: '/' },
  // { displayName: 'explore', href: '/explore', subMenu: [{}] },
  { displayName: 'about', href: '/about' },
  { displayName: 'contact', href: '/contact' },
];

export default (props) => {
  const [showMenu, setShowMenu] = useState(false);
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
    <li
      key={index}
      onClick={() => setShowMenu(false)}
      className="menu-item flex"
    >
      {setMenuContent(item)}
    </li>
  );

  const makeNavMenu = (menuItems = []) => {
    return (
      <ul
        className={`${classes.MainMenu} main-menu ${
          showMenu ? 'show-menu' : ''
        }`}
      >
        <IoIosClose
          className="icon main-menu__close-icon show-until-tablet"
          onClick={() => setShowMenu(false)}
        />
        {menuItems.map((item, index) => getTemplate(item, index))}
      </ul>
    );
  };

  return (
    <div className="navbar-container">
      <nav className={classes.NavBar}>
        <div className="brand logo">
          <NavLink to="/">
            <h5>Gbola Sokoya</h5>
          </NavLink>
        </div>

        <div className="nav__icons flex ai-center jc-flex-end">
          <SearchController />
          <IoIosList
            onClick={() => setShowMenu(true)}
            className="icon show-until-tablet"
          />
        </div>

        {makeNavMenu(mainMenuItems)}
      </nav>
    </div>
  );
};
