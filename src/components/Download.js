import React from "react";
import { connect } from "react-redux";
import { updateDownloaded, updateStateToDefault } from "../actions";
import SuccessDownload from "./SuccessDownload";
import FailedDownload from "./FailedDownload";

const Download = (props) => {
  
  const onSuccessGoBack = () => props.updateDownloaded(1);

  const onFailGoBack = () => props.updateStateToDefault();

  return (
    <div>
      {props.games.length > 0 ? (
        <SuccessDownload
          games={props.games}
          username={props.username}
          onGoBack={onSuccessGoBack}
        />
      ) : (
        <FailedDownload onGoBack={onFailGoBack} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.formValues.username,
    games: state.games
  };
};

export default connect(mapStateToProps, {
  updateStateToDefault,
  updateDownloaded
})(Download);
