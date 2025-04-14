import { useRef, useState, useEffect } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerExpiredOnItsOwn = useRef(false); // New flag

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Handle auto-end when time runs out
  useEffect(() => {
    if (timeRemaining <= 0 && timerExpiredOnItsOwn.current) {
      clearInterval(timer.current);
      dialog.current.open();
    }
  }, [timeRemaining]);

  function handlereset() {
    setTimeRemaining(targetTime * 1000);
    timerExpiredOnItsOwn.current = false;
  }

  function handleStart() {
    timerExpiredOnItsOwn.current = true; // Assume user wants to play
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    timerExpiredOnItsOwn.current = false; // Manually stopped, don't show modal
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handlereset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : "undefined"}>
          {timerIsActive ? "Timer is Running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
