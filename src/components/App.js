import React, { useState } from "react";
import { Promise } from "bluebird";

import DownloadButton from "./DownloadButton";
import Form from "./Form";
import Spinner from "./Spinner";
import axios from "axios";
import chesscom from "../apis/chesscom";

import { fetchGamesArchive } from "../utils/utils";

const App = () => {
  const [games, setGames] = useState([]);
  const [username, setUsername] = useState("");
  const [timeControl, setTimeControl] = useState("");
  const [downloading, setDownloading] = useState(false);

  const fetchGames = async (values, archives) => {
    setDownloading(true);
    try {
      const responses = await Promise.map(archives, (url) => axios.get(url), {
        concurrency: 1,
      }); // Chess.com API allows three concurrent requests per each IP address
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
    } catch (e) {
      alert("There was a problem fetching the games. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const interactWithChessComApi = async (values) => {
    await new Promise((r) => setTimeout(r, 1000)); // make the transition more user-friendly
    fetchGamesArchive(values.username)
      .then((archives) => {
        fetchGames(values, archives)
          .then(() => {
            console.log("Games fetched!");
          })
          .catch((e) => {
            alert("Could not fetch the games. Please try again.");
          });
      })
      .catch((e) => {
        alert("Could not fetch the archive. Please try again.");
      });
  };

  return (
    <div className="ui container">
      <Form onSubmit={interactWithChessComApi} />
      <div>
        {!downloading && games.length > 0 && (
          <DownloadButton
            username={username}
            timeControl={timeControl}
            games={games}
          />
        )}
        {downloading && <Spinner />}
      </div>
    </div>
  );
};

export default App;
