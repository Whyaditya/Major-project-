import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import TrendingProperty from "../features/property/TrendingProperty";
import PrimeProperty from "../features/property/PrimeProperty";

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    city: "",
    flatSize: "",
    type: "",
    propertyType: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSearchParams({ ...searchParams, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { city, flatSize, type, propertyType } = searchParams;
    navigate(`/searchresult/${propertyType}s/${type}/${city}/${flatSize}/0/8`);
  };

  return (
    <div>
      <div className="hero-image">
        <div className="welcome-text">
          <span> Welcome To </span>
          <span className="text-danger">PropertyPal</span>
        </div>
      </div>

      <div className="b-example-divider" style={{ height: '200px' }}></div>

      <div className="container mx-auto mt-8 w-70 max-w-lg flex-nowrap justify-center search-card mb-8 rounded">
        <div className="bg-white shadow-md p-4 w-full rounded-5 card">
          <h2 className="text-xl font-semibold mb-4">Search Filters</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-nowrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  htmlFor="city"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Location:
                </label>
                <select
                  id="city"
                  name="city"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                  value={searchParams.city}
                  onChange={handleChange}
                >
                  <option value="">Select location</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="patna">Patna</option>
                </select>
              </div>

              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  htmlFor="flatSize"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  BHK:
                </label>
                <select
                  id="flatSize"
                  name="flatSize"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  value={searchParams.flatSize}
                  onChange={handleChange}
                >
                  <option value="">Select size</option>
                  <option value="1BHK">1 BHK</option>
                  <option value="2BHK">2 BHK</option>
                  <option value="3BHK">3 BHK</option>
                  <option value="4BHK">4 BHK</option>
                </select>
              </div>

              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  htmlFor="lookingFor"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Looking For?
                </label>
                <select
                  id="type"
                  name="lookingFor"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  value={searchParams.lookingFor}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  <option value="sell">sell</option>
                  <option value="rent">rent</option>
                </select>
              </div>

              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  htmlFor="propertyType"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Property Type:
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  value={searchParams.propertyType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="flat">Flat</option>
                  <option value="bungalow">Bungalow</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 hover:bg-light-800 text-white w-1/4 px-4 py-2 rounded-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <TrendingProperty propertyType="flat" />
      <TrendingProperty propertyType="bungalow" />
      <PrimeProperty />
    </div>
  );
};

export default Home;
