import React from 'react';
import search from '../assets/img/search.png';

const Search = () => {
  return (
    <div className="search">
      <div className="input-search">
        <input type="text" placeholder="SEARCH FOR PLAYERS" />
      </div>
      <div className="btn-search">
        <img src={search} alt="" />
      </div>
    </div>
  );
};

export default Search;
