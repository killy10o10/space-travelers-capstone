import React from "react";
import { useDispatch } from "react-redux";
import { bookMission, leaveMission } from "../Redux/mission/Mission";
import "./missions.css";

export default function Missions(props) {
  const dispatch = useDispatch();
  const { mission } = props;

  const handleClick = () => {
    dispatch(bookMission(mission.id));
  };

  const handleClickTwo = () => {
    dispatch(leaveMission(mission.id));
  };

  return (
    <div className="mission-list">
      <div className="list">
        <div className="list-h">
          <h1>{mission.name}</h1>
        </div>
        <hr />
        <div className="list-p">
          <p>{mission.description}</p>
        </div>
        <hr />
        <div className="list-s">
          {!mission.reserved && <h3>Not a Member</h3>}
          {mission.reserved && (
            <h3
              style={{
                backgroundColor: "rgb(19, 138, 223)",
              }}
            >
              Active member
            </h3>
          )}
        </div>
        <hr />
        {!mission.reserved && (
          <button className="btn" onClick={handleClick} type="button">
            Join Mission
          </button>
        )}
        {mission.reserved && (
          <button
            style={{
              border: "1px solid red",
              color: "red",
            }}
            className="btn"
            onClick={handleClickTwo}
            type="button"
          >
            Leave Mission
          </button>
        )}
      </div>
      <hr />
    </div>
  );
}
