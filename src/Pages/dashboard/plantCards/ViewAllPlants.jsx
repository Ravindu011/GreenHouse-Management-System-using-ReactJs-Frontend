import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PlantCards() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <div key={plant.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{plant.pName}</h5>
                <p className="card-text"><strong>Temperature:</strong> {plant.temp}</p>
                <p className="card-text"><strong>Humidity:</strong> {plant.humidity}</p>
                <p className="card-text"><strong>Days to Grow:</strong> {plant.daysToGrow}</p>
                <p className="card-text"><strong>Status:</strong> {plant.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
