import React from "react";

const Spinner = ({games}) => {
  return (
    <div className="ui segment">
      <p>Fetching the games from Chess.com's API...</p>
      {games.length}
      <div className="ui active centered inline loader">
        
      </div>
    </div>
  );
};

export default Spinner;
