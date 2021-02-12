import React, { useState, useEffect } from "react";

const TimeClass = (props) => {
  const [bulletChecked, setBulletChecked] = useState(false);
  const [blitzChecked, setBlitzChecked] = useState(false);
  const [rapidChecked, setRapidChecked] = useState(false);
  const [dailyChecked, setDailyChecked] = useState(false);

  const onBulletCheck = () => {
    setBulletChecked((checked) => !checked);
  };

  const onBlitzCheck = () => {
    setBlitzChecked((checked) => !checked);
  };

  const onRapidCheck = () => {
    setRapidChecked((checked) => !checked);
  };

  const onDailyCheck = () => {
    setDailyChecked((checked) => !checked);
  };

  useEffect(() => {
    props.onTimeClassInputChangeCallback("bullet", bulletChecked);
  }, [bulletChecked]);

  useEffect(() => {
    props.onTimeClassInputChangeCallback("blitz", blitzChecked);
  }, [blitzChecked]);

  useEffect(() => {
    props.onTimeClassInputChangeCallback("rapid", rapidChecked);
  }, [rapidChecked]);

  useEffect(() => {
    props.onTimeClassInputChangeCallback("daily", dailyChecked);
  }, [dailyChecked]);

  return (
    <div className="grouped fields">
      <label>
        <i className="clock icon"></i>
        Time Control
        {props.timeClasses !== undefined ? props.timeClasses.map((t) => ` ${t}  `) : null}
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input
            id="bullet-checkbox"
            type="checkbox"
            onChange={onBulletCheck}
          />
          <label>Bullet</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="blitz-checkbox" type="checkbox" onChange={onBlitzCheck} />
          <label>Blitz</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="rapid-checkbox" type="checkbox" onChange={onRapidCheck} />
          <label>Rapid</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="daily-checkbox" type="checkbox" onChange={onDailyCheck} />
          <label>Daily</label>
        </div>
      </div>
    </div>
  );
};

export default TimeClass;
