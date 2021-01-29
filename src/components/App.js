import React from 'react';
import SearchBar from './SearchBar';
import chesscom from '../apis/chesscom';

class App extends React.Component {
  state = { profile: ''};

  // we will pass it as a prop to the SearchBar component
  onSearchSubmit = async username => {
    const response = await chesscom.get(`${username}`);

    this.setState({ profile: response.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Retrieved: {JSON.stringify(this.state.profile)} 
      </div>
    );
  }
}

export default App;