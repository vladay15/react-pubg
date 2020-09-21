import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="block">
          <input id="toggle" type="checkbox" />
          <label className="toggle-container" htmlFor="toggle">
            <span className="button button-toggle"></span>
          </label>

          <nav className="nav">
            <NavLink to="/news" className="nav-item" activeClassName="active">
              НОВИНИ
            </NavLink>
            <NavLink to="/" className="nav-item present">
              ТЕПЕРІШНІЙ СЕЗОН
            </NavLink>
            <a href="https://vladay15.github.io/pubg_2.github.io/" className="nav-item">
              МИНУЛИЙ СЕЗОН
            </a>
            <NavLink to="/book" className="nav-item" activeClassName="active">
              ДОВІДНИК
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
