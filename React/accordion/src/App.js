import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const data = [
    {
      id: 1,
      title: "Do I have to allow the use of cookies?",
      text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 2,
      title: "How do I change my My Page password?",
      text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 3,
      title: "What is BankID?",
      text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 4,
      title: "Whose birth number can I use?",
      text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 5,
      title: "When do I receive a password ordered by letter?",
      text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [multiple, setMultiple] = useState(false);

  const toggleCard = (id) => {
    setExpandedIndex((prev) => {
      // If the same card is clicked, collapse it otherwise, expand it
      if (prev === id) {
        return null;
      }
      //If any other card is expanded
      else {
        return id;
      }
    });
  };

  return (
    <div className="App">
      <h2>ACCORDION</h2>
      <div className="input">
        <label className="input-label">
          Is multiple open accordion allowed?
        </label>
        <input type="checkbox" onChange={() => setMultiple((prev) => !prev)} />
      </div>
      <div className="container">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.text}
            isExpanded={!multiple ? expandedIndex === item.id : null}
            onToggle={() => toggleCard(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
