import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchGames, storeFormValues, filterGames, updateStateToDefault, updateSubmitted, updateFetched, updateFiltered } from "../actions";
import { validateUsername, validateDateRange, validateRatingRange } from "./formValidators";

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
  const [username, setUsername] = useState("");
  const [dateRangeFrom, setDateRangeFrom] = useState("2020/01");
  const [dateRangeTo, setDateRangeTo] = useState(`${CUR_DATE}`);
  const [timeClasses, setTimeClasses] = useState([]);
  const [colors, setColors] = useState([]);
  const [modes, setModes] = useState([]);
  const [results, setResults] = useState([]);
  const [opponentRatingFrom, setOpponentRatingFrom] = useState("0");
  const [opponentRatingTo, setOpponentRatingTo] = useState("4000");

  const [usernameError, setUsernameError] = useState(null);
  const [dateRangeError, setDateRangeError] = useState(null);
  const [opponentRatingError, setOpponentRatingError] = useState(null);

  const [formValid, setFormValid] = useState(null);

  // callback for Username
  const onUsernameInputChangeCallback = username => setUsername(username.trim().toLowerCase());

  // callbacks for DateRange
  const onDateRangeFromInputChangeCallback = dateRangeFrom => setDateRangeFrom(dateRangeFrom);
  const onDateRangeToInputChangeCallback = dateRangeTo => setDateRangeTo(dateRangeTo);

  // callback for TimeClass
  const onTimeClassInputChangeCallback = (timeClass, checked) => {
    (checked) ? 
    setTimeClasses((timeClasses) => [...timeClasses, timeClass]) 
    : 
    setTimeClasses((timeClasses) => timeClasses.filter((t) => t !== timeClass));
  };

  // callback for Color
  const onColorInputChangeCallback = (color, checked) => {
    (checked) ?
    setColors((colors) => [...colors, color])
    :
     setColors((colors) => colors.filter((c) => c !== color))
  };

  // callback for Mode
  const onModeInputChangeCallback = (mode, checked) => {
    (checked) ?
    setModes((modes) => [...modes, mode])
    :
    setModes((modes) => modes.filter((m) => m !== mode))
  };

  // callback for Result
  const onResultInputChangeCallback = (result, checked) => {
    (checked) ? 
    setResults((results) => [...results, result])
    :
    setResults((results) => results.filter((r) => r !== result))
  };

  // callbacks for Opponent Rating
  const onRatingFromInputChangeCallback = opponentRatingFrom => setOpponentRatingFrom(opponentRatingFrom);
  const onRatingToInputChangeCallback = opponentRatingTo => setOpponentRatingTo(opponentRatingTo);

  // callback for Submit
  const onSubmitCallback = async () => {
    props.updateStateToDefault(); // clear everything from previous submit

    const [userValidated, userValidatedErrorMessage] = await validateUsername(username);
    //console.log('userValidated:', userValidated);
    (!userValidated) ? setUsernameError(userValidatedErrorMessage) : setUsernameError(null);

    const [dateValidated, dateValidatedErrorMessage] = validateDateRange(dateRangeFrom, dateRangeTo);
    //console.log('dateValidated:', dateValidated);
    (!dateValidated) ? setDateRangeError(dateValidatedErrorMessage) : setDateRangeError(null);

    const [ratingValidated, ratingValidatedErrorMessage] = validateRatingRange(opponentRatingFrom, opponentRatingTo);
    //console.log('ratingValidated:', ratingValidated);
    (!ratingValidated) ? setOpponentRatingError(ratingValidatedErrorMessage) : setOpponentRatingError(null);
 
    (userValidated && dateValidated && ratingValidated) ? setFormValid(true) : setFormValid(false);
  };

  useEffect(() => {
    setFormValid(null);
  }, [onSubmitCallback])

  useEffect(() => {
    //console.log('formValid:', formValid);

    const onSubmitValidated = async (values) => {
      props.storeFormValues(values);
      props.updateSubmitted(1);
      await props.fetchGames();
      props.updateFetched(1); 
      props.filterGames();
      props.updateFiltered(1);
    }
    if (formValid) {
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
      onSubmitValidated(values);
    }
  }, [formValid])


  return (
    <div className="ui segment">
      <div className="ui form">
        <Username
          username={username}
          error={usernameError}
          onInputChangeCallback={onUsernameInputChangeCallback}
        />
        <DateRange
          dateRangeFrom={dateRangeFrom}
          error={dateRangeError}
          onFromInputChangeCallback={onDateRangeFromInputChangeCallback}
          dateRangeTo={dateRangeTo}
          onToInputChangeCallback={onDateRangeToInputChangeCallback}
        />
        <TimeClass
          timeClasses={timeClasses}
          onTimeClassInputChangeCallback={onTimeClassInputChangeCallback}
        />
        <Color
          colors={colors}
          onColorInputChangeCallback={onColorInputChangeCallback}
        />

        <Mode
          modes={modes}
          onModeInputChangeCallback={onModeInputChangeCallback}
        />

        <Result
          results={results}
          onResultInputChangeCallback={onResultInputChangeCallback}
        />

        <OpponentRatingRange
          opponentRatingFrom={opponentRatingFrom}
          error={opponentRatingError}
          onRatingFromInputChangeCallback={onRatingFromInputChangeCallback}
          opponentRatingTo={opponentRatingTo}
          onRatingToInputChangeCallback={onRatingToInputChangeCallback}
        />

        <SubmitButton onSubmitCallback={onSubmitCallback} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, {
  storeFormValues,
  fetchGames,
  filterGames,
  updateStateToDefault,
  updateSubmitted,
  updateFetched,
  updateFiltered
})(Form);
