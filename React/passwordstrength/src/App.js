import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("Weak");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const onHandleChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    //Check for lowercase
    if(password.match(/[a-z]/) !== null){
      setIsLowerCase(true);
    }
    else if(password.match(/[a-z]/) === null){
      setIsLowerCase(false);
    }

    //Check for uppercase
    if (password.match(/[A-Z]/) !== null) {
      setIsUpperCase(true);
    } else if (password.match(/[A-Z]/) === null) {
      setIsUpperCase(false);
    }

    //Check for numbers
    if (password.match(/[0-9]/) !== null) {
      setIsNumber(true);
    } else if (password.match(/[0-9]/) === null) {
      setIsNumber(false);
    }

    //Check for symbols
    if (password.match(/[^a-zA-Z0-9]/) !== null) {
      setIsSymbol(true);
    } else if (password.match(/[^a-zA-Z0-9]/) === null) {
      setIsSymbol(false);
    }

    if(password.length <= 4){
      setBackgroundColor("red");
    }
    else if(password.length > 4 && password.length < 8){
      setBackgroundColor("orange");
    }
    else{
      setBackgroundColor("green");
    }
  }, [password]);

  useEffect(() => {
    if(backgroundColor === 'red'){
      setStrength("Weak");
    }
    else if(backgroundColor === 'orange'){
      setStrength("Medium");
    }
    else{
      setStrength("Strong");
    }
  }, [backgroundColor])

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your password"
        className="input"
        onChange={(event) => onHandleChange(event)}
      />
      <div className="values">
        <span
          className="value"
          style={{ color: isLowerCase ? "green" : "rgb(187, 182, 182)" }}
        >
          Lowercase
        </span>
        <span
          className="value"
          style={{ color: isUpperCase ? "green" : "rgb(187, 182, 182)" }}
        >
          Uppercase
        </span>
        <span
          className="value"
          style={{ color: isNumber ? "green" : "rgb(187, 182, 182)" }}
        >
          Numbers
        </span>
        <span
          className="value"
          style={{ color: isSymbol ? "green" : "rgb(187, 182, 182)" }}
        >
          Symbols
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: (isUpperCase && isLowerCase && isNumber && isSymbol && password.length!==0) ? password.length * 10 <=100 ? `${password.length * 10}%` : '100%' : '0%', backgroundColor: `${backgroundColor}` }}></div>
      </div>
      <label className="label">
        Password has{" "}
        <span style={{ fontWeight: "bold" }}>
          {password.length !== 0 ? password.length : 0}
        </span>{" "}
        chars
      </label>
      <label className="label">
        Your password is <span style={{ fontWeight: "bold" }}>{strength}</span>
      </label>
    </div>
  );
}

export default App;
