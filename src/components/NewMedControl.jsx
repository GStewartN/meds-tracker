import React from "react";
import { Button } from "react-bootstrap";

class NewMedControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewMedForm = this.handleDisplayingNewMedForm.bind(this);
  }

  handleDisplayingNewMedForm(event){
    this.setState({formVisibleOnPage: true});
  }


  render(){
    return(
      <div>
        <h5>Click the button to begin tracking a medication.</h5>
        <Button onClick={this.handleDisplayingNewMedForm}>Add Medication</Button>
        <hr/>
      </div>
    );
  }
}

export default NewMedControl;
