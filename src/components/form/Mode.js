const Mode = () => {
  return (
    <div className="grouped fields">
      <label>
        <i className="handshake icon"></i>
        Mode
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input id="rated-checkbox" type="checkbox" />
          <label>Rated</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="unrated-checkbox" type="checkbox" />
          <label>Unrated</label>
        </div>
      </div>
    </div>
  );
};

export default Mode;
