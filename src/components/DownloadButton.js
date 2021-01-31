import React from 'react';

const DownloadButton = ({games}) => {

    const pgns = [games.map(game => game.pgn)];

    const url = window.URL.createObjectURL(new Blob(pgns));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'games.pgn');
    document.body.appendChild(link);


    return (
        <button onClick={() => {
            {link.click()}
        }}>
            Download games
        </button>
    );
}

export default DownloadButton;