import { _checkUserExists, _fetchGamesArchive, _fetchGames, _filterArchives } from '../utils/utils';


export const fetchGames = () => async (dispatch, getState) => {
    //console.log('values:', values);

    const values = getState().formValues;
    //console.log('fetchGames() retrieved formValues from getState():', values);

    const preFilteringRequired = (values.dateRangeFrom !== '' || values.dateRangeTo !== '') ? true : false;
    //console.log('preFilteringRequired:', preFilteringRequired);

    //const userExists = await _checkUserExists(values.username);
    //console.log('userExists:', userExists);
    
    const archives = (preFilteringRequired) ? (_fetchGamesArchive(values.username)
        .then((archives) => _filterArchives(archives, values.dateRangeFrom, values.dateRangeTo)) ) : (_fetchGamesArchive(values.username));
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

export const clearFormValues = () => {
    return {
        type: 'CLEAR_FORM_VALUES'
    };
};

export const storeGames = (games) => {
    return {
        type: 'STORE_GAMES',
        payload: {
            games: games
        }
    };
};

export const clearGames = () => {
    return {
        type: 'CLEAR_GAMES'
    };
};

export const filterByColor = (username,colors) => {
    return {
        type: 'FILTER_BY_COLOR',
        payload: {
            username: username,
            colors: colors
        }
    };
};

export const filterByTimeClass = (timeClasses) => {
    return {
        type: 'FILTER_BY_TIMECLASS',
        payload: {
            timeClasses: timeClasses
        }
    };
};

export const filterByMode = (modes) => {
    return {
        type: 'FILTER_BY_MODE',
        payload: {
            modes: modes
        }
    };
};

export const filterByResult = (username, results) => {
    return {
        type: 'FILTER_BY_RESULT',
        payload: {
            username: username,
            results: results
        }
    };
};

export const filterByOpponentRating = (username, opponentRatingFrom, opponentRatingTo) => {
    return {
        type: 'FILTER_BY_OPPONENT_RATING',
        payload: {
            username: username,
            opponentRatingFrom: opponentRatingFrom,
            opponentRatingTo: opponentRatingTo
        }
    };
};


export const updateSubmitted = (bool) => {
    return {
        type: 'UPDATE_SUBMITTED',
        payload: {
            bool: bool
        }
    };
};

export const updateFetched = (bool) => {
    return {
        type: 'UPDATE_FETCHED',
        payload: {
            bool: bool
        }
    };
};

export const updateFiltered = (bool) => {
    return {
        type: 'UPDATE_FILTERED',
        payload: {
            bool: bool
        }
    };
};

export const updateDownloaded = (bool) => {
    return {
        type: 'UPDATE_DOWNLOADED',
        payload: {
            bool: bool
        }
    };
};

export const updateStateToDefault = () => (dispatch) => {
    dispatch(clearFormValues());
    dispatch(clearGames());
    dispatch(updateSubmitted(0));
    dispatch(updateFetched(0));
    dispatch(updateFiltered(0));
    dispatch(updateDownloaded(0));
}

export const filterGames = () => (dispatch, getState) => {
    const values = getState().formValues;
    dispatch(filterByTimeClass(values.timeClasses));
    dispatch(filterByColor(values.username, values.colors));
    dispatch(filterByMode(values.modes));
    dispatch(filterByResult(values.username, values.results));
    dispatch(filterByOpponentRating(values.username, values.opponentRatingFrom, values.opponentRatingTo));
    //console.log('games after filtering:', getState().games);
};


