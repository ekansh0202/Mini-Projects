import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [properties, setProperties] = useState({
    outside: false,
    escape: false,
    close: false,
    backdrop: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isModalOpen || !properties.escape) return;
  
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, properties.escape]);
  

  return (
    <div className="container">
      <div className="inputs">
        <label className="label">Close dialog on outside click</label>
        <input
          type="checkbox"
          onChange={() =>
            setProperties({ ...properties, outside: !properties.outside })
          }
        />
      </div>
      <div className="inputs">
        <label className="label">Close dialog on escape</label>
        <input
          type="checkbox"
          onChange={() =>
            setProperties({ ...properties, escape: !properties.escape })
          }
        />
      </div>
      <div className="inputs">
        <label className="label">Show close icon</label>
        <input
          type="checkbox"
          onChange={() =>
            setProperties({ ...properties, close: !properties.close })
          }
        />
      </div>
      <div className="inputs">
        <label className="label">Show backdrop</label>
        <input
          type="checkbox"
          onChange={() =>
            setProperties({ ...properties, backdrop: !properties.backdrop })
          }
        />
      </div>

      <button className="button" onClick={() => onOpenModal()}>
        Open Modal
      </button>

      {isModalOpen && (
        <div
        className={properties.backdrop ? "backdrop" : ""}
          onClick={() => {
            if (properties.outside) {
              setIsModalOpen(false);
            }
          }}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // prevent inside click
          >
            {properties.close && (
              <button
                className="close-button"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
            )}

            <h1 className="heading">Modal Heading</h1>
            <p className="content">
              This is modal content. You can put any content here.
            </p>

            <button
              className="modal-button"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
