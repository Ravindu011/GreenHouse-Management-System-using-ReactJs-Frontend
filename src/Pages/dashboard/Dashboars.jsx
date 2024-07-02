import React from 'react'
import './dashboard.css'
import NavigationBar from '../Nav/NavigationBar'
import AddProduct from './addProduct/AddProduct'
import PlantCards from './plantCards/ViewAllPlants'
import OngoingPlants from './ongoingPlants/OngoingPlants'

export default function Dashboars() {
  return (
    <div>
        <NavigationBar/> <br />
        <h1><center>Ongoing Plants</center> </h1>
        <OngoingPlants/>



        <AddProduct/>
        <br />
        <h1><center>Registered Plants</center> </h1>
        <PlantCards/>
    </div>
  )
}
