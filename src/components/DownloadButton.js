import React from 'react';

const DownloadButton = ({username, timeControl, games}) => {
    const pgns = [games.map(game => game.pgn)];

    const fileName = `${username}_${timeControl}.pgn`;
    
    const url = window.URL.createObjectURL(new Blob(pgns));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);


    return (
        <button onClick={() => {
            {link.click()}
        }}>
            Download <b>{`${fileName}`} </b>
        </button>
    );
}

export default DownloadButton;