import React, { useState, useEffect, useContext } from 'react'; // Import useContext here
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewPlants.css';
import { logActivity } from '../../../LogActivity';
import { UserContext } from '../../../UserContext';

export default function PlantCards() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { username } = useContext(UserContext); // Accessing username from UserContext

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getAllProduct");
        setPlants(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this plant?');
    if (!isConfirmed) {
      return; 
    }
  
    try {
      await axios.delete(`http://localhost:8080/removePlant/${id}`);
      logActivity(username, 'Deleted Plant');
      setPlants((prevPlants) => prevPlants.filter((plant) => plant.pid !== id));
      
    } catch (error) {
      console.error('Failed to delete plant:', error);
    }
  };

  const handleMakeOngoing = async (id) => {
    try {
      await axios.put(`http://localhost:8080/setOngoing/${id}`, { status: 'Ongoing' });
  
      setPlants((prevPlants) =>
        prevPlants.map((plant) =>
          plant.pid === id ? { ...plant, status: 'Ongoing' } : plant
        )
      );
      logActivity(username, 'Add ongoing plant');

    } catch (error) {
      console.error('Failed to update plant status or move data:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {plants.map((plant) => (
          <div key={plant.pid} className="col-md-4">
            <div className={`card mb-4 ${plant.status === 'Ongoing' ? 'bg-ongoing' : ''}`}>
              <div className="card-body">
                <h5 className="card-title">{plant.pName}</h5>
                <p className="card-text mt-4"><strong>Temperature:</strong> {plant.temp}</p>
                <p className="card-text"><strong>Humidity:</strong> {plant.humidity}</p>
                <p className="card-text"><strong>Days to Grow:</strong> {plant.daysToGrow}</p>
                <p className="card-text"><strong>Status:</strong> {plant.status}</p>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => handleDelete(plant.pid)}
                  disabled={plant.status === 'Ongoing'}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleMakeOngoing(plant.pid)}
                  disabled={plant.status === 'Ongoing'}
                >
                  Make Ongoing
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
