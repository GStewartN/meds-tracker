import Moment from "moment";

class Medication {
  constructor(name, take){
    this.name = name;
    this.take = take;
    this.timeTaken = new Moment();
    this.timeSinceTaken = "a few seconds";
  }

  setTimeSinceTaken(){
    this.timeSinceTaken = this.timeTaken.fromNow(true);
  }

  resetTimeSinceTaken(){
    this.timeSinceTaken = new Moment();
  }

}

export default Medication;
