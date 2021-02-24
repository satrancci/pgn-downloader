import React from "react";

const FailedDownload = (props) => {

  return (
    <div className="ui segment">
      <div className="ui negative message">
        <div className="header">Your query wasn't successful.</div>
        <p> Could not find games based on the provided filters.</p>
      </div>
      <button className="ui labeled icon button" onClick={props.onGoBack}>
        <i className="left chevron icon"></i>
        Try again
      </button>
    </div>
  );
};

export default FailedDownload;
