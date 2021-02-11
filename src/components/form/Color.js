const Color = (props) => {
  return (
    <div className="grouped fields">
      <label>
        <i className="chess board icon"></i>
        Color {props.colors}
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input id="white-color-checkbox" type="checkbox" />
          <label>White</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="black-color-checkbox" type="checkbox" />
          <label>Black</label>
        </div>
      </div>
    </div>
  );
};

export default Color;
