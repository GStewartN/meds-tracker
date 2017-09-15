import React from "react";
import Medication from "./Medication";
import PropTypes from "prop-types";

function MedsList(props){
  return (
    <div>
      <h3>Medications:</h3>
      <hr/>
      {props.medList.map((medication, index) =>
        <Medication
          name={medication.name}
          take={medication.take}
          key={index}/>
      )}
    </div>
  );
}

MedsList.propTypes = {
  medList: PropTypes.array
};

export default MedsList;
