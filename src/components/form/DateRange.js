const DateRange = (props) => {

  return (
    <div className="two fields">
      <div className="field">
        <label>
          <i className="calendar alternate outline icon"></i>
          Date From {props.dateRangeFrom}
        </label>
        <input
          id="date-range-from"
          type="text"
          placeholder="YYYY/MM"
          value={props.dateRangeFrom}
          onChange={e => props.onFromInputChangeCallback(e.target.value)}
        />
      </div>
      <div className="field">
        <label>
          <i className="calendar alternate outline icon"></i>
          Date To {props.dateRangeTo}
        </label>
        <input 
          id="date-range-to"
          type="text" 
          placeholder="YYYY/MM" 
          value={props.dateRangeTo}
          onChange={e => props.onToInputChangeCallback(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateRange;
