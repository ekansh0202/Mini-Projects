import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [lastDate, setLastDate] = useState("");

  return (
    <div className="container">
      <div className="items">
        <div className="item">
          <label>Name: </label>
          <input
            type="text"
            className="input"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="item">
          <label>Company Name: </label>
          <input
            type="text"
            className="input"
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>
        <div className="item">
          <label>Effective Date: </label>
          <input
            type="date"
            className="input"
            onChange={(event) => setStartDate(event.target.value)}
          />
        </div>
        <div className="item">
          <label>Last Date: </label>
          <input
            type="date"
            className="input"
            onChange={(event) => setLastDate(event.target.value)}
          />
        </div>
      </div>

      <div className="letter">
        <p>Hi, </p>
        <br></br>
        <p>Please accept this email as my formal resignation from {company}. I have taken this decision as I have got a different/better work opportunity and would like to pursue my career in the same.</p>
        <br></br>
        <p>Request you to consider my letter of resignation effective from {startDate}. I understand that as per the policy I am required to serve a notice period of 60 days and my last working day accordingly shall be {lastDate}.</p>
        <br></br>
        <p>I would request you to consider if an early release is possible. I am grateful to {company} and looking forward to your support.</p>
        <br></br>
        <br></br>
        <br></br>
        <p>Thanks and Regards,</p>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default App;
