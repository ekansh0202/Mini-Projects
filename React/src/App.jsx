import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [name, setName] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((data) => {
        setData(data.map((item) => item.name.common));
      });
  }, []);

  useEffect(() => {
    const newData =
    name.length > 0
      ? data.filter((item) =>
          item.toLowerCase().includes(name.toLowerCase())
        )
      : [];

    setFilteredData(newData);
  }, [name]);

  const handleKeyDown = (e) => {
    if (!filteredData || filteredData.length === 0) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => {
        const nextIndex = prev < filteredData.length - 1 ? prev + 1 : 0;
        return nextIndex;
      });
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => {
        const nextIndex = prev > 0 ? prev - 1 : filteredData.length - 1;
        return nextIndex;
      });
    }

    if (e.key === "Enter") {
      if (activeIndex >= 0) {
        setName(filteredData[activeIndex]);
        setActiveIndex(-1);
        setFilteredData([]);
        setShowList(false);
      }
    }
  };

  console.log(filteredData);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for country"
        className="search"
        onChange={(event) => {
          setName(event.target.value);
          setActiveIndex(-1);
          setShowList(true);
        }}
        onKeyDown={handleKeyDown}
        value={name}
      />
      {showList && filteredData && filteredData.map((item, index) => {
        return (
          <span
            key={item}
            className={`item ${index === activeIndex ? "active" : ""}`}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default App;
