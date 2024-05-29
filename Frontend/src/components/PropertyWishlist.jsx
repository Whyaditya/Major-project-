import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import './PropertyWishlist.css';

const PropertyWishlist = () => {
  const [properties, setProperties] = useState([]);
  const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null;

  useEffect(() => {
    axios.get(`/api/user-interests/${userId}`)
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, [userId]);

  const handleDelete = (id) => {
    axios.delete(`/api/user-interests/delete/${id}`)
      .then(() => {
        setProperties(properties.filter(property => property.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="con">
    <h2 className='ti'>User Wishlist</h2>
    <div className="card-container">
      {properties.map(property => (
        <div className="car" key={property.id}>
          <img src={property.photo1 || 'default-image.jpg'} alt={property.name || 'Property'} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{property.apartmentName || 'Property'}</h5>
            <p className="card-text">{property.description || 'No description available.'}</p>
            <button className="delete-button" onClick={() => handleDelete(property.id)}>
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default PropertyWishlist;
