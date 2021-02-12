import React, { useState, useEffect } from 'react';

const TimeClass = (props) => {

  const [bulletChecked, setBulletChecked] = useState(false);
  const [blitzChecked, setBlitzChecked] = useState(false);
  const [rapidChecked, setRapidChecked] = useState(false);
  const [dailyChecked, setDailyChecked] = useState(false);

  const onCheckBullet = () => {
    setBulletChecked(checked => !checked);
  }

  const onCheckBlitz = () => {
    setBlitzChecked(checked => !checked);
  }

  const onCheckRapid = () => {
    setRapidChecked(checked => !checked);
  }

  const onCheckDaily = () => {
    setDailyChecked(checked => !checked);
  }
  
  useEffect(() => {
    props.onTimeClassInputChangeCallback('bullet', bulletChecked);
  }, [bulletChecked])

  useEffect(() => {
    props.onTimeClassInputChangeCallback('blitz', blitzChecked);
  }, [blitzChecked])

  useEffect(() => {
    props.onTimeClassInputChangeCallback('rapid', rapidChecked);
  }, [rapidChecked])

  useEffect(() => {
    props.onTimeClassInputChangeCallback('daily', dailyChecked);
  }, [dailyChecked])


  return (
    <div className="grouped fields">
      <label>
        <i className="clock icon"></i>
        Time Control { (props.timeClasses !== undefined) ?
        props.timeClasses.map(t => `${t}  `)
      : null
        }
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input id="bullet-checkbox" type="checkbox" onChange={onCheckBullet} />
          <label>Bullet</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="blitz-checkbox" type="checkbox" onChange={onCheckBlitz} />
          <label>Blitz</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="rapid-checkbox" type="checkbox" onChange={onCheckRapid} />
          <label>Rapid</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="daily-checkbox" type="checkbox" onChange={onCheckDaily} />
          <label>Daily</label>
        </div>
      </div>
    </div>
  );
};

export default TimeClass;
