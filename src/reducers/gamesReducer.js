const gamesReducer = (games=[], action) => {
    switch (action.type) {

        case 'STORE_GAMES':
          return action.payload.games;

        case 'FILTER_BY_TIMECLASS':
          return games.filter(game => action.payload.timeClasses.includes(game.time_class));

        case 'FILTER_BY_COLOR':
          switch (action.payload.colors.length) {
            case 2:
              return games;
            case 1:
              const color = action.payload.colors[0];
              const players = games.map(game => game[`${color}`].username.toLowerCase());
              const filteredGames = games.filter((player, i) => players.map(player => player === action.payload.username)[i]);
              return filteredGames;
            default:
              return [];
          }
        default:
          return games;
    }
};

export default gamesReducer;