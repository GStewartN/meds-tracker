import React from "react";
import Medication from "../models/Medication.js";
import PropTypes from "prop-types";

class NewMedForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewMedFormSubmission = this.handleNewMedFormSubmission.bind(this);
  }

  handleNewMedFormSubmission(event) {
    event.preventDefault();
    const { _name, _take } = this.refs;
    var newMedication = new Medication(_name.value, _take.value);
    this.props.onNewMedCreation(newMedication);
    this.props.hideFormAfterSubmission();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleNewMedFormSubmission}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Medication Name"/>
          <input
            ref="_take"
            type="text"
            id="take"
            placeholder="How Often To Take Med"/>
          <button type="submit">Add Medication</button>
        </form>
      </div>
    );
  }

}

NewMedForm.propTypes = {
  onNewMedCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
};

export default NewMedForm;
