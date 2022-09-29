import React from "react";

export default function Missions(props) {
  return (
    <div className="mission-list">
      <div className="list">
        <div className="list-h">
          <h1>{props.name}</h1>
        </div>
        <hr />
        <div className="list-p">
          <p>{props.discription}</p>
        </div>
        <hr />
        <div className="list-s">

          <h3
            style={{
              backgroundColor: "rgb(19, 138, 223)",
            }}
          >
            Active member
          </h3>
          {props.reserved && <h3>Not a Member</h3>}
        </div>
        <hr />
        <button
          style={{
            border: "1px solid red",
            color: "red",
          }}
          className="btn"
          type="button"
        >
          Leave Mission
        </button>
        {props.reserved && (
          <button className="btn" type="button">
            Join Mission
          </button>
        )}
      </div>
      <hr />
    </div>
  );
}
