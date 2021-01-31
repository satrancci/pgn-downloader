import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DownloadButton from './DownloadButton';

import chesscom from '../apis/chesscom';


const App = () => {
  const [games,setGames] = useState([]);
  const [download, setDownload] = useState(false);
 
  // we will pass onSearchSubmit as a prop to the SearchBar component
  const onSearchSubmit = async (usernameToSearch) => {
    const response = await chesscom.get(`/${usernameToSearch}/games/2021/01`);

    setGames(response.data.games.filter(game => game.time_class === 'rapid'));
    setDownload(true);

  };


  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      {download === true ? <DownloadButton games={games}/> : null}
    </div>
  );

}

export default App;