import { useState } from "react";
import "./App.css";

function App() {
  const data = new Array(9).fill(null);
  const [board, setBoard] = useState(data);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState();
  const [draw, setDraw] = useState(false);
  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const onHandleClick = (index) => {
    if (winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard); //React schedules a state update.
    setIsXNext((prev) => !prev);
    console.log("board ", board); //but React hasn't updated board yet.
    console.log("new board ", newBoard); //this shows the correct value because it's a local variable.
    const currentWinner = getWinner(newBoard);
    if (currentWinner) {
      setWinner(currentWinner);
    }

    //If it's a draw
    if (!newBoard.includes(null) && !winner) {
      setDraw(true);
    }
  };

  const getWinner = (currentBoard) => {
    for (let i = 0; i < winnerCombinations.length; i++) {
      const [a, b, c] = winnerCombinations[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  return (
    <div className="App">
      {winner ? (
        <label style={{ marginBottom: "30px" }}>Winner is {winner}</label>
      ) : draw ? (
        <label style={{ marginBottom: "30px" }}>Draw</label>
      ) : null}
      <div className="container">
        {board.map((item, index) => {
          return (
            <button
              className="button"
              key={index}
              onClick={() => onHandleClick(index)}
              disabled={item !== null || winner}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
