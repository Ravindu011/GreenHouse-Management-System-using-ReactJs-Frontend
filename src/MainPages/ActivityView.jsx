import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import NavigationBar from '../Pages/Nav/NavigationBar';
import './MainPageCSS/act.css'



const UserActivities = () => {
  const { username } = useContext(UserContext);
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch activities from the backend
    const fetchActivities = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allAct');
        setActivities(response.data);
      } catch (err) {
        setError('Error fetching activities');
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="">
        <NavigationBar/>
        <div className="bodyContainer">
        <h2>User Activities</h2>
      {/* <p>Logged in as: <strong>{username}</strong></p> */}
      {error && <p className="text-danger">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Edited Username</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.taskName}</td>
              <td>{activity.date}</td>
              <td>{activity.time}</td>
              <td>{activity.editedUsername}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      
    </div>
  );
};

export default UserActivities;
