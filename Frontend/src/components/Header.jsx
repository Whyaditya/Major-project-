import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("user");
  const user = JSON.parse(isLoggedIn);

  return (
    <header className="bg-200 shadow-md" style={{backgroundColor:'#B5AC49'}}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="text-decoration-none">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">Property</span>
            <span className="text-slate-700">Pal</span>
          </h1>
        </Link>

        {/* Search form */}

        <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent border-none focus:outline-none  w-24 sm:w-64"
          />
          <FaSearch />
        </form>

        <ul className="flex gap-4">
          {/* <Link to="/" className="text-decoration-none">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link> */}
          <Link to="/" className="text-decoration-none">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Buy
            </li>
          </Link>
          <Link to="/" className="text-decoration-none">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Rent
            </li>
          </Link>
          <Link to="/subscription" className="text-decoration-none">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Plans
            </li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>

          {/* Dropdown menu or login button */}
          {isLoggedIn ? (
            <div className="dropdown">
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
                    src={user.pic}
                    alt="Your Profile"
                  />
                </button>
              </div>
              {/* Dropdown menu */}
              {isOpen && (
                <div className="origin-top-right absolute z-20 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
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
