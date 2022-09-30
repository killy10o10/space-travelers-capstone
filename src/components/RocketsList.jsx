import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showRockets } from "../Redux/rockets/Rockets";
import Rocket from "./Rocket";

const RocketsList = () => {
  const rocketsArray = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rocketsArray.length === 0) {
      dispatch(showRockets());
    }
  }, []);
  return (
    <div>
      {rocketsArray.map((data) => (
        <Rocket
          key={data.id}
          rocket={data}
        />
      ))}
    </div>
  );
};

export default RocketsList;
