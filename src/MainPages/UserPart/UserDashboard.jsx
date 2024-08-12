import React from 'react'
import NavigationBar from '../../Pages/Nav/NavigationBar'
import UserNavigationBar from '../../Pages/Nav/UserNavigationBar'
import TemperatureHumidity from '../../components/TemperatureHumidity'
import LedControl from '../../components/LedControl'

export default function UserDashboard() {
  return (
    <div>
        <UserNavigationBar/>
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
