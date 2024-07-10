import React from 'react'
import NavigationBar from '../Pages/Nav/NavigationBar'
import OngoingPlants from '../Pages/dashboard/ongoingPlants/OngoingPlants'

export default function AdminDashboard() {
  return (
    <div>
      <NavigationBar/>
      <OngoingPlants/>
    </div>
  )
}
