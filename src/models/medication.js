import Moment from "moment";

class Medication {
  constructor(name, take){
    this.name = name;
    this.take = take;
    this.timeTaken = new Moment();
    this.timeSinceTaken = "You have not taken this medicine.";
  }

  setTimeSinceTaken(){
    this.timeSinceTaken = this.timeTaken.fromNow(true);
  }

  resetTimeSinceTaken(){
    this.timeSinceTaken = new Moment();
  }

}

export default Medication;
