import React from "react";
import "./myprofile.css";
import { useSelector } from "react-redux";

export default function Myprofile() {
  const reservedRockets = useSelector((state) => state.rocket.filter((item) => item.reserved));

  const { missionArray } = useSelector((state) => state.mission);

  const reservedMission = missionArray.filter((mission) => mission.reserved === !true);

  return (
    <div className="profile-content">
      <section className="reserved-rockets">
        <h1 className="heading">My Rockets</h1>
        {reservedRockets.map((rocket) => (
          <ul key={rocket.id} className="reserved-table">
            <li>{rocket.name}</li>
          </ul>
        ))}
      </section>
      <section>
        <h1 className="heading">My Missions</h1>
        {reservedMission.map((mission) => (
          <ul key={mission.id} className="reserved-table">
            <li>{mission.mission_name}</li>
          </ul>
        ))}
      </section>
    </div>
  );
}
