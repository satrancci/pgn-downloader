import React, { useState, useEffect } from "react";

const SuccessDownload = (props) => {
  const [downloadClicked, setDownloadClicked] = useState(false);
  const pgns = [props.games.map((game) => game.pgn)];
  const filename = `${props.username.toLowerCase()}.pgn`;
  const url = window.URL.createObjectURL(new Blob(pgns));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);


  const onDownload = async () => {
    link.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setDownloadClicked(true);
  };

  const onNewQueryClick = async () => {
    props.onGoBack();
  }

  useEffect(() => {
    setDownloadClicked(false);
  }, [props.onGoBack])

  return (
    <div className="ui segment">
      <div className="ui success message">
        <div className="header">Your query was successful.</div>
        <p>You way now download the games!</p>
      </div>
      <button className="ui button active ui blue" onClick={onDownload}>
        <i className="download icon"></i>
        Download {`${filename}`} ({`${props.games.length}`} games)
      </button>
      { (downloadClicked === true) ? 
      <div className="ui container" style={{ marginTop: '25px' }}>
      <button className="ui labeled icon button" onClick={onNewQueryClick}>
        <i className="left chevron icon"></i>
        New query?
      </button>
      </div>
      : null }
    </div>
  );
};

export default SuccessDownload;