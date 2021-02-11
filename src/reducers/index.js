import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import formReducer from './formReducer';

export default combineReducers({
  games: gamesReducer,
  formValues: formReducer
});