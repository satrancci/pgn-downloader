import React from 'react';

const Loader = () => {
    return (
      <div className="ui segment">
           <p>Fetching and filtering the games, hang on...</p>
          <div className="ui active centered inline loader">
          </div>
      </div>
    );
};

export default Loader;