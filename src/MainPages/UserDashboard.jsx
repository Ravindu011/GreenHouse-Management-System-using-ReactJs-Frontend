import React, { useContext } from 'react';
import OngoingPlants from '../Pages/dashboard/ongoingPlants/OngoingPlants';
import UserNavigationBar from '../Pages/Nav/UserNavigationBar';
import TemperatureHumidity from '../components/TemperatureHumidity';
import LedControl from '../components/LedControl';
import { UserContext } from '../UserContext';
import './UserDashboard.css'; // Ensure this path is correct

export default function UserDashboard() {
  const { username } = useContext(UserContext);

  return (
    <div className="user-dashboard">
      <UserNavigationBar />
      <div className="dashboard-content">
        <div className="main-content">
          <TemperatureHumidity />
          <LedControl />
        </div>
        <div className="sidebar">
          <h3>Ongoing Plants</h3>
          <hr />
          <OngoingPlants />
        </div>
      </div>
      <div className="username-display">
        <h2>Welcome, {username}!</h2>
      </div>
    </div>
  );
}
