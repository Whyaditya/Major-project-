import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCityDropdown = () => {
    setCityDropdownOpen(!cityDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    navigate("/login");
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user.city = city;
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.setItem("city", city);
    }
    setCityDropdownOpen(false);
    window.location.reload(); // Force reload the page
  };
  
  
  // Check if user or admin is logged in
  const isUserLoggedIn = localStorage.getItem("user");
  const isAdminLoggedIn = localStorage.getItem("admin");
  const user = isUserLoggedIn && JSON.parse(isUserLoggedIn);
  const admin = isAdminLoggedIn && JSON.parse(isAdminLoggedIn);

  return (
    <header className="bg-200 shadow-md" style={{ backgroundColor: '#AD88C6' }}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="text-decoration-none">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">Property</span>
            <span className="text-slate-700">Pal</span>
          </h1>
        </Link>

        {/* City Dropdown */}
        <div className="relative">
            <button
              onClick={toggleCityDropdown}
              className="flex items-center bg-white text-gray-700 py-4 px-5 rounded-full focus:outline-none"
            >
              <FaMapMarkerAlt className="mr-2" />
              {selectedCity || (user && user.city) || "Select City" || city.city}
              <FaChevronDown className="ml-2" />
            </button>
            {cityDropdownOpen && (
              <div className="origin-top-right absolute z-20 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {["kolkata", "patna",].map((city) => (
                    <div
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        {/* Search form */}
        {/* <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent border-none focus:outline-none  w-24 sm:w-64"
          />
          <FaSearch />
        </form> */}

        <ul className="flex gap-4 items-center">
          <Link to="/flats/sell" className="text-decoration-none">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Buy
            </li>
          </Link>
          <Link to="/flats/rent" className="text-decoration-none">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Rent
            </li>
          </Link>
          {!isAdminLoggedIn ?  ( <Link to="/subscription" className="text-decoration-none">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Plans
            </li>
          </Link>): ""}
        
          <Link to="/about" className="text-decoration-none">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>

          

          {/* User/Admin Dropdown menu */}
          {isUserLoggedIn || isAdminLoggedIn ? (
            <div className="relative">
              <div>
                <button
                  onClick={toggleDropdown}
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src={
                      (user && user.pic) ||
                      (admin && '/image/admin.png') || // Use local image for admin
                      ""
                    }
                    alt="Profile"
                  />
                </button>
              </div>
              {/* Dropdown menu */}
              {isOpen && (
                <div className="origin-top-right absolute z-20 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {isUserLoggedIn && (
                      <>
                        <Link
                          to="/home/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/home/activity"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          My Activity
                        </Link>
                      </>
                    )}
                    {isAdminLoggedIn && (
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="text-decoration-none">
              <li className="sm:inline text-slate-700 hover:underline cursor-pointer">
                Login
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};
