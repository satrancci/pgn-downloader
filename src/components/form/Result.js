import React, { useState, useEffect } from 'react';

const Result = (props) => {

  const [winChecked, setWinChecked] = useState(true);
  const [lossChecked, setLossChecked] = useState(true);
  const [drawChecked, setDrawChecked] = useState(true);

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
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input id="win-checkbox" type="checkbox" defaultChecked={drawChecked} onChange={onWinCheck} />
          <label>Win</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="loss-checkbox" type="checkbox" defaultChecked={winChecked} onChange={onLossCheck} />
          <label>Loss</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="lost-checkbox" type="checkbox" defaultChecked={lossChecked} onChange={onDrawCheck} />
          <label>Draw</label>
        </div>
      </div>
    </div>
  );
};

export default Result;
