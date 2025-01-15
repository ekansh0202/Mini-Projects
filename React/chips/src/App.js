import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [chips, setChips] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const newChip = {
      id: chips.length,
      text: text,
    };
    setChips([...chips, newChip]);
    setText("");
  };

  const onHandleDelete = (id) => {
    console.log(id);
    const newChips = chips.filter((item) => {
      return item.id !== id;
    });
    setChips(newChips);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Type & hit Enter"
          className="input"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
      </form>
      <div className="chips">
        {chips.map((item, index) => {
          return (
            <div className="chip" key={index}>
              <label className="chip-input">{item.text}</label>
              <button
                className="delete"
                onClick={() => onHandleDelete(item.id)}
              >
                ❌
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
