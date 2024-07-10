import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login_Page/LoginPage';
import Dashboars from './Pages/dashboard/Dashboars';
import AdminDashboard from './MainPages/AdminDashboard';
import PlantCards from './Pages/dashboard/plantCards/ViewAllPlants';
import NavigationBar from './Pages/Nav/NavigationBar';
import RegisterUser from './Pages/Register_Page/RegisterUser';
import UserLogin from './Pages/Login_Page/UserLogin';
import UserDashboard from './MainPages/UserDashboard';
import ViewPlants from './MainPages/ViewPlants';
import NewUserReg from './MainPages/NewUserReg';
import ViewAllUsersAndManage from './MainPages/ViewAllUsersAndManage';
import AddPlant from './MainPages/AddPlant';
import AddProduct from './Pages/dashboard/addProduct/AddProduct';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="AdminDashboard" element={<AdminDashboard />} />
        <Route path="ViewAllPlants" element={<ViewPlants />} />
        <Route path="RegisterUser" element={<NewUserReg />} />
        <Route path="UserDashboard" element={<UserDashboard />} />
        <Route path="AdminLogin" element={<LoginPage />} />
        <Route path="viewUsers" element={<ViewAllUsersAndManage />} />
        <Route path="addPlant" element={<AddPlant />} />



        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
