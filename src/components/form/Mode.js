import React, { useState, useEffect } from 'react';

const Mode = (props) => {

  const [ratedChecked, setRatedChecked] = useState(true);
  const [unratedChecked, setUnratedChecked] = useState(true);

  const onRatedCheck = () => {
    setRatedChecked((checked) => !checked);
  };

  const onUnratedCheck = () => {
    setUnratedChecked((checked) => !checked);
  };

  useEffect(() => {
    props.onModeInputChangeCallback("rated", ratedChecked);
  }, [ratedChecked]);

  useEffect(() => {
    props.onModeInputChangeCallback("unrated", unratedChecked);
  }, [unratedChecked]);

  return (
    <div className="grouped fields">
      <label>
        <i className="handshake icon"></i>
        Mode
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input id="rated-checkbox" type="checkbox" defaultChecked={ratedChecked} onChange={onRatedCheck} />
          <label>Rated</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="unrated-checkbox" type="checkbox" defaultChecked={ratedChecked} onChange={onUnratedCheck} />
          <label>Unrated</label>
        </div>
      </div>
    </div>
  );
};

export default Mode;
