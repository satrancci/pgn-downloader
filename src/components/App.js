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
        {this.state.username ? 
            <div class="ui card">
                <div class="image">
                    <img src={this.state.avatar} />
                </div>
                <div class="content">
                    <a class="header">{this.state.username}</a>
                </div>
                <div class="extra content">
                    <a>
                    <i class="user icon"></i>
                    {`Followers: ${this.state.followers}`}
                    </a>
                <div class="extra content">
                    <a href={this.state.url}>
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
}

export default App;