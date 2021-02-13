const gamesReducer = (games=[], action) => {
  const MIN_RATING = 0;
  const MAX_RATING = 10000; // just in case!

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
              const filteredGames = games.filter((_, i) => players.map(player => player === action.payload.username)[i]);
              return filteredGames;
            default:
              return [];
          }
        
          case 'FILTER_BY_MODE':
            switch (action.payload.modes.length) {
              case 2:
                return games;
              case 1:
                const isRated = (action.payload.modes[0] === 'rated') ? true : false;
                return games.filter(game => game.rated === isRated);
              default:
                return [];
            }

          case 'FILTER_BY_RESULT':
            const {username, results} = action.payload;
            
            if (results.length === 0) { return []; };
            if (results.length === 3) { return games; };

            const gamesWon = (results.includes("win")) ? games.filter
            (game => (game.white.username.toLowerCase() === username && game.white.result === "win")
            || (game.black.username.toLowerCase() === username && game.black.result === "win"))
            : [];

            const gamesLost = (results.includes("loss")) ? games.filter
            (game => (game.white.username.toLowerCase() !== username && game.white.result === "win")
            || (game.black.username.toLowerCase() !== username && game.black.result === "win"))
            : [];

            const gamesDraw = (results.includes("draw")) ? games.filter
            (game => game.white.result !== "win" && game.black.result !== "win")
            : [];

            return gamesWon.concat(gamesLost, gamesDraw);

          case 'FILTER_BY_OPPONENT_RATING':
            let {opponentRatingFrom, opponentRatingTo} = action.payload;

            opponentRatingFrom = (opponentRatingFrom !== "") ? parseInt(opponentRatingFrom) : MIN_RATING;
            opponentRatingTo = (opponentRatingTo !== "") ? parseInt(opponentRatingTo) : MAX_RATING;

            return games.filter(game => 
              (game.white.username.toLowerCase() === action.payload.username && game.black.rating >= opponentRatingFrom && game.black.rating <= opponentRatingTo)
              || (game.black.username.toLowerCase() === action.payload.username && game.white.rating >= opponentRatingFrom && game.white.rating <= opponentRatingTo)
              );
            
        default:
          return games;
    }
};

export default gamesReducer;