import React, { useState, useEffect } from "react";
import { checkUserExists } from "../utils/utils";

const TIME_CONTROLS = ["rapid", "blitz"];

const Form = (props) => {
  const [values, setValues] = useState({
    username: "",
    timeControl: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [userExists, setUserExists] = useState(undefined);

  const onUsernameInputChange = (e) => {
    setValues((values) => ({
      ...values,
      username: e.target.value,
    }));
  };

  const onTimeControlInputChange = (e) => {
    setValues((values) => ({
      ...values,
      timeControl: e.target.value,
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (
      values.username &&
      values.timeControl &&
      TIME_CONTROLS.includes(values.timeControl)
    ) {
      const userExists = await checkUserExists(values.username);
      if (userExists) {
        setUserExists(true);
        setValid(true);
        props.onSubmit(values);
      } else {
        setUserExists(false);
      }
    }
    setSubmitted(true);
  };


  useEffect(() => {
    const cleanUpForm = async () => {
      //await new Promise((r) => setTimeout(r, 1000)); // make the transition more user-friendly
      setUserExists(undefined);
      setSubmitted(false);
      setValid(false);
    };
    cleanUpForm();
  }, [props.onSubmit]);

  return (
    <div className="ui segment">
      <div className="ui form">
        <form onSubmit={onFormSubmit}>
          <div className="field">
            <label>Username</label>
            <input
              id="username"
              type="text"
              placeholder="username"
              name="username"
              value={values.username}
              onChange={onUsernameInputChange}
            />
            {submitted && !values.username && (
              <span id="username-error" style={{ color: "red" }}>
                Please enter your username
              </span>
            )}
            {submitted && values.username && userExists === false && (
              <span id="username-error" style={{ color: "red" }}>
                This user is not registered on Chess.com!
              </span>
            )}
          </div>
          <div className="field">
            <label>Time Control</label>
            <input
              id="time-control"
              type="text"
              placeholder="e.g. blitz"
              name="time-control"
              value={values.timeControl}
              onChange={onTimeControlInputChange}
            />
            {submitted &&
              (!values.timeControl ||
                !TIME_CONTROLS.includes(values.timeControl)) && (
                <span id="time-control-error" style={{ color: "red" }}>
                  Please enter the time control for the games that you want to
                  fetch: {TIME_CONTROLS.map((tc) => `${tc} `)}
                </span>
              )}
          </div>
          <button className="ui blue submit button" type="submit">
            Submit
          </button>
        </form>
      </div>
      {valid && submitted && (
        <div
          className="success-message"
          style={{ marginTop: "10px", color: "green" }}
        >
          Submitted!
        </div>
      )}
    </div>
  );
};

export default Form;
