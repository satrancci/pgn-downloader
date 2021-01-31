import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.chess.com/pub/player'
});