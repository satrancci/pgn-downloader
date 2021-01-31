import React, { useState } from 'react';

const SearchBar = props => {
  const [username, setUsername] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();

    props.onSubmit(username);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Player Search</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;