import { useState, useCallback } from "react";
import { Observable } from "rxjs";
import "./Stopwatch3.css";

let array = [];
let delta = 1000;

const timer$ = new Observable((observer) => {
  setInterval(() => {
    observer.next(1000);
  }, 1000);
});

export default function Clock() {
  const [isStarted, setIsStarted] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [time, setTime] = useState(0);

  const handleStart = useCallback(() => {
    if (!isStarted) {
      console.log("Countdown is ON");

      setIsStarted(!isStarted);

      const timerSubscription = timer$.subscribe((value) => {
        setTime((prevState) => prevState + value);
      });

      setSubscription(timerSubscription);
    } else {
      console.log("Countdown is OFF");

      subscription.unsubscribe();

      setIsStarted(!isStarted);
      setTime(0);
    }
  }, [isStarted, subscription]);

  const handleWait = useCallback(() => {
    array.push(Date.now());

    if (array.length === 3) {
      array.shift();
      delta = array[1] - array[0];
    }

    if (delta <= 300) {
      console.log("Countdown is PAUSED");

      subscription.unsubscribe();

      setIsStarted(false);

      array = [];
      delta = 1000;
    }
  }, [subscription]);

  const handleReset = useCallback(() => {
    console.log("Countdown is RESET");

    setTime(0);
  }, []);

  const pad = (value) => {
    return String(value).padStart(2, "0");
  };

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

  return (
    <>
      <div className="clockface">
        <div className="field">
          <span className="value">{hours}</span>
          <span className="label">Hours</span>
        </div>

        <div className="field">
          <span className="value">{minutes}</span>
          <span className="label">Minutes</span>
        </div>

        <div className="field">
          <span className="value">{seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>

      <ul className="button-list">
        <li className="button-list-item">
          <button className="button" type="button" onClick={handleStart}>
            Start / Stop
          </button>
        </li>
        <li className="button-list-item">
          <button
            className="button"
            type="button"
            disabled={!isStarted}
            onClick={handleWait}
          >
            Wait
          </button>
        </li>
        <li className="button-list-item">
          <button
            className="button"
            type="button"
            disabled={!time}
            onClick={handleReset}
          >
            Reset
          </button>
        </li>
      </ul>
    </>
  );
}
