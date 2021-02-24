import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import Loader from "./Loader";
import Download from "./Download";

const App = ({state}) => {

  return (
    <div className="ui container">
    { (!state.isSubmitted || state.isDownloaded) ? <Form/> : null}
    { ((state.isSubmitted && !state.areFetched && !state.areFiltered)) ? <Loader/> : null }
    { (state.isSubmitted && state.areFetched && state.areFiltered && !state.isDownloaded) ? <Download/> : null}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(App);