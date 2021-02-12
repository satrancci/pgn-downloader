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

const CUR_DATE =
  new Date().getUTCFullYear() + "/" + "0" + (new Date().getUTCMonth() + 1);

const Form = (props) => {
  const [username, setUsername] = useState("thegadfly1897");
  const [dateRangeFrom, setDateRangeFrom] = useState("2021/01");
  const [dateRangeTo, setDateRangeTo] = useState(`${CUR_DATE}`);
  const [timeClasses, setTimeClasses] = useState([]);
  const [colors, setColors] = useState([]);
  const [modes, setModes] = useState([]);
  const [results, setResults] = useState([]);
  const [opponentRatingFrom, setOpponentRatingFrom] = useState("");
  const [opponentRatingTo, setOpponentRatingTo] = useState("");

  // callback for Username
  const onUsernameInputChangeCallback = (username) => {
    setUsername(username.toLowerCase());
  };

  // callbacks for DateRange
  const onDateRangeFromInputChangeCallback = (dateRangeFrom) => {
    setDateRangeFrom(dateRangeFrom);
  };

  const onDateRangeToInputChangeCallback = (dateRangeTo) => {
    setDateRangeTo(dateRangeTo);
  };

  // callback for TimeClass
  const onTimeClassInputChangeCallback = (timeClass, checked) => {
    if (checked) {
      setTimeClasses((timeClasses) => [...timeClasses, timeClass]);
    } else {
      setTimeClasses((timeClasses) =>
        timeClasses.filter((t) => t !== timeClass)
      );
    }
  };

  // callback for Color
  const onColorInputChangeCallback = (color, checked) => {
    if (checked) {
      setColors((colors) => [...colors, color]);
    } else {
      setColors((colors) =>
        colors.filter((c) => c !== color)
      );
    }
  };

  // callback for Submit
  const onSubmitCallback = async () => {
    const values = {};
    Object.assign(
      values,
      { username },
      { dateRangeFrom },
      { dateRangeTo },
      { timeClasses },
      { colors },
      { modes },
      { results },
      { opponentRatingFrom },
      { opponentRatingTo }
    );
    await props.storeFormValues(values);
    await props.fetchGames();
    await props.filterGames();
  };

  /*
        //add later to return()
        <Mode />
        <Result />
        <OpponentRatingRange />

  */

  return (
    <div className="ui segment">
      <div className="ui form">
        <Username
          username={username}
          onInputChangeCallback={onUsernameInputChangeCallback}
        />
        <DateRange
          dateRangeFrom={dateRangeFrom}
          onFromInputChangeCallback={onDateRangeFromInputChangeCallback}
          dateRangeTo={dateRangeTo}
          onToInputChangeCallback={onDateRangeToInputChangeCallback}
        />
        <TimeClass
          timeClasses={timeClasses}
          onTimeClassInputChangeCallback={onTimeClassInputChangeCallback}
        />
        <Color colors={colors} onColorInputChangeCallback={onColorInputChangeCallback}/>

        <SubmitButton onSubmitCallback={onSubmitCallback} />
      </div>
      <div>
        <p>values from the store: {JSON.stringify(props.formValues)}</p>
      </div>
      <div>
        <p>games length from the store: {props.games.length} </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.formValues,
    games: state.games,
  };
};

export default connect(mapStateToProps, {
  storeFormValues,
  fetchGames,
  filterGames,
})(Form);
