import React from 'react'
import NavigationBar from '../Pages/Nav/NavigationBar'
import OngoingPlants from '../Pages/dashboard/ongoingPlants/OngoingPlants'
import TemperatureHumidity from '../components/TemperatureHumidity'
import LedControl from '../components/LedControl'

export default function AdminDashboard() {
  return (
    <div>
      <NavigationBar/>
      <TemperatureHumidity/>
      <LedControl/>
      <OngoingPlants/>
    </div>
  )
}
