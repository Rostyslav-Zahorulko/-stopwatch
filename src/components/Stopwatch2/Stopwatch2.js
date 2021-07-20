import { useState, useCallback } from "react";
import "./Stopwatch2.css";

let array = [];
let delta = 1000;

export default function Stopwatch2() {
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleStart = useCallback(() => {
    if (!isStarted) {
      console.log("Countdown is ON");

      const id = setInterval(() => {
        console.log("Tick");

        setSeconds((prevSecondsState) => {
          if (prevSecondsState === 59) {
            setMinutes((prevMinutesState) => {
              if (prevMinutesState === 59 && prevSecondsState === 59) {
                setHours((prevState) => {
                  return prevState + 1;
                });

                return 0;
              }

              return prevMinutesState + 1;
            });

            return 0;
          }

          return prevSecondsState + 1;
        });
      }, 1000);

      setIntervalId(id);
      setIsStarted(!isStarted);
    } else {
      clearInterval(intervalId);

      console.log("Countdown is OFF");

      setIntervalId(null);
      setIsStarted(!isStarted);
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    }
  }, [isStarted, intervalId]);

  const handleWait = useCallback(() => {
    array.push(Date.now());

    if (array.length === 3) {
      array.shift();
      delta = array[1] - array[0];
    }

    if (delta <= 300) {
      console.log("Countdown is PAUSED");

      clearInterval(intervalId);

      setIsStarted(false);

      array = [];
      delta = 1000;
    }
  }, [intervalId]);

  const handleReset = useCallback(() => {
    console.log("Countdown is RESET");

    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }, []);

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
          <button className="button" type="button" onClick={handleStart}>
            Start / Stop
          </button>
        </li>
        <li className="button-list-item">
          <button
            className="button"
            type="button"
            onClick={handleWait}
            disabled={!isStarted}
          >
            Wait
          </button>
        </li>
        <li className="button-list-item">
          <button className="button" type="button" onClick={handleReset}>
            Reset
          </button>
        </li>
      </ul>
    </>
  );
}
