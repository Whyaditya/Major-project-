import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropertyWishlist from "../../components/PropertyWishlist";

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
        <PropertyWishlist userId={user.id}/>
      )}
    </>
  );
};

export default Activity;
