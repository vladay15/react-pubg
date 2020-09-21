import React from 'react';
import {Nav} from './components';
import { Present, Past, News, Book, Footer } from './pages';

import { Route } from 'react-router-dom';

const App = () => {
  const [players, setPlayers] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPlayers(json.players);
      });
  }, []);
  return (
      <div className="wrapper">
        <Nav/>
        <div className="content">
            <Route path="/news" render={()=><News />} />
            <Route path="/" render={()=><Present items={players} />} exact />
            <Route path="/past" render={()=><Past />}/>
            <Route path="/book" render={()=><Book />} />
        </div>
        {/* <Footer/> */}
      </div>
  );
}

export default App;