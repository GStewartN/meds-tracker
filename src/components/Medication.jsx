import React from "react";
import PropTypes from "prop-types";

function Medication(props){
  return(
    <div>
      <p><em>{props.name}</em></p>
      <p>{props.take}</p>
      <p>{props.timeSinceTaken}</p>
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
