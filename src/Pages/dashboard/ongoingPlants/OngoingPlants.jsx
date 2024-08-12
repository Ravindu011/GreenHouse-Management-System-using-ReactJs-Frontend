import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './onPlant.css'
import NavigationBar from '../../Nav/NavigationBar';

export default function OngoingPlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getAllOnProduct");
        setPlants(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleStop = async (id) => {

    try {
      // await axios.put(`http://localhost:8080/setStandby/${id}`);
      await axios.put(`http://localhost:8080/moveToHistory/${id}`);
      await axios.delete(`http://localhost:8080/removeFromOngoing/${id}`);
      // await axios.delete(`http://localhost:8080/deleteFromOnTemp/${id}`);


      setPlants((prevPlants) => prevPlants.map((plant) => 
        plant.pid === id ? { ...plant, status: 'Standby' } : plant
      ));
    } catch (error) {
      console.error('Failed to stop plant:', error);
      setError('Failed to stop plant. Please try again later.');
    }
  };
  

  const handleDelete = async (id) => {
    console.log(`Deleting plant with ID: ${id}`); // Added for debugging
    try {
      await axios.put(`http://localhost:8080/moveToHistory/${id}`);
      setPlants((prevPlants) => prevPlants.filter((plant) => plant.pid !== id));
      console.log(`Plant with ID: ${id} deleted successfully`); // Added for debugging
    } catch (error) {
      console.error('Failed to delete plant:', error);
      setError('Failed to delete plant. Please try again later.');
    }
  };

  const handleConfirm = async (id) => {
    console.log(`Confirming plant with ID: ${id}`); // Added for debugging
    try {
      await axios.delete(`http://localhost:8080/removeFromOngoing/${id}`);
      setPlants((prevPlants) => prevPlants.filter((plant) => plant.pid !== id));
      console.log(`Plant with ID: ${id} confirmed successfully`); // Added for debugging
    } catch (error) {
      console.error('Failed to confirm plant:', error);
      setError('Failed to confirm plant. Please try again later.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
      <div className="container mt-4">
      <div className="row">
        {plants.map((plant) => (
          <div key={plant.pid} className="col-md-12">
            <div className="cardOn mb-4">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="card-title2" style={{ color: plant.status === 'Ongoing' ? 'green' : 'gray' }}>{plant.pName}</h3>
                  <hr />
                  <div className="d-flex">
                    <p className="card-text1 me-3"><strong>Temperature:</strong> {plant.temp}</p>
                    <p className="card-text1 me-3"><strong>Humidity:</strong> {plant.humidity}</p>
                    <p className="card-text1 me-3"><strong>Days to Grow:</strong> {plant.daysToGrow}</p>
                    <p className="card-text1"><strong>Status:</strong> {plant.status}</p>
                  </div>
                </div>
                <button className="btn btn-danger" onClick={() => handleStop(plant.pid)}>Stop</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    
  );
}
