import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login_Page/LoginPage';
import Dashboars from './Pages/dashboard/Dashboars';
import AdminDashboard from './Pages/dashboard/MainPages/AdminDashboard';
import PlantCards from './Pages/dashboard/plantCards/ViewAllPlants';
import NavigationBar from './Pages/Nav/NavigationBar';
import RegisterUser from './Pages/Register_Page/RegisterUser';
import UserLogin from './Pages/Login_Page/UserLogin';
import UserDashboard from './Pages/dashboard/MainPages/UserDashboard';
import ViewPlants from './Pages/dashboard/MainPages/ViewPlants';
import NewUserReg from './Pages/dashboard/MainPages/NewUserReg';
import ViewAllUsersAndManage from './Pages/dashboard/MainPages/ViewAllUsersAndManage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="AdminDashboard" element={<AdminDashboard />} />
        <Route path="ViewAllPlants" element={<ViewPlants />} />
        <Route path="RegisterUser" element={<NewUserReg />} />
        <Route path="UserDashboard" element={<UserDashboard />} />
        <Route path="UserLogin" element={<UserLogin />} />
        <Route path="viewUsers" element={<ViewAllUsersAndManage />} />


        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
