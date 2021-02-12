// util functions start with '_' to differentiate them from actions

import axios from 'axios';
import { Promise } from 'bluebird';
import chesscom from '../apis/chesscom';

export const _checkUserExists = async (username) => {
  try {
    const playerExistsResponse = await chesscom.get(`/${username}`);
    return true;
  } catch (e) {
    return false;
  }
};

export const _fetchGamesArchive = async (username) => {
  const response = await chesscom.get(`/${username}/games/archives`);
  return response.data.archives;
};

export const _fetchGames = async(values, archives) => {
  const responses = await Promise.map(archives, url => axios.get(url), {concurrency: 1} ); // Chess.com API allows three concurrent requests per each IP address
  const monthly_games = responses.map((res) => res.data.games);
  const concatGames = Object.values(
    monthly_games
    .map((month) =>
         month.filter((game) => game)
        )
    .flat()
  );
  return concatGames;
};

export const _filterArchives = (archives, dateFrom, dateTo) => {
  const dtLower = dateFrom.split('/');
  const dtUpper = dateTo.split('/');
  const _extractMonthAndYear = (month) => {return month.split('/').slice(7,9)};
  const _isWithinRange = (dt, dtLower, dtUpper) => {return dt >= dtLower && dt <= dtUpper}
  return archives.filter(month => _isWithinRange(_extractMonthAndYear(month), dtLower, dtUpper ));
};