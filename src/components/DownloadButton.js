import React from "react";
import { connect } from "react-redux";

const DownloadButton = ({ username, games }) => {
  const pgns = [games.map((game) => game.pgn)];

  const fileName = `${username.toLowerCase()}.pgn`;

  const url = window.URL.createObjectURL(new Blob(pgns));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);

  return (
    <div className="ui segment">
      {username !== "" && games.length > 0 ? (
        <button
          className="ui button active ui blue"
          onClick={() => {
            {
              link.click();
            }
          }}
        >
          <i className="download icon"></i>
          Download {`${fileName}`} ({`${games.length}`} games)
        </button>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.formValues.username,
    games: state.games,
  };
};

export default connect(mapStateToProps)(DownloadButton);
