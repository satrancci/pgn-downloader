const gamesReducer = (games=[], action) => {
    switch (action.type) {
        case 'STORE_GAMES':
          return action.payload.games;
        case 'FILTER_GAMES':
            // need to add logic here based on action.payload.values
            //return null;
            return games.filter(game => action.payload.values.timeClasses.includes(game.time_class));
        default:
          return games;
    }
};

export default gamesReducer;