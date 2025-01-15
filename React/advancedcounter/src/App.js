import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [delay, setDelay] = useState(1);
  const [value, setValue] = useState(1);
  const [lowerLimit, setLowerLimit] = useState(-1000);
  const [upperLimit, setUpperLimit] = useState(1000);
  const [asyncPlusDisabled, setAsyncPlusDisabled] = useState(false);
  const [asyncMinusDisabled, setAsyncMinusDisabled] = useState(false);

  const onHandleReset = () => {
    setResult(0);
    setDelay(1);
    setValue(1);
    setUpperLimit(-1000);
    setLowerLimit(1000);
  };

  const onHandleAsync = (event) => {
    let timeout;
    if (event.target.textContent === "async-") {
      setAsyncMinusDisabled(true);
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setResult((prev) => {
          if (prev >= lowerLimit && prev <= upperLimit) {
            return prev - value;
          }
          else{
            return 0;
          }
        });
        setAsyncMinusDisabled(false);
      }, delay * 1000);
    } else if (event.target.textContent === "+async") {
      setAsyncPlusDisabled(true);
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setResult((prev) => {
          if (prev >= lowerLimit && prev <= upperLimit) {
            return prev + value;
          }
          else{
            return 0;
          }
        });
        setAsyncPlusDisabled(false);
      }, delay * 1000);
    }
  };

  return (
    <div className="App">
      <label className="result">{result}</label>
      <div className="buttons">
        <button
          className="button"
          onClick={() =>
            setResult((prev) => {
              if (prev >= lowerLimit && prev <= upperLimit) {
                return prev - value;
              }
              else{
                onHandleReset();
                return 0;
              }
            })
          }
        >
          -
        </button>
        <button
          className="button"
          onClick={() =>
            setResult((prev) => {
              if (prev >= lowerLimit && prev <= upperLimit) {
                return prev + value;
              }
              else{
                onHandleReset();
                return 0;
              }
            })
          }
        >
          +
        </button>
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={(event) => onHandleAsync(event)}
          disabled={asyncMinusDisabled}
        >
          async-
        </button>
        <button
          className="button"
          onClick={(event) => onHandleAsync(event)}
          disabled={asyncPlusDisabled}
        >
          +async
        </button>
      </div>
      <div className="content">
        <label className="label">Delay</label>
        <input
          type="range"
          className="input"
          value={1}
          onChange={(event) => setDelay(event.target.value)}
        />
        <label className="label">{delay}s</label>
      </div>
      <div className="content">
        <label className="label">Increment/Decrement by</label>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="content">
        <label className="label">Lower Limit</label>
        <input
          type="text"
          className="input"
          value={lowerLimit}
          onChange={(event) => setLowerLimit(event.target.value)}
        />
      </div>
      <div className="content">
        <label className="label">Upper Limit</label>
        <input
          type="text"
          className="input"
          value={upperLimit}
          onChange={(event) => setUpperLimit(event.target.value)}
        />
      </div>
      <button className="button" onClick={onHandleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
