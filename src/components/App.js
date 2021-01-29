import React from 'react';
import SearchBar from './SearchBar';
import chesscom from '../apis/chesscom';

class App extends React.Component {
  state = {username: null, url: null, followers: null, avatar: null};

  // we will pass onSearchSubmit as a prop to the SearchBar component
  onSearchSubmit = async usernameSearchTerm => {
    const response = await chesscom.get(`${usernameSearchTerm}`);
    const {username, url, followers, avatar} = response.data; // object destructuring

    this.setState({username, url, followers, avatar}); // a more concise notation for username:username, url:url, etc
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p><img src={this.state.avatar} /> </p>
        <p><b>{this.state.username? this.state.username : null} </b></p>
        <p>{this.state.followers ? `Followers: ${this.state.followers}` : null} </p>
        <p>{this.state.url ? <a href={this.state.url}> Chess.com Profile </a> : null} </p>
      </div>
    );
  }
}

export default App;