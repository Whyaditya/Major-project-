import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
import './PrimeProperty.css'; 
import Card from '../../components/Card';

const PrimeProperty = () => {
  const [primeProperties, setPrimeProperties] = useState([]);
  const nav = useNavigate();
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const selectedCity = localStorage.getItem("city") || 'kolkata';
  const isSubscribed = user?.subscription === "true";

  useEffect(() => {
    axios.get(`/api/flats/prime/0/8`)
      .then(response => {
        console.log(`Prime flats API response:`, response.data);
        setPrimeProperties(response.data.content);
      })
      .catch(error => {
        console.error(`Prime flats API error:`, error);
      });
  }, [selectedCity]);

  const handleCardClick = (id) => {
    if (isSubscribed) {
      nav(`/home/flat/${id}`);
    }
  };

  const handleShowMore = (type) => {
    if (isSubscribed) {
      nav(`/home/flat/${type}`);
    }
  };

  return (
    <div className="trending-flats-container">
      <div className="flat-section">
        <h2>Prime Flats in {selectedCity}</h2>
        <div className="subscription-warning-container">
          <div className={`flats-row ${!isSubscribed ? 'blur' : ''}`}>
            {primeProperties.length === 0 ? (
              <p>No prime flats available</p>
            ) : (
              primeProperties.map((property, index) => (
                <div className="flat-card-container" key={property.id}>
                  <Card 
                    property={property} 
                    onClick={() => handleCardClick(property.flatId)} 
                  />
                  {index === primeProperties.length - 1 && (
                    <button className="show-more-btn" onClick={() => handleShowMore(property.type)}>
                      <FaArrowAltCircleRight />
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
          {!isSubscribed && (
            <div className="subscription-warning">
              Please subscribe to view and interact with prime properties.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrimeProperty;
