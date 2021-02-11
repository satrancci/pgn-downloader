const Result = () => {
  return (
    <div className="grouped fields">
      <label>
        <i className="thumbs up icon"></i>
        Result
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input id="win-checkbox" type="checkbox" />
          <label>Win</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="loss-checkbox" type="checkbox"/>
          <label>Loss</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="lost-checkbox" type="checkbox"/>
          <label>Draw</label>
        </div>
      </div>
    </div>
  );
};

export default Result;
