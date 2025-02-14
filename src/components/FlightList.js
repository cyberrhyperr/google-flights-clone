import React from 'react';

function FlightList({ flights }) {
  if (!flights || flights.length === 0) {
    return <p>No flights found.</p>;
  }

  return (
    <div className="flight-list">
      {flights.map((flight, index) => (
        <div key={index} className="flight-item">
          <h3>{flight.airline}</h3>
          <p>From: {flight.origin}</p>
          <p>To: {flight.destination}</p>
          <p>Departure: {flight.departureTime}</p>
          <p>Price: ${flight.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
