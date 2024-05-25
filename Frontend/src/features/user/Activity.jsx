import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Activity = () => {
  const [error, setError] = useState();

  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState();

  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  return (
    <>
      {user.type == "seller" ? (
        <div className="container mt-8">
      <div className="row d-flex justify-content-end">
        <div className="col-12 col-md-6">
          <div className="text-center mx-auto rounded-md box-border px-6 py-3" style={{ marginTop: '15vh', width: '70%', height: '70%', backgroundColor: '#AD88C6', borderRadius: '30px' }}>
            <h1 className="mb-5">Show my listed properties</h1>
            <button
              onClick={handleShowListings}
              className="text-dark-700 rounded-md bg-blue-500 px-6 py-3"
            >
              Click here
            </button>
          </div>
        </div>

        <div className="col-12 col-md-6" style={{ width: '50%', height: '300px' }}>
          <div
            className="card mb-3 mr-5"
            style={{ width: '100%', height: '100%', borderRadius: '20px', cursor: 'pointer' ,overflow:'hidden'}}
            onClick={() => navigate('/home/activity/flatAD')}
          >
            <div className="row g-0" style={{ height: '100%' }}>
              <div className="col-md-6">
                <img
                  src="https://res.cloudinary.com/dq5bhyeii/image/upload/v1715208975/ul5azwptxdawkcvjrzjb.jpg"
                  className="img-fluid rounded mt-3 ms-2"
                  style={{ height: '85%', width: '100%' }}
                  alt="Flat AD"
                />
              </div>
              <div className="col-md-6" style={{ height: '90%' }}>
                <div className="card-body">
                  <h1 className="card-title">Flat AD Posting</h1>
                  <p className="card-text" style={{ fontSize: 'large' }}>You can post your flat on our website to sell or rent your flat easily without any hassle</p>
                  <p className="card-text"><small className="text-body-secondary">Free of charge</small></p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card mb-3 mr-5"
            style={{ width: '100%', height: '100%', borderRadius: '20px', cursor: 'pointer', overflow:'hidden' }}
            onClick={() => navigate('/home/activity/bungalowAD')}
          >
            <div className="row g-0" style={{ height: '100%' }}>
              <div className="col-md-6">
                <img
                  src="https://res.cloudinary.com/dq5bhyeii/image/upload/v1715309286/djphgtawsr4c1kd3ecsq.jpg"
                  className="img-fluid rounded mt-3 ms-2"
                  style={{ height: '65%', width: '100%' }}
                  alt="Banglow AD"
                />
              </div>
              <div className="col-md-6" style={{ height: '90%' }}>
                <div className="card-body">
                  <h1 className="card-title">Banglow AD Posting</h1>
                  <p className="card-text" style={{ fontSize: 'large' }}>You can post your banglow on our website to sell or rent easily without any hassle</p>
                  <p className="card-text"><small className="text-body-secondary">Free of charge</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      ) : (
        <>
          {" "}
          <div className="text-center mt-5  mx-auto rounded-md bg-dark box-border h-100 w-50 px-6 py-3">
            <button
              onClick={handleShowListings}
              className="text-dark-700  rounded-md bg-red-500 px-6 py-3"
            >
              {user.type == "seller"
                ? "show my listed property"
                : "show my interested property"}
            </button>
          </div>
          <p className="text-red-700 mt-5">
            {showListingsError ? "Error showing listings" : ""}
          </p>
          {userListings && userListings.length > 0 && (
            <div className="flex flex-col gap-4">
              <h1 className="text-center mt-7 text-2xl font-semibold">
                Your Listings
              </h1>
              {userListings.map((listing) => (
                <div
                  key={listing._id}
                  className="border rounded-lg p-3 flex justify-between items-center gap-4"
                >
                  <Link to={`/listing/${listing._id}`}>
                    <img
                      src={listing.imageUrls[0]}
                      alt="listing cover"
                      className="h-16 w-16 object-contain"
                    />
                  </Link>
                  <Link
                    className="text-slate-700 font-semibold  hover:underline truncate flex-1"
                    to={`/listing/${listing._id}`}
                  >
                    <p>{listing.name}</p>
                  </Link>

                  <div className="flex flex-col item-center">
                    <button
                      onClick={() => handleListingDelete(listing._id)}
                      className="text-red-700 uppercase"
                    >
                      Delete
                    </button>
                    <Link to={`/update-listing/${listing._id}`}>
                      <button className="text-green-700 uppercase">Edit</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}{" "}
        </>
      )}
    </>
  );
};

export default Activity;
