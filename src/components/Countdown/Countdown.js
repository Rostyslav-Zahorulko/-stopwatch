import { Component } from "react";
import "./Countdown.css";

let array = [];
let delta = 1000;

export default class Countdown extends Component {
  state = {
    intervalId: null,
    isStarted: false,
    seconds: 0,
    minutes: 0,
    hours: 0,
  };

  handleStart = () => {
    if (!this.state.isStarted) {
      console.log("Countdown is ON");

      const id = setInterval(() => {
        console.log("Tick");

        this.setState((prevState) => {
          if (prevState.minutes === 59 && prevState.seconds === 59) {
            return {
              hours: prevState.hours + 1,
              minutes: 0,
              seconds: 0,
            };
          }

          if (prevState.seconds === 59) {
            return {
              minutes: prevState.minutes + 1,
              seconds: 0,
            };
          }

          return { seconds: prevState.seconds + 1 };
        });
      }, 1000);

      this.setState({ intervalId: id, isStarted: !this.state.isStarted });
    } else {
      clearInterval(this.state.intervalId);

      console.log("Countdown is OFF");

      this.setState({
        intervalId: null,
        isStarted: !this.state.isStarted,
        seconds: 0,
        minutes: 0,
        hours: 0,
      });
    }
  };

  handleWait = () => {
    array.push(Date.now());

    if (array.length === 3) {
      array.shift();
      delta = array[1] - array[0];
    }

    if (delta <= 300) {
      console.log("Countdown is PAUSED");

      clearInterval(this.state.intervalId);

      this.setState({ isStarted: false });

      array = [];
      delta = 1000;
    }
  };

  handleReset = () => {
    console.log("Countdown is RESET");
    this.setState({ seconds: 0, minutes: 0, hours: 0 });
  };

  render() {
    const { seconds, minutes, hours, isStarted } = this.state;

    const stringifiedSeconds = String(seconds).padStart(2, "0");
    const stringifiedMinutes = String(minutes).padStart(2, "0");
    const stringifiedHours = String(hours).padStart(2, "0");

    return (
      <>
        <div className="clockface">
          <div className="field">
            <span className="value">{stringifiedHours}</span>
            <span className="label">Hours</span>
          </div>

          <div className="field">
            <span className="value">{stringifiedMinutes}</span>
            <span className="label">Minutes</span>
          </div>

          <div className="field">
            <span className="value">{stringifiedSeconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>

        <ul className="button-list">
          <li className="button-list-item">
            <button className="button" type="button" onClick={this.handleStart}>
              Start / Stop
            </button>
          </li>
          <li className="button-list-item">
            <button
              className="button"
              type="button"
              onClick={this.handleWait}
              disabled={!isStarted}
            >
              Wait
            </button>
          </li>
          <li className="button-list-item">
            <button className="button" type="button" onClick={this.handleReset}>
              Reset
            </button>
          </li>
        </ul>
      </>
    );
  }
}
