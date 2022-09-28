import React from "react";
import { useDispatch } from "react-redux";
import { LeaveMission, showStatus } from "../Redux/mission/Mission";
import "./missions.css";

export default function Missions(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!props.reserved) {
      dispatch(showStatus(props.id));
    } else {
      dispatch(LeaveMission(props.id));
    }
  };

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
              backgroundColor: props.reserved ? "rgb(19, 138, 223)" : "",
            }}
          >
            {props.reserved ? "Active member" : "Not a Member"}
          </h3>
        </div>
        <hr />
        <button
          style={{
            border: props.reserved ? "1px solid red" : "",
            color: props.reserved ? "red" : "",
          }}
          className="btn"
          onClick={handleClick}
          type="button"
        >
          {props.reserved ? "Leave Mission" : "Join Mission"}
        </button>
      </div>
      <hr />
    </div>
  );
}
