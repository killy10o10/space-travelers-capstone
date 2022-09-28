import React from "react";
import { useDispatch } from "react-redux";
import {
  LeaveMission,
  showStatus,
} from "../Redux/mission/Mission";
import "./missions.css";

export default function Missions(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showStatus(props.id));
    localStorage.setItem("user", JSON.stringify(props));
  };

  const handleClickTwo = () => {
    dispatch(LeaveMission(props.id));
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
          {!props.reserved && (
            <h3
              style={{
                backgroundColor: "rgb(19, 138, 223)",
              }}
            >
              Active member
            </h3>
          )}
          {props.reserved && <h3>Not a Member</h3>}
        </div>
        <hr />
        {!props.reserved && (
          <button
            style={{
              border: "1px solid red",
              color: "red",
            }}
            className="btn"
            onClick={handleClick}
            type="button"
          >
            Leave Mission
          </button>
        )}
        {props.reserved && (
          <button className="btn" onClick={handleClickTwo} type="button">
            Join Mission
          </button>
        )}
      </div>
      <hr />
    </div>
  );
}
