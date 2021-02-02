import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DownloadButton from './DownloadButton';

import chesscom from '../apis/chesscom';


const App = () => {
  const [username, setUsername] = useState('');
  const [timeClass, setTimeClass] = useState('');
  const [games,setGames] = useState([]);
  const [download, setDownload] = useState(false);
  const [allTimeControls] = useState(['rapid', 'blitz']);
 
  // we will pass onSearchSubmit as a prop to the SearchBar component

  const onSearchSubmit = async (usernameToSearch, timeControl) => {
    if (usernameToSearch === '' || timeControl === '') {
      alert('Field values cannot be empty!');
      setDownload(false);
      return;
    }

    if (!allTimeControls.includes(timeControl)){
      alert('The time control that you specified is invalid!');
      setDownload(false);
      return;
    }

    try {
      const playerExistsResponse = await chesscom.get(`/${usernameToSearch}`);
    } catch (e) {
      alert('The username that you specified is most likely invalid!');
      //console.log('we got an error:', e); // TODO: need a more user-friendly error message
      setDownload(false);
      return;
    }

    const response = await chesscom.get(`/${usernameToSearch}/games/2021/01`);
    setGames(response.data.games.filter(game => game.time_class === `${timeControl}`));
    setUsername(usernameToSearch);
    setTimeClass(timeControl);
    setDownload(true);
  };


  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      {download === true ? <DownloadButton username={username} timeControl={timeClass} games={games}/> : null}
    </div>
  );

}

export default App;