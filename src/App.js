import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login_Page/LoginPage';
import AdminDashboard from './MainPages/AdminDashboard';
import UserLogin from './Pages/Login_Page/UserLogin';
import UserDashboard from './MainPages/UserDashboard';
import ViewPlants from './MainPages/ViewPlants';
import NewUserReg from './MainPages/NewUserReg';
import ViewAllUsersAndManage from './MainPages/ViewAllUsersAndManage';
import AddPlant from './MainPages/AddPlant';
import UserAddPlants from './MainPages/UserPart/UserAddPlants';
import UserViewPlants from './MainPages/UserPart/UserViewPlants';
import { UserContext } from './UserContext';
import UserActivities from './MainPages/ActivityView';
import NoteBook from './MainPages/NoteBook';
import NoteList from './MainPages/NoteList';
import UserNoteBook from './MainPages/Usernotebook';
import UserViewNote from './MainPages/UserViewNote';



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
        <Route path="UserAddPlants" element={<UserAddPlants />} />
        <Route path="UserViewPlants" element={<UserViewPlants />} />
        <Route path="userAct" element={<UserActivities/>} />
        <Route path="noteBook" element={<NoteBook/>} />
        <Route path="NoteList" element={<NoteList/>} />
        <Route path="UserNoteBook" element={<UserNoteBook/>} />
        <Route path="UserViewNote" element={<UserViewNote/>} />






      </Routes>
    </BrowserRouter>
  );
};

export default App;
