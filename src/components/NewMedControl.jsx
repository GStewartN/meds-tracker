import React from "react";
import { Button } from "react-bootstrap";
import NewMedForm from "./NewMedForm";
import PropTypes from "prop-types";

class NewMedControl extends React.Component {

  constructor(props){
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleDisplayingNewMedForm(){
    this.setState({formVisibleOnPage: true});
  }

  showForm() {
    this.setState({formVisibleOnPage: true});
  }

  hideForm() {
    this.setState({formVisibleOnPage: false});
  }


  render(){
    let formAreaContent = null;
    if (this.state.formVisibleOnPage){
      formAreaContent = <NewMedForm
        onNewMedCreation={this.props.onNewMedCreation}
        hideFormAfterSubmission={this.hideForm}/>;
    } else {
      formAreaContent = <Button
        onClick={this.showForm}>Add Medication</Button>;
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

NewMedControl.propTypes = {
  onNewMedCreation: PropTypes.func
};

export default NewMedControl;
