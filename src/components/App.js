import React, { useState } from "react";
import DownloadButton from "./DownloadButton";
import Form from "./Form";
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

  const fetchGames = async (values, archives) => {
    Promise.all(archives.map((url) => axios.get(url)))
      .then((responses) => Promise.all(responses.map((res) => res.data.games)))
      .then((results) => {
        const concatGames = Object.values(
          results
            .map((month) =>
              month.filter((game) => game.time_class === `${values.timeControl}`)
            )
            .flat()
        );
        setGames(concatGames);
        setUsername(values.username);
        setTimeControl(values.timeControl);
      });
  };


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
    </div>
  );
};

export default App;
