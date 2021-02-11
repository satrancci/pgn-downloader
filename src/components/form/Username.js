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
    </div>
  );
};

export default Username;
