import React, { useState, useEffect } from "react";

const Color = (props) => {
  const [whiteChecked, setWhiteChecked] = useState(true);
  const [blackChecked, setBlackChecked] = useState(true);

  const onWhiteCheck = () => {
    setWhiteChecked((checked) => !checked);
  };

  const onBlackCheck = () => {
    setBlackChecked((checked) => !checked);
  };

  useEffect(() => {
    props.onColorInputChangeCallback("white", whiteChecked);
  }, [whiteChecked]);

  useEffect(() => {
    props.onColorInputChangeCallback("black", blackChecked);
  }, [blackChecked]);

  return (
    <div className="grouped fields">
      <label>
        <i className="chess board icon"></i>
        Color
        {props.colors !== undefined ? props.colors.map((c) => ` ${c} `) : null}
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input
            id="white-color-checkbox"
            type="checkbox"
            defaultChecked={whiteChecked}
            onChange={onWhiteCheck}
          />
          <label>White</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input
            id="black-color-checkbox"
            type="checkbox"
            defaultChecked={blackChecked}
            onChange={onBlackCheck}
          />
          <label>Black</label>
        </div>
      </div>
    </div>
  );
};

export default Color;
