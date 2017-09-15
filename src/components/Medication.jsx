import React from "react";
import PropTypes from "prop-types";

function Medication(props){
  return(
    <div>
      <p><em>{props.name}</em></p>
      <p>I need to take this: {props.take}</p>
      <p>My last dose was: {props.timeSinceTaken} ago.</p>
      <hr/>
    </div>
  );
}

Medication.propTypes = {
  name: PropTypes.string,
  take: PropTypes.string,
  timeSinceTaken: PropTypes.string
};

export default Medication;
