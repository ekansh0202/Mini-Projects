import { useState } from 'react';
import './App.css';

function App() {
  let stars = ['star 1', 'star 2', 'star 3', 'star 4', 'star 5'];

  const [clickedIndex, setClickedIndex] = useState(null);

  const onHandleClick = (index) => {
    setClickedIndex(index);
  }

  return (
    <div className="App">
      {
        stars.map((item, index) => {
          return(
            <div className={`star ${index <= clickedIndex ? 'filled' : ''}`} key={index} onClick={() => onHandleClick(index)}>✩</div>
          )
        })
      }
    </div>
  );
}

export default App;
