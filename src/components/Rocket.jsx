import React from 'react';
import './rocket.css';

export default function Rocket(props) {
  return (
    <section className="rockets-section">
      <div className="">
        <img src={props.image} alt="rocket" />
      </div>
      <div className="details">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <button className="button" type="button">Reserve Rocket</button>
      </div>
    </section>
  );
}
