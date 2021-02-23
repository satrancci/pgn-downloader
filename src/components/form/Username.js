const Username = (props) => {

  return (
    <div className="field">
      <label>
        <i className="user icon"></i>
        Username {props.username}
      </label>
      <input
        id="username" 
        type="text" 
        placeholder="username" 
        value={props.username} 
        onChange={e => props.onInputChangeCallback(e.target.value)}/>
        {props.error &&
        <span id="username-error" style={{ color: "red" }}>
          {props.error}
        </span>
        }
    </div>
  );
};

export default Username;
