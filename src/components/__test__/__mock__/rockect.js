import React from 'react';

export default function Rocket(props) {
  const { rocket } = props;

  return (
    <section className="rockets-section">
      <div className="">
        <img src="" alt="" />
      </div>
      <div className="details">
        <h1>rockes</h1>
        <p>
          {rocket && <small className="reserve">Reserved</small>}
          {rocket}
        </p>
        {!rocket && (
          <button className="reserve button" type="button">
            Reserve Rocket
          </button>
        )}
        {rocket && (
          <button className="cancel button" type="button">
            Cancel Reservation
          </button>
        )}
      </div>
    </section>
  );
}
