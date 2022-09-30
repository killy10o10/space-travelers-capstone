/* eslint-disable react/forbid-prop-types */
import React from "react";
import "./rocket.css";
import { useDispatch } from "react-redux";
import { bookRocket, leaveRocket } from "../Redux/rockets/Rockets";

export default function Rocket(props) {
  const { rocket } = props;
  const dispatch = useDispatch();
  const reserveRocket = () => {
    dispatch(bookRocket(rocket.id));
  };
  const cancelRocket = () => {
    dispatch(leaveRocket(rocket.id));
  };

  return (
    <section className="rockets-section">
      <div className="">
        <img
          src={
            rocket.image.length === 2
              ? "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"
              : rocket.image
          }
          alt={rocket.name}
        />
      </div>
      <div className="details">
        <h1
          style={{
            zIndex: "1",
          }}
        >
          {rocket.reserved && <small className="reserve">Reserved</small>}
          {rocket.name}
        </h1>
        <p
          style={{
            zIndex: "1",
          }}
        >
          {rocket.description}
        </p>
        {!rocket.reserved && (
          <button
            className="reserve button"
            type="button"
            onClick={() => reserveRocket()}
          >
            Reserve Rocket
          </button>
        )}
        {rocket.reserved && (
          <button
            className="cancel button"
            type="button"
            onClick={() => cancelRocket()}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </section>
  );
}
