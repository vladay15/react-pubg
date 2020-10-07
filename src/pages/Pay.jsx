import React from 'react';
import { Sort, Statistics, Search } from '../components';

const Pay = ({ items }) => {

  return (
    <div className="pay-wrapper">
      <div className="container">
        <h1>ПЛАТНІ ТУРНІРИ</h1>
        <div className="row">
          <Sort />
          <Search />
        </div>
        <div className="player-list">
          <ul>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pay;
