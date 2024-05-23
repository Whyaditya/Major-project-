import React from 'react';
import './Card.css'

const Card = ({ flat, onClick }) => {
  return (
    <div className="b" onClick={() => onClick(flat.id)}>
      <div className="im" style={{ backgroundImage: `url(${flat.photo1})` }}></div>
      <div id="w">
        <div className="s">{flat.type} flat</div>
        <div id="e">{flat.price} | {flat.flatAreaSquare} sqft</div>
        <div className="s">{flat.city}</div>
        <div className="s">{flat.ageOfConstruction}</div>
      </div>
    </div>
  );
};

export default Card;
