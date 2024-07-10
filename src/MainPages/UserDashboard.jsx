import React from 'react'
import OngoingPlants from '../Pages/dashboard/ongoingPlants/OngoingPlants'
import UserNavigationBar from '../Pages/Nav/UserNavigationBar'

export default function UserDashboard() {
  return (
    <div>
      <UserNavigationBar/>
      <OngoingPlants/>
    </div>
  )
}
