import { useState } from 'react';
import "./App.css";

function App() {

  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  let index = 1;

  const createGrid = () => {
    let grid = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        row.push(
          <div key={`row-${i}-col-${j}`} className="box">
            {index}
          </div>
        );
        index++;
      }
      grid.push(<div key={`row-${i}`} className="row">{row}</div>);
    }
    return grid;
  }


  return (
    <div className="App">
      <div className="selector">
        <div className="input">
          <label className="label">Row:: {rows}</label>
          <input type="range" className="range" value={rows} onChange={(event) => setRows(event.target.value)} min="2" />
        </div>
        <div className="input">
          <label className="label">Column:: {columns}</label>
          <input type="range" className="range" value={columns} onChange={(event) => setColumns(event.target.value)} min="2" />
        </div>
      </div>
      <div className="container">
      {createGrid()}
      </div>
    </div>
  );
}

export default App;
