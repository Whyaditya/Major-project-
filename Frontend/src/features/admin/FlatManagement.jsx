import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlatManagement = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    fetchFlats();
  }, []);

  const fetchFlats = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/flat');
      setFlats(response.data);
    } catch (error) {
      console.error('Error fetching flats:', error);
    }
  };

  const deleteFlat = async (flatId) => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/flat/${flatId}`);
      fetchFlats(); // Refresh the flat list
    } catch (error) {
      console.error('Error deleting flat:', error);
    }
  };

  return (
    <div>
      <h1>Flat Management</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Flat ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flats.map(flat => (
            <tr key={flat.id}>
              <td>{flat.id}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteFlat(flat.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlatManagement;
