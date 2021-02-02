import React, { useState } from 'react';

const SearchBar = props => {
  const [username, setUsername] = useState('');
  const [timeControl, setTimeControl] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();

    props.onSubmit(username, timeControl);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Chess.com username</label>
          <input
            placeholder="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Time Control</label>
          <input
            placeholder="choose ONLY one from {rapid, blitz}"
            type="text"
            value={timeControl}
            onChange={e => setTimeControl(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SearchBar;