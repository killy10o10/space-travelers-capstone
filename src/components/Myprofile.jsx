import React from "react";
import "./myprofile.css";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

export default function Myprofile() {
  const reservedRockets = useSelector((state) => state.rocket.filter((item) => item.reserved));

  const { missionArray } = useSelector((state) => state.mission);

  const reservedMission = missionArray.filter((mission) => mission.reserved === !true);

  return (
    <div className="profile-content">
      <section className="reserved-rockets">
        <h1>My Rockets</h1>
        <Table bordered>
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      <section>
        <h1>My Missions</h1>
        <Table bordered>
          <tbody>
            {reservedMission.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
}
