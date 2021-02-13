import React, { useState, useEffect } from 'react';

const Result = (props) => {

  const [winChecked, setWinChecked] = useState(false);
  const [lossChecked, setLossChecked] = useState(false);
  const [drawChecked, setDrawChecked] = useState(false);

  const onWinCheck = () => {
    setWinChecked((checked) => !checked);
  };

  const onLossCheck = () => {
    setLossChecked((checked) => !checked);
  };

  const onDrawCheck = () => {
    setDrawChecked((checked) => !checked);
  };

  useEffect(() => {
    props.onResultInputChangeCallback("win", winChecked);
  }, [winChecked]);

  useEffect(() => {
    props.onResultInputChangeCallback("loss", lossChecked);
  }, [lossChecked]);

  useEffect(() => {
    props.onResultInputChangeCallback("draw", drawChecked);
  }, [drawChecked]);

  return (
    <div className="grouped fields">
      <label>
        <i className="thumbs up icon"></i>
        Result
        {props.results !== undefined ? props.results.map((r) => ` ${r} `) : null}
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input id="win-checkbox" type="checkbox" onChange={onWinCheck} />
          <label>Win</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="loss-checkbox" type="checkbox" onChange={onLossCheck} />
          <label>Loss</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="lost-checkbox" type="checkbox" onChange={onDrawCheck} />
          <label>Draw</label>
        </div>
      </div>
    </div>
  );
};

export default Result;
