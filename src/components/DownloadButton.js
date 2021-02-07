import React from 'react';

const DownloadButton = ({username, timeControl, games}) => {
    const pgns = [games.map(game => game.pgn)];

    const fileName = `${username.toLowerCase()}_${timeControl}.pgn`;
    
    const url = window.URL.createObjectURL(new Blob(pgns));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);


    return (
        <button className="ui button active ui blue"  onClick={() => {
            {link.click()}
        }}>
            <i className="download icon"></i>
            Download {`${fileName}`} ({`${games.length}`} games)
        </button>
    );
}

export default DownloadButton;