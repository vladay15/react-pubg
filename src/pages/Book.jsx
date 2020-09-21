import React from 'react';
import { Route } from 'react-router-dom';
import { Advice, Map, NavBook, MapFlareGun, MapTransporters } from '../components';

const Book = () => {
  return (
    <div className="book">
      <NavBook />
      <div className="block">
        <Route exact path="/book" render={() => <Advice />} />
        <Route path="/book/mapl" render={() => <Map />} />
        <Route path="/book/mapt" render={() => <MapTransporters />} />
        <Route path="/book/mapf" render={() => <MapFlareGun />} />
      </div>
    </div>
  );
};

export default Book;
