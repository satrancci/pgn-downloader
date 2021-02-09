import React, { useState, useEffect } from "react";
import { Promise } from "bluebird";
import DownloadButton from "./DownloadButton";
import Form from "./Form";
import axios from "axios";
import { fetchGamesArchive } from "../utils/utils";

const App = () => {

  const [formValues, setFormValues] = useState({});
  const [games, setGames] = useState([]);

  const onFormSubmitCallback = (values) => {
    setFormValues(values);
  };

  useEffect(() => {

    const fetchGamesHelper = async (values, archives) => {
      Promise.each(archives, (url) => {
        return Promise.delay(1000).then(() => {
          axios.get(url).then((res) => {
            const monthly_games = res.data.games;
            const concatGames = Object.values(
              monthly_games.filter(
                (game) => game.time_class === `${values.timeControl}`
              )
            ).flat();
            setGames(games => games.concat(concatGames));
            return null;
          });
        });
      });
    };

    const fetchGames = async (values) => {
      try {
        const archives = await fetchGamesArchive(values.username);
        await fetchGamesHelper(values, archives);
      } catch (e) {
        alert('Something went wrong. Please try again.');
      }
    }

    fetchGames(formValues);
    setTimeout(() => { setGames([]); }, 1000); // cleanup after the download

  }, [formValues])

  return (
    <div className="ui container">
      <Form onSubmit={onFormSubmitCallback} />
      <div>
        {games && games.length > 0 && (
          <DownloadButton
            username={formValues.username}
            timeControl={formValues.timeControl}
            games={games}
          />
        )}
      </div>
    </div>
  );
};

export default App;
