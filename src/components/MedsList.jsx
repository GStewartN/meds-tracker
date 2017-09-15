import React from "react";
import Medication from "./Medication";

var masterMedList = [
  {
    name: "Aspirin",
    take: "daily"
  },
  {
    name: "Singulair",
    take: "daily"
  }
];

function MedsList(){
    return (
      <div>
        <h3>Medications:</h3>
        <hr/>
        {masterMedList.map((medication, index) =>
          <Medication
            name={medication.name}
            take={medication.take}
            key={index}/>
        )}
      </div>
    );
}

export default MedsList;
