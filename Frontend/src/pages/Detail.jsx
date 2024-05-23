// src/components/FlatDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaHeart } from 'react-icons/fa';

const Detail = () => {
  const { id } = useParams();
  const [flat, setFlat] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios.get(`/api/flats/${id}`)
      .then(response => {
        setFlat(response.data);
        setSelectedImage(response.data.photo1); // Set the initial selected image
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!flat) return <div>Loading...</div>;

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <img src={selectedImage} alt="House" className="w-full h-96 object-cover rounded-lg shadow-md" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Thumbnail Images</h2>
            <div className="grid gap-4">
              <div className="bg-gray-200 rounded-lg shadow-md cursor-pointer" onClick={() => handleThumbnailClick(flat.photo1)}>
                <img src={flat.photo1} alt="Thumbnail" className="w-full h-24 object-cover rounded-lg" />
              </div>
              {flat.photo2 && (
                <div className="bg-gray-200 rounded-lg shadow-md cursor-pointer" onClick={() => handleThumbnailClick(flat.photo2)}>
                  <img src={flat.photo2} alt="Thumbnail" className="w-full h-24 object-cover rounded-lg" />
                </div>
              )}
              {flat.photo3 && (
                <div className="bg-gray-200 rounded-lg shadow-md cursor-pointer" onClick={() => handleThumbnailClick(flat.photo3)}>
                  <img src={flat.photo3} alt="Thumbnail" className="w-full h-24 object-cover rounded-lg" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mt-8 mb-5">
        <h1 className="text-4xl font-bold mb-5">{flat.apartmentName}</h1>
        <p className="text-red-600 text-2xl font-bold mb-4">Price: {flat.price}</p>
        <p className="text-gray-800 text-lg mb-4">Location: {flat.address}</p>
        <p className="text-gray-800 text-lg mb-4">Type: {flat.type}</p>
        <p className="text-gray-800 text-lg mb-4">Size: {flat.flatSize}</p>
        <p className="text-gray-800 text-lg mb-4">Area: {flat.flatAreaSquare}</p>
        <p className="text-gray-800 text-lg mb-4">Description: {flat.description}</p>
        <div className="flex justify-between items-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-4 flex items-center">
            <FaPhoneAlt className="mr-2" /> Contact Agent
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
            <FaHeart className="mr-2" /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
