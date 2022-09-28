import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { showMission } from "../Redux/mission/Mission";
import Missions from "./Missions";
import "./missionlist.css";

const Missionslist = () => {
  const dispatch = useDispatch();
  const { missionArray } = useSelector((state) => state.mission);
  useEffect(() => {
    if (missionArray.length === 0) dispatch(showMission());
  }, []);
  return (
    <div>
      <div>
        <ul className="list-mission">
          <li className="list-m1">Missions</li>
          <hr />
          <li className="list-m2">description</li>
          <hr />
          <li className="list-m3">status</li>
          <hr />
        </ul>
        <hr />
      </div>
      {missionArray.map((data) => (
        <Missions
          key={uuid()}
          name={data.mission_name}
          discription={data.description}
          id={data.mission_id}
          reserved={data.reserved !== false}
        />
      ))}
    </div>
  );
};

export default Missionslist;
