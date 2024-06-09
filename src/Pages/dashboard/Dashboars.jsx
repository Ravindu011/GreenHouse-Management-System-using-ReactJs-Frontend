import React from 'react'
import './dashboard.css'
import NavigationBar from '../Nav/NavigationBar'
import AddProduct from './addProduct/AddProduct'
import PlantCards from './plantCards/ViewAllPlants'

export default function Dashboars() {
  return (
    <div>
        <NavigationBar/>
        <AddProduct/>
        <PlantCards/>
    </div>
  )
}
