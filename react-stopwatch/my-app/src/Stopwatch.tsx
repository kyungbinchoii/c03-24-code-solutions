import { FaPause, FaPlay } from 'react-icons/fa';
import './Stopwatch.css';
import { useState, useEffect } from 'react';

export function Stopwatch() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
      setIntervalId(id as NodeJS.Timeout);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    if (!isRunning) {
      setElapsedSeconds(0);
    }
  };

  return (
    <>
      <div className="stopwatch">
        <div className="watch-face" onClick={handleReset}>
          <span>{elapsedSeconds}</span>
        </div>
        {isRunning ? (
          <FaPause
            size="2rem"
            className="start-stop"
            onClick={handleStartStop}
          />
        ) : (
          <FaPlay
            size="2rem"
            className="start-stop"
            onClick={handleStartStop}
          />
        )}
      </div>
    </>
  );
}

export default Stopwatch;
