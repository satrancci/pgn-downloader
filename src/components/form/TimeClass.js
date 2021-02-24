import React, { useState, useEffect } from "react";

const TimeClass = (props) => {
  const [bulletChecked, setBulletChecked] = useState(true);
  const [blitzChecked, setBlitzChecked] = useState(true);
  const [rapidChecked, setRapidChecked] = useState(true);
  const [dailyChecked, setDailyChecked] = useState(true);

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
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input
            id="bullet-checkbox"
            type="checkbox"
            defaultChecked={bulletChecked}
            onChange={onBulletCheck}
          />
          <label>Bullet</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input
            id="blitz-checkbox"
            type="checkbox"
            defaultChecked={blitzChecked}
            onChange={onBlitzCheck}
          />
          <label>Blitz</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input
            id="rapid-checkbox"
            type="checkbox"
            defaultChecked={rapidChecked}
            onChange={onRapidCheck}
          />
          <label>Rapid</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input
            id="daily-checkbox"
            type="checkbox"
            defaultChecked={dailyChecked}
            onChange={onDailyCheck}
          />
          <label>Daily</label>
        </div>
      </div>
    </div>
  );
};

export default TimeClass;
