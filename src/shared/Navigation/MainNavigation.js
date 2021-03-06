import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';

const MainNavigation = props => {
  const [drawenIsOpen, setDrawenIsOpen] = useState(false);
  const handleDrwen = () => {
    setDrawenIsOpen(!drawenIsOpen)
  }

  return (
    <React.Fragment>
      { <SideDrawer show={drawenIsOpen} handleDrwen={handleDrwen}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={handleDrwen}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
