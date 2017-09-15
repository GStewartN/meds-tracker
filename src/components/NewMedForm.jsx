import React from "react";

function NewMedForm(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          placeholder="Medication Name"/>
        <input
          type="text"
          id="take"
          placeholder="How Often To Take Med"/>
        <button type="submit">Add Medication</button>
      </form>
    </div>
  );
}

export default NewMedForm;
