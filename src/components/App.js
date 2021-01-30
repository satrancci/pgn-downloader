import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DisplayListOfPlayers from './DisplayListOfPlayers';

import chesscom from '../apis/chesscom';


const App = props => {
  const [leaders, setLeaders] = useState([]);

  // we will pass onSearchSubmit as a prop to the SearchBar component
  const onSearchSubmit = async () => {
    const response = await chesscom.get();
    setLeaders(response.data.live_blitz);

  };


  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <DisplayListOfPlayers players={leaders} />
    </div>
  );

}

export default App;