# A simple PGN Downloader

The app is available at [https://pgn-downloader.vercel.app/](https://pgn-downloader.vercel.app/). 

# Motivation

The primary goal is to facilitate the process of downloading games from [Chess.com API](https://www.chess.com/news/view/published-data-api) in bulk based on selected filters. The end result is the single PGN file, which can be further exported to any chess application for analysis, etc. As of now, [Chess.com](https://chess.com) UI doesn't provide the functionality to download all of the user's games at once, which makes it time-consuming for chess enthusiasts/professionals without programming experience to export their games to a database quickly.

# Ideas for further improvements:

- Better error handling, testing
- Add more filters. For example:
    * games played within a given time period
    * other time controls (as of now, only rapid and blitz games can be fetched)
    * games played with a certain color (black, white, or both). As of now, only both is supported.
    * only lost/won games
- Fetch data from [Lichess API](https://lichess.org/api).


# Other

This was my first experience with React. I got a better understanding of class and functional components, props, hooks, working with third-party APIs, async/await, promises, functional programming paradigm.


# Acknowledgments

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* An excellent course for React & Redux beginners by Stephen Grider: [https://www.udemy.com/course/react-redux/](https://www.udemy.com/course/react-redux/).



