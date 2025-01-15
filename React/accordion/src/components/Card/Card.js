import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ title, text, isExpanded, onToggle }) => {
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if(isExpanded !== null){
            setExpand(isExpanded)
        }
    }, [isExpanded]);

    const onHandleToggle = () => {
        //Multiple checkbox selected
        if(isExpanded === null){
            setExpand((prev) => !prev);
        }
        else{
            onToggle();
        }
    }

  return (
    <div className="card">
      <div className="card-container">
        <label className="card-title">{title}</label>
        <button className="card-button" onClick={onHandleToggle}>
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {expand && <div className="card-text">{text}</div>}
    </div>
  );
};

export default Card;
