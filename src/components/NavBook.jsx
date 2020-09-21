import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBook = () => {
  return (
    <div className="menu">
      <nav className="nav">
        <NavLink to="/book" activeClassName="active">Advice</NavLink>
        <NavLink to="/book/mapl" activeClassName="active">Map loot</NavLink>
        <NavLink to="/book/mapt" activeClassName="active">Map transportes</NavLink>
        <NavLink to="/book/mapf" activeClassName="active">Map Flare gun</NavLink>
      </nav>
    </div>
  );
};

export default NavBook;
