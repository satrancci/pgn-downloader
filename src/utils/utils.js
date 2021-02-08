import chesscom from "../apis/chesscom";

export const checkUserExists = async (username) => {
    try {
      const playerExistsResponse = await chesscom.get(`/${username}`);
      return true;
    } catch (e) {
      return false;
    }
  };

export const fetchGamesArchive = async (username) => {
  const response = await chesscom.get(`/${username}/games/archives`);
  return response.data.archives;
};