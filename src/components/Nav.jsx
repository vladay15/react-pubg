import React from 'react';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import logo from '../assets/img/logo.png';
import 'reactjs-popup/dist/index.css';

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

            <Popup trigger={<button className="btn-popup nav-item">ТЕПЕРІШНІЙ СЕЗОН</button>} position="bottom center">
              <NavLink to="/" className="nav-item present">
                ТРЕТЄ ЛИЦЕ
              </NavLink>
              <br/>
              <NavLink to="/third" className="nav-item third">
                ПЕРШЕ ЛИЦЕ
              </NavLink>
              <br/>
              <NavLink to="/pay" className="nav-item pay">
                ПЛАТНІ ТУРНІРИ
              </NavLink>
            </Popup>
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
