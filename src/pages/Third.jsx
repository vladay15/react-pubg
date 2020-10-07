import React from 'react';
import { Sort, Statistics, Search } from '../components';

const Third = () => {
  return (
    <div className="third-wrapper">
      <div className="container">
        <h1>ПЕРШЕ ЛИЦЕ</h1>
        <div className="row">
          <Sort />
          <Search />
        </div>
        <div className="player-list">
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default Third;
