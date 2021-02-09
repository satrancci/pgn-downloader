import chesscom from "../apis/chesscom";

export const checkUserExists = async (username) => {
    try {
      const playerExistsResponse = await chesscom.get(`/${username}`);
      return true;
    } catch (e) {
      return false;
    }
  };

// returns an array of urls
export const fetchGamesArchive = async (username) => {
  try {
    const response = await chesscom.get(`/${username}/games/archives`);
    return response.data.archives;
  } catch (e) {
    alert('Could not fetch the archive. Please try again');
  }

};