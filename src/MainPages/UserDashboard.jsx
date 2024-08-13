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
      <div className="c">
        <div className="mainDiv">
          <TemperatureHumidity/>
          <LedControl/>
        </div>
        <div className="secondDiv">
          <h3>Ongoing Plants</h3>
          <hr />
          <OngoingPlants/>
        

        </div>
      </div>
    </div>
  );
}
