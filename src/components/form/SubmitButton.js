const SubmitButton = (props) => {
    return (
        <button className="ui blue submit button" type="submit" onClick={e => {props.onSubmitCallback()}}>
        Submit
      </button>
    )
}

export default SubmitButton;