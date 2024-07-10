import React from 'react'
import NavigationBar from '../../Pages/Nav/NavigationBar'
import UserNavigationBar from '../../Pages/Nav/UserNavigationBar'

export default function UserDashboard() {
  return (
    <div>
        <UserNavigationBar/>
        <OngoingPlants/>
    </div>
  )
}
