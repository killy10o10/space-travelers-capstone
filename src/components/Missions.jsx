import React, { useState } from 'react';
import "./missions.css";

export default function Missions(props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((current) => !current);
  };
  return (
    <div className="mission-list">
      <div className="list">
        <div className="list-h"><h1>{props.name}</h1></div>
        <hr />
        <div className="list-p"><p>{props.discription}</p></div>
        <hr />
        <div className="list-s">
          <h3 style={{
            backgroundColor: active ? "rgb(19, 138, 223)" : "",
          }}
          >
            {props.status}
          </h3>
        </div>
        <hr />
        <button className="btn" onClick={handleClick} type="button">Join mission</button>
      </div>
      <hr />
    </div>
  );
}
