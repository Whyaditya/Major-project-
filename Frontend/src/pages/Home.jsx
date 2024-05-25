import React from "react";
import "./Home.css";
import TrendingFlat from "../components/TrendingFlat";
import TrendingProperty from "../features/property/TrendingProperty";

const Home = () => {
  return (
    <>
      {" "}
      <div >
        {/* Hero Section */}
        <div className="hero-image">
          <div className="welcome-text">Welcome To PropertyPal</div>
        </div>

        <div class="b-example-divider" style={{height:'200px'}}></div>


        {/* Search Bar */}
        <div className="container  mx-auto mt-8 w-70 max-w-lg flex-nowrap justify-center search-card mb-8" >
          <div className="bg-white shadow-md p-4 w-full card">
            <h2 className="text-xl font-semibold mb-4">Search Filters</h2>
            <form className="flex flex-col space-y-4">
              <div className="flex flex-nowrap -mx-2">
                {/* <div className="w-full md:w-1/2 px-2 mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="budget"
                  >
                    Budget:
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Enter budget"
                  />
                </div> */}
                <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                for="location"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Location:
              </label>
              <select
                id="city"
                name="city"
                class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              >
                <option value="">Select location</option>
                <option value="kolkata">Kolkata</option>
                <option value="patna">Patna</option>
               
              </select>
                </div>

                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="bhk"
                  >
                    BHK:
                  </label>
                  <select
                    id="flatSize"
                    name="bhk"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  >
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                  </select>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="bhk"
                  >
                    Looking For ?
                  </label>
                  <select
                    id="flatSize"
                    name="bhk"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  >
                    <option value="1">Buy</option>
                    <option value="2">Rent</option>
                    
                  </select>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="propertyType"
                  >
                    Property Type:
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  >
                    <option value="flat">Flat</option>
                    <option value="house_villa">House/Villa</option>
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






      </div>
    </>
  );
};

export default Home;
