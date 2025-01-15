import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [time, setTime] = useState(5);
  const [currentPhase, setCurrentPhase] = useState('red');

  useEffect(() => {
    let interval;

    if(time >= 0){
      console.log('effct ', time)
      interval = setInterval(() => {
        setTime((prev) => {
          if(prev === 0){
            if(currentPhase === 'red'){
              green();
            }
            else if(currentPhase === 'green'){
              yellow();
            }
            else if(currentPhase === 'yellow'){
              red();
            }
            return 0;
          }
          return prev-1;
        })
      }, [1000])
    }

    return () => {
      console.log('clear')
      clearInterval(interval);
    }
  }, [time, currentPhase])

  const yellow = () => {
    setTime(2);
    setCurrentPhase('yellow');
  }

  const green = () => {
    setTime(3);
    setCurrentPhase('green');
  }

  const red = () => {
    setTime(5);
    setCurrentPhase('red');
  }

  return (
    <div className="App">
      <h1 className="label">Traffic Lights</h1>
      <div className="container">
        <div className="light red" style={{ backgroundColor: currentPhase === 'red' ? 'red' : 'rgb(95, 93, 93)' }}></div>
        <div className="light yellow" style={{ backgroundColor: currentPhase === 'yellow' ? 'yellow' : 'rgb(95, 93, 93)' }}></div>
        <div className="light green" style={{ backgroundColor: currentPhase === 'green' ? 'green' : 'rgb(95, 93, 93)' }}></div>
      </div>
      <label className="time">{time} seconds</label>
    </div>
  );
}

export default App;
