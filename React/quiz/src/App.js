import { useState, useRef } from 'react';
import './App.css';

function App() {

  const data = [
    {
      id: 1,
      question: 'What is the purpose of state in React?',
      options: [
        'To store information that may change over time',
        'To declare static values for components',
        'To define global variables',
        'None of the above'
      ],
      answer: 'To store information that may change over time'
    },
    {
      id: 2,
      question: 'What are hooks in React?',
      options: [
        'Functions that let you use state and other React features without writing a class',
        'Functional components',
        'Connections between components',
        'None of the above'
      ],
      answer: 'Functions that let you use state and other React features without writing a class'
    },
    {
      id: 1,
      question: 'What is the purpose of key prop in React lists?',
      options: [
        'To uniquely identify a child component',
        'To style elements within a list',
        'To define the position of a component',
        'None of the above'
      ],
      answer: 'What is the purpose of key prop in React lists?'
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const onHandleClick = () => {
    setCurrentQuestion((prev) => {
      return prev + 1;
    })
  }

  const onHandleAnswer = (index) => {
    const selectedOption = data[currentQuestion]?.options[index];
    const correctAnswer = data[currentQuestion]?.answer;
    if(selectedOption === correctAnswer){
      setScore((prev) => prev + 1);
    }
  }


  return (
    <div className="App">
      {
        currentQuestion <= data.length - 1
        ?
        <div className="container">
        <div className="topbar">
          <label>TOPIC: React</label>
          <label>{`0${currentQuestion+1}/0${data.length}`}</label>
        </div>
        <div className="question">
          {data[currentQuestion]?.question}
        </div>
        <div className="options">
          {
            data[currentQuestion]?.options?.map((item, index) => {
              return(
                <div className="option" onClick={() => onHandleAnswer(index)}>{item}</div>
              )
            })
          }
        </div>
        <button className="next" onClick={onHandleClick}>NEXT</button>
      </div>
      :
      <div className="container">
          <label style={{ color: 'white', marginTop: '30px' }}>Score is {score}</label>
      </div>
      }

    </div>
  );
}

export default App;
