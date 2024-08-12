// src/components/UserViewPlants.js
import React, { useContext } from 'react';
import UserNavigationBar from '../../Pages/Nav/UserNavigationBar';
import PlantCards from '../../Pages/dashboard/plantCards/ViewAllPlants';
import { UserContext } from '../../UserContext';
export default function UserViewPlants() {
  const { username } = useContext(UserContext);

  return (
    <div>
      <UserNavigationBar/>
      <div>
        <h1>Welcome, {username}!</h1>
        <PlantCards/>
      </div>
    </div>
  );
}
