import React from "react";
import PropTypes from "prop-types";
import Error from "./Error.js";

function TextInput(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) wrapperClass += " has-error";
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          value={props.value}
        />
      </div>
      <Error error={props.error} />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
TextInput.defaultProps = {
  error: "",
};

export default TextInput;
