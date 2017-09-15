import React from "react";
import { Button } from "react-bootstrap";
import NewMedForm from "./NewMedForm";

class NewMedControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewMedForm = this.handleDisplayingNewMedForm.bind(this);
  }

  handleDisplayingNewMedForm(){
    this.setState({formVisibleOnPage: true});
  }


  render(){
    let formAreaContent = null;
    if (this.state.formVisibleOnPage){
      formAreaContent = <NewMedForm/>;
    } else {
      formAreaContent = <Button onClick={this.handleDisplayingNewMedForm}>Add Medication</Button>;
    }
    return(
      <div>
        <h5>Click the button to begin tracking a medication.</h5>
        {formAreaContent}
        <hr/>
      </div>
    );
  }
}

export default NewMedControl;
