import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchGames, storeFormValues, filterGames } from "../actions";

import Username from "./form/Username";
import DateRange from "./form/DateRange";
import TimeClass from "./form/TimeClass";
import Color from "./form/Color";
import Mode from "./form/Mode";
import Result from "./form/Result";
import OpponentRatingRange from "./form/OpponentRatingRange";
import SubmitButton from "./form/SubmitButton";


const Form = (props) => {


  const [values, setValues] = useState({
    username: "",
    dateRangeFrom: "",
    dateRangeTo: "",
    timeClasses: ["rapid", "blitz"], // change later to []
    colors: [],
    modes: [],
    results: [],
    opponentRatingFrom: "",
    opponentRatingTo: "",
  });

  const onUsernameInputChangeCallback = (username) => {
    setValues((values) => ({
      ...values,
      username: username,
    }));
  };

  const onDateRangeFromInputChangeCallback = (dateRangeFrom) => {
    setValues((values) => ({
      ...values,
      dateRangeFrom: dateRangeFrom,
    }));
  };

  const onDateRangeToInputChangeCallback = (dateRangeTo) => {
    setValues((values) => ({
      ...values,
      dateRangeTo: dateRangeTo,
    }));
  };

  const onSubmitCallback = async () => {
    console.log('submitted');
    await props.storeFormValues(values);
    await props.fetchGames(values);
    await props.filterGames();
  };

  /*
        //add later to return()
        <TimeClass />
        <Color />
        <Mode />
        <Result />
        <OpponentRatingRange />

  */


  return (
    <div className="ui segment">
      <div className="ui form">
        <Username
          username={values.username}
          onInputChangeCallback={onUsernameInputChangeCallback}
        />
        <DateRange
          dateRangeFrom={values.dateRangeFrom}
          onFromInputChangeCallback={onDateRangeFromInputChangeCallback}
          dateRangeTo={values.dateRangeTo}
          onToInputChangeCallback={onDateRangeToInputChangeCallback}
        />

        <SubmitButton onSubmitCallback={onSubmitCallback}/>
      </div>
      <div><p>values from the store: {JSON.stringify(props.formValues)}</p></div>
      <div><p>games length from the store: {props.games.length} </p></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.formValues,
    games: state.games 
  };
};

export default connect(mapStateToProps, { storeFormValues, fetchGames, filterGames})(Form);