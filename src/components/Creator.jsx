import React from "react";
import { Button } from "react-bootstrap";
import MedsList from "./MedsList";

function Creator(){
  return (
    <div>
      <h5>Click the button to begin tracking a medication.</h5>
      <Button>Add Medication</Button>
      <hr/>
      <MedsList/>
    </div>
  );
}

export default Creator;
