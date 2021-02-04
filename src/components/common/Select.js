import React from "react";
import PropTypes from "prop-types";
import Error from "./Error.js";

function Select(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) wrapperClass += " has-error";
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          value={props.value || ""}
          className="form-control"
          onChange={props.onChange}
        >
          <option value="" />
          <option value="1">Cory House</option>
          <option value="2">Scott Allen</option>
        </select>
      </div>
      <Error error={props.error} />
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
Select.defaultProps = {
  error: "",
  value: "",
};

export default Select;
