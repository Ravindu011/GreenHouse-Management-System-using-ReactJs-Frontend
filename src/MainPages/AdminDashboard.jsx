import React from 'react'
import NavigationBar from '../Pages/Nav/NavigationBar'
import OngoingPlants from '../Pages/dashboard/ongoingPlants/OngoingPlants'
import TemperatureHumidity from '../components/TemperatureHumidity'
import LedControl from '../components/LedControl'
import './admindash.css'

export default function AdminDashboard() {
  return (
    <div>
      <NavigationBar/>
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
  )
}
