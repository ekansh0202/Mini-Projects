import { use, useState } from "react";
import "./App.css";

function App() {
  const [horizontal, setHorizontal] = useState("left");
  const [vertical, setVertical] = useState("top");
  const [type, setType] = useState("normal");
  const [message, setMessage] = useState("This is a toast message!");
  const [duration, setDuration] = useState(2);
  const [toasts, setToasts] = useState([]);

  const showToast = () => {
    const id = Date.now();

    setToasts([...toasts, { id, type, message, vertical, horizontal }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration * 1000);
  };

  console.log(toasts);

  return (
    <div className="container">
      <select
        className="input horizontal"
        onChange={(event) => setHorizontal(event.target.value)}
      >
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <select
        className="input vertical"
        onChange={(event) => setVertical(event.target.value)}
      >
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
      <select
        className="input type"
        onChange={(event) => setType(event.target.value)}
      >
        <option value="normal">Normal</option>
        <option value="success">Success</option>
        <option value="error">Error</option>
        <option value="warning">Warning</option>
        <option value="info">Info</option>
      </select>
      <input
        type="text"
        className="input"
        placeholder="This is a toast message!"
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="duration">
        <span>Duration</span>
        <input
          type="range"
          value={duration}
          onChange={(event) => setDuration(Number(event.target.value))}
        />
      </div>
      <button className="button" onClick={showToast}>
        Show Toast
      </button>
      {
        <div className={`toast-container ${vertical} ${horizontal}`}>
          {toasts.map((item) => (
            <div key={item.id} className={`toast ${item.type}`}>
              <span>{item.message}</span>
              <button
                onClick={() =>
                  setToasts((prev) => prev.filter((t) => t.id !== item.id))
                }
              >
                X
              </button>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
