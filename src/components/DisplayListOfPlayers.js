import React from 'react';

const DisplayListOfPlayers = ({players}) => {
    const renderedList = players.map(player => {
        return (
            <div class="ui card">
                <div class="image">
                    <img src={player.avatar} alt={player.username} />
                </div>
                <div class="content">
                    <a class="header">{player.username}</a>
                </div>
                <div class="extra content">
                    <a>
                    {`Rank: ${player.rank}`}
                    </a>
                </div>
                <div class="extra content">
                    <a>
                    {`Rating: ${player.score}`}
                    </a>
                </div>
                <div class="extra content">
                    <a>
                    {`Title: ${player.title}`}
                    </a>
                </div>
                <div class="extra content">
                    <a href={player.url}>
                    <i class="user icon"></i>
                    Chess.com Profile
                    </a>
                </div>
            </div>
        );
    })
    return <div className="ui list">{renderedList}</div>;
}


export default DisplayListOfPlayers;
