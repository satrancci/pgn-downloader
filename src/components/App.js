import React, { useState } from "react";
import { Promise } from 'bluebird';

import DownloadButton from "./DownloadButton";
import Form from "./Form";
import LoadGames from './LoadGames';
import axios from "axios";
import chesscom from "../apis/chesscom";



const checkUserExists = async (username) => {
  const playerExistsResponse = await chesscom.get(`/${username}`);
  return playerExistsResponse;
};

const fetchGamesArchive = async (username) => {
  const response = await chesscom.get(`/${username}/games/archives`);
  return response.data.archives;
};


const App = () => {

  const [games, setGames] = useState([]);
  const [username, setUsername] = useState('');
  const [timeControl, setTimeControl] = useState('');
  const [downloading, setDownloading] = useState(false);


  const fetchGames = async(values, archives) => {
    setDownloading(true);
    const responses = await Promise.map(archives, url => axios.get(url), {concurrency: 2} ); // Chess.com API allows three concurrent requests per each IP address
    const monthly_games = responses.map((res) => res.data.games);
    const concatGames = Object.values(
      monthly_games
        .map((month) =>
          month.filter((game) => game.time_class === `${values.timeControl}`)
        )
        .flat()
      );
      setGames(concatGames);
      setUsername(values.username);
      setTimeControl(values.timeControl);
      setDownloading(false);
  }

  const interactWithChessComApi = async (values) => {
    checkUserExists(values.username)
      .then(() => {
        fetchGamesArchive(values.username)
          .then((archives) => {
            fetchGames(values, archives)
            .then(() => {
              console.log("Games fetched!");
            })
            .catch((e) => {
              console.log("Could not fetch the games", e);
            });
          })
          .catch((e) => {
            console.log("Could not fetch the archive", e);
          });
      })
      .catch((e) => {
        alert("The username that you specified is invalid!");
      });
  };
  
  
  return (
    <div className="ui container">
      <Form onSubmit={interactWithChessComApi} />
      Games: {games.length}  
      {username && <DownloadButton username={username} timeControl={timeControl} games={games} />}
      {downloading && <LoadGames/>}
    </div>
  );
};

export default App;
