import React from "react";
import MedsList from "./MedsList";
import NewMedControl from "./NewMedControl";

class Creator extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterMedList: [],
    };
    this.addNewMedToList = this.addNewMedToList.bind(this);
    this.handleTimerReset = this.handleTimerReset.bind(this);
  }

  handleTimerReset(medication){
    let newMasterMedList = this.state.masterMedList.slice();
    newMasterMedList.forEach((medication) =>
      medication.timeSinceTaken = medication.resetTimeSinceTaken()
    );
    this.setState({masterMedList: newMasterMedList});
    console.log(medication);
  }

  componentDidMount(){
    this.timeSinceTakenChecker = setInterval(() =>
      this.updateMedTimeSinceTaken(),
    5000
    );
  }

  updateMedTimeSinceTaken(){
    let newMasterMedList = this.state.masterMedList.slice();
    newMasterMedList.forEach((medication) =>
      medication.setTimeSinceTaken()
    );
    this.setState({masterMedList: newMasterMedList});
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceTakenChecker);
  }

  addNewMedToList(newMedication){
    var newMasterMedList = this.state.masterMedList.slice();
    newMasterMedList.push(newMedication);
    this.setState({masterMedList: newMasterMedList});
  }

  render(){
    return (
      <div>
        <NewMedControl
          onNewMedCreation={this.addNewMedToList}/>
        <MedsList
          medList = {this.state.masterMedList}
          handleTimerReset={this.handleTimerReset}/>
      </div>
    );
  }
}

export default Creator;
