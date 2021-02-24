import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import DownloadButton from "./DownloadButton";

const App = ({state}) => {

  return (
    <div className="ui container">
      <Form/>
    { (state.areFetched && state.areFiltered) ? <DownloadButton/> : null} 
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps)(App);