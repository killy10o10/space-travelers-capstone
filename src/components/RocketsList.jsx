import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showRockets } from "../Redux/rockets/Rockets";
import Rocket from "./Rocket";

const RocketsList = () => {
  const dispatch = useDispatch();
  const { rocketsArray } = useSelector((state) => state.rocket);
  useEffect(() => {
    dispatch(showRockets());
  }, []);
  return (
    <div>
      {rocketsArray.map((data) => (
        <Rocket
          key={data.id}
          name={data.rocket_name}
          image={data.flickr_images}
          description={data.description}
          id={data.id}
        />
      ))}
    </div>
  );
};

export default RocketsList;
