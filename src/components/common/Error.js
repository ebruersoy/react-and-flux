import React from "react";

function Error(props) {
  return (
    <>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </>
  );
}
export default Error;
