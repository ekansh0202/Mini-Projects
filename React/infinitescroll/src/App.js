import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {

    const getData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      const result = await response.json();
      setData([...data, ...result]);
    }

    getData();

  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollHeight; //This property returns the total height of the document, including the portion that is not currently visible 
      const scrollTop = document.documentElement.scrollTop; //This property tells you the number of pixels the document has been scrolled vertically
      const innerHeight = window.innerHeight; //This property provides the height of the visible area (the viewport) of the document

      if((scrollTop + innerHeight + 1) >= scrollHeight){
        setPage((prev) => prev + 1);
      }
    })
  }, [])

  return (
    <div className="App">
      <label className="label">Infinite Scroll</label>
      <div className="cards">
        {
          data?.map((item, index) => {
            return(
              <div className="card" key={index}>{item.title}</div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
