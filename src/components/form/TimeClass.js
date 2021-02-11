const TimeClass = () => {
  return (
    <div className="grouped fields">
      <label>
        <i className="clock icon"></i>
        Time Control
      </label>
      <div className="field">
        <div className="ui checkbox">
          <input id="bullet-checkbox" type="checkbox" />
          <label>Bullet</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="blitz-checkbox" type="checkbox" />
          <label>Blitz</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="rapid-checkbox" type="checkbox" />
          <label>Rapid</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input id="daily-checkbox" type="checkbox" />
          <label>Daily</label>
        </div>
      </div>
    </div>
  );
};

export default TimeClass;
