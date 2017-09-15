import React from "react";

class NewMedForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewMedFormSubmission = this.handleNewMedFormSubmission.bind(this);
  }

  handleNewMedFormSubmission(event) {
    event.preventDefault();
    const { _name, _take } = this.refs;
    alert(`Data Gathered! ${_name.value}, ${_take.value}`);
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

export default NewMedForm;
