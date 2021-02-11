import { _checkUserExists, _fetchGamesArchive, _fetchGames, _filterArchives } from '../utils/utils';


export const fetchGames = () => async (dispatch, getState) => {
    //console.log('values:', values);

    const values = getState().formValues;
    console.log('fetchGames() retrieved formValues from getState():', values);

    const preFilteringRequired = (values.dateRangeFrom !== '' || values.dateRangeTo !== '') ? true : false;
    console.log('preFilteringRequired:', preFilteringRequired);

    const userExists = await _checkUserExists(values.username);
    //console.log('userExists:', userExists);
    
    const archives = (preFilteringRequired) ? (_fetchGamesArchive(values.username)
        .then((archives) => _filterArchives(archives, values.dateRangeFrom, values.dateRangeTo)) ) : (_fetchGamesArchive(values.username));
    console.log('archives:', archives);

    
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
    console.log('filterGames() retrieved formValues from getState():', values);
    dispatch({
        type: 'FILTER_GAMES',
        payload: {
            values: values
        }
    });
};


