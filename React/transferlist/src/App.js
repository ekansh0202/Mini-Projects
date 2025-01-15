import { useState } from "react";
import "./App.css";

function App() {
  const data = ["JS", "HTML", "CSS", "TS", "React", "Angular", "Vue", "Svelte"];
  const buttons = ["⏮️", "⬅️", "➡️", "⏭️"];
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState({ left: [], right: []});

  const onHandleClick = (index) => {
    if(index === 0){
      //All to left
      setLeftItems(data);
      setRightItems();
      setCheckedItems([]);
    }
    else if(index === 1){
      //CheckedItems to left
      setLeftItems(checkedItems);
      const newLeftItems = rightItems.filter((item) => !checkedItems.find((i) => i === item));
      setCheckedItems([]);
      setRightItems(newLeftItems);
    }
    else if(index === 2){
      //CheckedItems to right
      setRightItems(checkedItems);
      const newLeftItems = leftItems.filter((item) => !checkedItems.find((i) => i === item));
      setCheckedItems([]);
      setLeftItems(newLeftItems);
      setCheckedItems([]);
    }
    else if(index === 3){
      //All to right
      setRightItems(data);
      setLeftItems();
    }
  }

  const onHandleCheck = (index) => {
    //When items from left is clicked
    setCheckedItems([...checkedItems, data[index]]);
  }
  console.log(checkedItems);

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          {leftItems &&
            leftItems.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <input type="checkbox" className="checkbox" id="left" onClick={() => onHandleCheck()}/>
                  <label>{item}</label>
                </div>
              );
            })}
        </div>
        <div className="border"></div>
        <div className="center">
          {buttons.map((item, index) => {
            return <button className="button" onClick={() => onHandleClick(index)}>{item}</button>;
          })}
        </div>
        <div className="border"></div>
        <div className="right">
          {rightItems &&
            rightItems.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <input type="checkbox" className="checkbox" id="right" onClick={() => onHandleCheck(index)}/>
                  <label>{item}</label>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
