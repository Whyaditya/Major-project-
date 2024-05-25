import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
import './TrendingProperty.css'; 
import Card from '../../components/Card';

const TrendingProperty = ({ propertyType }) => {
  const [sellProperties, setSellProperties] = useState([]);
  const [rentProperties, setRentProperties] = useState([]);
  const nav = useNavigate();
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const selectedCity = localStorage.getItem("city") || 'kolkata';
  const city = user ? user.city : selectedCity;

  useEffect(() => {
    axios.get(`/api/${propertyType}s/sell/${city}/0/4`)
      .then(response => {
        console.log(`Sell ${propertyType}s API response:`, response.data);
        setSellProperties(response.data.content);
      })
      .catch(error => {
        console.error(`Sell ${propertyType}s API error:`, error);
      });

    axios.get(`/api/${propertyType}s/rent/${city}/0/4`)
      .then(response => {
        console.log(`Rent ${propertyType}s API response:`, response.data);
        setRentProperties(response.data.content);
      })
      .catch(error => {
        console.error(`Rent ${propertyType}s API error:`, error);
      });
  }, [city, propertyType]);

  const handleCardClickSell = (id) => {
    nav(`/${propertyType}/sell/${id}`);
  };
  
  const handleCardClickRent = (id) => {
    nav(`/${propertyType}/rent/${id}`);
  };

  const handleShowMore = (type) => {
    nav(`/${propertyType}/${type}`);
  };

  return (
    <div className="trending-flats-container">
      <div className="flat-section">
        <h2>{propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}s for Sale in {city}</h2>
        <div className="flats-row">
          {sellProperties.length === 0 ? (
            <p>No {propertyType}s available for sale</p>
          ) : (
            sellProperties.map((property, index) => (
              <div className="flat-card-container" key={property[`${propertyType}Id`]}>
                <Card 
                  property={property} 
                  onClick={() => handleCardClickSell(property[`${propertyType}Id`])} 
                />
                {index === sellProperties.length - 1 && (
                  <button className="show-more-btn" onClick={() => handleShowMore('sell')}>
                    <FaArrowAltCircleRight />
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flat-section">
        <h2>{propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}s for Rent in {city}</h2>
        <div className="flats-row">
          {rentProperties.length === 0 ? (
            <p>No {propertyType}s available for rent</p>
          ) : (
            rentProperties.map((property, index) => (
              <div className="flat-card-container" key={property[`${propertyType}Id`]}>
                <Card 
                  property={property} 
                  onClick={() => handleCardClickRent(property[`${propertyType}Id`])} 
                />
                {index === rentProperties.length - 1 && (
                  <button className="show-more-btn" onClick={() => handleShowMore('rent')}>
                    <FaArrowAltCircleRight />
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingProperty;
