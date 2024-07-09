import React from 'react'
import NavigationBar from '../../Nav/NavigationBar'
import OngoingPlants from '../ongoingPlants/OngoingPlants'

export default function AdminDashboard() {
  return (
    <div>
      <NavigationBar/>
      <OngoingPlants/>
    </div>
  )
}
