import React from "react";
import Medication from "./Medication";

var masterMedList = [
  {
    title: "Medication:",
    name: "Aspirin"
  },
  {
    title: "Medication",
    name: "Singulair"
  }
];

function MedsList(){
    return (
      <div>
        {masterMedList.map((medication, index) =>
          <Medication
            title={medication.title}
            name={medication.name}
            key={index}/>
        )}
      </div>
    );
}

export default MedsList;
