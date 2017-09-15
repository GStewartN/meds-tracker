import React from "react";
import MedsList from "./MedsList";
import NewMedControl from "./NewMedControl";

function Creator(){
  return (
    <div>
      <NewMedControl/>
      <MedsList/>
    </div>
  );
}

export default Creator;
