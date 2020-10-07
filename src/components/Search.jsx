import React from 'react';
import search from '../assets/img/search.png';

const Search = () => {
  const [state,setState] = React.useState([{ isSwitchOn: false }]);
  return (
    <div className="search">
      <div className={state.isSwitchOn ? "input-search" : "input-search no-active"}>
        <input type="text" placeholder="SEARCH FOR PLAYERS" />
      </div>
      <div className={state.isSwitchOn ? "btn-search-site no-active" : "btn-search-site"} onClick={() => setState({isSwitchOn: true})}>
        <img className={state.isSwitchOn ? "img no-active" : "img" } src={search} alt="" />
      </div>
    </div>
  );
};

export default Search;
