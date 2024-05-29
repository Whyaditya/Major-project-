import React from 'react';
import './Card.css';

const Card = ({ property, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(property.flatId || property.bungalowId)}>
      <div className="im" style={{ backgroundImage: `url(${property.photo1})` }}></div>
      <div id="w">
        <div className="s">{property.type} {property.flatId ? 'Flat' : 'Bungalow'}</div>
        <div id="e">{property.price} | {property.flatAreaSquare} sqft</div>
        <div className="s">{property.city}</div>
        <div className="s">{property.ageOfConstruction}</div>
      </div>
    </div>
  );
};

export default Card;
