import { useRef } from 'react';
import './App.css';

function App() {

  const data = new Array(6).fill(null);
  const numberRefs = useRef([]);

  const onHandleChange = (event, index) => {
    if(event.target.value && index < data.length - 1){
      numberRefs.current[index + 1].focus()
    }
  }

  const onHandleKeyDown = (event, index) => {
    if(event.key === 'Backspace' && index > 0){
      numberRefs.current[index-1].focus();
    }
  };

  return (
    <div className="App">
      {
        data.map((item, index) => {
          return(
            <input type="text" className="input" ref={(e) => numberRefs.current[index] = e} onChange={(event) => onHandleChange(event, index)} key={index} maxLength="1" onKeyDown={(event) => onHandleKeyDown(event, index)} />
          )
        })
      }
    </div>
  );
}

export default App;
