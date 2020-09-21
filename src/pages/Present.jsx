import React from 'react';
import { Sort, Statistics, Search } from '../components';

const Present = ({ items }) => {
  let handleClick = (obj) => {
    alert(
      'STATISTICS - ' +
        obj.kills / obj.rang +
        '\n' +
        'KILLS - ' +
        obj.kills +
        ' / MATCH - ' +
        obj.rang,
    );
  };
  // sort
  items.sort(function (a, b) {
    if (a.rang > b.rang) {
      return -1;
    }
    if (a.rang < b.rang) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="present-wrapper">
      <div className="container">
        <div className="row">
          <Sort />
          <Search />
        </div>
        <div className="player-list">
          <ul>
            {items.map((obj) => (
              <li key={obj.id} onClick={() => handleClick(obj)}>
                <p className="active">
                  <span className="top">
                    {obj.top}
                    <span className="tooltip-top">top</span>
                  </span>
                  <span className="name">
                    {obj.name}
                    <span className="tooltip-name">name</span>
                  </span>
                  <span className="rang">
                    {obj.rang}
                    <span className="tooltip-rang">rang</span>
                  </span>
                  {/* <Statistics props={obj} className="hide" /> */}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Present;
