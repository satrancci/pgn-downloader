import React, { useState } from 'react';
import SearchBar from './SearchBar';
import chesscom from '../apis/chesscom';

const App = props => {
  const [username, setUsername] = useState(null);
  const [url, setUrl] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [avatar, setAvatar] = useState(null);

  // we will pass onSearchSubmit as a prop to the SearchBar component
  const onSearchSubmit = async usernameSearchTerm => {
    const response = await chesscom.get(`${usernameSearchTerm}`);

    setUsername(response.data.username);
    setUrl(response.data.url);
    setFollowers(response.data.followers);
    setAvatar(response.data.avatar);

  };

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      {username ? 
          <div class="ui card">
              <div class="image">
                  <img src={avatar} />
              </div>
              <div class="content">
                  <a class="header">{username}</a>
              </div>
              <div class="extra content">
                  <a>
                  <i class="user icon"></i>
                  {`Followers: ${followers}`}
                  </a>
              <div class="extra content">
                  <a href={url}>
                  <i class="chess king icon"></i>
                  Chess.com Profile
                  </a>
              </div>
              </div>
          </div>
      : null}
    </div>
  );
}

export default App;