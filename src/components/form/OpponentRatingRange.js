const OpponentRatingRange = () => {
  return (
    <div className="two fields">
      <div className="field">
        <label>
          <i className="users icon"></i>
          Opponent Rating From
        </label>
        <input id="rating-range-from" type="text" placeholder="0" value="" />
      </div>
      <div className="field">
        <label>
          <i className="users icon"></i>
          Opponent Rating To
        </label>
        <input id="rating-range-to" type="text" placeholder="4000" value="" />
      </div>
    </div>
  );
};

export default OpponentRatingRange;
