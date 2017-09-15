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

}

export default Medication;
