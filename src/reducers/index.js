import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import formReducer from './formReducer';
import submittedReducer from './submittedReducer';
import fetchedReducer from './fetchedReducer';
import filteredReducer from './filteredReducer';
import downloadedReducer from './downloadedReducer';

export default combineReducers({
  games: gamesReducer,
  formValues: formReducer,
  isSubmitted: submittedReducer,
  areFetched: fetchedReducer,
  areFiltered: filteredReducer,
  isDownloaded: downloadedReducer
});