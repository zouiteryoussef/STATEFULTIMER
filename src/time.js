import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ms: 1000 * 66 * 155
    };
  }
  convert = () => {
    let hours = Math.floor((this.state.ms / 3600000) % 24);
    let minutes = Math.floor((this.state.ms / 60000) % 60);
    let seconds = Math.floor((this.state.ms / 1000) % 60);
    return { hours, minutes, seconds };
  };
  convertdec = number => {
    number = String(number);
    if (number.length === 1) return "0" + number;
    return number;
  };
  render = () => {
    return (
      <div>
        <div className="timer">
          <h1>{this.convertdec(this.convert().hours)}</h1>
          <h1>:</h1>
          <h1>{this.convertdec(this.convert().minutes)}</h1>
          <h1>:</h1>
          <h1>{this.convertdec(this.convert().seconds)}</h1>
        </div>
        <div className="names">
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>
      </div>
    );
  };
}
export default Timer;
