const OpponentRatingRange = (props) => {
  return (
    <div className="two fields">
      <div className="field">
        <label>
          <i className="users icon"></i>
          Opponent Rating From {props.opponentRatingFrom}
        </label>
        <input
          id="rating-range-from"
          type="text"
          placeholder={props.opponentRatingFrom}
          value={props.opponentRatingFrom}
          onChange={(e) =>
            props.onRatingFromInputChangeCallback(e.target.value)
          }
        />
        {props.error && (
          <span id="username-error" style={{ color: "red" }}>
            {props.error}
          </span>
        )}
      </div>
      <div className="field">
        <label>
          <i className="users icon"></i>
          Opponent Rating To {props.opponentRatingTo}
        </label>
        <input
          id="rating-range-to"
          type="text"
          placeholder={props.opponentRatingTo}
          value={props.opponentRatingTo}
          onChange={(e) => props.onRatingToInputChangeCallback(e.target.value)}
        />
      </div>
    </div>
  );
};

export default OpponentRatingRange;
