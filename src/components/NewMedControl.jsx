import React from "react";
import { Button } from "react-bootstrap";

function NewMedControl(){
  return(
    <div>
      <h5>Click the button to begin tracking a medication.</h5>
      <Button>Add Medication</Button>
      <hr/>
    </div>
  );
}

export default NewMedControl;
