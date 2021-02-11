import axios from 'axios';
import { Promise } from 'bluebird';
import chesscom from '../apis/chesscom';


export const fetchGames = (values) => async (dispatch, getState) => {
    //console.log('values:', values);

    const userExists = await checkUserExists(values.username);
    //console.log('userExists:', userExists);
    
    const archives = await fetchGamesArchive(values.username);
    //console.log('archives:', archives);
    
    const games = await _fetchGames(values, archives);
    //console.log('games:', games);
    
    dispatch(storeGames(games));
    //dispatch(filterGames(values));
}

export const storeFormValues = (values) => (dispatch) => {
    dispatch({
        type: 'STORE_FORM_VALUES',
        payload: {
            values: values
        }
    });
};

export const storeGames = (games) => {
    return {
        type: 'STORE_GAMES',
        payload: {
            games: games
        }
    };
};

export const filterGames = () => (dispatch, getState) => {
    const values = getState().formValues;
    console.log('formValues:', values);
    dispatch({
        type: 'FILTER_GAMES',
        payload: {
            values: values
        }
    });
};


export const checkUserExists = async (username) => {
    try {
      const playerExistsResponse = await chesscom.get(`/${username}`);
      return true;
    } catch (e) {
      return false;
    }
  };

export const fetchGamesArchive = async (username) => {
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
