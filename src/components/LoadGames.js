import React from "react";

const LoadGames = () => {
  return (
    <div className="ui segment">
      <p>Fetching the games from Chess.com's API...</p>
      <div className="ui active centered inline loader">
        
      </div>
    </div>
  );
};

export default LoadGames;
