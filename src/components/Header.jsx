import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="Header">
    <h1 className="Header-title">DnD Binder</h1>
    <NavLink className="Header-navlink" activeClassName="active-nav-item" exact={true} to="/">Player Characters</NavLink>
    <NavLink className="Header-navlink" activeClassName="active-nav-item" to="/npcs">NPCs</NavLink>
    <NavLink className="Header-navlink" activeClassName="active-nav-item" to="/hooks">Hooks</NavLink>
    <NavLink className="Header-navlink" activeClassName="active-nav-item" to="/notes">Notes</NavLink>
  </div>
);

export default Header;