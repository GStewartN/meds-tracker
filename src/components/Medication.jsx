import React from "react";
import PropTypes from "prop-types";

function Medication(props){
  return(
    <div>
      <h5>{props.title}</h5>
      <p><em>{props.name}</em></p>
      <hr/>
    </div>
  );
}

Medication.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string
};

export default Medication;
